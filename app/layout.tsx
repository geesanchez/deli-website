import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { businessInfo } from "@/lib/data";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://5thavedeli.com"),
  title: "5th Ave Deli & Catering Co. | Carmel-by-the-Sea Since 1991",
  description:
    "5th Ave Deli & Catering Co. — Carmel's family-owned deli since 1991. Fresh sandwiches, soups, picnic box lunches, and full catering. Open Mon-Sat 8am-5pm.",
  keywords: [
    "deli Carmel-by-the-Sea",
    "Carmel deli",
    "sandwich shop Carmel",
    "catering Carmel",
    "box lunches Carmel Beach",
    "picnic Carmel",
    "5th Avenue Deli",
    "Monterey Peninsula catering",
    "gift baskets Carmel",
    "breakfast Carmel-by-the-Sea",
  ],
  openGraph: {
    title: "5th Ave Deli & Catering Co. | Carmel-by-the-Sea Since 1991",
    description:
      "Family-owned since 1991. Fresh sandwiches, homemade soups, picnic box lunches, and full catering in the heart of Carmel-by-the-Sea.",
    url: "https://5thavedeli.com",
    siteName: "5th Ave Deli & Catering Co.",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://5thavedeli.com/images/og-image.jpg", width: 1200, height: 630, alt: "5th Ave Deli & Catering Co. — Carmel-by-the-Sea Since 1991" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "5th Ave Deli & Catering Co. | Carmel-by-the-Sea",
    description:
      "Family-owned since 1991. Fresh sandwiches, picnic box lunches, and full catering in Carmel-by-the-Sea.",
    images: ["https://5thavedeli.com/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://5thavedeli.com",
  },
  other: {
    "geo.region": "US-CA",
    "geo.placename": "Carmel-by-the-Sea",
    "geo.position": "36.5558;-121.9233",
    "ICBM": "36.5558, -121.9233",
  },
};

function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": "https://5thavedeli.com/#organization",
    name: businessInfo.name,
    image: ["https://5thavedeli.com/images/og-image.jpg"],
    url: "https://5thavedeli.com",
    telephone: "+1-831-625-2688",
    email: businessInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.address.street,
      addressLocality: businessInfo.address.city,
      addressRegion: businessInfo.address.state,
      postalCode: businessInfo.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessInfo.coordinates.lat,
      longitude: businessInfo.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "16:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "00:00",
        closes: "00:00",
      },
    ],
    priceRange: "$",
    servesCuisine: ["American", "Deli", "Sandwiches", "Catering"],
    hasMenu: "https://5thavedeli.com/#menu",
    acceptsReservations: "False",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: businessInfo.yelp.rating,
      reviewCount: businessInfo.yelp.reviews,
      bestRating: 5,
    },
    sameAs: [
      businessInfo.social.instagram,
      businessInfo.social.yelp,
    ],
    areaServed: [
      { "@type": "City", name: "Carmel-by-the-Sea" },
      { "@type": "City", name: "Monterey" },
      { "@type": "City", name: "Pacific Grove" },
      { "@type": "City", name: "Pebble Beach" },
    ],
    paymentAccepted: "Cash, Credit Card",
    description:
      "Family-owned gourmet deli in Carmel-by-the-Sea since 1991. Fresh sandwiches, homemade soups, salads, picnic box lunches perfect for Carmel Beach, full catering services, and custom gift baskets.",
    foundingDate: "1991",
    keywords:
      "deli, sandwiches, catering, box lunches, gift baskets, Carmel-by-the-Sea",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <LocalBusinessSchema />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
