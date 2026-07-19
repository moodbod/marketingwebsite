import { DestinationCarousel } from "../components/DestinationCarousel";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { StoreBadges } from "../components/StoreBadges";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero section-pad">
          <div className="hero-copy">
            <p className="kicker">YOUR NEXT GOOD MEMORY</p>
            <h1><strong>Meet Wandr.</strong><br />Find places worth going to.</h1>
            <p className="hero-description">Discover somewhere new, shape it into a trip, and keep the whole journey together in one place.</p>
            <StoreBadges />
          </div>
          <div className="hero-product">
            <img src="/wandr-phone-hero.png" alt="Wandr app shown on two phones with destination discovery and saved trip views" />
          </div>
        </section>

        <DestinationCarousel />

        <section className="trip-flow section-pad" id="how-it-works">
          <div className="flow-intro">
            <p className="kicker">FROM MAYBE TO LET&apos;S GO</p>
            <h2>A simpler way to turn travel ideas into real plans.</h2>
          </div>
          <div className="flow-steps">
            <article><span>01</span><h3>Discover</h3><p>Explore places that make you want to pack a bag.</p></article>
            <article><span>02</span><h3>Plan</h3><p>Bring the places you love into one clear trip.</p></article>
            <article><span>03</span><h3>Go</h3><p>Keep what you need close when the journey starts.</p></article>
          </div>
        </section>

        <section className="travel-feature section-pad">
          <div className="feature-image"><img src="/cape-town-coast.png" alt="Cape Town coastline beneath Table Mountain" /></div>
          <div className="feature-copy">
            <p className="kicker">TRAVEL YOUR WAY</p>
            <h2>Make room for the good stuff.</h2>
            <p>Wandr helps you hold onto the places, plans, and moments that make a trip feel like yours.</p>
            <a href="#destinations">Explore destinations</a>
          </div>
        </section>

        <section className="closing-cta section-pad">
          <img className="closing-icon" src="/wandr-icon.png" alt="Wandr" />
          <p className="kicker">YOUR MAP IS WAITING</p>
          <h2>Go somewhere good.</h2>
          <p>Start discovering on iPhone today.</p>
          <StoreBadges light />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
