import type { ServicePage } from "@/content/types";
import { routes } from "@/content/site";

export const medicalCoding: ServicePage = {
  slug: "medical-coding",
  path: "/services/medical-coding",
  name: "Medical Coding",
  navSub: "CPT, ICD-10, HCPCS, modifiers",
  icon: "clipboard-check",
  homeBlurb:
    "CPC-certified coders across 40+ specialties. ICD-10, CPT, HCPCS — accurate, audit-ready, and reimbursement-maximized.",
  hubBlurb:
    "CPC & CCS-certified coders. ICD-10-CM, CPT, HCPCS. Outpatient, inpatient, surgical, E&M across 40+ specialties.",
  meta: {
    title: "Medical Coding by Certified Specialists",
    description:
      "CPC, CCS, and CPMA-credentialed coders across 40+ specialties. Accurate ICD-10-CM, CPT, and HCPCS coding that maximizes reimbursement with full compliance.",
  },
  hero: {
    breadcrumb: [
      { label: "Home", href: routes.home },
      { label: "Services", href: routes.services },
    ],
    title: ["Medical Coding by", "Certified Specialists"],
    lead: "CPC, CCS, and CPMA-credentialed coders across 40+ specialties. Accurate ICD-10-CM, CPT, HCPCS coding that maximizes reimbursement while maintaining full compliance.",
    stats: [
      { value: "99.1%", label: "Coding accuracy" },
      { value: "40+", label: "Specialties" },
      { value: "CPC/CCS", label: "Certified coders only" },
      { value: "72hr", label: "Standard coding TAT" },
    ],
  },
  blocks: [
    {
      type: "intro",
      eyebrow: "Coding Services",
      title: "Every Code Has a Dollar Value. We Capture All of It.",
      lead: "Upcoding creates liability. Downcoding leaves money on the table. Incorrect codes trigger denials, audits, and compliance investigations. Our certified coders assign the right codes, with the right modifiers, every time.",
      bullets: [
        "ICD-10-CM diagnosis coding to highest specificity",
        "CPT-4 procedure coding for all specialties",
        "HCPCS Level II coding (DME, drugs, supplies)",
        "E&M visit level determination and documentation review",
        "Surgical and procedural coding with modifier assignment",
        "Outpatient and inpatient facility coding",
        "DRG assignment and optimization for hospitals",
        "Clinical documentation improvement (CDI) queries",
        "Pre- and post-payment coding audits",
        "Coding compliance program development",
      ],
      aside: {
        kind: "blocks",
        items: [
          {
            title: "Why Coding Accuracy is Mission-Critical",
            body: "A single missing ICD-10 digit can turn a valid claim into a denial. A wrong CPT modifier can cut your reimbursement by 50%. Our coders average 8+ years of specialty-specific experience and maintain continuous AAPC/AHIMA certification.",
          },
          {
            title: "Specialty-Specific Coding Teams",
            body: "Cardiology codes differently from orthopedics. Oncology requires a different knowledge base than behavioral health. We assign coders who specialize in your exact service lines — not generalists covering everything.",
          },
          {
            title: "Audit-Ready Documentation",
            body: "Every code we assign is traceable to specific documentation. In the event of a payer audit or OIG review, you have a complete, defensible record of every coding decision.",
          },
        ],
      },
    },
    {
      type: "tiles",
      id: "specialties-we-code",
      title: "Specialties We Code",
      items: [
        { icon: "heart-pulse", label: "Cardiology" },
        { icon: "bone", label: "Orthopedic Surgery" },
        { icon: "brain", label: "Neurology" },
        { icon: "microscope", label: "Pathology & Lab" },
        { icon: "flask", label: "Oncology" },
        { icon: "stethoscope", label: "Internal Medicine" },
        { icon: "eye", label: "Ophthalmology" },
        { icon: "smile", label: "Behavioral Health" },
        { icon: "radio", label: "Radiology" },
        { icon: "moon", label: "Anesthesiology" },
        { icon: "ambulance", label: "Emergency Medicine" },
        { icon: "scissors", label: "Outpatient Surgery" },
      ],
    },
  ],
  cta: {
    title: "Free Coding Audit — Find Out What You're Missing",
    lead: "We'll review 100 recent claims and identify coding errors, missed codes, and underpayment patterns — at no charge.",
    button: { label: "Request Free Coding Audit", href: routes.freeAudit },
  },
};
