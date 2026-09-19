import type { ServicePage } from "@/content/types";
import { routes } from "@/content/site";

export const medicalTranscription: ServicePage = {
  slug: "medical-transcription",
  path: "/services/medical-transcription",
  name: "Medical Transcription",
  navSub: "Clinical documentation support",
  icon: "mic",
  homeBlurb: "Convert dictated clinical content into organized documentation through a scoped, HIPAA-compliant workflow.",
  hubBlurb: "Support clinical documentation preparation with clear templates, review steps and privacy-conscious handling.",
  meta: { title: "HIPAA-Compliant Medical Transcription Services", description: "Medical transcription support using HIPAA-compliant workflows, agreed document templates and defined quality-review steps." },
  hero: {
    breadcrumb: [{ label: "Home", href: routes.home }, { label: "Services", href: routes.services }],
    title: ["Medical Transcription", "Built Around Your Documentation Needs"],
    lead: "Revplus supports the preparation of clinical documentation from dictated content using agreed formats, review expectations and HIPAA-compliant handling of protected health information.",
  },
  blocks: [
    {
      type: "intro",
      eyebrow: "Transcription Support",
      title: "Define the Document, Delivery and Review Standard First",
      lead: "Transcription needs vary by specialty, note type, volume, platform and urgency. Revplus confirms those requirements before offering a service schedule.",
      bullets: [
        "Office notes and consultation documentation",
        "Procedure and operative report formatting",
        "Discharge and summary document support",
        "Radiology or pathology report formatting where scoped",
        "Specialty-specific templates supplied or approved by the practice",
        "Quality-review steps matched to the engagement",
        "Secure delivery method planning",
        "HIPAA-compliant handling of protected health information",
      ],
      aside: { kind: "blocks", items: [
        { title: "Input", body: "Agree how dictated content and supporting context are provided." },
        { title: "Format", body: "Use approved templates, terminology and document destinations." },
        { title: "Review", body: "Apply the quality checks and exception-handling process defined for the engagement." },
      ] },
    },
    {
      type: "cards",
      title: "Questions We Clarify During Scoping",
      columns: 3,
      items: [
        { icon: "file", title: "Document Types", body: "Which notes, reports or summaries are included?" },
        { icon: "timer", title: "Turnaround Needs", body: "What schedule is operationally necessary and realistically supportable?" },
        { icon: "layers", title: "Templates", body: "Which specialty, provider or facility formats should be followed?" },
        { icon: "lock", title: "Secure Handling", body: "How will PHI move through the approved workflow?" },
        { icon: "clipboard-check", title: "Review Standard", body: "What quality checks and provider sign-off steps are required?" },
        { icon: "send", title: "Delivery", body: "Where and how should completed documents be returned?" },
      ],
    },
  ],
  cta: { title: "Discuss Your Documentation Workflow", lead: "Share the note types, volume, formats and delivery process you need to support.", button: { label: "Request a Consultation", href: routes.freeAudit } },
};
