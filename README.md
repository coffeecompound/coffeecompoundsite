# The Coffee Compound — website

Next.js 16 (App Router) site for The Coffee Compound, 2417 Grant Ave, Ogden, UT.
It builds to a fully static site (`output: "export"`) and deploys as a **Cloudflare Worker with static assets**.
The Worker in `worker/index.ts` serves the pages from `./out` and handles the contact form at `/api/contact`.

## Commands

```bash
npm install
npm run dev        # local dev server at http://localhost:3000
npm run build      # static export to ./out (also checks the icon list)
npm run preview    # build, then run the Worker locally with Wrangler at http://localhost:8787
npm run deploy     # build, then deploy to Cloudflare with Wrangler
```

## Deploying to Cloudflare

**Git integration (recommended).** In the Cloudflare dashboard go to Workers & Pages → Create → Import a repository, pick this repo, and set:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Non-production branch deploy command | `npx wrangler versions upload` |

The Worker name in `wrangler.toml` is `coffeecompoundsite`. Keep it matching the project name in the dashboard.

**CLI.** `npx wrangler login`, then `npm run deploy`.

**Then:**

1. Add the custom domains `www.thecoffeecompound.com` and `thecoffeecompound.com` to the Worker (Settings → Domains & Routes).
2. Add a Redirect Rule so `thecoffeecompound.com/*` goes 301 to `https://www.thecoffeecompound.com/$1` (the canonical host).
3. Set the contact-form secrets (Worker → Settings → Variables and Secrets, or `npx wrangler secret put NAME`):
   - `RESEND_API_KEY` — from [resend.com](https://resend.com) (free tier is plenty)
   - `CONTACT_TO_EMAIL` — e.g. `coffee@thecoffeecompound.com`
   - `CONTACT_FROM_EMAIL` (optional) — a sender on a domain verified in Resend

   Until these are set, the form shows its error banner with the phone number and email.

## Where to edit things

| What | File |
| --- | --- |
| Hours, phone, address, links, review URL | `lib/site.ts` |
| Menu items, menu FAQs, menu page SEO | `content/menu.ts` |
| Testimonials | `content/reviews.ts` |
| Blog posts | `content/posts.ts` |
| Colors, fonts, spacing (design tokens) | `tailwind.config.js` |
| Shared pieces (hero, cards, FAQ, hours) | `components/ui.tsx` |
| Header, ticker, footer | `components/Header.tsx`, `components/Chrome.tsx` |

Using a new Material Symbols icon? Add its name to `lib/icons.ts`. The font is subset to that list, and the build fails if one is missing.

## Before launch checklist

- [ ] Confirm hours with the owners. Public listings disagree (see `lib/site.ts`).
- [ ] Replace the placeholder photos in `public/assets/img/` with real photos of the shop, drinks, and owners. Keep the same file names.
- [ ] Claim the Google Business Profile (it's currently unclaimed), then put its review short link in `reviewUrl` in `lib/site.ts`.
- [ ] Add prices to `content/menu.ts` if the owners want them online.
- [ ] Set the contact-form secrets.
- [ ] Verify the site in Google Search Console and Bing Webmaster Tools, then submit `/sitemap.xml`.

See `SEO-PLAN.md` for the local ranking plan.
