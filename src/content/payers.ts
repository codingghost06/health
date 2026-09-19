import type { InnerPage } from "@/content/types";
import { routes } from "@/content/site";

export const payersPage: InnerPage = {
  slug: "payers",
  path: routes.payers,
  meta: {
    title: "Common US Healthcare Payer Environments",
    description: "How medical billing workflows differ across Medicare, Medicaid, commercial insurance and other common US payer contexts.",
  },
  hero: {
    breadcrumb: [{ label: "Home", href: routes.home }],
    title: ["Payer Workflows Need", "the Right Context"],
    lead: "Medicare, Medicaid and commercial plans use different rules, portals, responses and appeal paths. Revplus organizes payer follow-up within the agreed service scope.",
  },
  blocks: [
    {
      type: "band",
      title: "Payer Names Describe a Billing Context—not a Partnership",
      lead: "References to insurers or government programs do not imply endorsement, affiliation, network status or a formal relationship with Revplus.",
      buttons: [{ label: "Discuss Your Payer Mix", href: routes.freeAudit }],
    },
    {
      type: "cards",
      id: "government",
      eyebrow: "Common Payer Contexts",
      title: "Different Rules, One Organized Follow-Up Process",
      columns: 3,
      items: [
        { icon: "landmark", title: "Medicare", sub: "Federal program context", bullets: ["Traditional Medicare claim workflows", "Medicare Advantage handled as plan-specific", "Medical-necessity and policy context", "Coordination-of-benefits review"] },
        { icon: "hospital", title: "Medicaid", sub: "State and managed-care context", bullets: ["State-program requirements", "Medicaid managed-care plan workflows", "Eligibility and dual-coverage context", "State- and plan-specific filing rules"] },
        { icon: "building", title: "Commercial Insurance", sub: "Plan-specific context", bullets: ["Eligibility and benefit information", "Authorization and referral dependencies", "Claim status and payer requests", "Plan-specific correction and appeal paths"] },
        { icon: "shield-check", title: "Blue Cross Blue Shield", sub: "Independent-plan environment", body: "BCBS entities can vary by state, plan and member coverage. Workflow should follow the specific payer response and plan requirements." },
        { icon: "clipboard", title: "Aetna, Cigna, Humana & UHC", sub: "Common commercial environments", body: "Names are shown as common examples. Service support depends on the practice, plan, access and agreed scope." },
        { icon: "layers", title: "Secondary & Other Coverage", sub: "Sequencing matters", body: "Secondary claims, workers’ compensation and other coverage types require their own information and routing logic." },
      ],
    },
    {
      type: "steps",
      title: "How Payer Work Enters the Revenue Cycle",
      items: [
        { title: "Identify", body: "Confirm the payer, plan and coverage context attached to the account." },
        { title: "Prepare", body: "Use the information and format required for the supported claim workflow." },
        { title: "Interpret", body: "Read acknowledgements, requests, remittance details and denials in the correct payer context." },
        { title: "Respond", body: "Route the supported correction, documentation, follow-up or appeal action." },
        { title: "Document", body: "Record status, contacts and next steps so payer work remains visible." },
      ],
    },
    {
      type: "faq",
      title: "Payer Questions",
      items: [
        { q: "Does Revplus have formal partnerships with the payers named here?", a: ["No partnership or endorsement is implied. The names identify common payer environments encountered in US medical billing."] },
        { q: "Can Revplus support every plan from every insurer?", a: ["Capability is confirmed during scoping. Plan rules, access, contracts, geography and practice workflows must be reviewed before support is represented."] },
        { q: "Are Medicare and Medicaid handled the same way?", a: ["No. Medicare, state Medicaid programs and Medicaid managed-care plans have distinct requirements and decision paths."] },
      ],
    },
  ],
  cta: { title: "Bring Your Payer Mix Into the Conversation", lead: "Tell us which payer responses or follow-up queues create the most friction for your practice.", button: { label: "Request a Consultation", href: routes.freeAudit } },
};
