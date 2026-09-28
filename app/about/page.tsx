import Image from "next/image";
import Link from "next/link";
import { CONTAINER, Icon, PageHero, SectionHeader, VisitBand } from "@/components/ui";
import { pageMeta, type Crumb } from "@/lib/seo";
import { IMG } from "@/lib/site";

const crumbs: Crumb[] = [
  { path: "/", label: "Home" },
  { path: "/about/", label: "About" },
];

export const metadata = pageMeta({
  path: "/about/",
  title: "About Yvette & Tony Torres | The Coffee Compound, Ogden",
  description:
    "Meet Yvette and Tony Torres, the veteran- and woman-owned team behind The Coffee Compound in downtown Ogden. The story behind the name and our 4th-generation Utah roaster.",
  image: IMG.owners,
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="Locally Owned & Operated"
        h1="About The Coffee Compound"
        tagline="“We Bring People Together Over A Cup 'A Joe”"
        sub="An independent coffee shop on Grant Avenue, run by a family that treats every guest like a regular."
        crumbs={crumbs}
        ctas={false}
      />
      <section className="w-full bg-cream-bg pb-space-xl">
        <div className={CONTAINER}>
          <div className="bg-secondary-dark text-surface-container-lowest rounded-xl shadow-xl overflow-hidden border-2 border-secondary">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-5 relative min-h-[320px]">
                <Image alt="Inside The Coffee Compound on Grant Avenue in Ogden" className="object-cover" src={IMG.owners} fill sizes="(min-width: 1024px) 40vw, 100vw" priority />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-secondary-dark/60 lg:block hidden" />
              </div>
              <div className="lg:col-span-7 p-space-lg lg:p-space-xl flex flex-col justify-center">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-banner-gold font-bold">Meet the Owners</span>
                <h2 className="font-headline-lg text-headline-lg text-surface-container-lowest font-bold mt-1">Yvette &amp; Tony Torres</h2>
                <div className="w-12 h-1 bg-primary rounded-full my-space-sm" />
                <p className="font-body-lg text-body-lg text-surface-container-low leading-relaxed">
                  The Coffee Compound is an independent coffee shop locally owned by Yvette Torres, a food service industry veteran, and her husband,
                  Tony, a former Air Force Academy graduate and Air Force helicopter pilot.
                </p>
                <p className="font-body-lg text-body-lg text-surface-container-low leading-relaxed mt-space-sm">
                  Come in and you&apos;ll likely meet Yvette behind the counter. Guests say she remembers their order, suggests something new, and
                  makes the shop feel like home. Our baristas are family, and no matter who makes your drink, it will always be the same.
                </p>
                <div className="flex flex-wrap items-center gap-space-lg mt-space-md pt-space-sm border-t border-secondary">
                  <div className="flex items-center gap-space-xs">
                    <Icon name="military_tech" className="text-banner-gold" />
                    <span className="font-label-md text-label-md">Veteran &amp; Woman Owned</span>
                  </div>
                  <div className="flex items-center gap-space-xs">
                    <Icon name="sentiment_very_satisfied" className="text-banner-gold" />
                    <span className="font-label-md text-label-md">Independent &amp; Friendly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-surface-container py-space-xl border-y border-outline-variant/50">
        <div className={CONTAINER}>
          <SectionHeader label="The Name Story" title="WHY “THE COFFEE COMPOUND”?" />
          <div className="max-w-3xl mx-auto bg-surface-container-lowest p-space-lg rounded-xl shadow-md border-l-4 border-secondary">
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              The name “The Coffee Compound” originates from a humorous, tongue-in-cheek side of polygamy. It is well known that polygamists live in
              compounds. And the motto, <strong className="text-primary">“When One Cup Isn&apos;t Enough!”</strong>, should be self-explanatory.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full bg-cream-bg py-space-xl">
        <div className={CONTAINER}>
          <SectionHeader label="Artisanal Craft & Ethos" title="OUR ROASTER" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
            <div className="lg:col-span-7 bg-surface-container-lowest p-space-lg rounded-xl shadow-md border border-outline-variant/50 flex flex-col gap-space-md">
              <div className="flex items-center gap-space-sm text-primary">
                <Icon name="coffee_maker" className="text-headline-md" />
                <span className="font-title-md text-title-md font-bold text-espresso-dark">4th Generation Heritage</span>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                We get our coffee and espresso beans from a 4th-generation Salt Lake City roaster, one of the best in the state of Utah. They source
                green beans from all over the world, and their buyers contract with growers in selected regions that they visit yearly to ensure the
                highest quality coffee.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                The coffee is Arabica Fair Trade, and the organic is triple certified. The beans are air cooled, and the decaf is water decaffeinated.
              </p>
              <Link className="self-start inline-flex items-center gap-2 text-primary hover:text-secondary font-label-md text-label-md font-bold" href="/menu/coffee-espresso/">
                See our coffee &amp; espresso menu
                <Icon name="arrow_forward" className="text-sm" />
              </Link>
            </div>
            <div className="lg:col-span-5 relative rounded-xl overflow-hidden shadow-md border-2 border-secondary/20">
              <Image alt="Fair trade Arabica coffee beans" className="w-full h-80 object-cover" src={IMG.beans} width={600} height={320} />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark/90 via-secondary-dark/30 to-transparent flex flex-col justify-end p-space-md">
                <span className="text-banner-gold font-label-sm text-label-sm uppercase tracking-widest font-bold">Sourced with Purpose</span>
                <span className="text-surface-container-lowest font-headline-sm text-headline-sm font-bold">100% Arabica Fair Trade Beans</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <VisitBand heading="Come Say Hi to Yvette" />
    </>
  );
}
