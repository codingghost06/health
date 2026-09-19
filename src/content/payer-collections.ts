import type { InnerPage } from "@/content/types";
import { routes } from "@/content/site";

export const payerCollectionsPage: InnerPage = {
  slug: "payer-collections",
  path: routes.payerCollections,
  meta: { title: "Medical Payer Follow-Up Services", description: "Structured payer follow-up for commercial insurance, Medicare, Medicaid and secondary claim workflows." },
  hero: {
    breadcrumb: [{ label: "Home", href: routes.home }],
    title: ["Payer Follow-Up With", "a Documented Next Step"],
    lead: "Submitting a claim does not finish the work. Revplus helps interpret responses, organize follow-up and keep unresolved accounts tied to a clear action.",
  },
  blocks: [
    {
      type: "cards",
      eyebrow: "Follow-Up Contexts",
      title: "Work From the Actual Payer Response",
      columns: 3,
      items: [
        { icon: "building", title: "Commercial Plans", body: "Track acknowledgements, claim status, information requests, denials and remaining balances using plan-specific channels." },
        { icon: "landmark", title: "Medicare", body: "Route status, policy, coordination-of-benefits and appeal work through the appropriate Medicare context." },
        { icon: "hospital", title: "Medicaid", body: "Account for state-program and managed-care differences rather than treating Medicaid as one national workflow." },
        { icon: "layers", title: "Secondary Claims", body: "Confirm primary adjudication information and route the remaining balance through the supported secondary process." },
        { icon: "shield-check", title: "Denied Claims", body: "Move denial work into classification, research, correction or appeal based on the supported facts." },
        { icon: "wallet", title: "Open Receivables", body: "Segment balances by payer, age, history and next action for an organized follow-up queue." },
      ],
    },
    {
      type: "steps",
      title: "The Follow-Up Loop",
      items: [
        { title: "Check", body: "Confirm submission history and the most recent payer or clearinghouse status." },
        { title: "Understand", body: "Identify the cause, missing dependency and available response path." },
        { title: "Act", body: "Submit the supported correction, information, appeal or inquiry." },
        { title: "Record", body: "Document the action, reference details and next-contact date." },
        { title: "Escalate or Resolve", body: "Move the account forward based on the payer response and practice policy." },
      ],
    },
    {
      type: "band",
      title: "No Insurer Affiliation Is Implied",
      lead: "Payer names on this site are informational examples of US billing environments. They are not partner logos or endorsements.",
      buttons: [{ label: "View Payer Contexts", href: routes.payers, variant: "ghost" }],
    },
  ],
  cta: { title: "Make Payer Follow-Up Easier to See", lead: "Discuss the queues, plans and unresolved responses that need clearer ownership.", button: { label: "Talk to Revplus", href: routes.freeAudit } },
};
