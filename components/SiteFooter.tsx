import { StoreBadges } from "./StoreBadges";

export function SiteFooter() {
  return (
    <footer className="site-footer section-pad">
      <div className="footer-main">
        <a className="brand" href="/"><img className="brand-icon" src="/wandr-icon.png" alt="" /><span>wandr</span></a>
        <p>Travel a little more like yourself.</p>
        <StoreBadges compact />
      </div>
      <div className="footer-bottom"><span>© 2026 Wandr. All rights reserved.</span><span className="legal-links"><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/support">Support</a></span></div>
    </footer>
  );
}
