# healthbilling.us — Reference Site Audit

Audited 2026-08-24 with headless Chrome (Playwright) at 360 / 390 / 820 / 1280 / 1440 / 1920 px, plus Lighthouse.
Raw material lives in `reference/` (full HTML/CSS/JS of the live page, a text outline of every page, and full-page screenshots).

---

## 1. How the site is actually built (important)

- Hosted on **Lovable**. The document served at `/` is a tiny React/Vite + TanStack Router **shell**. Its only route (`/`) does `fetch('/site.html')` and then `document.write()`s the result over the whole document.
- **`/site.html` is the real website**: one 179 KB static HTML file with one inline `<style>` (28 KB) and one inline `<script>` (5 KB). No images, no SVGs — every "icon" is an emoji, the logo is CSS-drawn (rounded blue square, white `+`, green dot), payer logos are text pills.
- **17 "pages" are `<div class="pg">` blocks in one DOM.** `go(id)` toggles `.on`, scrolls to top and closes the mobile menu. **The URL never changes**, no history entries are pushed → browser Back leaves the site, nothing is deep-linkable, and Google sees one URL.
- Sitemap has 1 URL. `robots.txt` allows all. **Favicon 404s.** `og:image` is a Lovable auto-screenshot on an R2 bucket.
- SEO head: the shell's SSR head has good OG/Twitter/canonical + 3 JSON-LD blocks (Organization, WebSite, Service) but **`document.write` wipes it** — the live DOM only has title/description/keywords.
- Lead form posts to **Web3Forms**, but `access_key` is still `YOUR_WEB3FORMS_ACCESS_KEY` → **the live form is non-functional** (shows "Form not configured yet…" and never sends).
- External requests: Google Fonts (Cormorant Garamond 400–700, Outfit 300–700), Lovable analytics (`/~flock.js`), Lovable badge font. Total transfer ≈171 KB, load event ≈3.1 s (network-bound by the double fetch).

## 2. Design system (as-is)

| Token | Value |
|---|---|
| Blue | `#1565C0` (primary), mid `#1e88e5`, light `#e3f0fc`, pale `#f0f7ff` |
| Green | `#00897b`, light `#e0f2f0` |
| Navy | `#0d2d4e` · Ink `#1a2733` · Muted `#5f7383` · Border `#dde6ef` · Surface `#f8fbff` |
| Gold | `#d4af37` / `#f5e6a8` (hero badge, "Paid" gradient word) |
| Gradients | hero `135deg #0d2d4e→#143a66→#1565C0`; CTA `#1565C0→#1e88e5→#00897b`; gold |
| Radii | 14 px, 22 px (large) |
| Shadows | `0 2px 16px rgba(21,101,192,.07)`, md `0 8px 40px …11`, glow `0 10px 40px rgba(30,136,229,.35)` |
| Type | Headings: Cormorant Garamond (h1 60/70 w700, h2 40/47 w600). Body: Outfit 17/1.75. Nav 13.5 px. Buttons 15 px w700 |
| Layout | `.wrap` max 1100 px, sections `80px 6%`, breakpoints 900 px and 600 px only |
| Motion | `fadeUp` on hero, `heroPulse` radial glow, card hover lift (-5px) + bottom accent bar, metric bars animate width on load, FAQ max-height accordion, button shine sweep |
| Header | fixed 68 px, `rgba(255,255,255,.96)` + `backdrop-filter: blur(14px)` |

Design weaknesses to fix in the rebuild: emoji icons (inconsistent across OSes, look cheap), CSS-only logo, Cormorant at small sizes (hero stats "98.2%" look thin), 17 px body at 1.75 lh is airy but fine, gold/teal/blue three-way palette is a bit busy, sub-page hero uses a large white-text `h2` (no `h1`), FAQ answers dense, sub-page "footer" is a one-line bar (inconsistent with the full home footer), three-up card grids collapse leaving orphan cards (e.g. 4th OB/GYN card alone, "+400 More Payers" alone), mobile menu is a centered-text list that overlays the hero with no scrim, no scroll lock, and no way to reach dropdown items.

