import { LegalPage } from "../../components/LegalPage";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Privacy Policy — Wandr",
  description:
    "Read how Wandr collects, uses, protects, retains and deletes information when you use the Wandr app and website.",
  canonicalPath: "/privacy",
});

export default function PrivacyPage() { return <LegalPage kind="privacy" />; }
