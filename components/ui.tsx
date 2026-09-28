import Link from "next/link";
import type { ReactNode } from "react";
import { SITE, IMG } from "@/lib/site";
import { breadcrumbSchema, faqSchema, type Crumb, type Faq } from "@/lib/seo";

export const CONTAINER = "max-w-[1240px] mx-auto px-margin lg:px-margin-lg";
export const EXT = { rel: "noopener noreferrer", target: "_blank" } as const;

export function Icon({ name, className = "", fill = false }: { name: string; className?: string; fill?: boolean }) {
  return (
    <span aria-hidden="true" className={`material-symbols-outlined ${fill ? "fill-1 " : ""}${className}`}>
      {name}
    </span>
  );
}

export function JsonLd({ data }: { data: object | object[] }) {
  const list = Array.isArray(data) ? data : [data];
  return (
    <>
      {list.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}
    </>
  );
}

/** Trusted, hard-coded copy that contains inline links. */
export function Html({ html, as: Tag = "span", className }: { html: string; as?: "span" | "p" | "div"; className?: string }) {
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

const PILL = {
  gold: "text-secondary bg-banner-gold/25 border border-banner-gold/50",
  red: "text-primary bg-primary/10 border border-primary/20",
};

export function Pill({ children, variant = "gold", mb = "mb-space-sm" }: { children: ReactNode; variant?: keyof typeof PILL; mb?: string }) {
  return (
    <span className={`font-label-sm text-label-sm uppercase tracking-widest ${PILL[variant]} px-space-md py-1 rounded-full shadow-sm ${mb} font-bold`}>
      {children}
    </span>
  );
}

export function SectionHeader({
  label,
  title,
  sub,
  variant = "red",
  color = "text-secondary",
  rule = true,
}: {
  label: ReactNode;
  title: ReactNode;
  sub?: ReactNode;
  variant?: keyof typeof PILL;
  color?: string;
  rule?: boolean;
}) {
  return (
    <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-space-lg">
      <Pill variant={variant} mb="mb-space-xs">
        {label}
      </Pill>
      <h2 className={`font-headline-lg text-headline-lg ${color} font-bold`}>{title}</h2>
      {rule && <div className="w-16 h-1 bg-banner-gold rounded-full mt-space-xs" />}
      {sub && <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">{sub}</p>}
    </div>
  );
}

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  if (crumbs.length < 2) return null;
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <nav aria-label="Breadcrumb" className="mb-space-md">
        <ol className="flex flex-wrap items-center justify-center gap-2 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
          {crumbs.map((c, i) =>
            i === crumbs.length - 1 ? (
              <li key={c.path} aria-current="page" className="text-espresso-dark">
                {c.label}
              </li>
            ) : (
              <li key={c.path} className="flex items-center gap-2">
                <Link className="hover:text-primary transition-colors" href={c.path}>
                  {c.label}
                </Link>
                <span aria-hidden="true" className="text-banner-gold">
                  •
                </span>
              </li>
            )
          )}
        </ol>
      </nav>
    </>
  );
}

type BtnProps = { href: string; children: ReactNode; icon?: string; external?: boolean; className?: string };

function A({ href, external, className, children }: { href: string; external?: boolean; className: string; children: ReactNode }) {
  const isPage = href.startsWith("/") && !external;
  return isPage ? (
    <Link className={className} href={href}>
      {children}
    </Link>
  ) : (
    <a className={className} href={href} {...(external ? EXT : {})}>
      {children}
    </a>
  );
}

export function PrimaryButton({ href, children, icon, external, className = "" }: BtnProps) {
  return (
    <A
      className={`inline-flex items-center gap-2 px-space-lg py-3 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg shadow-md hover:bg-[#D32F23] hover:shadow-lg transition-all duration-200 ${className}`}
      href={href}
      external={external}
    >
      {icon && <Icon name={icon} className="text-lg" />}
      {children}
    </A>
  );
}

export function SecondaryButton({ href, children, icon, external, className = "" }: BtnProps) {
  return (
    <A
      className={`inline-flex items-center gap-2 px-space-lg py-3 rounded-lg bg-surface-container-lowest text-secondary border border-secondary/30 font-label-lg text-label-lg shadow-sm hover:bg-secondary/5 hover:border-secondary transition-all duration-200 ${className}`}
      href={href}
      external={external}
    >
      {icon && <Icon name={icon} className="text-primary text-lg" />}
      {children}
    </A>
  );
}

