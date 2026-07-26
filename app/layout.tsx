import type { Metadata, Viewport } from "next";
import "lenis/dist/lenis.css";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gabrieleschauer.at";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gabriele Schauer | Supervision, Coaching & Organisationsentwicklung",
    template: "%s | Gabriele Schauer",
  },
  description: "Systemische Supervision, Coaching und Organisationsentwicklung für Fach- und Führungskräfte, Teams und Organisationen in Tirol und online.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_AT",
    url: "/",
    siteName: "Gabriele Schauer – Supervision & Coaching",
    title: "Klarheit, die ins Handeln bringt.",
    description: "Professionelle Begleitung für Menschen, Teams und Organisationen in Veränderung.",
    images: [{ url: "/images/gabriele-schauer-portrait-wide.jpg", width: 1200, height: 800, alt: "Mag. Dr. Gabriele Schauer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriele Schauer | Supervision & Coaching",
    description: "Professionelle Begleitung für Menschen, Teams und Organisationen in Veränderung.",
    images: ["/images/gabriele-schauer-portrait-wide.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fbfcf9",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body><SmoothScroll />{children}</body></html>;
}
