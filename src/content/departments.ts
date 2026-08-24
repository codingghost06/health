import type { InnerPage } from "@/content/types";
import { routes } from "@/content/site";

export const departmentsPage: InnerPage = {
  slug: "departments",
  path: routes.departments,
  meta: {
    title: "Medical Billing for Every Department and Every Type of Clinic",
    description:
      "Health Billing builds department-specific billing workflows so every visit, procedure, test, and follow-up is coded, submitted, appealed, and collected correctly.",
  },
  hero: {
    breadcrumb: [{ label: "Home", href: routes.home }],
    title: ["Medical Billing for Every Department", "and Every Type of Clinic"],
    lead: "Primary care, urgent care, nephrology, cardiology, OB/GYN, pediatrics, behavioral health, labs, imaging, surgery centers, and specialty groups all have different codes, payer rules, authorizations, and denial patterns. Health Billing builds department-specific billing workflows so every visit, procedure, test, and follow-up is coded, submitted, appealed, and collected correctly.",
    stats: [
      { value: "40+", label: "Departments covered" },
      { value: "24hr", label: "Claim submission target" },
      { value: "500+", label: "Payers supported" },
      { value: "All 50", label: "States served" },
    ],
  },
  blocks: [
    {
      type: "cards",
      id: "departments",
      eyebrow: "Department-Specific RCM",
      title: "Built Around How Each Specialty Actually Gets Paid",
      lead: "A primary care clinic loses revenue differently than a nephrology group. Urgent care needs speed, OB/GYN needs package accuracy, cardiology needs documentation and modifier precision, while behavioral health needs authorization and parity-aware follow-up. We create a custom billing lane for every department.",
      columns: 4,
      variant: "default",
      items: [
        {
          id: "primary-care-internal-medicine",
          icon: "stethoscope",
          title: "Primary Care & Internal Medicine",
          body: "High-volume E&M, preventive visits, AWV, CCM, TCM, vaccine administration, lab coordination, and chronic disease billing.",
          bullets: [
            "E&M leveling and modifier checks",
            "Annual wellness visit capture",
            "CCM, RPM, and care management billing",
          ],
        },
        {
          id: "urgent-care",
          icon: "zap",
          title: "Urgent Care",
          body: "Fast-paced billing for walk-ins, occupational health, minor procedures, X-rays, flu tests, injections, and payer-specific urgent care rules.",
          bullets: [
            "Same-day charge entry",
            "S9083 and POS handling",
            "Occupational medicine and work injury claims",
          ],
        },
        {
          id: "nephrology",
          icon: "droplets",
          title: "Nephrology",
          body: "ESRD, dialysis, CKD, transplant follow-up, monthly capitation, home dialysis, and complex Medicare and Medicaid coordination.",
          bullets: [
            "ESRD MCP billing",
            "Dialysis visit reconciliation",
            "Dual-eligible payer coordination",
          ],
        },
        {
          id: "cardiology",
          icon: "heart-pulse",
          title: "Cardiology",
          body: "Echo, stress testing, EKG, cath lab, EP studies, device monitoring, RPM, and cardiovascular procedure documentation review.",
          bullets: [
            "Modifier and global period checks",
            "Diagnostics and procedure billing",
            "Prior authorization follow-up",
          ],
        },
        {
          id: "obgyn-womens-health",
          icon: "flower",
          title: "OB/GYN & Women’s Health",
          body: "Global maternity packages, antepartum and postpartum care, gynecology procedures, screenings, fertility, and ultrasound billing.",
          bullets: [
            "Global OB package accuracy",
            "Split billing where required",
            "Preventive versus diagnostic coding",
          ],
        },
        {
          id: "pediatrics",
          icon: "baby",
          title: "Pediatrics",
          body: "Well-child visits, vaccine administration, Medicaid, CHIP, developmental screening, sick visits, and pediatric preventive care.",
          bullets: [
            "EPSDT and CHIP workflows",
            "Immunization code pairing",
            "Age-specific coding checks",
          ],
        },
        {
          id: "behavioral-health",
          icon: "smile",
          title: "Behavioral Health",
          body: "Psychiatry, therapy, counseling, substance use treatment, IOP, MAT, ABA, and authorization-heavy payer workflows.",
          bullets: [
            "Session and time-based billing",
            "Auth and medical necessity tracking",
            "Parity-aware denial appeals",
          ],
        },
        {
          id: "orthopedics-pain-management",
          icon: "bone",
          title: "Orthopedics & Pain Management",
          body: "Fracture care, injections, procedures, spine, sports medicine, DME coordination, global surgical periods, and imaging linkage.",
          bullets: [
            "Procedure and modifier review",
            "Global package management",
            "Implant and DME documentation",
          ],
        },
        {
          id: "labs-pathology-diagnostics",
          icon: "microscope",
          title: "Labs, Pathology & Diagnostics",
          body: "Clinical lab, pathology, molecular diagnostics, toxicology, imaging, radiology, and payer policy-driven testing workflows.",
          bullets: [
            "Medical necessity checks",
            "CLIA and LCD/NCD alignment",
            "Professional and technical components",
          ],
        },
        {
          id: "emergency-medicine",
          icon: "ambulance",
          title: "Emergency Medicine",
          body: "ED E&M, trauma, critical care, observation, facility coordination, no-fault, and complex payer dispute handling.",
          bullets: [
            "ED level validation",
            "Critical care documentation",
            "No Surprises Act awareness",
          ],
        },
        {
          id: "surgery-asc-billing",
          icon: "scissors",
          title: "Surgery & ASC Billing",
          body: "General surgery, ambulatory surgery centers, anesthesia, assistant surgeon billing, implants, global periods, and post-op care.",
          bullets: [
            "ASC and professional claim split",
            "Global period monitoring",
            "Authorization and operative note review",
          ],
        },
        {
          id: "telehealth-virtual-care",
          icon: "globe",
          title: "Telehealth & Virtual Care",
          body: "Telehealth, remote patient monitoring, chronic care management, principal care management, and virtual-first clinic billing.",
          bullets: [
            "POS and modifier accuracy",
            "Audio-only versus video billing",
            "RPM and CCM recurring claims",
          ],
        },
      ],
    },
    {
      type: "cards",
      title: "What We Customize for Each Department",
      columns: 3,
      variant: "accent",
      items: [
        {
          title: "Coding Rules",
          body: "Specialty-specific CPT, ICD-10, HCPCS, modifiers, bundling edits, global periods, and documentation requirements.",
        },
        {
          title: "Payer Rules",
          body: "Cigna, Aetna, UHC, BCBS, Humana, Medicare, Medicaid, and MCO rules mapped to your specialty and state.",
        },
        {
          title: "Collection Strategy",
          body: "Follow-up queues built by denial type, payer, aging bucket, authorization risk, and claim value.",
        },
      ],
    },
  ],
  cta: {
    title: "Tell Us Your Department. We Will Show the Revenue Leaks.",
    lead: "Book a free billing assessment and get a specialty-specific review of claims, denials, AR aging, payer mix, and collection opportunity.",
    button: { label: "Request Department Billing Audit", href: routes.freeAudit },
  },
};
