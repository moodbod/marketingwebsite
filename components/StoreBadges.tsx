const appStoreUrl = "https://apps.apple.com/app/id6785083129";

type StoreBadgesProps = {
  compact?: boolean;
  light?: boolean;
};

export function StoreBadges({ compact = false, light = false }: StoreBadgesProps) {
  return (
    <div className={`store-badges${compact ? " store-badges-compact" : ""}${light ? " store-badges-light" : ""}`}>
      <a className="store-badge-link" href={appStoreUrl} target="_blank" rel="noreferrer" aria-label="Download Wandr on the App Store">
        <img src="/app-store-badge.svg" alt="Download on the App Store" />
      </a>
      <span className="play-store-soon" aria-label="Google Play, coming soon">
        <img src="/google-play-badge.png" alt="Get it on Google Play" />
        <small>Coming soon</small>
      </span>
    </div>
  );
}
