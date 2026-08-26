import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Contractors Choice Agency`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "spray foam insurance broker",
    "spray foam contractor insurance compare",
    "spray foam GL broker",
    "spray foam workers comp broker",
    "spray foam equipment insurance broker",
    "contractors pollution liability spray foam broker",
    "isocyanate insurance broker",
    "spray foam insurance rates compare",
    "spray foam commercial auto broker",
    "E&S spray foam insurance",
    "spray foam BOP broker",
    "best spray foam insurance rates",
  ],
  authors: [{ name: "Contractors Choice Agency" }],
  creator: "Contractors Choice Agency",
  publisher: "Contractors Choice Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Contractors Choice Agency`,
    description:
      "Independent spray foam insurance broker comparing GL, workers' comp, inland marine for rigs, contractors pollution liability, and commercial auto across multiple admitted and E&S markets. Licensed all 50 states. 15-min quotes.",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: `${SITE.name} — spray foam contractor coverage comparison` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Contractors Choice Agency`,
    description:
      "Independent spray foam insurance broker — comparing GL, workers' comp, inland marine, CPL, and commercial auto across multiple markets to find the best rate for spray foam contractors. 15-minute quotes.",
    images: ["/images/og-image.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: SITE.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: "+18449675247",
    email: SITE.email,
    image: `${SITE.url}/images/og-image.png`,
    logo: `${SITE.url}/images/og-image.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: SITE.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: 33.2622, longitude: -111.7826 },
    employee: { "@type": "Person", name: "Josh Cotner", jobTitle: "Founder & Insurance Agent" },
    areaServed: { "@type": "Country", name: "United States" },
    serviceType: [
      "General Liability Insurance for Spray Foam Contractors",
      "Workers' Compensation for Spray Foam Applicators",
      "Inland Marine Insurance for Spray Foam Rigs & Equipment",
      "Contractors Pollution Liability for Spray Foam Operations",
      "Commercial Auto Insurance for Spray Foam Contractors",
      "High-Risk & E&S Programs for Spray Foam Contractors",
      "Package (BOP) Programs for Spray Foam Businesses",
      "Umbrella & Excess Liability for Spray Foam Contractors",
    ],
  };

  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
