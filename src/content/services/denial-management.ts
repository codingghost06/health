import type { ServicePage } from "@/content/types";
import { routes } from "@/content/site";

export const denialManagement: ServicePage = {
  slug: "denial-management",
  path: "/services/denial-management",
  name: "Denial Management",
  navSub: "Root-cause and follow-up support",
  icon: "shield-check",
  homeBlurb: "Classify denials, identify causes, organize correction or appeal work and feed recurring issues back into the workflow.",
  hubBlurb: "Move denied claims through documented research, correction, appeal and prevention steps when supported by the facts.",
  meta: { title: "Medical Claim Denial Management Services", description: "Denial management support for classification, root-cause review, corrected claims, appeals and recurring-issue prevention." },
  hero: {
    breadcrumb: [{ label: "Home", href: routes.home }, { label: "Services", href: routes.services }],
    title: ["Denial Management Focused", "on Cause and Next Action"],
    lead: "A denial is a payer decision that needs interpretation. Revplus helps organize the evidence, correction or appeal path and follow-up without promising that every claim can be recovered.",
  },
  blocks: [
    {
      type: "intro",
      eyebrow: "Denial Workflow",
      title: "Work the Account—and Learn From the Pattern",
      lead: "Useful denial management addresses the current claim while also asking whether registration, authorization, documentation, coding or submission behavior needs attention.",
      bullets: [
        "Denial reason and adjustment-code classification",
        "Eligibility, authorization and coordination-of-benefits research",
        "Coding and documentation question routing",
        "Corrected-claim preparation support",
        "Appeal packet organization when an appeal is appropriate",
        "Timely-filing and submission-history review",
        "Payer follow-up and status documentation",
        "Recurring-cause reporting for process discussion",
      ],
      aside: { kind: "blocks", items: [
        { title: "Interpret", body: "Confirm what the payer response says and what additional facts are needed." },
        { title: "Choose the Path", body: "Route the account to correction, documentation, appeal, patient or closure review as appropriate." },
        { title: "Reduce Repeat Work", body: "Group recurring causes so the practice can address upstream patterns." },
      ] },
    },
    {
      type: "steps",
      title: "From Denial to Documented Resolution",
      items: [
        { title: "Classify", body: "Record the reason, payer, service date, balance and filing context." },
        { title: "Research", body: "Review available claim history, documentation and payer communication." },
        { title: "Act", body: "Prepare the supported correction, appeal, requested information or other response." },
        { title: "Follow Up", body: "Track the payer response and maintain a next action until the account reaches a documented outcome." },
        { title: "Report", body: "Explain high-frequency causes and where upstream workflow changes may help." },
      ],
    },
  ],
  cta: { title: "Understand What Your Denials Are Saying", lead: "Start with the causes, queues and handoffs creating the most repeat work.", button: { label: "Discuss Denial Management", href: routes.freeAudit } },
};
