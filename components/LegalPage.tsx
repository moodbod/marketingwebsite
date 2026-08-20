import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

type LegalPageProps = { kind: "privacy" | "terms" };

export function LegalPage({ kind }: LegalPageProps) {
  const privacy = kind === "privacy";
  return <><SiteHeader /><main className="legal-page section-pad"><p className="eyebrow">LEGAL</p><h1>{privacy ? <>Privacy <em>Policy</em></> : <>Terms of <em>Service</em></>}</h1><p className="legal-date">Last Updated: August 20, 2026</p>{privacy ? <PrivacyContent /> : <TermsContent />}</main><SiteFooter /></>;
}

function PrivacyContent() {
  return <>
    <p>This Privacy Policy explains how Wandr ("Wandr," "we," "our," or "us") collects, uses, shares, stores, and deletes information when you use the Wandr mobile application (the "App"). The marketing website does not require an account or collect information through forms, but its hosting provider may process limited device, usage, and performance data needed to deliver and measure the site. If you do not agree with this policy, do not use the App.</p>
    <h2>1. Information We Collect</h2>
    <p>We collect only information needed to operate and improve the App:</p>
    <ul><li><strong>Account information:</strong> name, email address, home city, travel preferences, profile photo, authentication provider identifiers, and other information you choose to provide when creating or linking an account.</li><li><strong>Location information:</strong> precise or approximate location when you grant permission. While the App is open, Wandr uses it for nearby discovery, maps, navigation and active-trip recording, check-ins, and live location sharing that you choose. Wandr does not request Always location access. You can refuse or revoke permission in iOS Settings; location is not required for every App feature.</li><li><strong>User content:</strong> photos, itineraries, saved places, reviews, messages, trip details, and other content you submit.</li><li><strong>Usage and diagnostics:</strong> App events, device/app information, error reports, and technical information used to operate, secure, troubleshoot, and improve the App.</li><li><strong>Purchase information:</strong> subscription status and transaction identifiers supplied by Apple. Apple processes payment details; Wandr does not receive your full payment card number.</li></ul>
    <h2>2. How We Use Information</h2>
    <ul><li>Provide, personalize, maintain, and secure the App.</li><li>Show nearby places, maps, routes, and trip recommendations when enabled.</li><li>Store and display your trips, photos, saved places, and social activity according to your settings.</li><li>Authenticate users, process subscriptions, provide support, and communicate service updates.</li><li>Measure reliability and improve the App using aggregated or de-identified information where practical.</li><li>Comply with law, enforce our Terms, and prevent fraud, abuse, or security incidents.</li></ul>
    <h2>3. Permissions and Consent</h2>
    <p>Wandr requests permission before accessing location, photos, camera, notifications, or other protected device features. Permission is optional unless a specific feature needs it. You may change permissions at any time in iOS Settings. We do not sell personal information or use location data for advertising profiles.</p>
    <h2>4. Sharing and Service Providers</h2>
    <p>We share information only as needed to provide the App and website, comply with law, or protect users. Service providers include Convex for backend hosting and data storage; Apple and Google for sign-in; Mapbox for maps, location, and routing requests; Apple or Google for store billing; Superwall for subscription presentation and access management; Expo for push notifications; Google Gemini only when you explicitly consent to use an AI feature; and Vercel for website hosting, analytics, and performance measurement. They may use information only for the relevant service. We require every provider that receives Wandr user data to provide the same or equivalent protection described in this policy and required by applicable law.</p>
    <p>We may disclose information if required by law, in response to valid legal process, to protect rights and safety, or as part of a merger, acquisition, financing, or sale of assets. We do not share personal data with third parties for their own direct marketing.</p>
    <h2>5. Retention and Security</h2>
    <p>We retain account and user content while your account is active or as needed to provide the App. We retain limited records when necessary for legal, security, fraud-prevention, accounting, or dispute-resolution purposes. We use reasonable administrative, technical, and organizational safeguards, but no online service can guarantee absolute security.</p>
    <h2>6. Deletion and Your Rights</h2>
    <p>You may permanently delete your account from Settings in the App. Account access and the profile are removed immediately, and remaining associated content is removed from Wandr&apos;s active systems through bounded cleanup within 30 days. The App confirms when the deletion request is accepted and again when deletion is complete. Some records may be retained where required by law or kept in de-identified form. Deleting your account does not cancel an App Store or Google Play subscription. If you cannot access the App, email <a className="text-link" href="mailto:moodbod.agency@gmail.com">moodbod.agency@gmail.com</a> from the address associated with your account. You may also request access, correction, portability, or restriction of processing where applicable.</p>
    <h2>7. Children</h2>
    <p>The App is not directed to children under 13, and we do not knowingly collect personal information from children under 13. If you believe a child has provided information, contact us so we can investigate and delete it where appropriate.</p>
    <h2>8. Changes and Contact</h2>
    <p>We may update this policy when the App or applicable law changes. We will post the revised date above and provide additional notice where required. Questions or privacy requests can be sent to <a className="text-link" href="mailto:moodbod.agency@gmail.com">moodbod.agency@gmail.com</a>.</p>
  </>;
}

