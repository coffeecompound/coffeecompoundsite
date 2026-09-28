import Link from "next/link";
import { IMG, SITE } from "@/lib/site";
import { EXT, Icon } from "./ui";

/** Purple top ticker from the design, shown on every page. */
export function Ticker() {
  return (
    <div className="w-full bg-secondary text-surface-container-lowest py-2.5 px-margin overflow-hidden shadow-sm border-b border-secondary-dark">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between gap-space-md font-label-md text-label-md">
        <div className="flex items-center gap-space-sm text-white">
          <Icon name="schedule" className="text-base text-banner-gold" />
          <span>
            {SITE.hoursShort}
            <span className="hidden sm:inline"> • Drive-Thru Open</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-space-md font-label-sm text-label-sm uppercase tracking-widest text-[#F5E7DF]">
          <a className="hover:text-white" href={SITE.mapsUrl} {...EXT}>
            {SITE.street}, {SITE.city}, {SITE.region}
          </a>
          <span className="text-banner-gold">•</span>
          <span className="text-banner-gold font-bold">&quot;{SITE.tagline}&quot;</span>
        </div>
      </div>
    </div>
  );
}

const SOC =
  "w-9 h-9 rounded-full bg-surface-container-lowest text-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-surface-container-high border-t border-outline-variant/60">
      <div className="max-w-[1240px] mx-auto px-margin lg:px-margin-lg py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter-lg pb-space-lg">
          <div className="flex flex-col gap-space-sm">
            <div className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" width={183} height={124} loading="lazy" className="h-10 w-auto object-contain" src={IMG.logo} />
              <span className="font-headline-sm text-headline-sm text-espresso-dark font-bold">The Coffee Compound</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              An independent, veteran- and woman-owned coffee shop with a drive-thru in downtown Ogden. Fair trade espresso, homemade hot
              chocolate, house-baked treats, and genuine community hospitality.
            </p>
            <ul className="flex flex-wrap gap-x-space-md gap-y-1 font-label-md text-label-md">
              {[
                ["/menu/", "Menu"],
                ["/drive-thru/", "Drive-Thru"],
                ["/visit/", "Visit"],
                ["/events/", "Events"],
                ["/blog/", "Local Guides"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link className="text-secondary hover:text-primary" href={href}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-space-xs">
            <span className="font-headline-sm text-headline-sm text-secondary font-bold mb-space-xs">Location &amp; Contact</span>
            <address className="not-italic font-body-sm text-body-sm text-on-surface-variant">
              <a className="hover:text-primary" href={SITE.mapsUrl} {...EXT}>
                {SITE.street}
                <br />
                {SITE.city}, {SITE.region} {SITE.zip}
              </a>
            </address>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
              <a className="hover:text-primary" href={SITE.phoneHref}>
                {SITE.phone}
              </a>
              <br />
              <a className="hover:text-primary break-all" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-space-xs">
            <span className="font-headline-sm text-headline-sm text-secondary font-bold mb-space-xs">Cafe Hours</span>
            {SITE.hours.map((h, i) => (
              <p key={h.label} className={`font-body-sm text-body-sm text-on-surface-variant${i ? " mt-space-xs" : ""}`}>
                {h.label}
                <br />
                <span className={`font-label-md text-label-md ${h.open ? "text-espresso-dark" : "text-primary"}`}>{h.text}</span>
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-space-sm">
            <span className="font-headline-sm text-headline-sm text-secondary font-bold">Gather With Us</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Follow along for daily specials, seasonal drinks, and downtown happenings.</p>
            <div className="flex items-center gap-space-sm text-on-surface-variant">
              <a aria-label="The Coffee Compound on Facebook" className={SOC} href={SITE.social.facebook} {...EXT}>
                <Icon name="share" className="text-body-md" />
              </a>
              <a aria-label="Review us on Google" className={SOC} href={SITE.reviewUrl} {...EXT}>
                <Icon name="star" className="text-body-md" />
              </a>
              <a aria-label="Email The Coffee Compound" className={SOC} href={`mailto:${SITE.email}`}>
                <Icon name="mail" className="text-body-md" />
              </a>
              <a aria-label="Call The Coffee Compound" className={SOC} href={SITE.phoneHref}>
                <Icon name="call" className="text-body-md" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-space-md border-t border-outline-variant/60 flex flex-col sm:flex-row items-center justify-between gap-space-sm">
          <span className="font-body-sm text-body-sm text-on-surface-variant">© {year} The Coffee Compound. All rights reserved. Ogden, Utah.</span>
          <div className="flex items-center gap-space-md">
            <Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="/privacy/">
              Privacy Policy
            </Link>
            <Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="/accessibility/">
              Accessibility
            </Link>
            <Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="/contact/">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
