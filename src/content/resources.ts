import type { ResourcesContent } from "@/content/types";
import { routes } from "@/content/site";

export const resourcesPage: ResourcesContent = {
  meta: { title: "Medical Billing & RCM Resources", description: "Plain-language educational topics, workflow guides and revenue-cycle definitions from Revplus Medical Solutions." },
  hero: {
    breadcrumb: [{ label: "Home", href: routes.home }],
    title: ["Understand the Work", "Behind the Revenue Cycle"],
    lead: "Use these educational overviews to ask better questions about claims, coding, denials, credentialing and receivables. Content is general information, not legal, coding or payer-specific advice.",
  },
  sections: [
    {
      id: "billing-topics", icon: "newspaper", eyebrow: "Billing Topics", title: "Questions Worth Understanding",
      items: [
        { tag: "Claims", title: "What Happens After a Claim Is Submitted?", body: "A claim may be accepted by the clearinghouse, rejected, received by the payer, pended for information, adjudicated, paid or denied. Each status requires a different next action." },
        { tag: "Denials", title: "Why Root Cause Matters", body: "The visible denial may begin with registration, authorization, documentation, coding or submission. Correcting the account and learning from the cause are separate jobs." },
        { tag: "AR", title: "Why Aging Alone Is Not Enough", body: "A useful AR review also considers payer, balance, filing limits, prior actions, denial history, patient responsibility and available documentation." },
      ],
    },
    {
      id: "guides", icon: "book", eyebrow: "Workflow Guides", title: "Practical Review Frameworks",
      items: [
        { title: "Questions to Ask Before Outsourcing Billing", body: "Clarify scope, access, communication, responsibility, reporting, privacy and transition planning before comparing price." },
        { title: "Preparing for a Credentialing Discussion", body: "List providers, entities, locations, target payers, known deadlines and the current status of core documents and CAQH profiles." },
        { title: "Building a Denial Review Meeting", body: "Group denials by cause, payer and service; identify practice dependencies; assign next actions; and separate recoverability from prevention work." },
      ],
    },
    {
      id: "glossary", icon: "file", eyebrow: "RCM Glossary", title: "Common Terms in Plain Language",
      items: [
        { title: "ERA / EOB", body: "Documents that explain how a payer processed a claim, including payment, adjustment, denial and patient-responsibility information." },
        { title: "Clean Claim", body: "A claim that can be processed without missing or invalid information. The exact requirements depend on the payer and claim context." },
        { title: "Accounts Receivable", body: "Amounts recorded as owed after services are provided, including balances awaiting payer or patient resolution." },
        { title: "Credentialing", body: "The process of reviewing provider qualifications and related information. Payer enrollment is connected but may involve additional steps." },
        { title: "Corrected Claim", body: "A replacement or adjustment submission used when claim information must be changed according to the payer's process." },
        { title: "Timely Filing", body: "The deadline a payer sets for original claims, corrected claims or appeals. Limits vary and should be verified in context." },
      ],
    },
  ],
  cta: { title: "Have a Question About Your Workflow?", lead: "A consultation can help turn a general billing problem into a clearer operational question.", button: { label: "Request a Consultation", href: routes.freeAudit } },
};
