import { destinations } from "../../components/DestinationCarousel";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { StoreBadges } from "../../components/StoreBadges";
import {
  absoluteUrl,
  createPageMetadata,
  serializeJsonLd,
} from "../../lib/seo";

const title = "Travel destinations worth discovering — Wandr";
const description =
  "Explore destination inspiration from Cape Town to Kyoto, Lisbon, Marrakech and beyond, then shape the places you love into a Wandr trip.";

export const metadata = createPageMetadata({
  title,
  description,
  canonicalPath: "/destinations",
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: title,
  description,
  url: absoluteUrl("/destinations"),
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: destinations.length,
    itemListElement: destinations.map((destination, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${destination.name}, ${destination.region}`,
    })),
  },
};

export default function DestinationsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <script
          id="destination-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }}
        />

        <section className="destination-index-hero section-pad">
          <p className="kicker">PLACES WORTH GOING TO</p>
          <h1>Find the place that starts your next story.</h1>
          <p>
            Browse a little inspiration, save what catches your eye, and turn
            it into a trip that still feels like yours.
          </p>
        </section>

        <section
          className="destination-directory section-pad"
          aria-labelledby="destination-directory-title"
        >
          <div className="destination-directory-heading">
            <p className="kicker">EXPLORE THE MAP</p>
            <h2 id="destination-directory-title">Where will you go next?</h2>
          </div>

          <div className="destination-directory-grid">
            {destinations.map((destination) => (
              <article className="destination-directory-card" key={destination.name}>
                <img
                  src={destination.image}
                  alt={`${destination.name}, ${destination.region}`}
                  loading="lazy"
                  decoding="async"
                />
                <div className="destination-meta">
                  <h3>{destination.name}</h3>
                  <p>{destination.region}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="destination-index-cta section-pad">
          <p className="kicker">KEEP THE GOOD ONES</p>
          <h2>Turn destination ideas into a trip.</h2>
          <p>
            Save places, shape an itinerary, plan with friends, and keep the
            memories together in Wandr.
          </p>
          <StoreBadges light />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
