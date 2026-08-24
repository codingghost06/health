import type { ServicePage } from "@/content/types";
import { routes } from "@/content/site";

export const medicalTranscription: ServicePage = {
  slug: "medical-transcription",
  path: "/services/medical-transcription",
  name: "Medical Transcription",
  navSub: "Medical transcription",
  icon: "mic",
  homeBlurb:
    "99.5% accuracy. HIPAA-secure. Direct EHR delivery. STAT 4-hour and standard 24-hour turnaround options.",
  hubBlurb:
    "99.5%+ accuracy. HIPAA-secure. Direct EHR integration. STAT 4-hour turnaround available.",
  meta: {
    title: "Medical Transcription Services HIPAA-Secure & Accurate",
    description:
      "99.5%+ accuracy. Fast turnaround. Direct EHR integration. We turn your dictations into structured, compliant clinical documentation — reliably. HIPAA-secure.",
  },
  hero: {
    breadcrumb: [
      { label: "Home", href: routes.home },
      { label: "Services", href: routes.services },
    ],
    title: ["Medical Transcription Services", "HIPAA-Secure & Accurate"],
    lead: "99.5%+ accuracy. Fast turnaround. Direct EHR integration. We turn your dictations into structured, compliant clinical documentation — reliably.",
    stats: [
      { value: "99.5%+", label: "Accuracy rate" },
      { value: "4hr STAT", label: "Emergency TAT" },
      { value: "100+", label: "EHR integrations" },
      { value: "HIPAA", label: "Fully compliant + BAA" },
    ],
  },
  blocks: [
    {
      type: "intro",
      eyebrow: "Transcription Services",
      title: "Clinical Documentation Done Right. Every Time.",
      lead: "Poor documentation causes coding errors, medical necessity denials, audit exposure, and clinical communication failures. Our transcriptionists are trained across 40+ specialties, producing documentation that is accurate, complete, and billing-ready.",
      bullets: [
        "Acute care and ambulatory transcription",
        "Discharge summaries and operative reports",
        "Office visit and consult notes",
        "Radiology and pathology reports",
        "Psychiatric evaluations and therapy notes",
        "Emergency medicine documentation",
        "PT, OT, and speech therapy notes",
        "Direct EHR upload via HL7 and direct interfaces",
        "STAT, 24-hour, and standard TAT options",
      ],
      aside: {
        kind: "blocks",
        items: [
          {
            title: "Human + AI-Assisted Workflow",
            body: "AI-assisted transcription as a first pass, then every document reviewed and quality-assured by an experienced human transcriptionist. AI speed at human accuracy levels.",
          },
          {
            title: "HIPAA Security You Can Count On",
            body: "256-bit AES encryption in transit and at rest. Signed BAA. Role-based access controls. Regular security audits. Patient data protected at every step.",
          },
          {
            title: "Turnaround Times That Match Your Workflow",
            body: "STAT (4 hours), Priority (12 hours), and Standard (24 hours) options. Customizable scheduling to match your dictation volume and clinical needs.",
          },
        ],
      },
    },
  ],
  cta: {
    title: "Start Receiving Accurate Transcriptions Within 48 Hours",
    lead: "Setup is fast, integration is seamless, and we offer a free trial for new clients.",
    button: { label: "Start Free Transcription Trial", href: routes.freeAudit },
  },
};
