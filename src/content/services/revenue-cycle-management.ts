import type { ServicePage } from "@/content/types";
import { routes } from "@/content/site";

export const revenueCycleManagement: ServicePage = {
  slug: "revenue-cycle-management",
  path: "/services/revenue-cycle-management",
  name: "Revenue Cycle Management",
  navSub: "Connected front-to-back workflow",
  icon: "refresh",
  homeBlurb: "Coordinate front-, middle- and back-office billing activities through one understandable operating view.",
  hubBlurb: "Map the revenue cycle from patient access and documentation through claim resolution and receivables follow-up.",
  meta: { title: "Revenue Cycle Management Services", description: "HIPAA-compliant revenue cycle management support for connected patient access, coding, claims, denials, payments and AR workflows." },
  hero: {
    breadcrumb: [{ label: "Home", href: routes.home }, { label: "Services", href: routes.services }],
    title: ["Revenue Cycle Management", "With the Handoffs Made Visible"],
    lead: "Revplus helps practices understand how registration, documentation, coding, claims, payer responses and receivables affect one another.",
  },
  blocks: [
    {
      type: "intro",
      eyebrow: "The Full Cycle",
      title: "Revenue Cycle Problems Rarely Stay in One Department",
      lead: "A denial may begin with registration, authorization, documentation or coding. A useful RCM approach follows the cause across the workflow instead of treating only the final symptom.",
      bullets: [],
      aside: { kind: "blocks", items: [
        { title: "Front-End", body: "Patient and insurance information, eligibility context, authorization status and financial handoffs before claim creation." },
        { title: "Middle", body: "Documentation, charge capture, coding review and claim preparation before submission." },
        { title: "Back-End", body: "Payer response, posting, denials, unpaid claims, receivables and account resolution." },
      ] },
    },
    {
      type: "steps",
      eyebrow: "Our Revenue Cycle Approach",
      title: "From Encounter to Payment",
      lead: "The exact scope depends on your practice, but the working model follows a consistent sequence.",
      items: [
        { title: "Capture", body: "Gather the patient, insurance, authorization, encounter and charge information required for the agreed workflow." },
        { title: "Review", body: "Check documentation, coding and claim details for missing or inconsistent information." },
        { title: "Submit", body: "Transmit claims through the agreed channel and record status for follow-up." },
        { title: "Interpret", body: "Review clearinghouse and payer responses, then route corrections, requests or denials." },
        { title: "Reconcile", body: "Post payments and adjustments, review remaining balances and maintain an account-level next action." },
        { title: "Report", body: "Explain patterns, unresolved dependencies and the work that needs practice input." },
      ],
    },
    {
      type: "cards",
      title: "Built Around Operational Clarity",
      columns: 4,
      variant: "centered",
      items: [
        { icon: "layers", title: "Connected View", body: "See how upstream information changes downstream claim work." },
        { icon: "clipboard-check", title: "Defined Responsibilities", body: "Know what Revplus handles and what remains with the practice." },
        { icon: "bell", title: "Visible Dependencies", body: "Surface missing information and decisions before they become silent delays." },
        { icon: "bar-chart", title: "Useful Reporting", body: "Focus reviews on causes, statuses and next actions." },
      ],
    },
  ],
  cta: { title: "See the Revenue Cycle as One Workflow", lead: "Start with a conversation about the handoffs creating the most operational friction.", button: { label: "Discuss Your Revenue Cycle", href: routes.freeAudit } },
};
