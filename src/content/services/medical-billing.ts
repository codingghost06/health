import type { ServicePage } from "@/content/types";
import { routes } from "@/content/site";

export const medicalBilling: ServicePage = {
  slug: "medical-billing",
  path: "/services/medical-billing",
  name: "Medical Billing",
  navSub: "End-to-end claim lifecycle",
  icon: "receipt",
  homeBlurb:
    "Full-cycle billing for every specialty. 24-hour submission. Every claim tracked to payment or resolution.",
  hubBlurb:
    "Full-service billing from charge capture to payment posting. All payers, all specialties, 24-hour submission SLA.",
  meta: {
    title: "Medical Billing Services for Every Specialty",
    description:
      "Precise, compliant medical billing submitted within 24 hours, tracked in real time, and followed up until every claim is paid in full. 98.2% first-pass acceptance across 40+ specialties.",
  },
  hero: {
    breadcrumb: [
      { label: "Home", href: routes.home },
      { label: "Services", href: routes.services },
    ],
    title: ["Medical Billing Services", "for Every Specialty"],
    lead: "Precise, compliant billing submitted within 24 hours, tracked in real-time, and followed up until every claim is paid in full.",
    stats: [
      { value: "98.2%", label: "First-pass acceptance" },
      { value: "<24hr", label: "Claim submission" },
      { value: "18 days", label: "Average AR days" },
      { value: "40+", label: "Specialties covered" },
    ],
  },
  blocks: [
    {
      type: "intro",
      eyebrow: "What We Do",
      title: "Medical Billing That Works As Hard As You Do",
      lead: "Most practices lose 10–20% of collectible revenue to billing errors, missed follow-up, and denied claims that never get appealed. We eliminate those losses.",
      bullets: [
        "Complete charge capture review and CDM analysis",
        "Real-time insurance eligibility verification before each visit",
        "Automated claim scrubbing with 3,000+ built-in edits",
        "Electronic and paper claim submission to all payers",
        "ERA/EOB posting with variance analysis",
        "Patient statement generation and follow-up",
        "Secondary and tertiary billing management",
        "Workers' compensation and no-fault billing",
        "Monthly performance analytics with physician-level breakdowns",
      ],
      aside: {
        kind: "timeline",
        items: [
          {
            title: "Charge Capture & Review",
            body: "Superbills and encounter notes reviewed for completeness and modifier accuracy before any claim is created.",
          },
          {
            title: "Eligibility Verification",
            body: "Coverage verified for every patient — benefits, deductibles, authorizations, and coordination of benefits.",
          },
          {
            title: "Coding Validation",
            body: "Certified coders review all diagnosis and procedure codes for accuracy, specificity, and payer policy compliance.",
          },
          {
            title: "Claim Scrubbing & Submission",
            body: "3,000+ edit scrub, then transmitted electronically within 24 hours. Paper claims same business day.",
          },
          {
            title: "Follow-Up & Appeals",
            body: "Every open claim actively followed up. Denials appealed within 24–72 hours with full documentation.",
          },
          {
            title: "Payment Posting & Reporting",
            body: "ERAs processed daily. Variances resolved. Monthly financial reports with full collections transparency.",
          },
        ],
      },
    },
    {
      type: "cards",
      title: "The Health Billing Advantage",
      columns: 3,
      variant: "centered",
      items: [
        {
          icon: "zap",
          title: "24-Hour Submission",
          body: "Claims submitted within one business day of receiving encounter documentation — always.",
        },
        {
          icon: "search",
          title: "3,000+ Claim Edits",
          body: "Proprietary scrubbing maintains our 98.2% first-pass acceptance rate.",
        },
        {
          icon: "hospital",
          title: "All Payers Covered",
          body: "Medicare, Medicaid, all commercial payers, specialty plans — all 50 states.",
        },
        {
          icon: "trending-up",
          title: "+34% Revenue Uplift",
          body: "Average clients see 20–40% revenue improvement within 90 days of switching.",
        },
        {
          icon: "lock",
          title: "HIPAA + SOC 2",
          body: "Full BAA available. SOC 2 Type II certified. Your patient data is protected.",
        },
        {
          icon: "hand-heart",
          title: "Dedicated Manager",
          body: "One contact who knows your practice, payers, and performance benchmarks.",
        },
      ],
    },
    {
      type: "faq",
      id: "faq",
      eyebrow: "For Physicians & Practice Owners",
      title: "Everything Doctors Ask Us — Answered",
      lead: "Honest answers to the questions we hear from physicians, group practices, and hospital CFOs every single week.",
      button: { label: "Talk to a Specialist — Free Audit", href: routes.freeAudit },
      items: [
        {
          q: "How is Health Billing actually different from the other 200 billing companies pitching me?",
          a: [
            "Three structural differences. (1) Specialty-aligned coders — your account is staffed by AAPC/AHIMA-certified coders who only work your specialty (cardiology coders for cardiology, ortho for ortho), not a generalist pool. (2) Daily denial work — denials are touched within 24 hours, not parked for the end-of-month report. (3) Transparent dashboards — you see every claim, every denial reason, every dollar in real time. No black-box \"monthly summary.\"",
          ],
        },
        {
          q: "How long does onboarding take, and what does my staff actually have to do?",
          a: [
            "Most practices are fully live in 5–10 business days. Your staff's involvement is minimal: a 60-minute kickoff call, a credentials/EHR access handoff, and a 30-minute workflow walkthrough. We do the heavy lifting — clearinghouse setup, payer enrollment migrations, fee schedule loads, charge-capture mapping, and parallel-run validation. You keep seeing patients; we move the billing engine underneath you.",
          ],
        },
        {
          q: "Will switching to you disrupt my cash flow during the transition?",
          a: [
            "No. We run a two-week parallel transition: your current process continues while we mirror every claim, so nothing falls through. Most clients actually see increased deposits in month one because we immediately work the aged AR your previous biller was ignoring. We also guarantee no submission gaps in writing as part of the SLA.",
          ],
        },
        {
          q: "What does it cost? Are there hidden fees?",
          a: [
            "Simple percentage-of-collections model — typically 3% to 7% depending on specialty, volume, and payer mix. We only earn when you collect. No setup fees, no monthly minimums, no per-claim charges, no long-term contracts. Credentialing, AR cleanup, and reporting are included. The only line item outside the percentage is optional add-ons like full-service medical coding or transcription, which are quoted up front.",
          ],
        },
        {
          q: "What kind of revenue lift should I realistically expect?",
          a: [
            "Across our book of business, practices that switch from in-house or another billing company see a 20–40% net collections improvement within 90 days. The lift comes from four levers: higher first-pass acceptance (we run at 98.2%), aggressive denial recovery, identification of underpayments against contracted rates, and recovery of aged AR over 90 days that was previously written off. We model your specific upside in the free audit before you commit to anything.",
          ],
        },
        {
          q: "Do you work with my EHR / PM system?",
          a: [
            "Yes — we integrate with 100+ platforms including Epic, Cerner/Oracle Health, athenahealth, eClinicalWorks, Kareo/Tebra, DrChrono, NextGen, Allscripts/Veradigm, AdvancedMD, Practice Fusion, Meditech, CureMD, OfficeAlly, and more. If your platform isn't on the list, we'll build the integration at no charge during onboarding. We can work read-only, write-back, or via SFTP — whatever your IT prefers.",
          ],
        },
        {
          q: "Are you HIPAA compliant? Where does my patient data live?",
          a: [
            "Yes — HIPAA-compliant, SOC 2 Type II certified, and a signed BAA is included with every engagement. PHI is encrypted in transit (TLS 1.3) and at rest (AES-256), stored on US-based infrastructure, with role-based access controls and full audit logging. We undergo annual third-party penetration testing and quarterly internal access reviews. Your compliance officer can request our SOC 2 report and security questionnaire on day one.",
          ],
        },
        {
          q: "Where is your team based? Is anything offshored?",
          a: [
            "Your account manager, denials team, and AR specialists are US-based, headquartered in Jersey City, NJ. Some routine charge-entry work is performed by our credentialed offshore team under direct US supervision — this keeps your pricing competitive without compromising quality. PHI handling, payer escalations, and patient-facing communications are 100% US-based. You always speak to a US team member.",
          ],
        },
        {
          q: "What specialties do you handle?",
          a: [
            "40+ specialties including primary care, cardiology, orthopedics, nephrology, oncology, behavioral health/psychiatry, neurology, radiology, pathology/lab, ophthalmology, OB/GYN, pediatrics, urgent care, ED, PT/OT, anesthesia, pain management, dermatology, gastroenterology, and surgery (general & subspecialty). We also support ASCs, hospitals, FQHCs, RHCs, DME suppliers, and independent labs.",
          ],
        },
        {
          q: "How do you handle denials? My current biller just resubmits and prays.",
          a: [
            "Every denial is triaged within 24 hours and routed to a specialist by denial category — clinical (medical necessity, coding), administrative (auth, eligibility, COB), or payer-specific. We work the root cause, not just the resubmission: appeals are written by certified coders with payer-specific medical-necessity language, and recurring denial patterns are fed back into our edits engine so the same denial doesn't happen twice. Average recovery rate on previously denied claims: 67%.",
          ],
        },
        {
          q: "Will I lose visibility into my revenue cycle?",
          a: [
            "The opposite. You get a real-time dashboard showing charges, payments, AR aging, denial rates, payer mix, top CPT performance, provider productivity, and net collection rate — drillable down to the individual claim. We deliver a 30-minute monthly performance review with your dedicated account manager, plus on-demand custom reports for your CFO or board. Everything is exportable.",
          ],
        },
        {
          q: "Do you handle credentialing and payer enrollment?",
          a: [
            "Yes, end-to-end: CAQH setup and maintenance, NPI registration, Medicare/Medicaid enrollment, commercial payer enrollment, hospital privileging support, re-credentialing, and ongoing roster maintenance. New providers are typically fully credentialed in 60–90 days (versus the 120–180 industry average). Included for clients on our full RCM package; available standalone for new practices and provider additions.",
          ],
        },
        {
          q: "Do you bill patients too, or only insurance?",
          a: [
            "Both. We handle full patient AR: statement generation, online payment portal (branded to your practice), payment plans, automated reminders by SMS/email, and live phone support staffed by US patient-services reps. Patients have one number to call with billing questions — and it's not your front desk. Average patient collection rate: +38% versus in-house.",
          ],
        },
        {
          q: "What if I'm a small solo practice — am I too small for you?",
          a: [
            "No. We serve solo physicians all the way up to 500-provider hospital systems. Roughly 40% of our clients are 1–5 provider practices. Our pricing scales — solo practitioners pay the same percentage rate as a multi-site group, with the same dedicated account manager and same dashboards. There's no minimum revenue requirement.",
          ],
        },
        {
          q: "What's the contract — am I locked in?",
          a: [
            "Month-to-month with a 30-day out clause. No long-term commitment, no exit penalties, no clawback on collected AR. If we don't perform, you leave — and we hand off all data, denials in flight, and AR work-in-progress to your next biller in a clean transition packet. We earn the renewal every month.",
          ],
        },
        {
          q: "How do I get started — what does the free audit actually involve?",
          a: [
            "30 minutes of your time. Send us a recent AR aging report and a sample of recent EOBs/denials (de-identified is fine). Within 5 business days we deliver a written report covering: estimated leakage, top 5 fixable denial categories, underpayment exposure against your top contracts, and a projected revenue recovery range. Zero cost, zero obligation, no sales pressure. You can use the findings to improve your in-house team if you decide not to outsource.",
          ],
        },
      ],
    },
  ],
  cta: {
    title: "See How Much Revenue You're Missing",
    lead: "A free 30-minute audit reveals exactly where your practice is leaking revenue — and what it would take to fix it.",
    button: { label: "Schedule Free Billing Audit", href: routes.freeAudit },
  },
};
