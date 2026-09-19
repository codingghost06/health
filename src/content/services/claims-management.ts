import type { ServicePage } from "@/content/types";
import { routes } from "@/content/site";

export const claimsManagement: ServicePage = {
  slug: "claims-management",
  path: "/services/claims-management",
  name: "Claims Management",
  navSub: "Submission through resolution",
  icon: "send",
  homeBlurb: "Track claims through preparation, submission, rejection handling, payer response and documented resolution.",
  hubBlurb: "Keep every in-scope claim connected to a status, owner and next action throughout its lifecycle.",
  meta: { title: "Medical Claims Management Services", description: "Medical claims management support for preparation, submission, status tracking, rejection handling and payer follow-up." },
  hero: {
    breadcrumb: [{ label: "Home", href: routes.home }, { label: "Services", href: routes.services }],
    title: ["Claims Management", "From Readiness to Resolution"],
    lead: "Revplus helps organize what should happen before a claim is sent, how payer responses are handled and which action keeps the claim moving.",
  },
  blocks: [
    {
      type: "intro",
      eyebrow: "Claim Lifecycle",
      title: "A Claim Needs a Status—and a Next Step",
      lead: "Submission is one milestone. Effective claims management also watches for clearinghouse responses, payer requests, denials, payments and remaining balances.",
      bullets: [
        "Required claim-information review",
        "Claim creation and submission support",
        "Clearinghouse acceptance and rejection monitoring",
        "Rejected-claim correction routing",
        "Payer claim-status follow-up",
        "Information-request and documentation coordination",
        "Denied-claim routing into the denial workflow",
        "Payment or remaining-balance handoff",
      ],
      aside: { kind: "blocks", items: [
        { title: "Before Submission", body: "Check that the claim contains the information required for the agreed workflow." },
        { title: "After Submission", body: "Record acceptance, rejection and payer status so silence is not mistaken for progress." },
        { title: "At Response", body: "Route the account to posting, correction, denial, patient or receivable follow-up." },
      ] },
    },
    {
      type: "steps",
      title: "A Visible Claim Path",
      items: [
        { title: "Ready", body: "Required claim details are present or exceptions are identified." },
        { title: "Submitted", body: "Transmission details and initial response are recorded." },
        { title: "In Review", body: "Payer status and requested information are monitored." },
        { title: "Action Needed", body: "The appropriate correction, denial or follow-up step is assigned." },
        { title: "Resolved", body: "Payment, adjustment, responsibility or supported closure is documented." },
      ],
    },
  ],
  cta: { title: "Make Claim Status Easier to Understand", lead: "Discuss the point where claims most often stall, reject or lose ownership.", button: { label: "Request a Consultation", href: routes.freeAudit } },
};
