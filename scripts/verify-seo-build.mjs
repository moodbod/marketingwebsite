import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const buildRoot = path.join(projectRoot, ".next", "server", "app");
const siteUrl = "https://wandr.website";

async function readBuildFile(relativePath) {
  return readFile(path.join(buildRoot, relativePath), "utf8");
}

const indexablePages = [
  ["index.html", siteUrl],
  ["destinations.html", `${siteUrl}/destinations`],
  ["support.html", `${siteUrl}/support`],
  ["privacy.html", `${siteUrl}/privacy`],
  ["terms.html", `${siteUrl}/terms`],
];

for (const [file, canonical] of indexablePages) {
  const html = await readBuildFile(file);
  assert.ok(
    html.includes(`rel="canonical" href="${canonical}"`),
    `${file} must emit its self-referencing canonical`,
  );
  assert.ok(html.includes('property="og:title"'), `${file} must emit Open Graph metadata`);
  assert.ok(
    html.includes('name="twitter:card" content="summary_large_image"'),
    `${file} must emit Twitter card metadata`,
  );
  assert.ok(
    html.includes('name="apple-itunes-app"'),
    `${file} must emit a Smart App Banner`,
  );
}

const homeHtml = await readBuildFile("index.html");
assert.ok(homeHtml.includes('id="wandr-structured-data"'), "home must emit JSON-LD");
assert.ok(homeHtml.includes('"@type":"MobileApplication"'), "JSON-LD must describe the app");
assert.ok(homeHtml.includes(`${siteUrl}/opengraph-image`), "home must emit the OG image URL");
assert.ok(homeHtml.includes(`${siteUrl}/twitter-image`), "home must emit the Twitter image URL");

const destinationsHtml = await readBuildFile("destinations.html");
assert.ok(
  destinationsHtml.includes('id="destination-structured-data"'),
  "destinations must emit collection JSON-LD",
);

const robots = await readBuildFile("robots.txt.body");
assert.match(robots, /User-Agent: \*/);
assert.match(robots, /Allow: \//);
assert.match(robots, new RegExp(`Sitemap: ${siteUrl}/sitemap\\.xml`));

const sitemap = await readBuildFile("sitemap.xml.body");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
assert.deepEqual(
  sitemapUrls,
  indexablePages.map(([, canonical]) => canonical),
  "sitemap must contain only canonical indexable pages",
);

for (const privatePrefix of ["/i/", "/invite/", "/group/", "/profile/", "/itinerary/", "/itineraries/"]) {
  assert.ok(!sitemap.includes(privatePrefix), `${privatePrefix} routes must stay out of the sitemap`);
}

const aasa = JSON.parse(
  await readFile(
    path.join(projectRoot, "public", ".well-known", "apple-app-site-association"),
    "utf8",
  ),
);
assert.deepEqual(aasa.applinks.details[0].paths, [
  "/i/*",
  "/invite/*",
  "/t/*",
  "/trip-invite/*",
  "/group/*",
  "/profile/*",
  "/itinerary/*",
  "/itineraries/*",
]);

console.log("SEO build contract passed");
