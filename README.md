# Revplus Medical Solutions website

Public website for **Revplus Multisolutions**, with medical-service messaging under **Revplus Medical Solutions**. Built with Next.js 16 App Router, TypeScript and Tailwind CSS v4.

The site includes a redesigned homepage, eight service pages, specialty and payer education, a transparent scenario calculator, resources, a consultation form, responsive navigation, SEO metadata and JSON-LD.

## Quick start

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start local development |
| `npm test` | Run calculator, lead-validation and service-summary tests |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript without emitting files |
| `npm run build` | Build the Node-hosted application |
| `npm run build:pages` | Build the static GitHub Pages version into `out/` |

## Content and architecture

Public copy is centralized under `src/content`. Shared company information is in `src/content/site.ts`, service pages are under `src/content/services`, and typed block renderers are under `src/components/blocks`.

The official Revplus mark is stored at `public/brand/revplus-mark.png`. The design system in `src/app/globals.css` uses the navy, green and white palette from that mark.

## Consultation form

The browser form submits directly to Web3Forms through `src/lib/web3forms.ts`, which keeps the approved public form identifier, subject and payload mapping in one testable place. This works in the static GitHub Pages build without a server route. The form preserves entered values when delivery fails and always offers the confirmed phone number as a fallback.

The Web3Forms access key is designed to be public in frontend code; it is not an email credential or server secret. Do not add private API keys, email credentials or a business recipient address to the client bundle. The business email remains unconfirmed and is not shown publicly.

The legacy `POST /api/lead` route remains disabled and is not used by the current form. Consultation submissions must not include patient names, records or other protected health information.

## GitHub Pages

```bash
NEXT_PUBLIC_BASE_PATH=/health npm run build:pages
```

`scripts/build-pages.mjs` temporarily excludes the API route, creates the static export and adds `.nojekyll`. The workflow in `.github/workflows/deploy-pages.yml` runs tests and publishes `out/` after changes reach `main`.

## Domain transition

The repository does not contain a `CNAME` file. The current production domain is still `https://healthbilling.us`, while the intended public domain is `https://revplusmedsolutions.com`.

Until the new domain resolves and GitHub Pages accepts it, `site.url` intentionally remains `https://healthbilling.us` so canonical URLs, Open Graph URLs, sitemap entries and JSON-LD do not point to an unavailable host. The new domain is displayed as the intended company website through `site.displayDomain`.

When DNS and repository administration are ready:

1. In the repository’s **Settings → Pages**, set the custom domain to `revplusmedsolutions.com`.
2. At the DNS provider, add the apex records GitHub documents for Pages and add `www` as a CNAME to `codingghost06.github.io` if `www` will be used.
3. Wait for GitHub’s DNS check to pass, then enable **Enforce HTTPS**.
4. Verify both apex and `www` behavior in a browser.
5. Change `site.url` in `src/content/site.ts` to `https://revplusmedsolutions.com`, rebuild and confirm canonical URLs, sitemap, robots, Open Graph and JSON-LD.
6. Plan any redirect from the old domain only after the new site is healthy.

DNS values should be checked against the current official GitHub Pages documentation at cutover time.

## Content rules

- Do not add customer counts, performance percentages, testimonials, case studies, awards or certifications without evidence and approval.
- Have qualified counsel review the website privacy notice and website terms before the public launch; the included pages accurately describe the current implementation but are not a substitute for legal advice.
- “HIPAA-compliant” may be used for the confirmed workflows; do not describe HIPAA as a certification.
- Payer names are informational context and do not imply partnership or endorsement.
- Do not publish a business email until it is confirmed.
- Keep the calculator framed as a user-controlled scenario, never a forecast or guarantee.