## 3. Navigation

**Header (desktop):** Logo · Home · Services ▾ · Specialties ▾ · Calculator · Resources ▾ · **Free Audit** (button)

- **Services mega-menu (3 cols, 12 items + footer):** Medical Billing · Medical Coding · Revenue Cycle Mgmt · Credentialing · Denial Management · AR Recovery · Transcription · Claims Submission · Payer Collections · Departments · Insurance Payers · All Services — footer "Not sure what you need? Get a free audit →". Each item = emoji + title + one-line sub.
- **Specialties menu (3 cols, 15 items):** Cardiology, Orthopedics, Neurology, Oncology, Primary Care, Urgent Care, Behavioral Health, Radiology, Pathology & Labs, OB/GYN, Pediatrics, Emergency Medicine, Anesthesiology, Pain Management, Nephrology — footer "40+ specialties supported · View all specialties →". **All 15 items point to the same Specialties page** (no per-specialty pages, no anchors).
- **Resources menu (1 col, 5 items):** Blog, Case Studies, Guides & Whitepapers, FAQ, Newsletter — **all go to the same Resources page**; FAQ actually lives on the Medical Billing page, and there is no Newsletter section anywhere.
- Dropdowns open on `:hover` / `:focus-within` only.
- **Mobile (≤900 px):** hamburger toggles a fixed white panel under the header with the 6 top-level items only (dropdown contents unreachable). Tapping "Services" navigates to the Services page. No scrim, no body scroll-lock, no close-on-escape.
- **Footer (home only, full):** brand blurb + phone/email/address; columns Services (8), Specialties (8), Payers (8 incl. "Free Audit"); bottom bar "© 2025 Health Billing LLC…" + badges HIPAA / SOC 2 / HFMA / AAPC. **Sub-pages get a one-line footer** "© 2025 Health Billing | phone | ← Home".

## 4. Page inventory (17 virtual pages) and every section

### `home`
1. **Hero** — badge "🏆 America's #1 Medical Billing Partner"; H1 "Stop Losing Revenue. Start Getting *Paid* What You Deserve." (visually-hidden SEO prefix "Health Billing — Medical Billing & Revenue Cycle Management."); lead paragraph; CTAs "Get a Free Revenue Audit" (white) + "Explore Services" (ghost); right-hand 2×2 glass stat card: 98.2% first-pass claim rate · $2.4B+ revenue recovered yearly · 4,800+ providers served · <24hr claim submission SLA.
2. **Payer ticker strip** (dark) — "WE BILL:" Medicare, Medicaid, BCBS, Aetna, UnitedHealthcare, Cigna, Humana, Molina, Centene, Anthem, TRICARE, "+490 more →" (static chips, not a marquee).
3. **Our Services** — 9 cards (emoji, h3, blurb, "Learn more →"): Medical Billing, Medical Coding, RCM, Provider Credentialing, Denial Management, AR Recovery, Medical Transcription, Claims Management, Payment Posting & Reconciliation (→ contact).
4. **Why Health Billing** — H2 "We Don't Just File Claims. We Fight for Every Dollar." + 4 check-bullets; right: 4 animated metric bars (Clean Claim Rate 98.2% vs 82%; Denial Resolution 93.4% vs 63%; Days in AR 18 vs 38; Revenue Increase +34% within 90 days).
5. **Who We Serve** — 19 specialty tiles + "+ More / 40+ Specialties" tile; button "View All Specialties →".
6. **Our Process** — H2 "Up and Running in 5 Business Days"; 4 numbered steps on a connector line.
7. **Client Results** — H2 "4,800+ Providers Trust Health Billing"; 6 five-star testimonial cards (names, titles, cities).
8. **CTA band** — "Ready to Recover Revenue You're Currently Losing?" + "Book Your Free Revenue Audit →".
9. **Full footer.**

