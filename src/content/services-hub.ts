import type { Cta, ListCard, PageHero } from "@/content/types";
import { routes } from "@/content/site";

export const servicesHub = {
  meta: {
    title: "Complete Revenue Cycle Services",
    description:
      "Every service your practice needs to maximize collections, cut denials, and stay compliant — medical billing, coding, RCM, credentialing, denial management, AR recovery and more.",
  },
  hero: {
    breadcrumb: [{ label: "Home", href: routes.home }],
    title: ["Complete Revenue Cycle Services"],
    lead: "Every service your practice needs to maximize collections, cut denials, and stay compliant — all from one dedicated team.",
  } satisfies PageHero,
  /** Ninth card on the hub that has no dedicated page. */
  extra: {
    icon: "shield-check",
    title: "Compliance & Audit Support",
    body: "Internal coding audits, HIPAA risk assessments, OIG compliance programs, and documentation quality reviews.",
    link: { label: "Contact Us", href: routes.freeAudit },
  } satisfies ListCard & { link: { label: string; href: string } },
  cta: {
    title: "Not Sure Where to Start?",
    lead: "Let our specialists run a free assessment of your current billing — we'll show you exactly what's leaking and how to fix it.",
    button: { label: "Request Free Assessment", href: routes.freeAudit },
  } satisfies Cta,
};
