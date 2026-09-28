import SimplePage from "@/components/SimplePage";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMeta({
  path: "/accessibility/",
  title: "Accessibility | The Coffee Compound",
  description: "The Coffee Compound's commitment to an accessible website and how to reach us if something isn't working for you.",
});

export default function Accessibility() {
  return (
    <SimplePage label="Our Commitment" h1="Accessibility" crumbs={[{ path: "/", label: "Home" }, { path: "/accessibility/", label: "Accessibility" }]}>
      <p className="!mt-0">We want everyone to be able to find our hours, menu, and location easily. This site is built with semantic HTML, keyboard-accessible navigation, descriptive image text, and color contrast in mind, aiming for WCAG 2.1 AA.</p>
      <p>If something on the site doesn&apos;t work for you, please tell us. Call {SITE.phone} or email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> and we&apos;ll help right away, including reading the menu over the phone.</p>
    </SimplePage>
  );
}
