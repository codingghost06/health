import type { ResourcesContent } from "@/content/types";
import { routes } from "@/content/site";

export const resourcesPage: ResourcesContent = {
  meta: {
    title: "Resources for Modern Practices",
    description:
      "Practical, doctor-focused content on billing, coding, denials, payer rules, and the financial side of running a practice in the US.",
  },
  hero: {
    breadcrumb: [{ label: "Home", href: routes.home }],
    title: ["Resources for Modern Practices"],
    lead: "Practical, doctor-focused content on billing, coding, denials, payer rules, and the financial side of running a practice in the US.",
  },
  sections: [
    {
      id: "blog",
      icon: "newspaper",
      eyebrow: "Latest from the Blog",
      title: "Insights, Trends & Playbooks",
      items: [
        {
          tag: "Denials",
          title: "The 7 Most Common Denial Codes — and How to Stop Them",
          body: "CO-16, CO-97, CO-50, PR-204, and four more denial codes draining your practice — with the corrective workflow for each.",
        },
        {
          tag: "Coding",
          title: "2026 CPT & ICD-10 Updates Every Practice Should Know",
          body: "Key code changes, deleted codes, and new E&M guidelines that will impact your reimbursements next quarter.",
        },
        {
          tag: "Cash Flow",
          title: "Why Your Days in AR Are Higher Than You Think",
          body: "The hidden ways aged AR slips past dashboards — and a 30-day plan to recover six figures of stuck revenue.",
        },
        {
          tag: "Credentialing",
          title: "Credentialing Bottlenecks Costing Doctors $30K+ a Month",
          body: "Common payer enrollment delays and the documentation flow that closes them in 45–60 days instead of 120.",
        },
        {
          tag: "Telehealth",
          title: "Telehealth Billing in 2026: POS, Modifiers & Audit Risk",
          body: "What the latest CMS and commercial payer rules mean for audio-only, RPM, CCM, and virtual-first clinics.",
        },
        {
          tag: "Payers",
          title: "Negotiating Better Rates with Commercial Payers",
          body: "What data to bring, when to renegotiate, and the leverage points that actually move contract rates 8–15%.",
        },
      ],
    },
    {
      id: "case-studies",
      icon: "bar-chart",
      eyebrow: "Case Studies",
      title: "Real Practices. Real Revenue Lifts.",
      items: [
        {
          title: "Multi-Site Cardiology — +$2.1M / yr",
          body: "4-location cardiology group cut denials 62%, lifted NCR from 91% to 97.4%, and recovered $480K in aged AR within 90 days.",
          result: "↑ 23% net collections in 6 months",
        },
        {
          title: "Solo Internal Medicine — +$184K / yr",
          body: "Independent IM practice replaced an in-house biller, automated eligibility, and recovered 5 months of stalled credentialing revenue.",
          result: "↑ 31% monthly collections",
        },
        {
          title: "Behavioral Health Group — +$640K / yr",
          body: "22-clinician group rebuilt auth tracking, fixed parity-related denials, and reduced days in AR from 58 → 27 in one quarter.",
          result: "↓ 53% denials",
        },
        {
          title: "Urgent Care Network — +$1.4M / yr",
          body: "9-location urgent care chain corrected POS errors, occ-med workflows, and same-day charge entry to lift clean-claim rate to 98%.",
          result: "↑ 18% net collections",
        },
        {
          title: "Orthopedic Surgery — +$920K / yr",
          body: "Ortho practice fixed global-period leakage, implant documentation, and auth tracking to recover 11 months of underpayments.",
          result: "↑ $920K recovered underpayments",
        },
        {
          title: "Independent Lab — +$2.8M / yr",
          body: "Reference lab realigned medical-necessity documentation with LCD/NCD policies and renegotiated 3 commercial payer contracts.",
          result: "↑ 27% reimbursement per test",
        },
      ],
    },
    {
      id: "guides",
      icon: "book",
      eyebrow: "Guides & Whitepapers",
      title: "Free Downloads for Doctors & Administrators",
      items: [
        {
          title: "The Independent Practice RCM Playbook",
          body: "A 38-page guide covering eligibility, charge capture, coding, denials, AR, and reporting for solo and small-group practices.",
        },
        {
          title: "Denial Prevention Cheat Sheet",
          body: "Top 25 denial reasons mapped to root causes, payer policies, and the exact corrective workflow for each.",
        },
        {
          title: "Credentialing Checklist (US)",
          body: "Every document, deadline, and payer-specific requirement — Medicare, Medicaid, BCBS, Aetna, UHC, Cigna, Humana and more.",
        },
        {
          title: "KPI Dashboard Template",
          body: "The 12 KPIs every practice owner should track weekly — with formulas and benchmark ranges by specialty.",
        },
        {
          title: "HIPAA & SOC 2 Vendor Checklist",
          body: "What to ask any billing vendor before handing over PHI. BAAs, audit logs, encryption, breach response, access controls.",
        },
        {
          title: "No Surprises Act Quick Guide",
          body: "Good-faith estimates, IDR process, balance billing rules, and the workflows that keep you compliant.",
        },
      ],
    },
  ],
  cta: {
    title: "Want a Personalized Resource Pack?",
    lead: "We'll send specialty-specific benchmarks, denial trends, and a free revenue audit tailored to your practice.",
    button: { label: "Request My Free Pack", href: routes.freeAudit },
  },
};
