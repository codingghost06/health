import type { Cta, PageHero } from "@/content/types";
import { routes } from "@/content/site";

export const calculatorPage = {
  meta: {
    title: "Medical Billing Scenario Calculator",
    description:
      "Model a medical billing collection scenario using assumptions you control. Formula and limitations are shown clearly; results are not a forecast or guarantee.",
  },
  hero: {
    breadcrumb: [{ label: "Home", href: routes.home }],
    title: ["Medical Billing", "Scenario Calculator"],
    lead: "Compare a current collection-rate assumption with a target scenario using values you provide. Replace the illustrative defaults with information from your own reports.",
  } satisfies PageHero,
  eyebrow: "Planning Tool",
  title: "Test Your Own Assumptions",
  fields: {
    visits: { label: "Monthly patient visits", help: "Total completed visits or billable encounters per month." },
    allowed: { label: "Average allowed amount per visit" },
    currentNcr: {
      label: "Current net collection rate",
      help: "Use a figure from your own reporting when available.",
    },
    improvedNcr: { label: "Expected improved net collection rate" },
    ar: { label: "Current monthly AR over 60 days" },
    arRecovery: { label: "Estimated AR recovery percentage" },
  },
  results: {
    eyebrow: "Illustrative Scenario",
    monthly: "Difference in this monthly scenario",
    yearly: "Annualized scenario difference",
    current: "Current monthly collections",
    projected: "Projected monthly collections",
    arGain: "AR recovery estimate",
    gap: "Improvement gap",
  },
  disclaimer:
    "Formula: (visits × allowed amount × target rate) − current modeled collections + (aged AR × recovery assumption). This simplified scenario ignores timing, payer contracts, claim mix, denials, patient responsibility, fees and other real-world variables. It is not a forecast, valuation or guarantee.",
  button: { label: "Discuss the Assumptions", href: routes.freeAudit },
  cta: {
    title: "Need Help Interpreting the Scenario?",
    lead: "A conversation can help identify which assumptions require better data before any operational decision is made.",
    button: { label: "Request a Consultation", href: routes.freeAudit },
  } satisfies Cta,
};