### `services` (hub)
Hero (breadcrumb "← Home", H2, lead) · grid of 9 cards (8 services + **Compliance & Audit Support → Contact**) · CTA band "Not Sure Where to Start?" · mini footer.

### Service detail pages — shared template
Hero: breadcrumb "← Home / Services", H2 (2-line), lead, **4 hero stats**. Then a "What we do" split (eyebrow, H2, paragraph, ✓ list) + right column of timeline/feature items; optional secondary sections; CTA band; mini footer.

| Page | Hero stats | Extra sections |
|---|---|---|
| `billing` Medical Billing | 98.2% · <24hr · 18 days · 40+ | 9 ✓ bullets + 6-step timeline; "The Health Billing Advantage" 6 feature cards; **FAQ (16 Q&As)** in a tinted panel + "Talk to a Specialist" button; CTA "See How Much Revenue You're Missing" |
| `rcm` | +34% · 52% · 40% · 18 days | Front/Mid/Back-end RCM 3 cards; 7-step "Full-Cycle RCM Process"; 4 benefit cards |
| `coding` | 99.1% · 40+ · CPC/CCS · 72hr | 10 ✓ bullets + 3 feature blocks; "Specialties We Code" 12 tiles |
| `credentialing` | 28 days · 500+ · 99% · All 50 | 11 ✓ bullets; "Payers We Credential With" chips; 5-step process; 4 feature cards |
| `denials` | 93.4% · 72hr · 52% · $380K | 9 ✓ bullets; 3 feature blocks ("Top 7 Denial Reasons", "Prevention", "Government Payer Appeals") |
| `ar` | 18 days · 87% · 100% | 8 ✓ bullets; 4 feature blocks |
| `transcription` | 99.5%+ · 4hr STAT · 100+ · HIPAA | 9 ✓ bullets; 3 feature blocks |
| `claims` | 98.2% · 24hr · 3,000+ · 100% | 9 ✓ bullets; 3 feature blocks |

