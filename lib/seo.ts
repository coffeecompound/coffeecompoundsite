import type { Metadata } from "next";
import { SITE, IMG } from "./site";

export type Crumb = { path: string; label: string };
export type Faq = { q: string; a: string };

/** Per-page metadata: unique title + description, canonical URL, Open Graph and Twitter cards. */
export function pageMeta(opts: {
  path: string;
  title: string;
  description: string;
  image?: string;
  ogTitle?: string;
  type?: "website" | "article";
  publishedTime?: string;
}): Metadata {
  const image = opts.image ?? IMG.barista;
  return {
    title: { absolute: opts.title },
    description: opts.description,
    alternates: { canonical: opts.path },
    openGraph: {
      type: opts.type ?? "website",
      siteName: SITE.name,
      locale: "en_US",
      url: opts.path,
      title: opts.ogTitle ?? opts.title,
      description: opts.description,
      images: [{ url: image }],
      ...(opts.publishedTime ? { publishedTime: opts.publishedTime } : {}),
    },
    twitter: { card: "summary_large_image", title: opts.ogTitle ?? opts.title, description: opts.description, images: [image] },
  };
}

const strip = (s: string) => s.replace(/<[^>]+>/g, "");

export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    alternateName: "Coffee Compound",
    slogan: SITE.tagline,
    description:
      "Independent, veteran- and woman-owned coffee shop with a drive-thru in downtown Ogden, Utah. Fair trade Arabica espresso from a 4th-generation Utah roaster, homemade hot chocolate and frozen hot chocolate with scratch whipped cream, bagel sandwiches and fresh-baked pastries.",
    url: `${SITE.url}/`,
    telephone: "+1-801-317-4880",
    email: SITE.email,
    image: [`${SITE.url}${IMG.barista}`, `${SITE.url}${IMG.patio}`, `${SITE.url}${IMG.latte}`],
    logo: `${SITE.url}${IMG.logo}`,
    priceRange: SITE.priceRange,
    servesCuisine: ["Coffee", "Espresso", "Hot Chocolate", "Breakfast", "Bakery"],
    acceptsReservations: false,
    hasMenu: `${SITE.url}/menu/`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.street,
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      postalCode: SITE.zip,
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: SITE.lat, longitude: SITE.lng },
    hasMap: SITE.mapsUrl,
    areaServed: { "@type": "City", name: "Ogden, Utah" },
    openingHoursSpecification: SITE.hours
      .filter((h) => h.open)
      .map((h) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: h.days, opens: h.open, closes: h.close })),
    amenityFeature: [
      "Drive-through",
      "Free Wi-Fi",
      "Indoor seating",
      "Conference room",
      // Accessibility attributes listed on the Google Business Profile.
      "Wheelchair-accessible entrance",
      "Wheelchair-accessible parking",
      "Wheelchair-accessible restroom",
      "Wheelchair-accessible seating",
    ].map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
    founder: [
      { "@type": "Person", name: "Yvette Torres" },
      { "@type": "Person", name: "Tony Torres" },
    ],
    sameAs: Object.values(SITE.social),
  };
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${SITE.url}${c.path}`,
    })),
  };
}

export function faqSchema(items: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: strip(f.a) },
    })),
  };
}
