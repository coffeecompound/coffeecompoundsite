import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CONTAINER, EXT, Html, Icon, JsonLd, PageHero, VisitBand } from "@/components/ui";
import { POSTS, PUBLISHED } from "@/content/posts";
import { pageMeta, type Crumb } from "@/lib/seo";
import { SITE } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const p = POSTS.find((x) => x.slug === slug);
  if (!p) return {};
  return pageMeta({
    path: `/blog/${p.slug}/`,
    title: `${p.metaTitle} | The Coffee Compound`,
    ogTitle: p.title,
    description: p.description,
    image: p.img,
    type: "article",
    publishedTime: p.published ?? PUBLISHED,
  });
}

const fmt = (iso: string) => new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const p = POSTS.find((x) => x.slug === slug);
  if (!p) notFound();
  const date = p.published ?? PUBLISHED;
  const crumbs: Crumb[] = [
    { path: "/", label: "Home" },
    { path: "/blog/", label: "Blog" },
    { path: `/blog/${p.slug}/`, label: p.title },
  ];
  const others = POSTS.filter((o) => o.slug !== p.slug);
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: p.title,
          description: p.description,
          image: `${SITE.url}${p.img}`,
          datePublished: date,
          dateModified: date,
          author: { "@type": "Organization", name: SITE.name, url: `${SITE.url}/` },
          publisher: { "@id": `${SITE.url}/#business` },
          mainEntityOfPage: `${SITE.url}/blog/${p.slug}/`,
          about: { "@type": "Place", name: "Downtown Ogden, Utah" },
        }}
      />
      <PageHero label="Local Guide" h1={p.title} crumbs={crumbs} ctas={false} />
      <section className="w-full bg-cream-bg pb-space-xl">
        <div className={CONTAINER}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-start">
            <article className="lg:col-span-8 bg-surface-container-lowest rounded-xl shadow-md border border-outline-variant/50 overflow-hidden">
              <Image alt="" className="w-full h-64 md:h-80 object-cover" src={p.img} width={800} height={320} priority />
              <div className="p-space-lg lg:p-space-xl">
                <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                  By The Coffee Compound • <time dateTime={date}>{fmt(date)}</time>
                </p>
                <Html as="div" className="prose-compound font-body-lg text-body-lg text-on-surface-variant leading-relaxed" html={p.body} />
              </div>
            </article>
            <aside className="lg:col-span-4 flex flex-col gap-space-md lg:sticky lg:top-24">
              <div className="bg-secondary-dark text-surface-container-lowest p-space-lg rounded-xl shadow-md border-2 border-secondary flex flex-col gap-space-sm">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-banner-gold font-bold">Grab a Cup First</span>
                <span className="font-headline-sm text-headline-sm font-bold">{SITE.street}, Ogden</span>
                <p className="font-body-sm text-body-sm text-surface-container-low">{SITE.hoursShort}. Drive-thru and dine-in.</p>
                <a
                  className="inline-flex items-center justify-center gap-2 px-space-md py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-md hover:bg-[#D32F23]"
                  href={SITE.directionsUrl}
                  {...EXT}
                >
                  <Icon name="explore" className="text-sm" />
                  Directions
                </a>
                <Link
                  className="inline-flex items-center justify-center gap-2 px-space-md py-2.5 rounded-lg border border-banner-gold/60 font-label-md text-label-md hover:bg-surface-container-lowest/10"
                  href="/menu/"
                >
                  <Icon name="menu_book" className="text-sm text-banner-gold" />
                  See the Menu
                </Link>
              </div>
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-md border border-outline-variant/50 flex flex-col gap-space-sm">
                <span className="font-title-md text-title-md font-bold text-espresso-dark">More Local Guides</span>
                {others.map((o) => (
                  <Link key={o.slug} className="flex items-start gap-space-sm py-2 border-t border-outline-variant/40 group" href={`/blog/${o.slug}/`}>
                    <Icon name={o.ic} className="text-primary mt-0.5" />
                    <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-primary">{o.title}</span>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
      <VisitBand />
    </>
  );
}