### `payers` — Insurance Payers
Hero (500+ · 50 · 100% · 28 days) · Government Payers: Medicare / Medicaid / Other Government 3 cards with ✓ lists · Major Commercial Insurers: 10 cards with monogram badges (BCBS, Aetna, UHC, Cigna, Humana, Centene, Anthem/Elevance, Molina, Kaiser, +400 More) · Specialty Insurance Programs: 6 items (Auto/No-Fault, Workers' Comp, TRICARE/Veterans, Employer Self-Funded, Self-Pay, International) · "Not Yet Credentialed?" band with two CTAs (→ credentialing, → contact) · CTA band · mini footer.

### `specialties`
Hero (40+ · 4,800+ · Dedicated · All 50) · **Primary & Preventive Care** (4 cards with bullet lists) · **Surgical & Procedural** (6 cards, tinted panel) · **Medical Specialties** (9 cards, left-accent) · **Behavioral Health** (4 cards) · **Diagnostic & Post-Acute** (9 cards) · **"Every Specialty. Without Exception."** 40 tiles · CTA band · mini footer. Tallest page (13.3k px on mobile).

### `departments`
Hero (40+ · 24hr · 500+ · All 50) · 12 department cards (blurb + 3 ✓) · "What We Customize" 3 blocks · CTA band · mini footer (with email).

### `insuranceCollections` — Payer Collections
Hero (4 "stats" that are actually labels: Cigna / Medicare / Medicaid / AR) · 3 payer-family cards with 6 bullets each · "How We Increase Collections" 5 numbered steps · CTA band · mini footer.

### `calculator`
Hero (H2 "Medical Billing Collections Calculator" + disclaimer lead) · eyebrow "Live Revenue Estimate", H2 "See the Collection Opportunity Before You Switch" · 2-col: input panel + **sticky** result panel · mini footer. Full spec in §5.

### `resources`
Hero · Blog: 6 article cards (category label, h3, excerpt — **not clickable, no articles exist**) · Case Studies: 6 cards with result line · Guides & Whitepapers: 6 cards (**no download links/files exist**) · CTA band "Want a Personalized Resource Pack?" · mini footer.

### `contact` — Free Revenue Audit
Hero · 2-col: **lead form** (spec §6) · right column: "Get in Touch Directly" (phone, email, address, office hours Mon–Fri 8–8 ET, Sat 9–2 ET) + "What Happens After You Submit?" 5 bullets + trust card "America's Most Trusted Medical Billing Partner…" · mini footer "← Back to Home".

## 5. Calculator — exact spec

Inputs (all trigger `updateCalc()` on `input`/`change`):

| id | Control | Default | Min | Max | Step | Label / helper |
|---|---|---|---|---|---|---|
| `calcVisits` | range | 600 | 50 | 6000 | 50 | Monthly patient visits (live value shown in label) · "Total completed visits or billable encounters per month." |
| `calcAllowed` | number | 185 | 20 | — | 5 | Average allowed amount per visit |
| `calcCurrentNcr` | number | 78 | 40 | 99 | 1 | Current net collection rate · "Typical range is 70 to 95 percent…" |
| `calcImprovedNcr` | number | 92 | 50 | 99 | 1 | Expected improved net collection rate |
| `calcAr` | number | 45000 | 0 | — | 1000 | Current monthly AR over 60 days |
| `calcArRecovery` | number | 22 | 0 | 80 | 1 | Estimated AR recovery percentage |
| `calcSpecialty` | select | 1.00 | | | | Specialty adjustment · helper "Higher-complexity specialties often have more room…" |

Specialty multipliers: Primary Care/IM 1.00 · Urgent Care 1.08 · Cardiology 1.12 · Nephrology 1.15 · OB/GYN 1.10 · Pediatrics 1.06 · Orthopedics/Pain 1.14 · Behavioral Health 1.09 · Surgery/ASC 1.18 · Labs/Imaging 1.05.

Formula (verbatim from the site):
```
gross     = visits × allowed
current   = gross × currentNcr/100
projected = gross × improvedNcr/100 × specialty
arGain    = ar × arRecovery/100
monthly   = max(0, (projected − current) + arGain)
yearly    = monthly × 12
gap       = max(0, improvedNcr − currentNcr)  // shown as "N%"
```
Outputs: `calcMonthly` (big serif, "Potential additional collections per month"), `calcYearly` (green), and 4 metric tiles: Current monthly collections, Projected monthly collections, AR recovery estimate, Improvement gap. Money formatted `$` + `Math.round(n).toLocaleString('en-US')`. Defaults render **$25,440 / mo, $305,280 / yr, $86,580, $102,120, $9,900, 14%**. Below: disclaimer paragraph + "Request a Free Revenue Audit" button. No reset button.

Verified edge-case bugs in the original: HTML `min/max` are not enforced by the JS — negative allowed amount yields "$-39,000"; NCR above 100 accepted; empty/`abc` input treated as 0; `1e9` AR produces "$2,640,216,000" with no cap; improved < current silently clamps to $0 with no message.

## 6. Lead form — exact spec

Fields (all in one `<form id="leadForm">`, Web3Forms JSON POST):

| name | type | required | placeholder / options |
|---|---|---|---|
| practice | text | ✓ | e.g. Atlanta Cardiology Group |
| first_name / last_name | text | ✓ | First name / Last name (2-col) |
| email | email | ✓ | your@email.com |
| phone | tel | ✓ | +1 (555) 000-0000 |
| specialty | select | ✓ | Select specialty… + 17 options (Primary Care/IM, Cardiology, Orthopedics, Nephrology, Oncology/Hematology, Behavioral Health/Psychiatry, Neurology/Neurosurgery, Radiology, Pathology/Laboratory, Ophthalmology, OB/GYN, Pediatrics, Urgent Care, Emergency Medicine, Hospital/Health System, PT/OT, Other) |
| service | select | ✓ | Select service… + 8 options (Medical Billing (Full Service), RCM, Medical Coding, Provider Credentialing, Denial Management, AR Recovery, Medical Transcription, Full Outsourcing / All Services) |
| message | textarea | – | e.g. High denial rates, aging AR… |
| hidden | access_key (placeholder!), subject "New Lead — Health Billing Revenue Audit Request", from_name "HealthBilling.us Website", botcheck honeypot checkbox |

States: button "Sending…" + disabled; status line grey "Submitting your request…", green "✓ Thank you! A revenue cycle specialist will reach out within 4 business hours." + `form.reset()`, red on API error / network error (with phone + email fallback). Validation = native HTML5 only. Footnote "HIPAA-secure. No commitment required. Response within 4 business hours."

## 7. Responsive findings

- **No horizontal overflow** at any of the 6 widths tested. Good.
- Breakpoints: 900 px (nav → hamburger, calc → 1 col, grids → 2 col) and 600 px (1 col). Between 901–1100 px the desktop nav is cramped but works.
- Mobile hero: stat card stacks under CTAs; payer chips wrap. Home page is 11.7k px tall on a 390 px phone; Specialties 13.3k px.
- Mobile menu issues listed in §3. Touch targets in the mobile menu are OK (44 px+). FAQ rows are `<div onclick>` (not buttons; no `aria-expanded`, not keyboard-operable).
- Calculator result panel is `position: sticky; top: 92px` on desktop, static on mobile (results are *below* inputs, so on a phone you can't see the number change while dragging the slider).

## 8. Accessibility findings (Lighthouse a11y 86 desktop / 93 mobile)

- 64 `<a>` without `href` (all `onclick` navigation) → not keyboard-focusable, not crawlable.
- No `<main>`, no `<header>`, 17 `<footer>`s, 1 `<nav>`; no skip link; **zero `<label for>`** associations (labels wrap nothing / inputs have no ids); no visible `:focus-visible` styles; FAQ accordion has no button semantics; colour-contrast failures (muted text on pale, light-blue on white, sub-page hero lead at 72 % white); heading-order violations (sub-pages start at h2, h5 in footer, h4 under h2).
- Single `<h1>` only on home (prefixed with the brand for SEO).

## 9. Performance baseline (Lighthouse, live site)

| | Mobile | Desktop |
|---|---|---|
| Performance / A11y / Best-practices / SEO | 97 / 93 / 96 / 91 | 84 / 86 / 96 / 91 |
| FCP / LCP / TBT / CLS | 1.0 s / 2.5 s / 20 ms / 0.004 | 0.5 s / 1.6 s / 0 ms / **0.134** |

Failing audits: LCP, CLS (desktop — fonts swap + hero fade-in), console error, colour contrast, heading order, crawlable anchors, network dependency chain (shell → JS → site.html → fonts).

## 10. Content facts (single source of truth for copy)

- Brand: **Health Billing** / tagline "America's Revenue Experts" / legal "Health Billing LLC" / © 2025.
- Phone **+1 (415) 939-6721** (`tel:+14159396721`), email **hello@healthbilling.us**, address **97 Newkirk Street, Jersey City, NJ 07306**, hours Mon–Fri 8:00 AM–8:00 PM ET, Sat 9:00 AM–2:00 PM ET.
- Headline stats reused everywhere: 98.2% first-pass, 93.4% denial resolution, 18 AR days, +34% revenue, 4,800+ providers, $2.4B+ recovered, 500+ payers, 40+ specialties, 28-day credentialing, 3,000+ claim edits, 87% AR recovery on 90+ days, 99.5% transcription accuracy, 99.1% coding accuracy.
- Meta title: "Health Billing | America's Premier Medical Billing & Revenue Cycle Management". Meta description and JSON-LD text are in `reference/healthbilling-site.html` and `index.html` head (see §1).
- Small inconsistencies to resolve: FAQ says onboarding "5–10 business days" vs process section "5 business days"; FAQ says credentialing "60–90 days" vs everywhere else "28 days"; "Payer Collections" hero stats aren't numbers; dropdown lists "Claims Submission" while the page/card is "Claims Management".
