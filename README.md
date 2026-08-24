# Health Billing — website

Production rebuild of [healthbilling.us](https://healthbilling.us) in **Next.js 16 (App Router) · TypeScript · Tailwind CSS v4**.

- 17 real, statically generated routes (the original was a single URL with JS-toggled sections)
- Fully working revenue calculator (same formula as the original, with validation, reset and a mobile summary bar)
- Free-audit lead form → email via **Resend** through a Next.js Route Handler (no separate backend, no secrets in the browser)
- SEO built in: per-page metadata, canonical URLs, Open Graph image, sitemap, robots, JSON-LD (Organization, WebSite, Service, BreadcrumbList, FAQPage)
- Zero images to optimise: the logo and every icon are inline SVG (Lucide); fonts are self-hosted through `next/font`

## Quick start

```bash
npm install
cp .env.example .env.local   # then fill in RESEND_API_KEY etc.
npm run dev                  # http://localhost:3000
```

| Script              | What it does                                              |
| ------------------- | --------------------------------------------------------- |
| `npm run dev`       | Development server                                        |
| `npm run build`     | Production build (also type-checks)                       |
| `npm start`         | Serve the production build                                |
| `npm run lint`      | ESLint (Next core-web-vitals + TypeScript rules)          |
| `npm run typecheck` | `tsc --noEmit`                                            |
| `npm test`          | Unit tests (calculator formula, lead validation, nav sync) — Node's built-in runner, no extra deps |

## Environment variables

Copy `.env.example` to `.env.local`. All variables are **server-side only** (never prefixed with `NEXT_PUBLIC_`).

| Variable          | Required in prod | Purpose                                                                 |
| ----------------- | ---------------- | ----------------------------------------------------------------------- |
| `RESEND_API_KEY`  | yes              | Resend API key used by `POST /api/lead`                                 |
| `LEAD_TO_EMAIL`   | no               | Inbox that receives leads (default `hello@healthbilling.us`)            |
| `LEAD_FROM_EMAIL` | yes              | Verified sender, e.g. `Health Billing <leads@healthbilling.us>`. The domain must be verified in Resend. |

Behaviour without a key: in development the lead is logged to the server console and the form shows success; in production the API returns 503 and the form shows an error with phone/email fallbacks.

## Project structure

```
src/
  app/                    Routes (App Router). One folder per URL + sitemap/robots/icons/OG image.
    api/lead/route.ts     Lead endpoint: origin check, size cap, rate limit, validation, honeypot, Resend
  components/
    ui/                   Primitives: Button, Card, Section, SectionHeading, Eyebrow, Stat, CheckList, Logo, Icon
    layout/               Header (mega-menu + mobile drawer) and Footer
    blocks/               Renderers for the content "blocks" used by every inner page
    sections/             Home-page sections
    calculator/           Revenue calculator (client component)
    forms/                Lead form (client component)
    seo/                  JSON-LD helper
  content/                ALL site copy as typed data — edit text here, not in components
    types.ts              Content model (InnerPage, Block union, HomeContent, …)
    site.ts               Brand, contact details, route map
    nav.ts                Header/footer navigation (imports only the light service summaries)
    services/             One file per service page + summary.ts (nav-safe list) + index.ts
    home.ts, specialties.ts, payers.ts, departments.ts, payer-collections.ts,
    resources.ts, calculator.ts, free-audit.ts, services-hub.ts
  lib/
    calculator.ts         Pure calculator formula, limits, formatting (unit-tested)
    lead.ts               Lead model + validation shared by client and server (unit-tested)
    email.ts              Resend integration + email templates (server-only)
    rate-limit.ts         In-memory sliding-window limiter
    seo.ts                Metadata + JSON-LD builders
docs/reference-audit.md   Full audit of the original site (sections, formula, form, findings)
reference/                Raw HTML/CSS/JS + screenshots of the original, for comparison
```

### How pages are built

Every inner page is an `InnerPage` object: a hero, a list of **blocks** (`intro`, `cards`, `steps`, `tiles`, `chips`, `faq`, `band`) and a closing CTA. `components/blocks/render-blocks.tsx` maps each block to a renderer and alternates section backgrounds automatically. Adding a section to a page is a data change; adding a new *kind* of section means adding one renderer.

Only three components ship JavaScript to the browser: the header, the calculator and the lead form. Everything else is a Server Component. The FAQ accordion uses native `<details name>` (exclusive, keyboard-accessible, zero JS) and metric bars animate with CSS scroll-driven animations.

## Design tokens

Defined once in `src/app/globals.css` under `@theme` (Tailwind v4): brand blues, navy, teal accent, gold, neutrals, radii, tinted shadows, motion easing and keyframes. Fonts: **Cormorant Garamond** (display, 600/700) and **Outfit** (UI/body) via `next/font` with `display: swap`.

## Client preview on GitHub Pages

GitHub Pages only serves static files, so a second build flavour exists for previews:

```bash
NEXT_PUBLIC_BASE_PATH=/health npm run build:pages   # → ./out
```

`scripts/build-pages.mjs` sets `DEPLOY_TARGET=github-pages` (static `output: "export"`, base path, trailing slashes), temporarily excludes the `/api/lead` route (Pages can't run it), and writes `.nojekyll`. In this flavour the lead form validates and then shows a "preview build — nothing was sent" notice, and every page carries `noindex` so the preview never competes with healthbilling.us in search. `.github/workflows/deploy-pages.yml` runs this on every push to `main` and publishes to `https://<owner>.github.io/<repo>/`.

## Deployment (production)

Any Node host works (Vercel, Netlify, Fly, Docker). Set the env variables above, then `npm run build && npm start`. The rate limiter is per-instance; on multi-instance serverless deployments treat it as best-effort and add Upstash/Redis if a global cap is needed.

Analytics are intentionally not wired. To add GA4 later, set `NEXT_PUBLIC_GA_MEASUREMENT_ID` and render `next/script` tags in `src/app/layout.tsx`.
