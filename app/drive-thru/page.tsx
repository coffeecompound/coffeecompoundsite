import Link from "next/link";
import { CONTAINER, FaqBlock, HoursList, Icon, PageHero, SectionHeader, VisitBand } from "@/components/ui";
import { pageMeta, type Crumb, type Faq } from "@/lib/seo";
import { IMG, SITE } from "@/lib/site";

const crumbs: Crumb[] = [
  { path: "/", label: "Home" },
  { path: "/drive-thru/", label: "Drive-Thru" },
];

export const metadata = pageMeta({
  path: "/drive-thru/",
  title: "Drive-Thru Coffee in Downtown Ogden | The Coffee Compound",
  description:
    "Drive-thru coffee in downtown Ogden, Utah at 2417 Grant Ave. Fair trade espresso, frozen hot chocolate, and hot breakfast sandwiches without parking. Open Mon–Sat.",
  image: IMG.barista,
});

const FAQS: Faq[] = [
  {
    q: "Is there a drive-thru coffee shop in downtown Ogden?",
    a: `Yes. The Coffee Compound at ${SITE.street} has a drive-thru window right in downtown Ogden, a block from Historic 25th Street.`,
  },
  { q: "What are the drive-thru hours?", a: `The drive-thru is open during cafe hours: ${SITE.hours.map((h) => `${h.label} ${h.text}`).join(", ")}.` },
  {
    q: "Can I order the full menu at the drive-thru?",
    a: "Yes. Espresso drinks, drip coffee, chai chillers, hot chocolate, frozen hot chocolate, breakfast sandwiches and pastries are all available at the window.",
  },
  { q: "Can I call ahead?", a: `Yes. Call ${SITE.phone} and your order can be ready when you pull up.` },
  {
    q: "Do I need to park?",
    a: 'No. The drive-thru lets you skip downtown parking completely. If you want to come inside, see our <a href="/visit/">visit and parking info</a>.',
  },
];

const STEPS = [
  { icon: "call", title: "Call ahead (optional)", body: <>Ring us at <a className="text-primary font-bold" href={SITE.phoneHref}>{SITE.phone}</a> and we&apos;ll have it ready.</> },
  { icon: "directions_car", title: "Pull up on Grant Ave", body: <>Head to {SITE.street}, between 24th and 25th Street, and pull up to the window.</> },
  { icon: "local_cafe", title: "Sip & go", body: <>Espresso, cocoa, or a hot bagel sandwich, made the same way every time.</> },
];

const FAVORITES = [
  ["Americano", "Bold, smooth, and a regular favorite.", "/menu/coffee-espresso/"],
  ["Chai Chiller", "Blended iced chai for warm Ogden afternoons.", "/menu/coffee-espresso/"],
  ["Frozen Hot Chocolate", "Homemade, topped with scratch whipped cream.", "/menu/hot-chocolate/"],
  ["Asiago Bagel Sandwich", "Hot breakfast you can eat on the way to work.", "/menu/food-pastries/"],
];

export default function DriveThruPage() {
  return (
    <>
      <PageHero
        label="Skip the Parking"
        h1="Drive-Thru Coffee in Downtown Ogden"
        tagline="Same great cup, straight to your window"
        sub="Downtown Ogden has plenty of great cafes, but few let you order without leaving your car. Ours does, right on Grant Avenue between 24th and 25th Street."
        crumbs={crumbs}
      />
      <section className="w-full bg-surface-container py-space-xl border-y border-outline-variant/50">
        <div className={CONTAINER}>
          <SectionHeader label="Fast & Friendly" title="HOW IT WORKS" />
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-gutter-lg">
            {STEPS.map((s, i) => (
              <li key={s.title} className={`bg-surface-container-lowest p-space-lg rounded-xl shadow-md border-t-4 ${i === 1 ? "border-secondary" : "border-primary"} flex flex-col gap-space-sm`}>
                <div className="flex items-center gap-space-sm">
                  <span className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold font-headline-sm shadow-sm">{i + 1}</span>
                  <Icon name={s.icon} className="text-headline-md text-secondary" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-espresso-dark font-bold">{s.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="w-full bg-cream-bg py-space-xl">
        <div className={CONTAINER}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-start">
            <div className="lg:col-span-7 bg-surface-container-lowest p-space-lg rounded-xl shadow-md border border-outline-variant/50">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">Drive-Thru Favorites</span>
              <h2 className="font-headline-lg text-headline-lg text-secondary font-bold mt-1">What to Order</h2>
              <ul className="mt-space-md flex flex-col">
                {FAVORITES.map(([n, d, h]) => (
                  <li key={n} className="py-3 border-b border-outline-variant/40 last:border-0">
                    <Link className="flex items-center justify-between gap-space-md group" href={h}>
                      <span>
                        <span className="block font-title-md text-title-md font-bold text-espresso-dark group-hover:text-primary">{n}</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">{d}</span>
                      </span>
                      <Icon name="arrow_forward" className="text-primary" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-5 bg-secondary-dark text-surface-container-lowest p-space-lg rounded-xl shadow-md border-2 border-secondary flex flex-col gap-space-sm">
              <div className="flex items-center gap-space-sm">
                <Icon name="schedule" className="text-headline-md text-banner-gold" />
                <h2 className="font-title-md text-title-md font-bold">Drive-Thru Hours</h2>
              </div>
              <HoursList dark />
              <p className="font-body-sm text-body-sm text-surface-container-low mt-space-xs">
                Heading to Union Station, the Egyptian Theater, or an early meeting downtown? We&apos;re on your way.
              </p>
            </div>
          </div>
        </div>
      </section>
      <FaqBlock items={FAQS} label="Drive-Thru Questions" bg="bg-surface-container" />
      <VisitBand heading="Find the Drive-Thru" bg="bg-cream-bg" />
    </>
  );
}
