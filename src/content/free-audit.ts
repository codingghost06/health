import type { IconName } from "@/components/ui/icon";
import type { PageHero } from "@/content/types";
import { routes, site } from "@/content/site";

export const freeAuditPage = {
  meta: {
    title: "Request a Medical Billing Consultation",
    description:
      "Talk with Revplus Medical Solutions about medical billing, coding, claims, denials, credentialing or accounts receivable support in Houston, Texas.",
  },
  hero: {
    breadcrumb: [{ label: "Home", href: routes.home }],
    title: ["Discuss Your Billing Workflow"],
    lead:
      "Tell us where the process feels difficult or unclear. We will use the conversation to understand your needs and determine whether Revplus is a practical fit.",
  } satisfies PageHero,
  form: {
    title: "Request a Consultation",
    submit: "Send Consultation Request",
    footnote: "Please do not include patient names, medical records or other protected health information in this form.",
    success: {
      title: "Thank you. Your request was received.",
      body: "A Revplus representative will review the information and contact you using the details you provided.",
    },
    labels: {
      practice: "Practice / Organization Name",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Your Email Address",
      phone: "Phone Number",
      specialty: "Specialty / Practice Type",
      service: "Service of Interest",
      message: "What Would You Like to Discuss?",
    },
    placeholders: {
      practice: "e.g. Your practice name",
      firstName: "First name",
      lastName: "Last name",
      email: "you@organization.com",
      phone: "+1 (555) 000-0000",
      specialty: "Select specialty...",
      service: "Select service...",
      message: "Describe the workflow, backlog or question you want to discuss. Do not include PHI.",
    },
  },
  direct: {
    title: "Contact Revplus",
    items: <{ icon: IconName; label: string; value: string; href?: string }[]>[
      { icon: "phone", label: "Phone", value: site.phone.display, href: site.phone.href },
      { icon: "map-pin", label: "Houston Office", value: `${site.address.street}\n${site.address.city}, ${site.address.region} ${site.address.postalCode}\nUnited States` },
      { icon: "globe", label: "Website", value: site.displayDomain },
    ],
  },
  after: {
    title: "What Happens Next?",
    items: [
      "We review the practice and service information you provide",
      "A representative contacts you to arrange an introductory conversation",
      "You explain the current workflow, priorities and constraints—no PHI is needed for the first discussion",
      "If there is a fit, scope, access, responsibilities and next steps are documented before work begins",
    ],
  },
  trust: {
    icon: "shield-check" as IconName,
    title: "HIPAA-Compliant Workflows",
    body: "Healthcare information is handled through privacy-conscious processes designed around HIPAA requirements. This public form is not intended for protected health information.",
  },
};
