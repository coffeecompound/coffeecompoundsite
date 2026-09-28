import { Card, CONTAINER, EXT, FaqBlock, HoursList, Icon, PageHero, PrimaryButton, SectionHeader } from "@/components/ui";
import { pageMeta, type Crumb, type Faq } from "@/lib/seo";
import { IMG, SITE } from "@/lib/site";

const crumbs: Crumb[] = [
  { path: "/", label: "Home" },
  { path: "/visit/", label: "Visit" },
];

export const metadata = pageMeta({
  path: "/visit/",
  title: "Hours, Parking & Directions | The Coffee Compound, Downtown Ogden",
  description:
    "Visit The Coffee Compound at 2417 Grant Ave, Ogden, UT, near Historic 25th Street and Union Station. Hours, parking tips, map, drive-thru, free Wi-Fi, and a conference room.",
  image: IMG.patio,
});

const FAQS: Faq[] = [
  {
    q: "Where is The Coffee Compound?",
    a: `${SITE.streetLong}, ${SITE.city}, ${SITE.region} ${SITE.zip}. We're on Grant Avenue between 24th and 25th Street, one block north of Historic 25th Street and a short walk from Union Station.`,
  },
  { q: "What are your hours?", a: `${SITE.hours.map((h) => `${h.label}: ${h.text}`).join(". ")}.` },
  {
    q: "Where do I park?",
    a: 'Downtown Ogden began a managed parking program in 2026, so time limits and rates vary by block. Check <a href="https://www.ogdencity.gov/" rel="noopener" target="_blank">Ogden City\'s parking information</a> for current rules, or skip parking entirely with our <a href="/drive-thru/">drive-thru</a>.',
  },
  {
    q: "Do you have Wi-Fi?",
    a: 'Yes, we have free Wi-Fi, and the shop is a comfortable spot to work or study. See our <a href="/blog/best-places-to-work-remotely-downtown-ogden/">remote work guide</a>.',
  },
  { q: "Do you have a conference room?", a: `Yes. Ask about reserving our conference room for a meeting. <a href="/contact/">Send us a note</a> or call ${SITE.phone}.` },
  { q: "Are you open on Sundays?", a: "No. We are closed on Sundays." },
  {
    q: "Is The Coffee Compound wheelchair accessible?",
    a: "Yes. We have a wheelchair-accessible entrance, parking, restroom, and seating. The drive-thru is another easy option.",
  },
];

export default function VisitPage() {
  return (
    <>
      <PageHero
        label="Near 25th Street & Union Station"
        h1="Visit Us in Downtown Ogden"
        tagline="2417 Grant Avenue • Ogden, UT 84401"
        sub="One block north of Historic 25th Street, a short walk from Union Station and Peery's Egyptian Theater."
        crumbs={crumbs}
      />
      <section className="w-full bg-surface-container py-space-xl border-y border-outline-variant/50">
        <div className={CONTAINER}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-stretch">
            <div className="lg:col-span-5 flex flex-col gap-space-md">
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-md border border-outline-variant/50 flex flex-col gap-space-sm">
                <div className="flex items-center gap-space-sm text-primary">
                  <Icon name="schedule" className="text-headline-sm" />
                  <h2 className="font-title-md text-title-md font-bold text-espresso-dark">Cafe &amp; Drive-Thru Hours</h2>
                </div>
                <HoursList />
              </div>
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-md border border-outline-variant/50 flex flex-col gap-space-sm">
                <div className="flex items-center gap-space-sm text-primary">
                  <Icon name="pin_drop" className="text-headline-sm" />
                  <h2 className="font-title-md text-title-md font-bold text-espresso-dark">Address</h2>
                </div>
                <address className="not-italic font-body-md text-body-md text-on-surface-variant">
                  <strong className="text-espresso-dark">{SITE.name}</strong>
                  <br />
                  {SITE.streetLong}
                  <br />
                  {SITE.city}, {SITE.region} {SITE.zip}
                  <br />
                  <a className="text-primary font-bold hover:text-secondary" href={SITE.phoneHref}>
                    {SITE.phone}
                  </a>
                </address>
                <div className="pt-space-xs">
                  <PrimaryButton href={SITE.directionsUrl} icon="explore" external>
                    Directions
                  </PrimaryButton>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 rounded-xl shadow-md overflow-hidden border-2 border-secondary/20 min-h-[380px] bg-surface-container-high">
              <iframe
                className="w-full h-full min-h-[380px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={SITE.mapEmbed}
                title="Map showing The Coffee Compound at 2417 Grant Ave, Ogden"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-cream-bg py-space-xl">
        <div className={CONTAINER}>
          <SectionHeader label="Getting Here" title="PARKING & NEARBY" sub="We're right in the middle of downtown Ogden's walkable core." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter-lg">
            <Card icon="directions_car" title="Drive-Thru" body="The easiest way to get your coffee downtown. No parking needed." href="/drive-thru/" />
            <Card
              icon="local_parking"
              title="Parking"
              accent="border-secondary"
              body={
                <>
                  Downtown Ogden moved to managed parking in 2026. Check posted signs or{" "}
                  <a className="text-primary font-bold" href="https://www.ogdencity.gov/" {...EXT}>
                    Ogden City
                  </a>{" "}
                  for current rules.
                </>
              }
            />
            <Card icon="train" title="Union Station" body="A short walk west along 25th Street. Grab a coffee before exploring the museums." href="/blog/coffee-near-historic-25th-street/" />
            <Card
              icon="theater_comedy"
              title="Egyptian Theater"
              accent="border-secondary"
              body="Peery's Egyptian Theater is a short walk east on Washington Blvd."
              href="/blog/things-to-do-downtown-ogden-morning/"
            />
          </div>
        </div>
      </section>
      <FaqBlock items={FAQS} label="Planning Your Visit" bg="bg-surface-container" />
    </>
  );
}
