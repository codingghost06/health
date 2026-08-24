import type { HomeContent } from "@/content/types";
import { routes } from "@/content/site";

export const home: HomeContent = {
  hero: {
    badge: "America's #1 Medical Billing Partner",
    title: ["Stop Losing Revenue.", "Start Getting Paid", "What You Deserve."],
    highlight: "Paid",
    lead: "Health Billing delivers end-to-end medical billing, RCM, credentialing, and denial management for physicians, hospitals, labs, and clinics across all 50 states — Medicare, Medicaid, and every private insurer.",
    primary: { label: "Get a Free Revenue Audit", href: routes.freeAudit },
    secondary: { label: "Explore Services", href: routes.services },
    stats: [
      { value: "98.2%", label: "First-pass claim rate" },
      { value: "$2.4B+", label: "Revenue recovered yearly" },
      { value: "4,800+", label: "Providers served" },
      { value: "<24hr", label: "Claim submission SLA" },
    ],
  },
  payerStrip: {
    label: "We bill:",
    payers: [
      "Medicare",
      "Medicaid",
      "Blue Cross Blue Shield",
      "Aetna",
      "UnitedHealthcare",
      "Cigna",
      "Humana",
      "Molina",
      "Centene",
      "Anthem",
      "TRICARE",
    ],
    more: { label: "+ 490 more", href: routes.payers },
  },
  services: {
    eyebrow: "Our Services",
    title: ["Complete Revenue Cycle Coverage", "Under One Roof"],
    lead: "Every service your practice needs — from charge capture to final payment — managed with precision and full transparency.",
    extra: {
      icon: "receipt",
      title: "Payment Posting & Reconciliation",
      body: "Daily ERA/EOB posting. Variance identification. Underpayment recovery. Zero revenue leakage.",
      link: { label: "Get started", href: routes.freeAudit },
    },
  },
  why: {
    eyebrow: "Why Health Billing",
    title: ["We Don't Just File Claims.", "We Fight for Every Dollar."],
    lead: "Most billing companies submit and move on. We track, appeal, and recover — until every collectible dollar reaches your account.",
    points: [
      {
        title: "Specialty-Specific Billing Teams",
        body: "Dedicated coders and billers for each specialty — cardiology, orthopedics, nephrology, behavioral health, and 35+ more.",
      },
      {
        title: "AI-Assisted, Human-Verified",
        body: "Technology catches errors before submission. Certified coders verify every claim. Result: 98.2% first-pass acceptance rate.",
      },
      {
        title: "Real-Time Dashboards & Reporting",
        body: "You see exactly where every dollar is — always. Monthly KPI reports, payer-level breakdowns, and one dedicated account manager.",
      },
      {
        title: "No Contracts. No Hidden Fees.",
        body: "Performance-based pricing. We earn your business every month by delivering results — not by locking you in.",
      },
    ],
    metrics: [
      { label: "Clean Claim Rate", value: "98.2%", pct: 98, note: "vs. industry avg: 82%" },
      { label: "Denial Resolution Rate", value: "93.4%", pct: 93, note: "vs. industry avg: 63%" },
      { label: "Days in AR", value: "18 Days", pct: 47, note: "vs. industry avg: 38 days" },
      {
        label: "Revenue Increase After Onboarding",
        value: "+34%",
        pct: 85,
        note: "Average within 90 days",
      },
    ],
  },
  specialties: {
    eyebrow: "Who We Serve",
    title: ["Billing Expertise Across", "Every Healthcare Specialty"],
    lead: "From solo practitioners to health systems — specialty-trained teams for every service line.",
    tiles: [
      { icon: "heart-pulse", label: "Cardiology" },
      { icon: "bone", label: "Orthopedics" },
      { icon: "brain", label: "Neurology" },
      { icon: "droplets", label: "Nephrology" },
      { icon: "flask", label: "Oncology" },
      { icon: "stethoscope", label: "Primary Care" },
      { icon: "zap", label: "Urgent Care" },
      { icon: "smile", label: "Behavioral Health" },
      { icon: "radio", label: "Radiology" },
      { icon: "microscope", label: "Pathology & Labs" },
      { icon: "wind", label: "Pulmonology" },
      { icon: "activity", label: "Gastroenterology" },
      { icon: "eye", label: "Ophthalmology" },
      { icon: "flower", label: "OB/GYN" },
      { icon: "baby", label: "Pediatrics" },
      { icon: "hospital", label: "Hospital Medicine" },
      { icon: "ambulance", label: "Emergency Medicine" },
      { icon: "moon", label: "Anesthesiology" },
      { icon: "pill", label: "Pain Management" },
    ],
    moreTile: { label: "+ More", sub: "40+ Specialties" },
    more: { label: "View All Specialties", href: routes.specialties },
  },
  process: {
    eyebrow: "Our Process",
    title: "Up and Running in 5 Business Days",
    lead: "Fast onboarding. Zero disruption. Immediate performance improvements from day one.",
    steps: [
      {
        title: "Free Revenue Audit",
        body: "We assess your current billing performance, identify leakage, and benchmark KPIs against specialty norms.",
      },
      {
        title: "Onboarding & Integration",
        body: "Seamless EHR integration in 5 business days. Zero disruption to your existing workflow.",
      },
      {
        title: "Billing & Collections",
        body: "Claims submitted within 24 hours. Real-time tracking. Active follow-up on every open balance.",
      },
      {
        title: "Optimize & Report",
        body: "Monthly KPI reviews, denial trend analysis, and continuous improvement recommendations.",
      },
    ],
  },
  testimonials: {
    eyebrow: "Client Results",
    title: "4,800+ Providers Trust Health Billing",
    items: [
      {
        quote:
          "Switching to Health Billing was the best operational decision we made. Collections jumped 42% in the first quarter, and AR days dropped from 52 to 19. Responsive, knowledgeable, and genuinely invested in our success.",
        name: "Dr. Michael Reynolds, MD",
        role: "Cardiologist — Atlanta, Georgia",
      },
      {
        quote:
          "Their denial management alone recovered over $380,000 in revenue we had already written off. We tried three billing companies before Health Billing. None came close. The ROI is extraordinary.",
        name: "Lisa Tran, Practice Administrator",
        role: "Orthopedic Group — Dallas, Texas",
      },
      {
        quote:
          "Their credentialing team got us enrolled with 14 payers in under 6 weeks. That's unheard of. Revenue has more than doubled since partnering with Health Billing — I wish we'd switched sooner.",
        name: "Dr. Amara Osei, DO",
        role: "Family Medicine — Chicago, Illinois",
      },
      {
        quote:
          "We run a 9-provider behavioral health practice and our prior biller couldn't keep up with payer rules. Health Billing's coders know psych CPT inside-out — clean-claim rate went from 71% to 98% and our reimbursements per session climbed 19%.",
        name: "Dr. Priya Raman, PsyD",
        role: "Behavioral Health Group — Seattle, Washington",
      },
      {
        quote:
          "As a 3-location urgent care, our AR was a nightmare — over $620K aged past 90 days. Their AR recovery team worked every single claim. We collected $478K in four months on balances we'd basically given up on.",
        name: "Marcus Whitfield, CFO",
        role: "Urgent Care Network — Phoenix, Arizona",
      },
      {
        quote:
          "Solo nephrology practice here — I needed a billing partner who actually understood dialysis MCP billing and CKD coding. Health Billing nailed it from day one. Monthly reports are clear, my dedicated account manager picks up the phone, and revenue is up 31%.",
        name: "Dr. Elena Vasquez, MD",
        role: "Nephrology — Miami, Florida",
      },
    ],
  },
  cta: {
    title: "Ready to Recover Revenue You're Currently Losing?",
    lead: "Schedule a free, no-obligation revenue audit. We'll identify exactly where your billing is falling short — and show you the number.",
    button: { label: "Book Your Free Revenue Audit", href: routes.freeAudit },
  },
};
