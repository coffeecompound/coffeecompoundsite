# The Coffee Compound — website

Next.js 16 (App Router) site for The Coffee Compound, 2417 Grant Ave, Ogden, UT.
It builds to a fully static site (`output: "export"`) and deploys to **Cloudflare Pages**.
The contact form is handled by a Cloudflare Pages Function in `functions/api/contact.ts`.

## Commands

```bash
npm install
npm run dev        # local dev server at http://localhost:3000
npm run build      # static export to ./out (also checks the icon list)
npm run preview    # build, then serve ./out + the contact function with Wrangler at http://localhost:8788
npm run deploy     # build, then deploy ./out to Cloudflare Pages with Wrangler
```

## Deploying to Cloudflare Pages

**Option A: Git integration (recommended).** In the Cloudflare dashboard go to Workers & Pages → Create → Pages → Connect to Git, pick this repo, and set:

| Setting | Value |
| --- | --- |
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Environment variable | `NODE_VERSION` = `22` |

The `functions/` folder is picked up automatically.

**Option B: CLI.** `npx wrangler login`, then `npm run deploy`.

**Then:**

1. Add the custom domains `www.thecoffeecompound.com` and `thecoffeecompound.com` to the Pages project.
2. Add a Redirect Rule so `thecoffeecompound.com/*` goes 301 to `https://www.thecoffeecompound.com/$1` (the canonical host).
3. Set the contact-form secrets (Pages → Settings → Variables and Secrets):
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
- [ ] Replace `reviewUrl` in `lib/site.ts` with the Google Business Profile review short link.
- [ ] Add prices to `content/menu.ts` if the owners want them online.
- [ ] Set the contact-form secrets.
- [ ] Verify the site in Google Search Console and Bing Webmaster Tools, then submit `/sitemap.xml`.

See `SEO-PLAN.md` for the local ranking plan.
