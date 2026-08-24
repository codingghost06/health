export const site = {
  name: "Health Billing",
  legalName: "Health Billing LLC",
  tagline: "America's Revenue Experts",
  url: "https://healthbilling.us",
  title: "Health Billing | America's Premier Medical Billing & Revenue Cycle Management",
  description:
    "Health Billing — expert medical billing, RCM, coding, credentialing, denial management & AR recovery for physicians, hospitals, labs and clinics across the USA. Medicare, Medicaid & all private insurers.",
  phone: { display: "+1 (415) 939-6721", href: "tel:+14159396721", e164: "+1-415-939-6721" },
  email: { display: "hello@healthbilling.us", href: "mailto:hello@healthbilling.us" },
  address: {
    street: "97 Newkirk Street",
    city: "Jersey City",
    region: "NJ",
    postalCode: "07306",
    country: "US",
    display: "97 Newkirk Street, Jersey City, NJ 07306",
  },
  hours: ["Mon–Fri: 8:00 AM – 8:00 PM ET", "Saturday: 9:00 AM – 2:00 PM ET"],
  badges: ["HIPAA", "SOC 2", "HFMA", "AAPC"],
  copyrightYear: 2025,
  /** Lead inbox for the free-audit form. */
  leadInbox: "hello@healthbilling.us",
} as const;

export const routes = {
  home: "/",
  services: "/services",
  payers: "/payers",
  specialties: "/specialties",
  departments: "/departments",
  payerCollections: "/payer-collections",
  calculator: "/calculator",
  resources: "/resources",
  freeAudit: "/free-audit",
} as const;
