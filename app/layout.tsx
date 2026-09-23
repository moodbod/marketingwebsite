import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {
  serializeJsonLd,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_STRUCTURED_DATA,
  SITE_TITLE,
  SITE_URL,
} from "../lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: "%s — Wandr" },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "travel",
  verification: {
    google: "VlriD_iOEFco-M3QRo96KjJp7M7-h7oFDNH5FjKIMWM",
  },
  icons: { icon: "/wandr-icon.png", apple: "/wandr-icon.png" },
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          id="wandr-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(SITE_STRUCTURED_DATA) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
