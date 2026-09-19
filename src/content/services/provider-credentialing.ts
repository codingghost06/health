import type { ServicePage } from "@/content/types";
import { routes } from "@/content/site";

export const providerCredentialing: ServicePage = {
  slug: "provider-credentialing",
  path: "/services/provider-credentialing",
  name: "Provider Credentialing",
  navSub: "Enrollment and profile support",
  icon: "badge-check",
  homeBlurb: "Organize provider data, applications, payer follow-up, status tracking and recurring profile maintenance.",
  hubBlurb: "Support payer enrollment and credentialing administration with visible documents, dates and follow-up steps.",
  meta: { title: "Provider Credentialing & Payer Enrollment Support", description: "Provider credentialing support for data collection, CAQH administration, payer applications, follow-up and status tracking." },
  hero: {
    breadcrumb: [{ label: "Home", href: routes.home }, { label: "Services", href: routes.services }],
    title: ["Provider Credentialing", "Without the Status Guesswork"],
    lead: "Revplus helps organize provider records, application requirements, payer communication and enrollment status. Timelines remain subject to payer review and completeness of submitted information.",
  },
  blocks: [
    {
      type: "intro",
      eyebrow: "Credentialing Support",
      title: "Keep Requirements, Dates and Follow-Up in One Process",
      lead: "Credentialing involves many documents and outside decision-makers. Revplus supports the administrative process without promising payer approval or a fixed completion date.",
      bullets: [
        "Provider information and document checklist",
        "CAQH profile setup or maintenance support",
        "NPI and taxonomy information coordination",
        "Medicare, Medicaid and commercial payer application support",
        "Group and individual enrollment workflow tracking",
        "Application status follow-up with payer channels",
        "Missing-information and rework coordination",
        "Recredentialing and recurring-date tracking",
      ],
    },
    {
      type: "steps",
      title: "A Traceable Credentialing Workflow",
      items: [
        { title: "Define the Target", body: "Confirm provider, entity, location and payer enrollment goals." },
        { title: "Collect and Review", body: "Build a requirement checklist and identify incomplete or inconsistent information." },
        { title: "Prepare and Submit", body: "Complete applications through the appropriate payer or program channel." },
        { title: "Follow Up", body: "Record payer status, requests and next-contact dates without implying an insurer partnership." },
        { title: "Confirm and Handoff", body: "Document the payer decision and provide available enrollment details to the practice workflow." },
      ],
    },
    {
      type: "faq",
      title: "Credentialing Questions",
      items: [
        { q: "Can Revplus guarantee enrollment approval?", a: ["No. Payers and government programs make enrollment decisions. Revplus supports preparation, submission, follow-up and status visibility."] },
        { q: "How long does credentialing take?", a: ["Timing varies by payer, program, location, provider history and application completeness. We document milestones and follow-up rather than advertising a universal completion time."] },
        { q: "Does listing a payer mean Revplus is its partner?", a: ["No. Payer names describe common enrollment or claims environments only and do not imply endorsement, affiliation or partnership."] },
      ],
    },
  ],
  cta: { title: "Bring Structure to Credentialing Work", lead: "Tell us which providers, entities or payer applications need clearer tracking.", button: { label: "Request a Consultation", href: routes.freeAudit } },
};
