import Link from "next/link";
import { CONTAINER, EXT, Icon, PageHero, SecondaryButton, VisitBand } from "@/components/ui";
import { pageMeta, type Crumb } from "@/lib/seo";
import { IMG } from "@/lib/site";

const crumbs: Crumb[] = [
  { path: "/", label: "Home" },
  { path: "/events/", label: "Events" },
];

export const metadata = pageMeta({
  path: "/events/",
  title: "Downtown Ogden Events: Art Stroll, Farmers Market & Twilight | The Coffee Compound",
  description:
    "Plan your downtown Ogden day around First Friday Art Stroll, Farmers Market Ogden on Historic 25th Street, and the Ogden Twilight concerts, with coffee from The Coffee Compound on Grant Ave.",
  image: IMG.patio,
});

// Community events run by other organizers. Link out for dates; don't mark these up as our own events.
const EVENTS = [
  {
    icon: "palette",
    label: "First Friday • Year-Round",
    title: "First Friday Art Stroll",
    body: "On the first Friday of every month, 6–9 PM, downtown galleries and studios open their doors with exhibits, artist receptions, and live music. It's free and everyone's welcome. We close at 3 on Fridays, so swing by in the afternoon for a coffee to carry you into the evening.",
    link: "https://www.visitogden.com/events/signature/first-friday-art-stroll/",
    linkLabel: "Art Stroll details",
    accent: "border-primary",
  },
  {
    icon: "storefront",
    label: "Saturdays • Summer & Fall",
    title: "Farmers Market Ogden",
    body: "The summer market fills Historic 25th Street on Saturday mornings from Memorial Day weekend into September, and a smaller fall market follows. We're open 8–2 on Saturdays, one block north, so grab a latte or frozen hot chocolate before you shop.",
    link: "https://farmersmarketogden.com/",
    linkLabel: "Market dates",
    accent: "border-secondary",
  },
  {
    icon: "music_note",
    label: "Summer Nights",
    title: "Ogden Twilight Concert Series",
    body: "The summer concert series brings national acts to the Ogden Amphitheater on 25th Street. Shows are in the evening, after we close, but we're a great daytime stop on concert days.",
    link: "https://www.ogdentwilight.com/",
    linkLabel: "Twilight lineup",
    accent: "border-primary",
  },
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        label="Downtown Happenings"
        h1="Events in Downtown Ogden"
        tagline="Coffee first, then the fun"
        sub="Our favorite downtown traditions, all within a short walk of Grant Avenue. Check each organizer's site for the latest dates."
        crumbs={crumbs}
      />
      <section className="w-full bg-surface-container py-space-xl border-y border-outline-variant/50">
        <div className={CONTAINER}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter-lg">
            {EVENTS.map((e) => (
              <article key={e.title} className={`bg-surface-container-lowest p-space-lg rounded-xl shadow-md border-t-4 ${e.accent} flex flex-col gap-space-sm`}>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">{e.label}</span>
                <div className="flex items-center gap-space-sm">
                  <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-secondary flex-shrink-0">
                    <Icon name={e.icon} className="text-headline-sm" />
                  </div>
                  <h2 className="font-headline-sm text-headline-sm text-espresso-dark font-bold">{e.title}</h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{e.body}</p>
                <a className="mt-auto inline-flex items-center gap-1 text-primary hover:text-secondary font-label-md text-label-md font-bold" href={e.link} {...EXT}>
                  {e.linkLabel}
                  <Icon name="open_in_new" className="text-sm" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full bg-cream-bg py-space-xl">
        <div className={CONTAINER}>
          <div className="bg-surface-container-lowest p-space-md lg:p-space-lg rounded-xl shadow-md border-l-4 border-secondary flex flex-col md:flex-row items-center gap-space-lg">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center text-secondary shadow-sm">
              <Icon name="groups" className="text-headline-lg" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-headline-sm text-headline-sm text-espresso-dark font-bold">Hosting Something Downtown?</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                Our conference room is available for small meetings, and we can have coffee and pastries ready for your group.
              </p>
            </div>
            <SecondaryButton href="/contact/" icon="chat">
              Ask About the Room
            </SecondaryButton>
          </div>
          <p className="text-center font-body-md text-body-md text-on-surface-variant mt-space-lg">
            Planning a morning downtown? Read our{" "}
            <Link className="text-primary font-bold hover:text-secondary" href="/blog/things-to-do-downtown-ogden-morning/">
              guide to things to do in downtown Ogden in the morning
            </Link>
            .
          </p>
        </div>
      </section>
      <VisitBand />
    </>
  );
}
