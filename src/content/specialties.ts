import type { InnerPage } from "@/content/types";
import { routes } from "@/content/site";

export const specialtiesPage: InnerPage = {
  slug: "specialties",
  path: routes.specialties,
  meta: { title: "Medical Billing Support by Specialty", description: "Explore how documentation, coding and payer workflows can differ across common healthcare specialties." },
  hero: {
    breadcrumb: [{ label: "Home", href: routes.home }],
    title: ["Specialty Context Matters", "Across the Revenue Cycle"],
    lead: "Revplus adapts its proposed scope to the specialty, care setting, documentation and payer environment. A listed specialty is an area for discussion—not a claim of universal expertise.",
  },
  blocks: [
    {
      type: "cards",
      id: "specialty-workflows",
      eyebrow: "Specialty Workflows",
      title: "Different Services Create Different Billing Questions",
      lead: "We review the actual services and workflow before representing what support can be provided.",
      columns: 3,
      items: [
        { id: "cardiology", icon: "heart-pulse", title: "Cardiology", body: "Diagnostic testing, procedures, monitoring and medical-necessity documentation can create distinct coding and authorization questions." },
        { id: "orthopedics", icon: "bone", title: "Orthopedics", body: "Procedures, imaging, supplies, therapy and global-period context affect how claims are prepared and followed." },
        { id: "neurology", icon: "brain", title: "Neurology", body: "Diagnostic services, procedures and ongoing treatment plans can introduce detailed documentation and authorization dependencies." },
        { id: "primary-care-internal-medicine", icon: "stethoscope", title: "Primary Care", body: "High encounter volume, preventive services and ongoing-care workflows require consistent documentation and claim routing." },
        { id: "behavioral-health", icon: "smile", title: "Behavioral Health", body: "Authorization, session type, provider credentials and plan rules can affect claim preparation and follow-up." },
        { id: "radiology", icon: "radio", title: "Radiology", body: "Technical and professional components, orders and medical-necessity context may shape the billing workflow." },
        { id: "pathology-labs", icon: "microscope", title: "Pathology & Labs", body: "Orders, test details, diagnosis context and payer policies can require careful claim-information review." },
        { id: "ophthalmology", icon: "eye", title: "Ophthalmology", body: "Diagnostic testing, procedures, products and coverage requirements can affect claim preparation and payer follow-up." },
        { id: "pulmonology", icon: "wind", title: "Pulmonology", body: "Testing, chronic-care services and equipment-related workflows may require careful coverage and documentation context." },
        { id: "gastroenterology", icon: "activity", title: "Gastroenterology", body: "Office care, procedures, anesthesia context and facility handoffs can create multiple claim paths." },
        { id: "pediatrics", icon: "baby", title: "Pediatrics", body: "Preventive visits, screenings, vaccines and program-specific coverage can affect coding and payer workflows." },
        { id: "obgyn", icon: "flower", title: "OB/GYN", body: "Global maternity, gynecologic care and procedures require clear service-period and documentation context." },
        { id: "anesthesiology", icon: "moon", title: "Anesthesiology", body: "Time, modifiers, provider roles and facility context are important inputs to the claim workflow." },
        { id: "urgent-care", icon: "zap", title: "Urgent Care", body: "Fast-paced encounters, testing, occupational health and plan variation create operational follow-up needs." },
        { id: "hospital-medicine", icon: "hospital", title: "Hospital Medicine", body: "Place of service, care transitions and facility documentation influence coding and claim review." },
        { id: "emergency-medicine", icon: "ambulance", title: "Emergency Medicine", body: "Emergency setting, acuity documentation and payer response patterns require the correct service context." },
        { id: "pain-management", icon: "pill", title: "Pain Management", body: "Procedure documentation, authorization and frequency policies may affect claim readiness and denial work." },
        { id: "nephrology", icon: "droplets", title: "Nephrology", body: "Ongoing management, dialysis-related services and coverage coordination can create specialized billing questions." },
        { id: "oncology", icon: "flask", title: "Oncology", body: "Treatment plans, administered products, authorizations and documentation create detailed claim dependencies." },
      ],
    },
    {
      type: "faq",
      title: "Specialty Scoping Questions",
      items: [
        { q: "Does Revplus claim expertise in every specialty?", a: ["No. The website lists common specialty contexts. Support is represented only after reviewing the services, documentation, payer mix, systems and available team capability."] },
        { q: "What should we share in the first conversation?", a: ["Describe the specialty, care setting, provider structure, systems, payer mix and main workflow problems. Do not send PHI through the public form."] },
        { q: "Can the scope focus on one problem area?", a: ["Yes. A practice may begin with a focused area such as claim follow-up, denials, credentialing or AR rather than a full-cycle engagement."] },
      ],
    },
  ],
  cta: { title: "Discuss Your Specialty Workflow", lead: "Tell us what your team bills, where the workflow becomes difficult and which responsibilities need support.", button: { label: "Talk to Revplus", href: routes.freeAudit } },
};
