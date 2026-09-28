import type { Metadata, Viewport } from "next";
import { DM_Sans, Domine } from "next/font/google";
import Header from "@/components/Header";
import { Footer, Ticker } from "@/components/Chrome";
import { JsonLd } from "@/components/ui";
import { businessSchema } from "@/lib/seo";
import { ICON_FONT_URL } from "@/lib/icons";
import { IMG, SITE } from "@/lib/site";
import "./globals.css";

// Self-hosted by next/font: same families as the design, no layout shift, no render-blocking Google CSS.
const domine = Domine({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-domine", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], style: ["normal", "italic"], variable: "--font-dm-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} | Coffee Shop & Drive-Thru in Downtown Ogden, UT`, template: `%s | ${SITE.name}` },
  description: "Independent coffee shop and drive-thru at 2417 Grant Ave in downtown Ogden, Utah.",
  applicationName: SITE.name,
  icons: { icon: IMG.logo, apple: IMG.logo },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  other: {
    "geo.region": "US-UT",
    "geo.placename": "Ogden",
    "geo.position": `${SITE.lat};${SITE.lng}`,
    ICBM: `${SITE.lat}, ${SITE.lng}`,
  },
};

export const viewport: Viewport = { themeColor: "#5C2D91", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${domine.variable} ${dmSans.variable}`}>
      <head>
        {/* Material Symbols, subset to only the icons this site uses (see lib/icons.ts). */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href={ICON_FONT_URL} />
      </head>
      <body className="bg-cream-bg text-on-surface font-body-md text-body-md">
        <JsonLd data={businessSchema()} />
        <Header />
        <main className="w-full pt-20 bg-cream-bg min-h-screen" id="main">
          <div className="flex flex-col w-full">
            <Ticker />
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
