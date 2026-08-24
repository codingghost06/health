import type { ServicePage } from "@/content/types";
import { routes } from "@/content/site";

export const denialManagement: ServicePage = {
  slug: "denial-management",
  path: "/services/denial-management",
  name: "Denial Management",
  navSub: "Root-cause + appeals",
  icon: "shield-check",
  homeBlurb:
    "93.4% denial resolution rate. We appeal every recoverable dollar — including claims your current team has written off.",
  hubBlurb:
    "Root-cause analysis, appeal writing, and re-submission. 93.4% resolution rate. No denied claim left unworked.",
  meta: {
    title: "Denial Management & Claims Appeals Services",
    description:
      "The average provider writes off 3–5% of gross revenue as uncollectible denials. That's money you've earned — and we recover it. Our resolution rate is 93.4%.",
  },
  hero: {
    breadcrumb: [
      { label: "Home", href: routes.home },
      { label: "Services", href: routes.services },
    ],
    title: ["Denial Management &", "Claims Appeals Services"],
    lead: "The average provider writes off 3–5% of gross revenue as uncollectible denials. That's money you've earned — and we recover it. Our resolution rate is 93.4%.",
    stats: [
      { value: "93.4%", label: "Denial resolution rate" },
      { value: "72hr", label: "Appeal turnaround" },
      { value: "52%", label: "Denial rate reduction" },
      { value: "$380K", label: "Avg annual recovery/client" },
    ],
  },
  blocks: [
    {
      type: "intro",
      eyebrow: "Denial Management",
      title: "Most Denied Claims Are Recoverable. We Prove It.",
      lead: "65% of denied claims are never reworked — they're written off. Health Billing's denial management team doesn't accept denial as a final answer. We investigate, document, appeal, and escalate until every recoverable dollar is collected.",
      bullets: [
        "Root-cause categorization of all denial types",
        "First-level appeal letters with clinical documentation",
        "Second-level and peer-to-peer review coordination",
        "External appeals and state Insurance Department complaints",
        "Authorization and medical necessity appeals",
        "Timely filing appeals with proof of prior submission",
        "Underpayment identification and payer dispute letters",
        "Monthly denial scorecards and root-cause reports",
        "Front-end process improvements to prevent recurrence",
      ],
      aside: {
        kind: "blocks",
        items: [
          {
            title: "Top 7 Denial Reasons — And How We Fix Them",
            body: "1. Missing/invalid patient info → front-end verification. 2. Authorization issues → retroactive auth + medical necessity appeals. 3. Duplicates → claim history audit. 4. Timely filing → recovery with proof of submission. 5. Coding errors → corrected claims with certified coder review. 6. Medical necessity → clinical appeal letters. 7. COB issues → proper claim sequencing.",
          },
          {
            title: "Prevention Is Better Than Cure",
            body: "We don't just recover denied claims — we eliminate the conditions that cause them. Monthly denial reports identify patterns, and we work with your front desk and clinical teams to stop errors from recurring. Most clients see 50%+ reduction in denial rate within 6 months.",
          },
          {
            title: "Government Payer Appeals",
            body: "Medicare and Medicaid appeals have strict processes — Redeterminations, Reconsiderations, ALJ hearings. We navigate every level with precision, maximizing recoveries from government payer denials.",
          },
        ],
      },
    },
  ],
  cta: {
    title: "How Much Denied Revenue Are You Sitting On?",
    lead: "Let us review your last 90 days of denied claims and show you exactly how much is recoverable — completely free.",
    button: { label: "Request Free Denial Analysis", href: routes.freeAudit },
  },
};
