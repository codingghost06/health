import type { InnerPage } from "@/content/types";
import { routes } from "@/content/site";

export const payerCollectionsPage: InnerPage = {
  slug: "payer-collections",
  path: routes.payerCollections,
  meta: {
    title: "Collections from Private Insurance, Medicare, and Medicaid",
    description:
      "We help practices collect from Cigna, Aetna, UnitedHealthcare, BCBS, Humana, Medicare, Medicaid, managed care, secondary payers, workers' comp, and patient balances.",
  },
  hero: {
    breadcrumb: [{ label: "Home", href: routes.home }],
    title: ["Collections from Private Insurance,", "Medicare, and Medicaid"],
    lead: "We help practices collect from Cigna, Aetna, UnitedHealthcare, Blue Cross Blue Shield, Humana, Medicare, Medicaid, managed care plans, secondary payers, workers' comp, and patient responsibility balances. Our team does not stop at claim submission. We pursue payment until the claim is paid, appealed, adjusted, or escalated.",
    stats: [
      { value: "Cigna", label: "Commercial claims" },
      { value: "Medicare", label: "CMS compliant billing" },
      { value: "Medicaid", label: "State MCO follow-up" },
      { value: "AR", label: "Aging bucket recovery" },
    ],
  },
  blocks: [
    {
      type: "cards",
      id: "payer-engine",
      eyebrow: "Payer Collection Engine",
      title: "We Work the Claim Until Money Hits the Account",
      lead: "Many billing teams submit claims and wait. Health Billing uses payer-specific follow-up, denial appeals, underpayment review, secondary billing, and patient balance workflows to improve net collections across commercial, Medicare, and Medicaid payers.",
      columns: 3,
      variant: "default",
      items: [
        {
          icon: "building",
          title: "Private Insurance",
          sub: "Cigna, Aetna, UHC, BCBS, Humana and more",
          bullets: [
            "Eligibility and benefit verification",
            "Prior authorization tracking",
            "Claim status checks through portals and clearinghouses",
            "Denial appeal packets with documentation",
            "Underpayment and fee schedule review",
            "Secondary and tertiary claim follow-up",
          ],
        },
        {
          icon: "landmark",
          title: "Medicare",
          sub: "Traditional Medicare and Medicare Advantage",
          bullets: [
            "LCD and NCD policy checks",
            "Modifier and medical necessity review",
            "MSP and coordination of benefits handling",
            "Medicare Advantage plan follow-up",
            "RAC, MAC, and audit response support",
            "Appeals and redetermination support",
          ],
        },
        {
          icon: "hospital",
          title: "Medicaid",
          sub: "State Medicaid and Medicaid MCOs",
          bullets: [
            "State-specific Medicaid rules",
            "Managed care plan billing workflows",
            "Eligibility, spend-down, and dual eligibility handling",
            "CHIP, EPSDT, and waiver billing support",
            "Timely filing and resubmission tracking",
            "Denied claim correction and appeals",
          ],
        },
      ],
    },
    {
      type: "steps",
      title: "How We Increase Collections",
      items: [
        {
          title: "Verify Before the Visit",
          body: "We confirm active coverage, copay, deductible, authorization requirements, referral rules, and coordination of benefits before claims are created.",
        },
        {
          title: "Submit Clean Claims",
          body: "Claims are checked for coding, modifiers, medical necessity, provider enrollment, place of service, payer edits, and documentation gaps.",
        },
        {
          title: "Follow Up by Payer and Aging Bucket",
          body: "Open AR is worked by payer, dollar value, denial reason, timely filing risk, and 0 to 30, 31 to 60, 61 to 90, 90 plus day buckets.",
        },
        {
          title: "Appeal Denials and Underpayments",
          body: "We prepare appeal packets, attach clinical documentation, cite payer policy, correct coding issues, and pursue payer reconsideration.",
        },
        {
          title: "Post, Reconcile, and Report",
          body: "ERA and EOB payments are posted daily, underpayments are flagged, patient responsibility is moved correctly, and monthly payer performance is reported.",
        },
      ],
    },
  ],
  cta: {
    title: "Private Insurance, Medicare, Medicaid, We Collect Across All of Them.",
    lead: "Let us review your payer mix and AR aging to show which insurance companies are holding your money.",
    button: { label: "Get a Free Payer Collections Review", href: routes.freeAudit },
  },
};
