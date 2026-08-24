import type { IconName } from "@/components/ui/icon";
import type { PageHero } from "@/content/types";
import { routes, site } from "@/content/site";

export const freeAuditPage = {
  meta: {
    title: "Get Your Free Revenue Audit",
    description:
      "Request a free, no-obligation revenue audit. A Health Billing revenue cycle specialist will contact you within 4 business hours with specific revenue opportunity numbers.",
  },
  hero: {
    breadcrumb: [{ label: "Home", href: routes.home }],
    title: ["Get Your Free Revenue Audit"],
    lead: "Fill out the form and one of our revenue cycle specialists will be in touch within 4 business hours — at no cost and no obligation.",
  } satisfies PageHero,
  form: {
    title: "Tell Us About Your Practice",
    submit: "Request My Free Revenue Audit",
    footnote: "HIPAA-secure. No commitment required. Response within 4 business hours.",
    success: {
      title: "Thank you! Your request is in.",
      body: "A revenue cycle specialist will reach out within 4 business hours. If it's urgent, call us any time during office hours.",
    },
    labels: {
      practice: "Practice / Organization Name",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      phone: "Phone Number",
      specialty: "Specialty / Practice Type",
      service: "Service You're Most Interested In",
      message: "Tell Us About Your Current Challenges",
    },
    placeholders: {
      practice: "e.g. Atlanta Cardiology Group",
      firstName: "First name",
      lastName: "Last name",
      email: "your@email.com",
      phone: "+1 (555) 000-0000",
      specialty: "Select specialty...",
      service: "Select service...",
      message: "e.g. High denial rates, aging AR, credentialing delays, switching billing companies...",
    },
  },
  direct: {
    title: "Get in Touch Directly",
    items: <{ icon: IconName; label: string; value: string; href?: string }[]>[
      { icon: "phone", label: "Phone", value: site.phone.display, href: site.phone.href },
      { icon: "mail", label: "Email", value: site.email.display, href: site.email.href },
      { icon: "map-pin", label: "Address", value: `${site.address.street}\n${site.address.city}, ${site.address.region} ${site.address.postalCode}` },
      { icon: "clock", label: "Office Hours", value: site.hours.join("\n") },
    ],
  },
  after: {
    title: "What Happens After You Submit?",
    items: [
      "A revenue cycle specialist contacts you within 4 hours",
      "We schedule a 30-minute discovery call at your convenience",
      "We review your current billing data (no PHI required initially)",
      "We deliver a written assessment with specific revenue opportunity numbers",
      "You decide if and when to proceed — zero pressure",
    ],
  },
  trust: {
    icon: "trophy" as IconName,
    title: "America's Most Trusted Medical Billing Partner",
    body: "Rated #1 for clean claim rate, denial resolution, and client satisfaction — three years running.",
  },
};
