import type { Cta, PageHero } from "@/content/types";
import { routes } from "@/content/site";

export const calculatorPage = {
  meta: {
    title: "Medical Billing Collections Calculator",
    description:
      "Estimate how much more your clinic may collect by improving clean claim rate, denial follow-up, AR recovery, and net collection performance. Free planning calculator.",
  },
  hero: {
    breadcrumb: [{ label: "Home", href: routes.home }],
    title: ["Medical Billing Collections Calculator"],
    lead: "Estimate how much more your clinic may collect by improving clean claim rate, denial follow-up, AR recovery, and net collection performance. This is a planning calculator, actual collections depend on payer mix, specialty, contracts, documentation, and claim history.",
  } satisfies PageHero,
  eyebrow: "Live Revenue Estimate",
  title: "See the Collection Opportunity Before You Switch",
  fields: {
    visits: { label: "Monthly patient visits", help: "Total completed visits or billable encounters per month." },
    allowed: { label: "Average allowed amount per visit" },
    currentNcr: {
      label: "Current net collection rate",
      help: "Typical range is 70 to 95 percent depending on specialty, payer mix, and billing quality.",
    },
    improvedNcr: { label: "Expected improved net collection rate" },
    ar: { label: "Current monthly AR over 60 days" },
    arRecovery: { label: "Estimated AR recovery percentage" },
    specialty: {
      label: "Specialty adjustment",
      help: "Higher-complexity specialties often have more room for coding, denial, and AR improvement.",
    },
  },
  specialties: [
    { label: "Primary Care / Internal Medicine", value: 1.0 },
    { label: "Urgent Care", value: 1.08 },
    { label: "Cardiology", value: 1.12 },
    { label: "Nephrology", value: 1.15 },
    { label: "OB/GYN", value: 1.1 },
    { label: "Pediatrics", value: 1.06 },
    { label: "Orthopedics / Pain", value: 1.14 },
    { label: "Behavioral Health", value: 1.09 },
    { label: "Surgery / ASC", value: 1.18 },
    { label: "Labs / Imaging", value: 1.05 },
  ],
  results: {
    eyebrow: "Estimated Opportunity",
    monthly: "Potential additional collections per month",
    yearly: "Potential additional collections per year",
    current: "Current monthly collections",
    projected: "Projected monthly collections",
    arGain: "AR recovery estimate",
    gap: "Improvement gap",
  },
  disclaimer:
    "This calculator is not a guarantee. It is an estimate designed to start a revenue conversation. For an accurate projection, Health Billing reviews your payer mix, claims, denial codes, aging AR, EHR reports, and specialty workflows.",
  button: { label: "Request a Free Revenue Audit", href: routes.freeAudit },
  cta: {
    title: "Want the Real Number, Not an Estimate?",
    lead: "Send us a recent AR aging report and a sample of EOBs. Within 5 business days you get a written projection built on your actual payer mix and claims.",
    button: { label: "Request a Free Revenue Audit", href: routes.freeAudit },
  } satisfies Cta,
};
