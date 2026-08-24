import type { ServicePage } from "@/content/types";
import { routes } from "@/content/site";

export const arRecovery: ServicePage = {
  slug: "ar-recovery",
  path: "/services/ar-recovery",
  name: "AR Recovery",
  navSub: "Aged AR clean-up",
  icon: "wallet",
  homeBlurb:
    "Aging AR worked aggressively. 60, 90, 120+ day buckets cleared. 87% recovery rate on 90+ day balances.",
  hubBlurb:
    "Aggressive 60/90/120+ day bucket follow-up. 87% recovery rate on aged balances. No cherry-picking.",
  meta: {
    title: "Accounts Receivable (AR) Recovery & Follow-Up",
    description:
      "Aging AR is silent revenue leakage. Our AR recovery team hunts down every balance — regardless of age — and brings it to resolution. 87% recovery on 90+ day AR.",
  },
  hero: {
    breadcrumb: [
      { label: "Home", href: routes.home },
      { label: "Services", href: routes.services },
    ],
    title: ["Accounts Receivable (AR)", "Recovery & Follow-Up"],
    lead: "Aging AR is silent revenue leakage. Our AR recovery team hunts down every balance — regardless of age — and brings it to resolution.",
    stats: [
      { value: "18 days", label: "AR days post-engagement" },
      { value: "87%", label: "Recovery on 90+ day AR" },
      { value: "100%", label: "All claims worked" },
    ],
  },
  blocks: [
    {
      type: "intro",
      eyebrow: "AR Services",
      title: "We Work Every Dollar. No Balance Left Behind.",
      lead: "Most billing companies prioritize easy wins. The hard stuff — old claims, complex denials, government payer disputes — gets ignored. We work all of it. Our AR specialists are assigned by payer type and aging bucket with specific protocols for each category.",
      bullets: [
        "Insurance AR follow-up for all payer types",
        "Patient balance resolution and payment plan setup",
        "60/90/120/180+ day aging bucket management",
        "Payer portal follow-up and phone escalations",
        "Re-billing and corrected claim submission",
        "Secondary insurance identification and billing",
        "Write-off review before any finalization",
        "AR cleanup projects for practices switching billing companies",
      ],
      aside: {
        kind: "timeline",
        items: [
          {
            title: "AR Analysis & Stratification",
            body: "We segment all open AR by payer, aging bucket, denial reason, and dollar value. Each segment gets a tailored follow-up protocol.",
          },
          {
            title: "Insurance Follow-Up",
            body: "Daily payer portal checks, outbound calls, and online dispute submissions. We don't wait — we chase payers on a set schedule.",
          },
          {
            title: "Patient Balance Management",
            body: "Automated statements, outbound calls, and payment plan setup. Collecting patient balances compliantly without damaging relationships.",
          },
          {
            title: "Resolution & Write-Off Review",
            body: "Every balance resolved, appealed, or recommended for write-off with full documentation. No balance written off without manager review.",
          },
        ],
      },
    },
  ],
  cta: {
    title: "Let Us Work Your Aging AR",
    lead: "Send us your AR aging report and we'll tell you — for free — exactly how much we can recover and in what timeframe.",
    button: { label: "Get Free AR Recovery Estimate", href: routes.freeAudit },
  },
};
