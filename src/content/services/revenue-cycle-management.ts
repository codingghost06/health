import type { ServicePage } from "@/content/types";
import { routes } from "@/content/site";

export const revenueCycleManagement: ServicePage = {
  slug: "revenue-cycle-management",
  path: "/services/revenue-cycle-management",
  name: "Revenue Cycle Management",
  navSub: "Front-to-back RCM",
  icon: "refresh",
  homeBlurb:
    "End-to-end RCM strategy and operations. Reduce AR days, cut denial rates, and grow net collections by up to 34%.",
  hubBlurb:
    "Strategic end-to-end RCM — from patient access through zero-balance resolution. Average +34% net revenue uplift.",
  meta: {
    title: "Revenue Cycle Management (RCM) Services",
    description:
      "End-to-end RCM strategy and operations that transforms how your organization generates and collects revenue — systematically and sustainably. +34% avg. uplift.",
  },
  hero: {
    breadcrumb: [
      { label: "Home", href: routes.home },
      { label: "Services", href: routes.services },
    ],
    title: ["Revenue Cycle Management", "(RCM) Services"],
    lead: "End-to-end RCM strategy and operations that transforms how your organization generates and collects revenue — systematically and sustainably.",
    stats: [
      { value: "+34%", label: "Average revenue increase" },
      { value: "52%", label: "Reduction in denials" },
      { value: "40%", label: "Operating cost savings" },
      { value: "18 days", label: "Average AR days" },
    ],
  },
  blocks: [
    {
      type: "intro",
      eyebrow: "What is RCM",
      title: "Revenue Cycle Management is the Financial Backbone of Your Practice",
      lead: "RCM encompasses every administrative and clinical function that contributes to the capture, management, and collection of patient service revenue — from scheduling through final payment. Health Billing optimizes all of it.",
      bullets: [],
      aside: {
        kind: "blocks",
        items: [
          {
            title: "Front-End RCM",
            body: "Scheduling optimization, pre-registration, eligibility verification, prior authorization, and financial counseling — clean data from day one.",
          },
          {
            title: "Mid-Cycle RCM",
            body: "Charge capture integrity, clinical documentation improvement, coding accuracy, CDM review, and compliance auditing.",
          },
          {
            title: "Back-End RCM",
            body: "Claims management, denial resolution, AR follow-up, patient billing, collections, and payment reconciliation.",
          },
        ],
      },
    },
    {
      type: "steps",
      title: "Our Full-Cycle RCM Process",
      items: [
        {
          title: "Patient Scheduling & Registration",
          body: "Demographic capture, insurance collection, authorization verification, and financial counseling before any service is rendered.",
        },
        {
          title: "Eligibility & Benefits Verification",
          body: "Real-time checks for every patient, every visit — deductibles, copays, covered services, and COB.",
        },
        {
          title: "Prior Authorization Management",
          body: "Timely auth requests, real-time status tracking, and proactive follow-up to eliminate auth-related denials.",
        },
        {
          title: "Charge Capture & Clinical Documentation",
          body: "Every billable service captured completely. Every diagnosis documented to the highest specificity for maximum legitimate reimbursement.",
        },
        {
          title: "Coding, Claim Creation & Submission",
          body: "Certified coders assign precise codes. Claims built with payer-specific formatting. Transmitted within 24 hours.",
        },
        {
          title: "Payment Posting & Reconciliation",
          body: "ERA and EOB posting within 24 hours. Underpayment identification and payer dispute resolution.",
        },
        {
          title: "Denial Management & AR Follow-Up",
          body: "Every denial investigated, appealed, resolved. Aging AR worked systematically. Nothing written off without exhausting every recovery option.",
        },
      ],
    },
    {
      type: "cards",
      title: "Why Practices Choose Us",
      columns: 4,
      variant: "centered",
      items: [
        {
          icon: "dollar",
          title: "Increase Net Collections",
          body: "Average 20–34% increase in net collections within the first 90 days.",
        },
        {
          icon: "trending-down",
          title: "Reduce Overhead",
          body: "Eliminate in-house billing staff, training, software costs — saving 30–50%.",
        },
        {
          icon: "timer",
          title: "Accelerate Cash Flow",
          body: "Reduce days in AR from 40+ to under 20. Faster payments, better cash position.",
        },
        {
          icon: "bar-chart",
          title: "Data-Driven Decisions",
          body: "Real-time dashboards and monthly strategic reports on every metric that matters.",
        },
      ],
    },
  ],
  cta: {
    title: "Is Your Revenue Cycle Leaking?",
    lead: "Free RCM assessment: we'll map your cycle, identify the top 3 revenue gaps, and build a customized improvement roadmap — no cost.",
    button: { label: "Get Free RCM Assessment", href: routes.freeAudit },
  },
};
