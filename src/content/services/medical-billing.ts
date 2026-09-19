import type { ServicePage } from "@/content/types";
import { routes } from "@/content/site";

export const medicalBilling: ServicePage = {
  slug: "medical-billing",
  path: "/services/medical-billing",
  name: "Medical Billing",
  navSub: "From charge review to follow-up",
  icon: "receipt",
  homeBlurb: "Structured billing support across claim preparation, submission, payer response, payment posting and open-account follow-up.",
  hubBlurb: "Coordinate the operational work that moves an encounter from documentation to claim resolution.",
  meta: {
    title: "Medical Billing Services in Houston, Texas",
    description: "HIPAA-compliant medical billing support for claim preparation, submission, payer follow-up, posting and account resolution.",
  },
  hero: {
    breadcrumb: [{ label: "Home", href: routes.home }, { label: "Services", href: routes.services }],
    title: ["Medical Billing Built", "Around a Clear Workflow"],
    lead: "Revplus Medical Solutions supports the practical work between a documented encounter and a resolved account—with responsibilities and next actions kept visible.",
  },
  blocks: [
    {
      type: "intro",
      eyebrow: "What the Service Covers",
      title: "A Connected Process, Not a Collection of Isolated Tasks",
      lead: "Medical billing depends on accurate handoffs. Revplus organizes the information, claim activity and follow-up needed to keep those handoffs moving.",
      bullets: [
        "Encounter and charge information review",
        "Patient and insurance data checks within the agreed scope",
        "Claim preparation and submission support",
        "Clearinghouse rejection review and correction routing",
        "Payer response and claim-status follow-up",
        "ERA/EOB posting and adjustment review",
        "Denied and unpaid account routing",
        "Operational reporting and open-item communication",
      ],
      aside: { kind: "timeline", items: [
        { title: "Prepare", body: "Confirm required claim information and identify missing or inconsistent details before submission." },
        { title: "Submit", body: "Send claims through the agreed channel and record submission status for follow-up." },
        { title: "Respond", body: "Route rejections, requests and denials to the appropriate correction or review step." },
        { title: "Reconcile", body: "Post payer responses, review remaining balances and document the next action." },
      ] },
    },
    {
      type: "cards",
      title: "What Working With Revplus Looks Like",
      columns: 3,
      variant: "centered",
      items: [
        { icon: "clipboard-check", title: "Defined Scope", body: "The services, systems, access and practice responsibilities are agreed before operational work begins." },
        { icon: "message", title: "Clear Communication", body: "Questions and blockers are organized for the people who can resolve them." },
        { icon: "refresh", title: "Consistent Follow-Up", body: "Open claims and balances remain in a visible workflow until a supported resolution is documented." },
        { icon: "bar-chart", title: "Useful Reporting", body: "Updates focus on status, causes, dependencies and actions—not unsupported performance promises." },
        { icon: "lock", title: "HIPAA-Compliant Handling", body: "Protected health information is managed through privacy-conscious workflows designed around HIPAA requirements." },
        { icon: "hand-heart", title: "Practice-Aware Support", body: "The operating model is shaped around your team, systems and specialty workflow." },
      ],
    },
    {
      type: "faq",
      id: "faq",
      eyebrow: "Common Questions",
      title: "Before a Billing Engagement Begins",
      button: { label: "Discuss Your Billing Workflow", href: routes.freeAudit },
      items: [
        { q: "Can Revplus work with our current practice-management workflow?", a: ["The first step is to review your current systems, access model and team responsibilities. Revplus then proposes a practical scope rather than assuming a specific integration or replacement."] },
        { q: "What information is needed for an initial conversation?", a: ["A general description of your specialty, approximate workflow, payer mix, current billing setup and main pain points is enough. Do not send protected health information through the public contact form."] },
        { q: "Does Revplus guarantee a particular collection result?", a: ["No. Outcomes depend on documentation, contracts, payer behavior, claim history, patient balances and other factors. Revplus explains the operating approach and sets realistic expectations after reviewing the relevant facts."] },
        { q: "How is patient information handled?", a: ["Revplus uses HIPAA-compliant workflows for protected health information. Specific access, transfer and responsibility requirements are documented as part of onboarding."] },
      ],
    },
  ],
  cta: { title: "Map the Next Step in Your Billing Workflow", lead: "Tell us where claims, payer responses or balances are becoming difficult to manage.", button: { label: "Request a Consultation", href: routes.freeAudit } },
};
