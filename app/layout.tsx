import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aviationstandardgrading.com"),
  title: {
    default: "ASG | Aviation Standard Grading",
    template: "%s | ASG"
  },
  description: "Precision-focused collectible card grading, secure slab presentation, and online certification verification.",
  applicationName: "Aviation Standard Grading",
  keywords: ["card grading", "trading card grading", "Pokémon grading", "ASG grading", "cert lookup"],
  openGraph: {
    title: "Aviation Standard Grading",
    description: "Precision. Integrity. Altitude.",
    type: "website",
    images: ["/asg-hero-tech.png"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#061426"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <div id="main-content">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
