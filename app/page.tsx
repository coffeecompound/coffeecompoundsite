import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { EXT, HoursList, Icon, MapTile, ReviewCard } from "@/components/ui";
import { REVIEWS } from "@/content/reviews";
import { pageMeta } from "@/lib/seo";
import { IMG, SITE } from "@/lib/site";

export const metadata = pageMeta({
  path: "/",
  title: "The Coffee Compound | Coffee Shop & Drive-Thru in Downtown Ogden, UT",
  ogTitle: "The Coffee Compound — Downtown Ogden Coffee & Drive-Thru",
  description:
    "Independent coffee shop and drive-thru at 2417 Grant Ave in downtown Ogden, Utah, near Historic 25th Street. Fair trade espresso, frozen hot chocolate, bagel sandwiches, free Wi-Fi.",
});

const TILE = "relative group overflow-hidden rounded-lg shadow-sm bg-surface-container-high border border-outline-variant/40";
const IMGCLS = "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105";
const TAG = "absolute bottom-2 left-2 bg-secondary/85 text-surface-container-lowest font-label-sm text-label-sm px-2 py-0.5 rounded";

export default function Home() {
  return (
    <>
      {/* Hero & Mercantile Header Section */}
      <section className="w-full bg-cream-bg py-space-lg lg:py-space-xl">
        <div className="max-w-[1240px] mx-auto px-margin lg:px-margin-lg">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-space-lg">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary bg-banner-gold/25 border border-banner-gold/50 px-space-md py-1 rounded-full shadow-sm mb-space-sm font-bold">
              Downtown Ogden Coffee Shop &amp; Drive-Thru
            </span>
            <h1 className="font-display-lg text-[40px] leading-[48px] sm:text-display-lg text-espresso-dark font-bold tracking-tight">THE COFFEE COMPOUND</h1>
            <p className="font-headline-md text-headline-md text-primary italic mt-2">“We Bring People Together Over A Cup &apos;A Joe”</p>
            <div className="inline-flex items-center gap-2 mt-2 px-3 py-1 bg-tertiary/20 rounded-full border border-banner-gold/40">
              <span className="font-title-md text-title-md text-secondary font-bold">When One Cup Isn&apos;t Enough!</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-space-md mt-space-md">
              <a
                className="inline-flex items-center gap-2 px-space-lg py-3 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg shadow-md hover:bg-[#D32F23] hover:shadow-lg transition-all duration-200"
                href={SITE.phoneHref}
              >
                <Icon name="call" className="text-lg" />
                Call Ahead to Order
              </a>
              <a
                className="inline-flex items-center gap-2 px-space-lg py-3 rounded-lg bg-surface-container-lowest text-secondary border border-secondary/30 font-label-lg text-label-lg shadow-sm hover:bg-secondary/5 hover:border-secondary transition-all duration-200"
                href={SITE.directionsUrl}
                {...EXT}
              >
                <Icon name="explore" className="text-primary text-lg" />
                Directions
              </a>
              <Link
                className="inline-flex items-center gap-2 px-space-lg py-3 rounded-lg bg-surface-container-lowest text-secondary border border-secondary/30 font-label-lg text-label-lg shadow-sm hover:bg-secondary/5 hover:border-secondary transition-all duration-200"
                href="/menu/"
              >
                <Icon name="local_cafe" className="text-primary text-lg" />
                View Menu
              </Link>
            </div>
          </div>

          {/* Tactile Mercantile Photo Mosaic */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 p-3 bg-surface-container rounded-xl shadow-md border border-outline-variant/60">
            <div className={`col-span-2 row-span-2 ${TILE}`}>
              <Image className={`${IMGCLS} aspect-square`} alt="Barista pouring steamed milk into a latte at The Coffee Compound in downtown Ogden" src={IMG.barista} width={600} height={600} priority />
              <div className="absolute bottom-2 left-2 bg-secondary/85 backdrop-blur-sm text-surface-container-lowest font-label-sm text-label-sm px-2.5 py-1 rounded border-l-2 border-banner-gold">
                Our Baristas Are Family
              </div>
            </div>
            <div className={`col-span-1 row-span-1 ${TILE}`}>
              <Image className={`${IMGCLS} aspect-square`} alt="Fresh-baked muffins and pastries" src={IMG.pastries} width={300} height={300} />
              <div className={TAG}>Fresh Bakes</div>
            </div>
            <div className={`col-span-1 row-span-1 ${TILE}`}>
              <Image className={`${IMGCLS} aspect-square`} alt="Latte art in a ceramic cappuccino cup" src={IMG.latte} width={300} height={300} />
            </div>
            <div className={`col-span-2 row-span-1 ${TILE}`}>
              <Image className={`${IMGCLS} aspect-video`} alt="Friends enjoying coffee on a downtown Ogden patio" src={IMG.patio} width={600} height={338} />
              <div className={TAG}>Patio Gatherings</div>
            </div>
            <div className={`col-span-1 row-span-1 ${TILE}`}>
              <Image className={`${IMGCLS} aspect-square`} alt="Iced latte and a book in a sunny cafe nook" src={IMG.nook} width={300} height={300} />
            </div>
            <div className={`col-span-1 row-span-1 ${TILE}`}>
              <Image className={`${IMGCLS} aspect-square`} alt="Toasted bagel breakfast sandwich" src={IMG.bagel} width={300} height={300} />
            </div>
          </div>

          {/* Welcoming Intro Narrative Card */}
          <div className="mt-space-lg bg-surface-container-lowest p-space-md lg:p-space-lg rounded-xl shadow-md border-l-4 border-secondary flex flex-col md:flex-row items-center gap-space-lg">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center text-secondary shadow-sm">
              <Icon name="storefront" className="text-headline-lg" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-headline-sm text-headline-sm text-espresso-dark font-bold">Welcome to Downtown Ogden</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                The Coffee Compound is located in downtown Ogden, UT at 2417 Grant Avenue, a block from Historic 25th Street. Whether you are meeting
                with friends, needing a little “me time”, or searching for a conference room, come in and see Yvette at the Coffee Compound! Our
                Baristas are family that care about making you feel comfortable and satisfied with your drinks. No matter which Barista makes your
                drink, it will always be the same.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end flex-shrink-0 gap-1 bg-surface-container-low px-4 py-3 rounded-lg border border-outline-variant/60">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Sanctuary On Grant</span>
              <span className="font-headline-sm text-headline-sm text-primary font-bold">2417 Grant Ave</span>
            </div>
          </div>

          {/* Hours & Drive-Thru */}
          <div className="mt-space-lg grid grid-cols-1 md:grid-cols-2 gap-gutter-lg">
            <div className="bg-surface-container-lowest p-space-md lg:p-space-lg rounded-xl shadow-md border border-outline-variant/50 flex flex-col gap-space-sm">
              <div className="flex items-center gap-space-sm text-primary">
                <Icon name="schedule" className="text-headline-md" />
                <h2 className="font-title-md text-title-md font-bold text-espresso-dark">Cafe Hours</h2>
              </div>
              <HoursList />
            </div>
            <div className="bg-secondary-dark text-surface-container-lowest p-space-md lg:p-space-lg rounded-xl shadow-md border-2 border-secondary flex flex-col gap-space-sm">
              <div className="flex items-center gap-space-sm">
                <Icon name="directions_car" className="text-headline-md text-banner-gold" />
                <h2 className="font-title-md text-title-md font-bold">Drive-Thru Coffee, Downtown</h2>
              </div>
              <p className="font-body-md text-body-md text-surface-container-low leading-relaxed">
                In a hurry? Pull through our drive-thru window on Grant Avenue for espresso, frozen hot chocolate, or a hot bagel sandwich. No
                parking, no meter, same great cup.
              </p>
              <div className="flex flex-wrap gap-space-sm mt-auto pt-space-xs">
                <Link
                  className="inline-flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-md hover:bg-[#D32F23] transition-all"
                  href="/drive-thru/"
                >
                  <Icon name="arrow_forward" className="text-sm" />
                  How Our Drive-Thru Works
                </Link>
                <a
                  className="inline-flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-surface-container-lowest/10 text-surface-container-lowest border border-banner-gold/60 font-label-md text-label-md hover:bg-surface-container-lowest/20 transition-all"
                  href={SITE.phoneHref}
                >
                  <Icon name="call" className="text-sm text-banner-gold" />
                  {SITE.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT OUR COFFEE Feature Section */}
      <section className="w-full bg-surface-container py-space-xl border-y border-outline-variant/50">
        <div className="max-w-[1240px] mx-auto px-margin lg:px-margin-lg">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-space-lg">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-space-md py-1 rounded-full shadow-sm mb-space-xs font-bold">
              Artisanal Craft &amp; Ethos
            </span>
            <h2 className="font-headline-lg text-headline-lg text-secondary font-bold">ABOUT OUR COFFEE</h2>
            <div className="w-16 h-1 bg-banner-gold rounded-full mt-space-xs" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
            <div className="lg:col-span-7 bg-surface-container-lowest p-space-lg rounded-xl shadow-md border border-outline-variant/50 flex flex-col gap-space-md">
              <div className="flex items-center gap-space-sm text-primary">
                <Icon name="coffee_maker" className="text-headline-md" />
                <span className="font-title-md text-title-md font-bold text-espresso-dark">4th Generation Heritage</span>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                We get our coffee and espresso beans from a 4th generation Salt Lake City roaster, one of the best in the state of Utah. They source
                green beans from all over the world and their buyers contract with growers in selected regions that they visit yearly to ensure the
                highest quality coffee. The coffee they provide is Arabica Fair Trade beans and their organic is triple certified. The beans are air
                cooled and the decaffeinated coffee is water decaffeinated.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-xs">
                {[
                  ["Origin Craft", "SLC Roaster", "4th generation heritage"],
                  ["Ethical Grade", "Fair Trade", "Arabica & triple certified"],
                  ["Pure Process", "Air Cooled", "Water decaffeinated"],
                ].map(([k, v, s]) => (
                  <div key={k} className="bg-surface-container-low p-space-sm rounded-lg flex flex-col border border-outline-variant/40">
                    <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">{k}</span>
                    <span className="font-headline-sm text-headline-sm text-espresso-dark font-bold mt-1">{v}</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">{s}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-space-md">
              <div className="relative rounded-xl overflow-hidden shadow-md group border-2 border-secondary/20">
                <Image className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105" alt="Fair trade Arabica coffee beans" src={IMG.beans} width={600} height={288} />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark/90 via-secondary-dark/30 to-transparent flex flex-col justify-end p-space-md">
                  <span className="text-banner-gold font-label-sm text-label-sm uppercase tracking-widest font-bold">Sourced with Purpose</span>
                  <span className="text-surface-container-lowest font-headline-sm text-headline-sm font-bold">100% Arabica Fair Trade Beans</span>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm border border-outline-variant/50 flex items-center gap-space-md">
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-secondary flex-shrink-0">
                  <Icon name="water_drop" className="text-headline-sm" />
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-espresso-dark font-bold text-base">Water Decaffeinated</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Our decaf is decaffeinated with water, so you get a full-flavored cup any time of day.{" "}
                    <Link className="text-primary font-bold hover:text-secondary" href="/menu/coffee-espresso/">
                      See our coffee menu
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -About The Owners- Vignette Section */}
      <section className="w-full bg-cream-bg py-space-xl">
        <div className="max-w-[1240px] mx-auto px-margin lg:px-margin-lg">
          <div className="bg-secondary-dark text-surface-container-lowest rounded-xl shadow-xl overflow-hidden border-2 border-secondary">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-5 relative min-h-[320px]">
                <Image className="object-cover" alt="Inside The Coffee Compound on Grant Avenue in Ogden" src={IMG.owners} fill sizes="(min-width: 1024px) 40vw, 100vw" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-secondary-dark/60 lg:block hidden" />
              </div>
              <div className="lg:col-span-7 p-space-lg lg:p-space-xl flex flex-col justify-center">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-banner-gold font-bold">Locally Owned &amp; Operated</span>
                <h2 className="font-headline-lg text-headline-lg text-surface-container-lowest font-bold mt-1">-About The Owners-</h2>
                <div className="w-12 h-1 bg-primary rounded-full my-space-sm" />
                <p className="font-body-lg text-body-lg text-surface-container-low leading-relaxed mt-space-xs">
                  The Coffee Compound is an independent coffee shop locally owned by Yvette Torres (a food service industry veteran) and her husband,
                  Tony (a former Air Force Academy graduate and Air Force helicopter pilot). The name “The Coffee Compound” originates from a humorous
                  tongue and cheek side of polygamy. It is well known that polygamist live in compounds. The motto “When One Cup Isn&apos;t Enough”
                  should be self-explanatory.
                </p>
                <div className="flex flex-wrap items-center gap-space-lg mt-space-md pt-space-sm border-t border-secondary">
                  <div className="flex items-center gap-space-xs">
                    <Icon name="military_tech" className="text-banner-gold" />
                    <span className="font-label-md text-label-md text-surface-container-lowest">Veteran &amp; Woman Owned</span>
                  </div>
                  <div className="flex items-center gap-space-xs">
                    <Icon name="sentiment_very_satisfied" className="text-banner-gold" />
                    <span className="font-label-md text-label-md text-surface-container-lowest">Independent &amp; Friendly</span>
                  </div>
                  <Link className="flex items-center gap-space-xs text-banner-gold hover:text-white font-label-md text-label-md" href="/about/">
                    Our story
                    <Icon name="arrow_forward" className="text-sm" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE MENU Preview & Chalkboard */}
      <section className="w-full bg-surface-container py-space-xl border-y border-outline-variant/50">
        <div className="max-w-[1240px] mx-auto px-margin lg:px-margin-lg">
          <div className="max-w-3xl mx-auto text-center mb-space-lg flex flex-col items-center">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-space-md py-1 rounded-full shadow-sm mb-space-xs font-bold">
              Handcrafted Espresso &amp; Daily Specials
            </span>
            <h2 className="font-headline-lg text-headline-lg text-secondary font-bold">THE MENU</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
              Espresso drinks, homemade hot chocolate, and fresh bakes, served inside or through the drive-thru.
            </p>
          </div>
          <div className="max-w-2xl mx-auto bg-surface-container-lowest p-space-lg rounded-xl shadow-md border border-outline-variant/60 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center text-secondary shadow-inner mb-space-sm">
              <Icon name="edit_note" className="text-headline-lg" />
            </div>
            <h3 className="font-headline-sm text-headline-sm text-espresso-dark font-bold">Seasonal Chalkboard Offerings</h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-2">
              Stop by 2417 Grant Avenue to see Yvette&apos;s chalkboard specials, house-baked pastries, and custom espresso drinks. Here are a few
              of the drinks regulars keep coming back for.
            </p>
            <div className="w-full max-w-md mt-space-md p-space-md bg-secondary-dark text-surface-container-lowest rounded-lg shadow-inner text-left font-body-sm border border-secondary">
              <div className="flex items-center justify-between pb-2 border-b border-secondary">
                <span className="font-title-md text-title-md font-bold text-banner-gold">Daily Barista Favorites</span>
                <span className="font-label-sm text-label-sm text-surface-container-low uppercase">In-Store Roster</span>
              </div>
              {[
                ["Frozen Hot Chocolate", "Fan Favorite", "/menu/hot-chocolate/"],
                ["Chai Chiller", "Blended", "/menu/coffee-espresso/"],
                ["Americano & Organic Drip", "Fair Trade", "/menu/coffee-espresso/"],
                ["Asiago Bagel Breakfast Sandwich", "Made Hot", "/menu/food-pastries/"],
              ].map(([n, t, h], i, arr) => (
                <Link
                  key={n}
                  className={`flex justify-between items-center hover:text-banner-gold ${i < arr.length - 1 ? "py-2 border-b border-secondary/60" : "pt-2"}`}
                  href={h}
                >
                  <span>{n}</span>
                  <span className="text-banner-gold font-bold">{t}</span>
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-space-sm mt-space-md">
              <Link
                className="inline-flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-md hover:bg-[#D32F23] transition-colors"
                href="/menu/"
              >
                <Icon name="menu_book" className="text-sm" />
                See the Full Menu
              </Link>
              <Link
                className="group inline-flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-surface-container text-secondary font-label-md text-label-md hover:bg-secondary hover:text-white transition-colors border border-secondary/20"
                href="/contact/"
              >
                <Icon name="chat" className="text-sm text-primary group-hover:text-white" />
                Ask about our conference room &amp; catering
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="w-full bg-cream-bg py-space-xl">
        <div className="max-w-[1240px] mx-auto px-margin lg:px-margin-lg">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-space-lg">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary bg-banner-gold/25 border border-banner-gold/50 px-space-md py-1 rounded-full shadow-sm mb-space-xs font-bold">
              Community Voices
            </span>
            <h2 className="font-headline-lg text-headline-lg text-espresso-dark font-bold">Customer Reviews</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">Honest words from our Ogden regulars and wanderers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-lg max-w-4xl mx-auto">
            {REVIEWS.map((r) => (
              <ReviewCard key={r.name} r={r} />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-space-md mt-space-lg">
            <a
              className="inline-flex items-center gap-2 px-space-lg py-3 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg shadow-md hover:bg-[#D32F23] hover:shadow-lg transition-all duration-200"
              href={SITE.reviewUrl}
              {...EXT}
            >
              <Icon name="rate_review" className="text-lg" />
              Leave a Google Review
            </a>
            <Link
              className="inline-flex items-center gap-2 px-space-lg py-3 rounded-lg bg-surface-container-lowest text-secondary border border-secondary/30 font-label-lg text-label-lg shadow-sm hover:bg-secondary/5 hover:border-secondary transition-all duration-200"
              href="/reviews/"
            >
              <Icon name="forum" className="text-primary text-lg" />
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Us & Location Section */}
      <section className="w-full bg-surface-container py-space-xl border-t border-outline-variant/50" id="contact-section">
        <div className="max-w-[1240px] mx-auto px-margin lg:px-margin-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-start">
            <div className="lg:col-span-7 bg-surface-container-lowest p-space-lg rounded-xl shadow-md border border-outline-variant/50">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">Reach Out &amp; Say Hello</span>
              <h2 className="font-headline-lg text-headline-lg text-secondary font-bold mt-1">Contact Us</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-space-md">
                Whether inquiring about our conference room, coffee sourcing, or private gatherings, send us a note below.
              </p>
              <ContactForm />
            </div>
            <div className="lg:col-span-5 flex flex-col gap-space-md">
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-md border border-outline-variant/50 flex flex-col gap-space-sm">
                <div className="flex items-center gap-space-sm text-primary">
                  <Icon name="pin_drop" className="text-headline-sm" />
                  <span className="font-title-md text-title-md font-bold text-espresso-dark">Our Downtown Sanctuary</span>
                </div>
                <address className="not-italic font-body-md text-body-md text-on-surface-variant">
                  <strong className="text-espresso-dark">The Coffee Compound</strong>
                  <br />
                  2417 Grant Avenue
                  <br />
                  Ogden, UT 84401
                  <br />
                  <a className="text-primary font-bold hover:text-secondary" href={SITE.phoneHref}>
                    {SITE.phone}
                  </a>
                </address>
                <div className="pt-2">
                  <a
                    className="inline-flex items-center gap-2 text-primary hover:text-secondary font-label-md text-label-md font-bold transition-colors"
                    href={SITE.directionsUrl}
                    {...EXT}
                  >
                    <span>Open in Google Maps</span>
                    <Icon name="open_in_new" className="text-sm" />
                  </a>
                </div>
              </div>
              <MapTile />
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-md border border-outline-variant/50 flex flex-wrap items-center justify-between gap-space-sm">
                <span className="font-label-md text-label-md text-espresso-dark font-bold">Connect With Us:</span>
                <div className="flex flex-wrap items-center gap-space-sm font-label-md text-label-md">
                  {[
                    ["Email", `mailto:${SITE.email}`],
                    ["Facebook", SITE.social.facebook],
                    ["Yelp", SITE.social.yelp],
                    ["Google", SITE.reviewUrl],
                  ].map(([label, href], i) => (
                    <span key={label} className="flex items-center gap-space-sm">
                      {i > 0 && <span className="text-outline-variant">•</span>}
                      <a
                        className="text-on-surface-variant hover:text-primary transition-colors px-2 py-1 rounded"
                        href={href}
                        {...(href.startsWith("http") ? EXT : {})}
                      >
                        {label}
                      </a>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
