import { StoreBadges } from "./StoreBadges";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Wandr home"><img className="brand-icon" src="/wandr-icon.png" alt="" /><span>wandr</span></a>
      <nav className="nav-links" aria-label="Main navigation"><a href="#destinations">Destinations</a><a href="#how-it-works">How it works</a></nav>
      <StoreBadges compact />
    </header>
  );
}
