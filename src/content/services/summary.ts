import type { IconName } from "@/components/ui/icon";

/**
 * Lightweight service list for navigation, footer and cards.
 *
 * Kept separate from the full page content so client components (the header)
 * never pull the service pages' copy into the browser bundle. A unit test
 * asserts it stays in sync with `./index.ts`.
 */
export interface ServiceSummary {
  slug: string;
  path: string;
  name: string;
  navSub: string;
  icon: IconName;
}

export const serviceSummaries: readonly ServiceSummary[] = [
  { slug: "medical-billing", path: "/services/medical-billing", name: "Medical Billing", navSub: "From charge review to follow-up", icon: "receipt" },
  { slug: "medical-coding", path: "/services/medical-coding", name: "Medical Coding", navSub: "CPT, ICD-10-CM & HCPCS support", icon: "clipboard-check" },
  { slug: "revenue-cycle-management", path: "/services/revenue-cycle-management", name: "Revenue Cycle Management", navSub: "Connected front-to-back workflow", icon: "refresh" },
  { slug: "provider-credentialing", path: "/services/provider-credentialing", name: "Provider Credentialing", navSub: "Enrollment and profile support", icon: "badge-check" },
  { slug: "denial-management", path: "/services/denial-management", name: "Denial Management", navSub: "Root-cause and follow-up support", icon: "shield-check" },
  { slug: "ar-recovery", path: "/services/ar-recovery", name: "Accounts Receivable Follow-Up", navSub: "Aged AR review and action", icon: "wallet" },
  { slug: "medical-transcription", path: "/services/medical-transcription", name: "Medical Transcription", navSub: "Clinical documentation support", icon: "mic" },
  { slug: "claims-management", path: "/services/claims-management", name: "Claims Management", navSub: "Submission through resolution", icon: "send" },
];

/** Short labels used in the footer column. */
export const footerServiceLabel: Record<string, string> = {
  "revenue-cycle-management": "RCM",
  "provider-credentialing": "Credentialing",
  "medical-transcription": "Transcription",
  "ar-recovery": "AR Follow-Up",
};
