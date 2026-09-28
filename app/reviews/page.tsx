import { Card, CONTAINER, EXT, Icon, PageHero, PrimaryButton, ReviewCard, SectionHeader, VisitBand } from "@/components/ui";
import { REVIEWS } from "@/content/reviews";
import { pageMeta, type Crumb } from "@/lib/seo";
import { SITE } from "@/lib/site";

const crumbs: Crumb[] = [
  { path: "/", label: "Home" },
  { path: "/reviews/", label: "Reviews" },
];

export const metadata = pageMeta({
  path: "/reviews/",
  title: "Reviews | The Coffee Compound, Downtown Ogden Coffee Shop",
  description:
    "What guests say about The Coffee Compound in downtown Ogden: friendly service from owner Yvette, great Americanos, frozen hot chocolate, and a clean, comfortable place to work. Leave us a Google review.",
});

export default function ReviewsPage() {
  return (
    <>
      <PageHero label="Community Voices" h1="Customer Reviews" tagline="Honest words from our Ogden regulars and wanderers" crumbs={crumbs} ctas={false} />
      <section className="w-full bg-cream-bg pb-space-xl">
        <div className={CONTAINER}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-lg max-w-4xl mx-auto">
            {REVIEWS.map((r) => (
              <ReviewCard key={r.name} r={r} />
            ))}
          </div>
        </div>
      </section>
      <section className="w-full bg-surface-container py-space-xl border-y border-outline-variant/50">
        <div className={CONTAINER}>
          <SectionHeader label="What People Mention Most" title="WHY GUESTS COME BACK" sub="Themes that come up again and again in public reviews of the shop." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter-lg">
            <Card icon="favorite" title="Yvette's Hospitality" body="Guests often mention the owner by name: the warm welcome, remembering orders, and great recommendations." />
            <Card
              icon="coffee"
              title="Great Americanos"
              accent="border-secondary"
              body="Smooth, well-made espresso drinks, with the Americano and chai chiller named as favorites."
              href="/menu/coffee-espresso/"
            />
            <Card icon="icecream" title="Frozen Hot Chocolate" body="Homemade chocolate and scratch whipped cream win over non-coffee drinkers." href="/menu/hot-chocolate/" />
            <Card
              icon="laptop_mac"
              title="Clean & Comfortable"
              accent="border-secondary"
              body="A calm, tidy space that works for catching up with friends or getting work done."
              href="/blog/best-places-to-work-remotely-downtown-ogden/"
            />
          </div>
        </div>
      </section>
      <section className="w-full bg-cream-bg py-space-xl">
        <div className={CONTAINER}>
          <div className="max-w-3xl mx-auto bg-secondary-dark text-surface-container-lowest p-space-lg lg:p-space-xl rounded-xl shadow-xl border-2 border-secondary text-center flex flex-col items-center gap-space-sm">
            <Icon name="rate_review" className="text-5xl text-banner-gold" />
            <h2 className="font-headline-lg text-headline-lg font-bold">Had a Great Cup?</h2>
            <p className="font-body-lg text-body-lg text-surface-container-low max-w-xl">
              Reviews help other coffee lovers find a small, local shop in downtown Ogden. It takes a minute and means the world to our family.
            </p>
            <div className="flex flex-wrap justify-center gap-space-md mt-space-sm">
              <PrimaryButton href={SITE.reviewUrl} icon="star" external>
                Leave a Google Review
              </PrimaryButton>
              <a
                className="inline-flex items-center gap-2 px-space-lg py-3 rounded-lg bg-surface-container-lowest/10 text-surface-container-lowest border border-banner-gold/60 font-label-lg text-label-lg hover:bg-surface-container-lowest/20 transition-all"
                href={SITE.social.yelp}
                {...EXT}
              >
                <Icon name="open_in_new" className="text-lg text-banner-gold" />
                Review on Yelp
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-space-md mt-space-sm font-label-md text-label-md text-surface-container-low">
              <span>Also find us on:</span>
              {[
                ["Tripadvisor", SITE.social.tripadvisor],
                ["Facebook", SITE.social.facebook],
                ["Visit Ogden", SITE.social.visitOgden],
              ].map(([label, href]) => (
                <a key={label} className="text-banner-gold hover:text-white" href={href} {...EXT}>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <VisitBand />
    </>
  );
}
