import Image from "next/image";
import Link from "next/link";
import { CONTAINER, Icon, PageHero, VisitBand } from "@/components/ui";
import { POSTS } from "@/content/posts";
import { pageMeta, type Crumb } from "@/lib/seo";

const crumbs: Crumb[] = [
  { path: "/", label: "Home" },
  { path: "/blog/", label: "Blog" },
];

export const metadata = pageMeta({
  path: "/blog/",
  title: "Downtown Ogden Local Guides | The Coffee Compound Blog",
  description:
    "Local guides from The Coffee Compound: coffee near Historic 25th Street, the best places to work remotely in downtown Ogden, and things to do in Ogden in the morning.",
});

export default function BlogIndex() {
  return (
    <>
      <PageHero label="Local Guides" h1="The Compound Blog" tagline="Our favorite ways to enjoy downtown Ogden" crumbs={crumbs} ctas={false} />
      <section className="w-full bg-surface-container py-space-xl border-y border-outline-variant/50">
        <div className={CONTAINER}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter-lg">
            {POSTS.map((p, i) => (
              <Link
                key={p.slug}
                className={`group bg-surface-container-lowest rounded-xl shadow-md overflow-hidden border-t-4 ${i % 2 ? "border-secondary" : "border-primary"} flex flex-col hover:shadow-lg transition-all duration-300`}
                href={`/blog/${p.slug}/`}
              >
                <div className="overflow-hidden">
                  <Image alt="" className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105" src={p.img} width={400} height={208} />
                </div>
                <div className="p-space-lg flex flex-col gap-space-sm flex-1">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Local Guide</span>
                  <h2 className="font-headline-sm text-headline-sm text-espresso-dark font-bold group-hover:text-primary">{p.title}</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">{p.excerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-1 text-primary font-label-md text-label-md font-bold">
                    Read the guide
                    <Icon name="arrow_forward" className="text-sm" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <VisitBand bg="bg-cream-bg" />
    </>
  );
}
