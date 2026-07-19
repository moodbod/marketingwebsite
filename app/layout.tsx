import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wandr — Make room for the good stuff",
  description: "Discover places worth going to, plan trips that feel like you, and keep the whole journey in one place.",
  icons: { icon: "/wandr-icon.png", apple: "/wandr-icon.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<Analytics /><SpeedInsights /></body></html>;
}
