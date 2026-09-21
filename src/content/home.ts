import type { HomeContent } from "@/content/types";
import { routes } from "@/content/site";

export const home: HomeContent = {
  hero: {
    badge: "HIPAA-Compliant Revenue Cycle Support",
    title: ["More Clarity Across", "Your Revenue Cycle."],
    highlight: "Clarity",
    lead:
      "Revplus helps healthcare organizations organize medical billing, coding, claims, denials, credentialing and receivables through a clear, accountable workflow.",
    primary: { label: "Request a Consultation", href: routes.freeAudit },
    secondary: { label: "Explore Services", href: routes.services },
    stats: [
      { value: "HIPAA", label: "Compliant workflows" },
      { value: "Houston", label: "Texas-based company" },
      { value: "9", label: "Core service areas" },
      { value: "US", label: "Primary market focus" },
    ],
  },
  payerStrip: {
    label: "Common US payer environments",
    payers: ["Medicare", "Medicaid", "Blue Cross Blue Shield", "Aetna", "UnitedHealthcare", "Cigna", "Humana"],
    more: { label: "Payer workflow overview", href: routes.payers },
  },
  services: {
    eyebrow: "Revenue Cycle Services",
    title: ["Support for the Work", "Behind Every Claim"],
    lead:
      "Choose focused support for one operational area or discuss a coordinated revenue-cycle workflow tailored to your practice.",
    extra: {
      icon: "receipt",
      title: "Payment Posting & Reconciliation",
      body: "Organized ERA and EOB posting, adjustment review and reconciliation support that helps keep account balances understandable.",
      link: { label: "Discuss your workflow", href: routes.freeAudit },
    },
  },
  why: {
    eyebrow: "Why Revplus",
    title: ["A Disciplined Approach", "to Revenue Cycle Work"],
    lead:
      "Trust starts with knowing what is being worked, why it matters and what happens next. Our approach is designed around that visibility.",
    points: [
      {
        title: "Clear Ownership",
        body: "Responsibilities, next actions and open questions are documented so work does not disappear between teams.",
      },
      {
        title: "Structured Follow-Up",
        body: "Claims, denials and receivables are organized by status, priority and next action instead of being treated as a single queue.",
      },
      {
        title: "Practice-Aware Communication",
        body: "Billing conversations are translated into practical decisions for clinical and administrative teams.",
      },
      {
        title: "HIPAA-Compliant Workflows",
        body: "Protected health information is handled through privacy-conscious workflows designed around HIPAA requirements.",
      },
    ],
    metrics: [
      { label: "Claim readiness", value: "Review first", note: "Documentation, coding and claim details are checked before submission." },
      { label: "Payer response", value: "Track next", note: "Rejections, requests and denials are routed to a defined follow-up step." },
      { label: "Open balances", value: "Prioritize", note: "Receivables are segmented by age, payer and action required." },
      { label: "Practice visibility", value: "Explain clearly", note: "Reporting focuses on what changed, what is pending and what needs input." },
    ],
  },
  specialties: {
    eyebrow: "Specialty Workflows",
    title: ["Billing Support That Adapts", "to the Way You Deliver Care"],
    lead:
      "Different specialties create different documentation, coding and payer-follow-up patterns. Revplus begins by understanding those differences.",
    tiles: [
      { icon: "heart-pulse", label: "Cardiology" },
      { icon: "bone", label: "Orthopedics" },
      { icon: "stethoscope", label: "Primary Care" },
      { icon: "smile", label: "Behavioral Health" },
      { icon: "radio", label: "Radiology" },
      { icon: "microscope", label: "Pathology & Labs" },
      { icon: "activity", label: "Gastroenterology" },
      { icon: "baby", label: "Pediatrics" },
      { icon: "flower", label: "OB/GYN" },
      { icon: "moon", label: "Anesthesiology" },
      { icon: "zap", label: "Urgent Care" },
      { icon: "hospital", label: "Hospital Medicine" },
    ],
    moreTile: { label: "More", sub: "Discuss your specialty" },
    more: { label: "Explore Specialty Workflows", href: routes.specialties },
  },
  process: {
    eyebrow: "How We Work",
    title: "A Practical Path From Discovery to Delivery",
    lead:
      "Every engagement starts with your current workflow. Scope, access, responsibilities and reporting are agreed before operational work begins.",
    steps: [
      { title: "Understand", body: "We discuss your practice structure, payer mix, systems, pain points and current team responsibilities." },
      { title: "Map", body: "We document the handoffs, data access, priorities and service boundaries needed for a controlled transition." },
      { title: "Operate", body: "Agreed billing activities move through defined review, submission, follow-up and escalation steps." },
      { title: "Communicate", body: "Regular reporting keeps open issues, dependencies and next actions visible to the right people." },
    ],
  },
  principles: {
    eyebrow: "What Partnership Looks Like",
    title: "Useful Habits, Not Unverified Promises",
    lead:
      "Revplus earns confidence through a transparent process and responsible communication—not inflated numbers or invented success stories.",
    items: [
      { icon: "message", title: "Direct Communication", body: "Questions, blockers and requested decisions are surfaced early and explained in plain language." },
      { icon: "search", title: "Detail-Oriented Review", body: "Claim and account details are checked in context before a next action is selected." },
      { icon: "clipboard-check", title: "Documented Work", body: "Statuses and actions are recorded so your team can understand how an item moved forward." },
      { icon: "refresh", title: "Consistent Follow-Up", body: "Open work is revisited using defined queues and escalation paths instead of informal reminders." },
      { icon: "hand-heart", title: "Practice-Focused Support", body: "Recommendations consider the people, systems and constraints already present in your practice." },
      { icon: "lock", title: "Privacy-Conscious Operations", body: "HIPAA-compliant handling of protected health information is built into the operating approach." },
    ],
  },
  cta: {
    title: "Let’s Talk About Your Billing Workflow",
    lead:
      "Share where the process feels unclear or difficult. Revplus will help you identify the most useful place to begin—without promising an outcome before reviewing the facts.",
    button: { label: "Request a Consultation", href: routes.freeAudit },
    secondary: { label: "Call +1 (832) 942-9040", href: "tel:+18329429040" },
  },
};
