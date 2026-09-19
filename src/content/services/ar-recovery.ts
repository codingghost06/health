import type { ServicePage } from "@/content/types";
import { routes } from "@/content/site";

export const arRecovery: ServicePage = {
  slug: "ar-recovery",
  path: "/services/ar-recovery",
  name: "Accounts Receivable Follow-Up",
  navSub: "Aged AR review and action",
  icon: "wallet",
  homeBlurb: "Segment aging receivables, identify the next supported action and document payer or patient follow-up.",
  hubBlurb: "Bring structure to older balances with account research, prioritization, follow-up and closure review.",
  meta: { title: "Medical Accounts Receivable Follow-Up Services", description: "Medical AR follow-up support for aging analysis, payer research, patient-balance routing and documented account resolution." },
  hero: {
    breadcrumb: [{ label: "Home", href: routes.home }, { label: "Services", href: routes.services }],
    title: ["Accounts Receivable Follow-Up", "With a Defined Next Action"],
    lead: "Older balances need more than repeated status checks. Revplus helps practices segment receivables, research account history and move appropriate actions forward.",
  },
  blocks: [
    {
      type: "intro",
      eyebrow: "AR Support",
      title: "Separate the Work Before You Prioritize It",
      lead: "Age alone does not explain why a balance remains open. The workflow also considers payer, denial or rejection history, filing limits, documentation, patient responsibility and prior action.",
      bullets: [
        "AR aging analysis by payer and age bucket",
        "Claim and payer-response history review",
        "Unpaid-claim status follow-up",
        "Corrected-claim or information-request routing",
        "Secondary coverage and coordination-of-benefits review",
        "Patient-responsibility workflow support within scope",
        "Closure and write-off recommendation documentation",
        "Transition and inherited-AR project planning",
      ],
      aside: { kind: "timeline", items: [
        { title: "Segment", body: "Group accounts by payer, age, cause, balance and actionability." },
        { title: "Research", body: "Review submission history, payer responses and missing dependencies." },
        { title: "Act", body: "Use the supported payer, correction, appeal, patient or closure path." },
        { title: "Document", body: "Record the outcome and keep unresolved items tied to a next-contact or decision point." },
      ] },
    },
    {
      type: "faq",
      title: "AR Follow-Up Questions",
      items: [
        { q: "Can every old balance be recovered?", a: ["No. Collectability depends on filing limits, documentation, contracts, coverage, payer decisions, patient responsibility and prior actions. Revplus helps identify the appropriate path and document the outcome."] },
        { q: "Can Revplus review AR from a previous billing setup?", a: ["Potentially. The first step is to assess data access, account history, scope and available documentation so a realistic project can be defined."] },
        { q: "How are write-offs handled?", a: ["Closure recommendations should be supported by account history and the practice's policies. Revplus does not present arbitrary write-offs as recovered revenue."] },
      ],
    },
  ],
  cta: { title: "Bring Order to Aging Receivables", lead: "Discuss the age buckets, payer groups or inherited balances your team needs help organizing.", button: { label: "Request an AR Consultation", href: routes.freeAudit } },
};
