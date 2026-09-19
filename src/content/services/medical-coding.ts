import type { ServicePage } from "@/content/types";
import { routes } from "@/content/site";

export const medicalCoding: ServicePage = {
  slug: "medical-coding",
  path: "/services/medical-coding",
  name: "Medical Coding",
  navSub: "CPT, ICD-10-CM & HCPCS support",
  icon: "clipboard-check",
  homeBlurb: "Coding support that connects documented services with appropriate CPT, ICD-10-CM, HCPCS and modifier review.",
  hubBlurb: "Support documentation-aware code selection, review and correction workflows before claims move forward.",
  meta: { title: "Medical Coding Support Services", description: "Documentation-aware medical coding support for CPT, ICD-10-CM, HCPCS, modifiers and coding review workflows." },
  hero: {
    breadcrumb: [{ label: "Home", href: routes.home }, { label: "Services", href: routes.services }],
    title: ["Medical Coding With", "Documentation in Context"],
    lead: "Coding affects claim clarity, medical-necessity support and payer review. Revplus helps practices organize accurate, traceable coding work within the agreed service scope.",
  },
  blocks: [
    {
      type: "intro",
      eyebrow: "Coding Support",
      title: "Connect the Record to the Claim",
      lead: "A code should reflect the documented service—not a target reimbursement. Our workflow emphasizes documentation, applicable coding guidance and questions that need clinical clarification.",
      bullets: [
        "CPT procedure and service code review",
        "ICD-10-CM diagnosis code review",
        "HCPCS Level II support where applicable",
        "Modifier review in the context of the documented service",
        "Evaluation and management documentation review",
        "Coding-related rejection and denial research",
        "Coding query routing when documentation needs clarification",
        "Pre- or post-submission sampling based on the agreed scope",
      ],
      aside: { kind: "blocks", items: [
        { title: "Start With Documentation", body: "Review what the clinical record supports before selecting or validating a code." },
        { title: "Apply the Right Context", body: "Consider service setting, payer guidance, specialty workflow and modifier use without assuming every payer behaves the same way." },
        { title: "Keep Decisions Traceable", body: "Document coding questions and resolution paths so repeated issues can be recognized and discussed." },
      ] },
    },
    {
      type: "tiles",
      id: "specialties-we-code",
      title: "Specialty Contexts We Can Discuss",
      lead: "Support is scoped only after the specialty, documentation and coding requirements are reviewed.",
      items: [
        { icon: "heart-pulse", label: "Cardiology" }, { icon: "bone", label: "Orthopedics" },
        { icon: "stethoscope", label: "Primary Care" }, { icon: "smile", label: "Behavioral Health" },
        { icon: "radio", label: "Radiology" }, { icon: "microscope", label: "Pathology & Labs" },
        { icon: "baby", label: "Pediatrics" }, { icon: "flower", label: "OB/GYN" },
        { icon: "moon", label: "Anesthesiology" }, { icon: "ambulance", label: "Emergency Medicine" },
      ],
    },
  ],
  cta: { title: "Discuss Your Coding Workflow", lead: "Explain where documentation, code review or coding-related denials are creating friction.", button: { label: "Request a Consultation", href: routes.freeAudit } },
};
