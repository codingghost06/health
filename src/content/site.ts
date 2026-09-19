export const site = {
  name: "Revplus Multisolutions",
  medicalName: "Revplus Medical Solutions",
  legalName: "Revplus Multisolutions",
  tagline: "Medical Revenue Cycle Support",
  // Keep the currently active GitHub Pages custom domain canonical until the
  // new domain is connected and verified. See README.md for the cutover steps.
  url: "https://healthbilling.us",
  displayDomain: "Revplusmedsolutions.com",
  futureUrl: "https://revplusmedsolutions.com",
  title: "Revplus Medical Solutions | Medical Billing & Revenue Cycle Support",
  description:
    "Houston-based medical billing and revenue cycle support for healthcare organizations, including coding, claims, denials, credentialing and accounts receivable follow-up.",
  phone: { display: "+1 (832) 942-9040", href: "tel:+18329429040", e164: "+1-832-942-9040" },
  address: {
    street: "4065 S Braeswood Blvd",
    city: "Houston",
    region: "TX",
    postalCode: "77025",
    country: "US",
    display: "4065 S Braeswood Blvd, Houston, TX 77025, United States",
  },
  trustIndicators: ["HIPAA-Compliant Workflows", "Houston, Texas"],
  copyrightYear: 2026,
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
  privacy: "/privacy",
  terms: "/terms",
} as const;
