import type { MetadataRoute } from "next";
import { MENU } from "@/content/menu";
import { POSTS, PUBLISHED } from "@/content/posts";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString().slice(0, 10);
  const page = (path: string, priority: number, lastModified = now) => ({ url: `${SITE.url}${path}`, lastModified, priority });
  return [
    page("/", 1),
    page("/menu/", 0.9),
    ...MENU.map((s) => page(`/menu/${s.slug}/`, 0.8)),
    page("/drive-thru/", 0.9),
    page("/visit/", 0.9),
    page("/about/", 0.7),
    page("/reviews/", 0.7),
    page("/events/", 0.6),
    page("/contact/", 0.6),
    page("/blog/", 0.6),
    ...POSTS.map((p) => page(`/blog/${p.slug}/`, 0.6, p.published ?? PUBLISHED)),
    page("/privacy/", 0.1),
    page("/accessibility/", 0.1),
  ];
}
