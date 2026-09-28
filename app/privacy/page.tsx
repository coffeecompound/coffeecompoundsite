import SimplePage from "@/components/SimplePage";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMeta({
  path: "/privacy/",
  title: "Privacy Policy | The Coffee Compound",
  description: "How The Coffee Compound handles information you share through our website contact form.",
});

export default function Privacy() {
  return (
    <SimplePage label="Legal" h1="Privacy Policy" crumbs={[{ path: "/", label: "Home" }, { path: "/privacy/", label: "Privacy" }]}>
      <p className="!mt-0">This website is operated by {SITE.name}, {SITE.streetLong}, {SITE.city}, {SITE.region} {SITE.zip}.</p>
      <h2>Information we collect</h2>
      <p>When you use our contact form, we receive the name, email address, and message you choose to send. We use it only to reply to you. We don&apos;t sell or share it.</p>
      <h2>Third-party services</h2>
      <p>Our site is hosted on Cloudflare, loads fonts from Google Fonts, and embeds a Google Map on the visit page. These providers may collect standard technical data such as your IP address. Links to Google, Yelp, Facebook, and other sites are governed by their own policies.</p>
      <h2>Contact</h2>
      <p>Questions? Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or call {SITE.phone}.</p>
    </SimplePage>
  );
}
