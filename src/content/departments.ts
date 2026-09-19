import type { InnerPage } from "@/content/types";
import { routes } from "@/content/site";

export const departmentsPage: InnerPage = {
  slug: "departments",
  path: routes.departments,
  meta: { title: "Revenue Cycle Workflow Areas", description: "See how patient access, documentation, coding, claims, payment posting and follow-up connect across the revenue cycle." },
  hero: {
    breadcrumb: [{ label: "Home", href: routes.home }],
    title: ["The Revenue Cycle", "Connects Multiple Teams"],
    lead: "Billing outcomes are shaped by handoffs between clinical, front-office and administrative work. Revplus helps make those dependencies easier to understand.",
  },
  blocks: [
    {
      type: "cards",
      id: "departments",
      eyebrow: "Workflow Areas",
      title: "Where Information Enters, Changes and Moves Forward",
      columns: 3,
      items: [
        { icon: "users", title: "Patient Access", body: "Demographics, coverage information, referrals and authorization context create the foundation for later claim work." },
        { icon: "file", title: "Clinical Documentation", body: "The record supports coding, medical-necessity context and responses to payer questions." },
        { icon: "clipboard-check", title: "Coding & Charge Review", body: "Documented services are translated into the claim information required for submission." },
        { icon: "send", title: "Claims", body: "Prepared claims are transmitted, acknowledged and monitored for clearinghouse or payer response." },
        { icon: "receipt", title: "Payment Posting", body: "Remittance information is posted, adjustments are reviewed and remaining balances are routed." },
        { icon: "refresh", title: "Denials & AR", body: "Unresolved accounts move through research, correction, appeal, payer follow-up or closure review." },
      ],
    },
    {
      type: "intro",
      eyebrow: "Shared Responsibility",
      title: "Clear Handoffs Reduce Avoidable Rework",
      lead: "Revplus does not assume control of every revenue-cycle function. The engagement documents which work is in scope and which decisions or information remain with your practice.",
      bullets: [
        "Identify the person or team responsible for each handoff",
        "Define where missing information is routed",
        "Agree how urgent issues are escalated",
        "Keep PHI inside approved HIPAA-compliant workflows",
        "Review recurring causes across—not only within—departments",
      ],
      aside: { kind: "blocks", items: [
        { title: "Clinical Input", body: "Documentation and medical decisions remain with qualified clinical personnel." },
        { title: "Practice Decisions", body: "Policies, contracts and write-off authority remain subject to the practice's governance." },
        { title: "Revplus Support", body: "In-scope billing administration, follow-up and reporting are handled through the agreed workflow." },
      ] },
    },
  ],
  cta: { title: "Map Your Most Difficult Handoff", lead: "Start with the point where information, ownership or follow-up most often becomes unclear.", button: { label: "Request a Consultation", href: routes.freeAudit } },
};
