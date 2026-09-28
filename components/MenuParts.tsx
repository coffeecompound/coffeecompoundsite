import { SITE } from "@/lib/site";
import type { MenuItem } from "@/content/menu";
import { Icon } from "./ui";

export function MenuGrid({ items }: { items: MenuItem[] }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
      {items.map((it) => (
        <li key={it.name} className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm border border-outline-variant/50 flex flex-col gap-1">
          <div className="flex items-start justify-between gap-space-sm">
            <h3 className="font-title-md text-title-md font-bold text-espresso-dark">{it.name}</h3>
            <span className="flex-shrink-0 font-label-sm text-label-sm uppercase tracking-widest text-secondary bg-banner-gold/25 border border-banner-gold/50 px-2 py-0.5 rounded-full">
              {it.price ?? it.tag}
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">{it.desc}</p>
        </li>
      ))}
    </ul>
  );
}

export function MenuNote() {
  return (
    <p className="text-center font-body-sm text-body-sm text-on-surface-variant mt-space-md">
      <Icon name="info" className="text-sm text-secondary align-middle mr-1" />
      Prices and seasonal specials are posted on our chalkboard in store. Call{" "}
      <a className="text-primary font-bold" href={SITE.phoneHref}>
        {SITE.phone}
      </a>{" "}
      to check today&apos;s bakes.
    </p>
  );
}