function TermsContent() {
  return <>
    <p>These Terms of Service ("Terms") are an agreement between you and Wandr ("Wandr," "we," "us," or "our") governing your use of the Wandr mobile application (the "App"). By downloading, accessing, or using the App, you agree to these Terms and the Privacy Policy. If you do not agree, do not use the App.</p>
    <h2>1. Eligibility and Accounts</h2>
    <p>You must have the legal capacity to enter these Terms and provide accurate account information. Keep your sign-in credentials secure and tell us promptly if you believe your account has been compromised. You are responsible for activity under your account.</p>
    <h2>2. The App and Travel Information</h2>
    <p>Wandr provides tools for discovery, trip planning, maps, routes, navigation, social sharing, and travel organization. Place information, map data, recommendations, availability, opening hours, directions, and other third-party information may be incomplete, delayed, or inaccurate. Use independent judgment, follow local laws, and do not rely on the App where safety or time-critical decisions are involved.</p>
    <h2>3. Location and Device Permissions</h2>
    <p>Some features require location or other device permissions. You control those permissions through your device settings. If you decline permission, the related feature may not work, but you can continue using features that do not require it.</p>
    <h2>4. User Content and Community Conduct</h2>
    <p>You keep ownership of content you submit. You grant Wandr a worldwide, non-exclusive, royalty-free license to host, store, reproduce, modify for formatting, and display that content solely to operate, provide, improve, and promote the App. You represent that you have the rights needed to submit it. Do not upload unlawful, abusive, deceptive, invasive, infringing, or dangerous content; impersonate others; harass users; or misuse the App. We may remove content or restrict accounts that violate these Terms or create risk.</p>
    <h2>5. Subscriptions and Apple Billing</h2>
    <p>Some App features may be offered through auto-renewable subscriptions or other in-app purchases. The price, billing period, trial terms, and renewal details shown in the App Store purchase sheet apply at the time of purchase. Payment is charged to your Apple ID account. Unless canceled at least 24 hours before the current period ends, a subscription renews automatically and your account is charged. Manage or cancel subscriptions in your Apple ID account settings. Deleting the App does not cancel a subscription. Apple&apos;s terms and conditions also apply to App Store purchases, including Apple&apos;s <a className="text-link" href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noreferrer">Licensed Application End User License Agreement</a>.</p>
    <h2>6. Intellectual Property</h2>
    <p>The App, its software, design, trademarks, text, and other materials are owned by or licensed to Wandr and are protected by applicable law. We grant you a limited, revocable, non-exclusive, non-transferable license to use the App for personal, lawful purposes under these Terms. You may not copy, reverse engineer, distribute, sell, or create derivative works from the App except where law permits.</p>
    <h2>7. Availability, Disclaimers, and Liability</h2>
    <p>The App is provided on an “as available” basis. To the extent allowed by law, Wandr disclaims warranties regarding availability, accuracy, fitness for a particular purpose, and uninterrupted or error-free operation. Nothing in these Terms excludes rights or remedies that cannot legally be excluded. To the extent permitted by law, Wandr will not be liable for indirect, incidental, special, consequential, or punitive damages arising from your use of the App.</p>
    <h2>8. Termination</h2>
    <p>You may stop using the App at any time. We may suspend or terminate access for a material breach, unlawful conduct, security risk, or operational reason, subject to applicable law. Sections that by their nature should survive termination will continue to apply.</p>
    <h2>9. Changes and Contact</h2>
    <p>We may update these Terms when the App or law changes. We will post the revised date above and provide additional notice where required. Questions or complaints can be sent to <a className="text-link" href="mailto:moodbod.agency@gmail.com">moodbod.agency@gmail.com</a>.</p>
  </>;
}