export function PageHero({
  label,
  h1,
  tagline,
  sub,
  crumbs,
  ctas = true,
}: {
  label: ReactNode;
  h1: ReactNode;
  tagline?: ReactNode;
  sub?: ReactNode;
  crumbs: Crumb[];
  ctas?: boolean;
}) {
  return (
    <section className="w-full bg-cream-bg py-space-lg lg:py-space-xl">
      <div className={CONTAINER}>
        <Breadcrumbs crumbs={crumbs} />
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <Pill>{label}</Pill>
          <h1 className="font-display-lg text-[34px] leading-[42px] sm:text-display-lg text-espresso-dark font-bold tracking-tight">{h1}</h1>
          {tagline && <p className="font-headline-md text-headline-md text-primary italic mt-2">{tagline}</p>}
          {sub && <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-sm max-w-2xl">{sub}</p>}
          {ctas && (
            <div className="flex flex-wrap items-center justify-center gap-space-md mt-space-md">
              <PrimaryButton href={SITE.phoneHref} icon="call">
                Call Ahead
              </PrimaryButton>
              <SecondaryButton href={SITE.directionsUrl} icon="explore" external>
                Directions
              </SecondaryButton>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function HoursList({ dark = false }: { dark?: boolean }) {
  const txt = dark ? "text-surface-container-lowest" : "text-espresso-dark";
  const sub = dark ? "text-surface-container-low" : "text-on-surface-variant";
  const line = dark ? "border-secondary" : "border-outline-variant/40";
  const closed = dark ? "text-banner-gold" : "text-primary";
  return (
    <dl className="w-full">
      {SITE.hours.map((h, i) => (
        <div key={h.label} className={`flex justify-between items-center gap-space-md py-2 ${i < SITE.hours.length - 1 ? `border-b ${line}` : ""}`}>
          <dt className={`font-body-md text-body-md ${sub}`}>{h.label}</dt>
          <dd className={`font-label-lg text-label-lg text-right ${h.open ? txt : closed}`}>{h.text}</dd>
        </div>
      ))}
    </dl>
  );
}

export function FaqBlock({
  items,
  label = "Good To Know",
  title = "Frequently Asked Questions",
  bg = "bg-cream-bg",
}: {
  items: Faq[];
  label?: string;
  title?: string;
  bg?: string;
}) {
  return (
    <section className={`w-full ${bg} py-space-xl`}>
      <JsonLd data={faqSchema(items)} />
      <div className={CONTAINER}>
        <SectionHeader label={label} title={title} variant="gold" color="text-espresso-dark" />
        <div className="max-w-3xl mx-auto flex flex-col gap-space-sm">
          {items.map((f) => (
            <details
              key={f.q}
              className="group bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/50 open:shadow-md open:border-l-4 open:border-l-secondary"
            >
              <summary className="flex items-center justify-between gap-space-md cursor-pointer list-none p-space-md [&::-webkit-details-marker]:hidden">
                <h3 className="font-title-md text-title-md text-espresso-dark font-bold">{f.q}</h3>
                <Icon name="expand_more" className="text-secondary transition-transform group-open:rotate-180" />
              </summary>
              <Html
                as="p"
                className="px-space-md pb-space-md font-body-md text-body-md text-on-surface-variant leading-relaxed prose-compound"
                html={f.a}
              />
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Map-image tile from the design, linking to Google Maps. */
export function MapTile({ className = "h-56" }: { className?: string }) {
  return (
    <a
      className={`block w-full bg-cover bg-center rounded-xl shadow-md relative overflow-hidden border-2 border-secondary/20 ${className}`}
      aria-label="Open The Coffee Compound at 2417 Grant Ave, Ogden in Google Maps"
      href={SITE.mapsUrl}
      style={{ backgroundImage: `url('${IMG.map}')` }}
      {...EXT}
    >
      <span className="absolute bottom-3 left-3 bg-secondary-dark/90 backdrop-blur-sm text-surface-container-lowest px-3 py-1.5 rounded-lg flex items-center gap-2 font-label-sm text-label-sm border border-secondary">
        <Icon name="location_on" className="text-sm text-banner-gold" fill />
        {SITE.street} • {SITE.city}, {SITE.region}
      </span>
    </a>
  );
}

/** Closing band on inner pages: hours + address + map, in the homepage contact-section card language. */
export function VisitBand({ heading = "Come See Us on Grant Avenue", bg = "bg-surface-container" }: { heading?: string; bg?: string }) {
  return (
    <section className={`w-full ${bg} py-space-xl border-t border-outline-variant/50`}>
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-stretch">
          <div className="lg:col-span-7 bg-surface-container-lowest p-space-lg rounded-xl shadow-md border border-outline-variant/50 flex flex-col gap-space-sm">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">Drive-Thru &amp; Dine-In</span>
            <h2 className="font-headline-lg text-headline-lg text-secondary font-bold">{heading}</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              <strong className="text-espresso-dark">{SITE.name}</strong> • {SITE.streetLong}, {SITE.city}, {SITE.region} {SITE.zip} •{" "}
              <a className="text-primary font-bold hover:text-secondary" href={SITE.phoneHref}>
                {SITE.phone}
              </a>
            </p>
            <div className="mt-space-xs">
              <HoursList />
            </div>
            <div className="flex flex-wrap gap-space-md mt-space-sm">
              <PrimaryButton href={SITE.directionsUrl} icon="explore" external>
                Get Directions
              </PrimaryButton>
              <SecondaryButton href="/visit/" icon="local_parking">
                Parking &amp; Visit Info
              </SecondaryButton>
            </div>
          </div>
          <div className="lg:col-span-5 flex">
            <MapTile className="min-h-[240px] h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Content card with the design's colored top border. */
export function Card({
  title,
  body,
  icon,
  href,
  accent = "border-primary",
}: {
  title: string;
  body: ReactNode;
  icon?: string;
  href?: string;
  accent?: string;
}) {
  const cls = `group bg-surface-container-lowest p-space-lg rounded-xl shadow-md border-t-4 ${accent} flex flex-col gap-space-sm hover:shadow-lg transition-all duration-300`;
  const inner = (
    <>
      <div className="flex items-center gap-space-sm">
        {icon && (
          <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-secondary flex-shrink-0">
            <Icon name={icon} className="text-headline-sm" />
          </div>
        )}
        <h3 className="font-headline-sm text-headline-sm text-espresso-dark font-bold">{title}</h3>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{body}</p>
      {href && (
        <span className="mt-auto inline-flex items-center gap-1 text-primary font-label-md text-label-md font-bold group-hover:text-secondary">
          Read more
          <Icon name="arrow_forward" className="text-sm" />
        </span>
      )}
    </>
  );
  return href ? (
    <Link className={cls} href={href}>
      {inner}
    </Link>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

const STAR_ROW = (
  <div className="flex items-center gap-1 text-banner-gold mb-space-sm" role="img" aria-label="5 out of 5 stars">
    {[0, 1, 2, 3, 4].map((i) => (
      <Icon key={i} name="star" className="text-base" fill />
    ))}
  </div>
);

export type Review = { name: string; role: string; text: string; accent: string; avatar: string };

export function ReviewCard({ r }: { r: Review }) {
  return (
    <figure className={`bg-surface-container-lowest p-space-lg rounded-xl shadow-md border-t-4 ${r.accent} flex flex-col justify-between relative group hover:shadow-lg transition-all duration-300`}>
      <Icon name="format_quote" className="text-banner-gold/30 text-5xl absolute top-4 right-4 select-none" />
      <div>
        {STAR_ROW}
        <blockquote className="font-headline-sm text-headline-sm text-espresso-dark italic leading-relaxed">“{r.text}”</blockquote>
      </div>
      <figcaption className="mt-space-md pt-space-sm flex items-center gap-space-sm border-t border-outline-variant/40">
        <div aria-hidden="true" className={`w-10 h-10 rounded-full ${r.avatar} flex items-center justify-center font-bold font-headline-sm shadow-sm`}>
          {r.name[0]}
        </div>
        <div>
          <span className="font-title-md text-title-md font-bold text-espresso-dark block">- {r.name}</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">{r.role}</span>
        </div>
      </figcaption>
    </figure>
  );
}
