import Image from "next/image";
import Link from "next/link";
import { MenuGrid, MenuNote } from "@/components/MenuParts";
import { CONTAINER, Icon, JsonLd, PageHero, SectionHeader, VisitBand } from "@/components/ui";
import { MENU, menuSchema } from "@/content/menu";
import { pageMeta, type Crumb } from "@/lib/seo";
import { IMG } from "@/lib/site";

const crumbs: Crumb[] = [
  { path: "/", label: "Home" },
  { path: "/menu/", label: "Menu" },
];

export const metadata = pageMeta({
  path: "/menu/",
  title: "Menu | The Coffee Compound, Downtown Ogden Coffee Shop",
  description:
    "The Coffee Compound menu: fair trade espresso, Americanos, lattes, chai chillers, homemade frozen hot chocolate with scratch whipped cream, bagel sandwiches and pastries. 2417 Grant Ave, Ogden.",
  image: IMG.latte,
});

export default function MenuPage() {
  return (
    <>
      <JsonLd data={menuSchema(MENU, "/menu/")} />
      <PageHero
        label="Handcrafted Espresso & Daily Specials"
        h1="Our Menu"
        tagline="Coffee, Cocoa & Fresh Bakes in Downtown Ogden"
        sub="Everything below is served inside our Grant Avenue cafe and through the drive-thru."
        crumbs={crumbs}
      />
      <section className="w-full bg-cream-bg pb-space-lg">
        <div className={CONTAINER}>
          <nav aria-label="Menu sections" className="grid grid-cols-1 md:grid-cols-3 gap-gutter-lg">
            {MENU.map((s) => (
              <a key={s.slug} className="relative group rounded-xl overflow-hidden shadow-md border-2 border-secondary/20 block" href={`#${s.slug}`}>
                <Image alt="" className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" src={s.img} width={400} height={192} />
                <span className="absolute inset-0 bg-gradient-to-t from-secondary-dark/90 via-secondary-dark/30 to-transparent flex flex-col justify-end p-space-md">
                  <span className="text-banner-gold font-label-sm text-label-sm uppercase tracking-widest font-bold">{s.items.length} favorites</span>
                  <span className="text-surface-container-lowest font-headline-sm text-headline-sm font-bold">{s.short}</span>
                </span>
              </a>
            ))}
          </nav>
        </div>
      </section>
      {MENU.map((s, i) => (
        <section
          key={s.slug}
          id={s.slug}
          className={`w-full ${i % 2 === 0 ? "bg-surface-container border-y border-outline-variant/50" : "bg-cream-bg"} py-space-xl`}
        >
          <div className={CONTAINER}>
            <SectionHeader label={s.short} title={s.name.toUpperCase()} sub={s.intro} />
            <div className="max-w-4xl mx-auto">
              <MenuGrid items={s.items} />
              <div className="text-center mt-space-md">
                <Link className="inline-flex items-center gap-2 text-primary hover:text-secondary font-label-md text-label-md font-bold" href={`/menu/${s.slug}/`}>
                  More about our {s.short.toLowerCase()}
                  <Icon name="arrow_forward" className="text-sm" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}
      <section className="w-full bg-cream-bg pb-space-xl">
        <MenuNote />
      </section>
      <VisitBand heading="Order Inside or at the Drive-Thru" />
    </>
  );
}
