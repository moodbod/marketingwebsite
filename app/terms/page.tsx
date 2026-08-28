import { LegalPage } from "../../components/LegalPage";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Terms of Service — Wandr",
  description:
    "Read the terms that govern use of the Wandr travel discovery, trip planning and sharing app.",
  canonicalPath: "/terms",
});

export default function TermsPage() { return <LegalPage kind="terms" />; }
