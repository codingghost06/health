import type { ServicePage } from "@/content/types";
import { routes } from "@/content/site";

export const claimsManagement: ServicePage = {
  slug: "claims-management",
  path: "/services/claims-management",
  name: "Claims Management",
  navSub: "Clean-claim submission",
  icon: "send",
  homeBlurb:
    "3,000+ claim edits. Real-time tracking. Zero-lag rejection response. Every claim managed to resolution.",
  hubBlurb:
    "3,000+ payer-specific edits. Real-time status tracking. Same-day rejection correction. Zero claims falling through the cracks.",
  meta: {
    title: "Claims Management From Submission to Payment",
    description:
      "Real-time claim scrubbing, electronic submission, status tracking, and proactive payer follow-up — managed end-to-end so no claim falls through the cracks.",
  },
  hero: {
    breadcrumb: [
      { label: "Home", href: routes.home },
      { label: "Services", href: routes.services },
    ],
    title: ["Claims Management", "From Submission to Payment"],
    lead: "Real-time claim scrubbing, electronic submission, status tracking, and proactive payer follow-up — managed end-to-end so not a single claim falls through the cracks.",
    stats: [
      { value: "98.2%", label: "First-pass acceptance" },
      { value: "24hr", label: "Submission turnaround" },
      { value: "3,000+", label: "Automated edits" },
      { value: "100%", label: "Claims tracked to resolution" },
    ],
  },
  blocks: [
    {
      type: "intro",
      eyebrow: "Claims Services",
      title: "Every Claim Tracked. Every Payment Collected.",
      lead: "Claims management isn't just about submitting — it's about knowing where every claim stands, at every moment, and acting immediately when something goes wrong.",
      bullets: [
        "Real-time eligibility verification before submission",
        "Proprietary scrubbing with 3,000+ payer-specific edits",
        "Electronic and paper claim generation and submission",
        "Clearinghouse management and EDI transmission",
        "Real-time claim status tracking by payer",
        "Automated 277/835 processing",
        "Rejection management and same-day resubmission",
        "Payer portal follow-up on unpaid claims",
        "Claim adjustment and corrected claim submission",
      ],
      aside: {
        kind: "blocks",
        items: [
          {
            title: "Pre-Submission Scrubbing",
            body: "3,000+ payer-specific edits catch coverage gaps, coding errors, and demographic issues before a claim ever leaves our system — protecting your first-pass rate.",
          },
          {
            title: "Real-Time Status Visibility",
            body: "Log in at any time and see the exact status of every claim — submitted, in adjudication, pending, paid, or denied — with action notes from our team.",
          },
          {
            title: "Zero-Lag Rejection Response",
            body: "Clearinghouse rejections are identified and corrected within the same business day. No claim sits rejected for more than 24 hours without action.",
          },
        ],
      },
    },
  ],
  cta: {
    title: "See Your Claims Managed the Right Way",
    lead: "Free claims assessment — we'll show you what a fully managed claims pipeline looks like for your practice.",
    button: { label: "Get Free Claims Assessment", href: routes.freeAudit },
  },
};
