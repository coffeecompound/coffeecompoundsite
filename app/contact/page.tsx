import ContactForm from "@/components/ContactForm";
import { CONTAINER, EXT, HoursList, Icon, PageHero } from "@/components/ui";
import { pageMeta, type Crumb } from "@/lib/seo";
import { SITE } from "@/lib/site";

const crumbs: Crumb[] = [
  { path: "/", label: "Home" },
  { path: "/contact/", label: "Contact" },
];

export const metadata = pageMeta({
  path: "/contact/",
  title: "Contact The Coffee Compound | Ogden Coffee Shop & Conference Room",
  description:
    "Contact The Coffee Compound in downtown Ogden. Call (801) 317-4880, email, or send a message about our conference room, catering, or private gatherings.",
});

const ROW_ICON = "w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-secondary flex-shrink-0";
const ROW_LABEL = "block font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold";
const ROW_VALUE = "font-title-md text-title-md font-bold text-espresso-dark group-hover:text-primary";

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Reach Out & Say Hello"
        h1="Contact Us"
        sub="Questions about the conference room, catering a meeting, or a private gathering? We'd love to hear from you."
        crumbs={crumbs}
        ctas={false}
      />
      <section className="w-full bg-surface-container py-space-xl border-t border-outline-variant/50">
        <div className={CONTAINER}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-start">
            <div className="lg:col-span-7 bg-surface-container-lowest p-space-lg rounded-xl shadow-md border border-outline-variant/50">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">Send a Message</span>
              <h2 className="font-headline-lg text-headline-lg text-secondary font-bold mt-1">We&apos;ll Get Back to You</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-space-md">For same-day orders, calling is fastest.</p>
              <ContactForm />
            </div>
            <div className="lg:col-span-5 flex flex-col gap-space-md">
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-md border border-outline-variant/50 flex flex-col gap-space-md">
                <a className="flex items-center gap-space-md group" href={SITE.phoneHref}>
                  <span className={ROW_ICON}>
                    <Icon name="call" className="text-headline-sm" />
                  </span>
                  <span>
                    <span className={ROW_LABEL}>Call</span>
                    <span className={ROW_VALUE}>{SITE.phone}</span>
                  </span>
                </a>
                <a className="flex items-center gap-space-md group" href={`mailto:${SITE.email}`}>
                  <span className={ROW_ICON}>
                    <Icon name="mail" className="text-headline-sm" />
                  </span>
                  <span className="min-w-0">
                    <span className={ROW_LABEL}>Email</span>
                    <span className={`${ROW_VALUE} break-all`}>{SITE.email}</span>
                  </span>
                </a>
                <a className="flex items-center gap-space-md group" href={SITE.directionsUrl} {...EXT}>
                  <span className={ROW_ICON}>
                    <Icon name="pin_drop" className="text-headline-sm" />
                  </span>
                  <span>
                    <span className={ROW_LABEL}>Visit</span>
                    <span className={ROW_VALUE}>
                      {SITE.street}, {SITE.city}, {SITE.region} {SITE.zip}
                    </span>
                  </span>
                </a>
              </div>
              <div className="bg-secondary-dark text-surface-container-lowest p-space-lg rounded-xl shadow-md border-2 border-secondary flex flex-col gap-space-sm">
                <div className="flex items-center gap-space-sm">
                  <Icon name="groups" className="text-headline-md text-banner-gold" />
                  <h2 className="font-title-md text-title-md font-bold">Conference Room</h2>
                </div>
                <p className="font-body-md text-body-md text-surface-container-low">
                  Need a spot for a small meeting downtown? Ask about our conference room. Coffee and pastries can be ready when your group arrives.
                </p>
              </div>
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-md border border-outline-variant/50">
                <h2 className="font-title-md text-title-md font-bold text-espresso-dark mb-space-xs">Hours</h2>
                <HoursList />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
