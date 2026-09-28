import type { ReactNode } from "react";
import { CONTAINER, PageHero } from "./ui";
import type { Crumb } from "@/lib/seo";

export default function SimplePage({ label, h1, crumbs, children }: { label: string; h1: string; crumbs: Crumb[]; children: ReactNode }) {
  return (
    <>
      <PageHero label={label} h1={h1} crumbs={crumbs} ctas={false} />
      <section className="w-full bg-cream-bg pb-space-xl">
        <div className={CONTAINER}>
          <div className="max-w-3xl mx-auto bg-surface-container-lowest p-space-lg lg:p-space-xl rounded-xl shadow-md border border-outline-variant/50 prose-compound font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
