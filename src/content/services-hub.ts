import type { Cta, ListCard, PageHero } from "@/content/types";
import { routes } from "@/content/site";

export const servicesHub = {
  meta: {
    title: "Medical Billing & Revenue Cycle Services",
    description:
      "Explore medical billing, coding, RCM, credentialing, denial management, claims, transcription and accounts receivable support from Revplus.",
  },
  hero: {
    breadcrumb: [{ label: "Home", href: routes.home }],
    title: ["Revenue Cycle Support", "With a Defined Scope"],
    lead: "Choose help for one operational area or discuss how multiple services can work together around your existing team and systems.",
  } satisfies PageHero,
  /** Ninth card on the hub that has no dedicated page. */
  extra: {
    icon: "shield-check",
    title: "Workflow Review",
    body: "Map responsibilities, handoffs, open queues and reporting needs before deciding which service area to address first.",
    link: { label: "Discuss your workflow", href: routes.freeAudit },
  } satisfies ListCard & { link: { label: string; href: string } },
  cta: {
    title: "Not Sure Where to Begin?",
    lead: "Describe the part of your revenue cycle that is hardest to see, manage or follow up. We will help define a sensible starting point.",
    button: { label: "Request a Consultation", href: routes.freeAudit },
  } satisfies Cta,
};
