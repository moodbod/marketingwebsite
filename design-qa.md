# Design QA

- Source visual truth: `calai-reference.png`
- Implementation screenshot: `wandr-redesign-pass-1.png`
- Mobile implementation screenshot: `wandr-redesign-mobile.png`
- Side-by-side evidence: `wandr-design-comparison.png`
- Desktop viewport: Chrome default desktop viewport, full-page capture
- Mobile viewport: 390 × 844, full-page capture
- State: home page, destination marquee in continuous motion

## Full-view comparison evidence

The side-by-side comparison confirms the Wandr implementation carries over the Cal AI reference's main visual structure: compact three-part header, large left-aligned hero typography, paired store badges, a large two-phone product visual, generous white space, and a strong content transition immediately after the hero. Wandr intentionally replaces Cal AI's rating and influencer sections with real brand messaging and a destination carousel, avoiding unsupported social proof.

## Focused region evidence

The hero and header were checked at desktop scale in `wandr-design-comparison.png`. Store badge proportions, headline wrapping, brand placement, product-image scale, and whitespace follow the source hierarchy while using Wandr's icon and lime accent. Mobile was checked separately in `wandr-redesign-mobile.png`; the hero, store badges, phone visual, carousel controls, destination cards, feature sections, CTA, and footer remain legible without horizontal page overflow. The carousel intentionally overflows only inside its horizontal track.

## Findings

- No actionable P0, P1, or P2 differences remain for the requested Cal AI-inspired direction.
- Typography: the system sans-serif stack is crisp and close to the reference's product-first feel; display weights and wraps remain readable on desktop and mobile.
- Spacing and layout: hero balance, section rhythm, card sizing, and responsive stacking are consistent and deliberate.
- Colors and tokens: white, black, warm off-white, restrained gray, and Wandr lime are consistently applied with sufficient visual contrast.
- Image quality: the supplied Wandr icon, official store badges, generated phone product asset, and destination photography are sharp and correctly cropped. No visible imagery is replaced with CSS drawings, emoji, or placeholder shapes.
- Copy and content: all visible copy is Wandr-specific and avoids testimonials, reviews, user counts, metrics, fabricated bookings, or unsupported claims.

## Interaction and console checks

- Destination carousel uses a duplicated track with a slow, continuous CSS marquee; previous/next controls were removed so the movement feels ambient rather than page-based.
- The marquee pauses on hover/focus and respects reduced-motion preferences.
- App Store links resolve to `https://apps.apple.com/app/id6785083129`.
- Google Play is presented as a non-clickable Coming soon state.
- Navigation anchors and legal links are present.
- No browser console errors or warnings were reported on desktop or mobile.

## Comparison history

- Pass 1: no P0/P1/P2 issues found. Follow-up polish added continuous marquee motion, a working local Lisbon image, and clearer separation between destination cards.

## Follow-up polish

- P3: the header store badges are intentionally smaller than the reference to preserve Wandr's cleaner navigation balance.

final result: passed
