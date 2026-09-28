import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MenuGrid, MenuNote } from "@/components/MenuParts";
import { CONTAINER, FaqBlock, Icon, JsonLd, PageHero, VisitBand } from "@/components/ui";
import { MENU, menuSchema } from "@/content/menu";
import { pageMeta, type Crumb } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return MENU.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const s = MENU.find((m) => m.slug === slug);
  if (!s) return {};
  return pageMeta({ path: `/menu/${s.slug}/`, title: s.seo.title, description: s.seo.description, image: s.img });
}

export default async function MenuSectionPage({ params }: Props) {
  const { slug } = await params;
  const s = MENU.find((m) => m.slug === slug);
  if (!s) notFound();
  const crumbs: Crumb[] = [
    { path: "/", label: "Home" },
    { path: "/menu/", label: "Menu" },
    { path: `/menu/${s.slug}/`, label: s.short },
  ];
  const others = MENU.filter((o) => o.slug !== s.slug);
  return (
    <>
      <JsonLd data={menuSchema([s], `/menu/${s.slug}/`)} />
      <PageHero label="The Coffee Compound Menu" h1={s.seo.h1} tagline={s.seo.tagline} sub={s.intro} crumbs={crumbs} />
      <section className="w-full bg-surface-container py-space-xl border-y border-outline-variant/50">
        <div className={CONTAINER}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-start">
            <div className="lg:col-span-8">
              <MenuGrid items={s.items} />
              <MenuNote />
            </div>
            <aside className="lg:col-span-4 flex flex-col gap-space-md">
              <div className="relative rounded-xl overflow-hidden shadow-md border-2 border-secondary/20">
                <Image alt={`${s.name} at The Coffee Compound`} className="w-full h-64 object-cover" src={s.img} width={400} height={256} />
              </div>
              <div className="bg-secondary-dark text-surface-container-lowest p-space-md rounded-xl shadow-md border border-secondary flex flex-col gap-space-sm">
                <span className="font-title-md text-title-md font-bold text-banner-gold">Explore the Menu</span>
                {others.map((o) => (
                  <Link key={o.slug} className="flex items-center justify-between py-2 border-b border-secondary hover:text-banner-gold" href={`/menu/${o.slug}/`}>
                    {o.short}
                    <Icon name="arrow_forward" className="text-sm text-banner-gold" />
                  </Link>
                ))}
                <Link className="flex items-center justify-between py-2 hover:text-banner-gold" href="/drive-thru/">
                  Order at the Drive-Thru
                  <Icon name="directions_car" className="text-sm text-banner-gold" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <FaqBlock items={s.faqs} label="Menu Questions" />
      <VisitBand heading="Come Taste It on Grant Avenue" />
    </>
  );
}
