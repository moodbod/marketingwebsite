import type { Metadata } from "next";

export const SITE_NAME = "Wandr";
export const SITE_URL = "https://wandr.website";
export const APP_STORE_ID = "6785083129";
export const APP_STORE_URL = `https://apps.apple.com/app/id${APP_STORE_ID}`;

export const SITE_TITLE =
  "Wandr — Travel discovery, trip planning and shared memories";
export const SITE_DESCRIPTION =
  "Discover inspiring destinations, build flexible itineraries, plan trips with friends, and keep your travel memories together in Wandr.";

export const SOCIAL_IMAGE_PATH = "/opengraph-image";
export const TWITTER_IMAGE_PATH = "/twitter-image";
export const SOCIAL_IMAGE_ALT =
  "Wandr travel discovery and trip planning app";
export const SOCIAL_IMAGE_SIZE = { width: 1200, height: 630 } as const;

export function absoluteUrl(pathname = "/"): string {
  return new URL(pathname, `${SITE_URL}/`).toString();
}

type PageMetadataOptions = {
  title: string;
  description: string;
  canonicalPath: string;
  noIndex?: boolean;
  appArgument?: string;
};

export function createPageMetadata({
  title,
  description,
  canonicalPath,
  noIndex = false,
  appArgument,
}: PageMetadataOptions): Metadata {
  const canonicalUrl = absoluteUrl(canonicalPath);
  const socialImageUrl = absoluteUrl(SOCIAL_IMAGE_PATH);
  const twitterImageUrl = absoluteUrl(TWITTER_IMAGE_PATH);

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: canonicalUrl },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          nocache: true,
          googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: SITE_NAME,
      title,
      description,
      url: canonicalUrl,
      images: [
        {
          url: socialImageUrl,
          width: SOCIAL_IMAGE_SIZE.width,
          height: SOCIAL_IMAGE_SIZE.height,
          alt: SOCIAL_IMAGE_ALT,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: twitterImageUrl, alt: SOCIAL_IMAGE_ALT }],
    },
    itunes: {
      appId: APP_STORE_ID,
      appArgument: appArgument ?? canonicalUrl,
    },
  };
}

export const SITE_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: absoluteUrl("/wandr-icon.png"),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "MobileApplication",
      "@id": `${SITE_URL}/#app`,
      name: SITE_NAME,
      url: SITE_URL,
      downloadUrl: APP_STORE_URL,
      operatingSystem: "iOS",
      applicationCategory: "TravelApplication",
      description: SITE_DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
