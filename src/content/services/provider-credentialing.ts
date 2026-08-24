import type { ServicePage } from "@/content/types";
import { routes } from "@/content/site";

export const providerCredentialing: ServicePage = {
  slug: "provider-credentialing",
  path: "/services/provider-credentialing",
  name: "Provider Credentialing",
  navSub: "Payer enrollment & CAQH",
  icon: "badge-check",
  homeBlurb:
    "Fast enrollment with Medicare, Medicaid, and all 500+ commercial payers. Average completion: 28 days.",
  hubBlurb:
    "Medicare, Medicaid, and all 500+ commercial payer enrollment. Average 28-day completion. CAQH managed.",
  meta: {
    title: "Provider Credentialing & Payer Enrollment Services",
    description:
      "Every day a provider isn't credentialed is revenue lost. We enroll with Medicare, Medicaid, and every major insurer — faster than anyone in the business.",
  },
  hero: {
    breadcrumb: [
      { label: "Home", href: routes.home },
      { label: "Services", href: routes.services },
    ],
    title: ["Provider Credentialing &", "Payer Enrollment Services"],
    lead: "Every day a provider isn't credentialed is revenue lost. We enroll with Medicare, Medicaid, and every major private insurer — faster than anyone else in the business.",
    stats: [
      { value: "28 days", label: "Average enrollment" },
      { value: "500+", label: "Payers in network" },
      { value: "99%", label: "Success rate" },
      { value: "All 50", label: "States active" },
    ],
  },
  blocks: [
    {
      type: "intro",
      eyebrow: "Credentialing Services",
      title: "Credentialing Delays Cost You Thousands. We Eliminate the Wait.",
      lead: "A new provider who isn't credentialed can't bill. An expired CAQH attestation can cost you payer contracts. Our credentialing specialists manage every detail so your providers are enrolled, active, and generating revenue on schedule.",
      bullets: [
        "Medicare Part A & B enrollment (CMS-855 applications)",
        "All 50 state Medicaid programs enrollment",
        "All major commercial payer credentialing",
        "CAQH profile setup and continuous re-attestation",
        "NPI registration (Type 1 & 2) and taxonomy management",
        "Group practice enrollment and re-credentialing",
        "Hospital privilege applications and peer review",
        "State medical license verification and tracking",
        "DEA and CDS registration management",
        "TRICARE, CHAMPVA, and VA Community Care enrollment",
        "Credentialing status tracking and proactive expiration alerts",
      ],
    },
    {
      type: "chips",
      title: "Payers We Credential With:",
      items: [
        "Medicare",
        "All 50 Medicaid",
        "BCBS",
        "Aetna",
        "UnitedHealthcare",
        "Cigna",
        "Humana",
        "Molina",
        "Centene",
        "TRICARE",
      ],
      more: { label: "+ 490 more", href: routes.payers },
    },
    {
      type: "steps",
      title: "Our Credentialing Process",
      items: [
        {
          title: "Provider Data Collection",
          body: "We gather all required documentation: licenses, DEA, malpractice, NPI, training certificates, and work history. Our checklist ensures nothing is missed on the first submission.",
        },
        {
          title: "CAQH Profile Management",
          body: "Complete CAQH setup or audit of existing profiles. Continuous re-attestation monitoring — we alert you 60 days before expiration and re-attest automatically.",
        },
        {
          title: "Payer Application Submission",
          body: "Simultaneous enrollment with Medicare, Medicaid, and all targeted commercial payers. Payer-specific applications prepared correctly the first time.",
        },
        {
          title: "Active Weekly Follow-Up",
          body: "Weekly payer follow-up from day one. We escalate when payers stall. Our relationships with credentialing departments move applications faster.",
        },
        {
          title: "Enrollment Confirmation & Activation",
          body: "We confirm effective dates, obtain provider IDs, and update your billing system immediately so billing can begin the same day enrollment is confirmed.",
        },
      ],
    },
    {
      type: "cards",
      title: "Why Credential With Us",
      columns: 4,
      variant: "centered",
      items: [
        {
          icon: "zap",
          title: "28-Day Average Enrollment",
          body: "vs. 90+ days managed in-house. We know the payers, portals, and people.",
        },
        {
          icon: "clipboard-check",
          title: "Zero Application Errors",
          body: "Dual-review before every submission. Incomplete applications are the #1 cause of delays — we eliminate them.",
        },
        {
          icon: "bell",
          title: "Proactive Expiration Monitoring",
          body: "We track every license, DEA, and CAQH attestation — alerting you 60–90 days before expiration.",
        },
        {
          icon: "dollar",
          title: "Protect Your Revenue",
          body: "Each unresolved credentialing issue costs $10K–$50K/month in delayed billing. We keep that number at zero.",
        },
      ],
    },
  ],
  cta: {
    title: "New Provider? Credentialing Backlog? We Can Help.",
    lead: "Whether onboarding one provider or fifty, we handle the entire credentialing process so your team can focus on patient care.",
    button: { label: "Start Credentialing Today", href: routes.freeAudit },
  },
};
