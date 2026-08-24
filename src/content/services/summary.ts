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
  { slug: "medical-billing", path: "/services/medical-billing", name: "Medical Billing", navSub: "End-to-end claim lifecycle", icon: "receipt" },
  { slug: "medical-coding", path: "/services/medical-coding", name: "Medical Coding", navSub: "CPT, ICD-10, HCPCS, modifiers", icon: "clipboard-check" },
  { slug: "revenue-cycle-management", path: "/services/revenue-cycle-management", name: "Revenue Cycle Management", navSub: "Front-to-back RCM", icon: "refresh" },
  { slug: "provider-credentialing", path: "/services/provider-credentialing", name: "Provider Credentialing", navSub: "Payer enrollment & CAQH", icon: "badge-check" },
  { slug: "denial-management", path: "/services/denial-management", name: "Denial Management", navSub: "Root-cause + appeals", icon: "shield-check" },
  { slug: "ar-recovery", path: "/services/ar-recovery", name: "AR Recovery", navSub: "Aged AR clean-up", icon: "wallet" },
  { slug: "medical-transcription", path: "/services/medical-transcription", name: "Medical Transcription", navSub: "Medical transcription", icon: "mic" },
  { slug: "claims-management", path: "/services/claims-management", name: "Claims Management", navSub: "Clean-claim submission", icon: "send" },
];

/** Short labels used in the footer column. */
export const footerServiceLabel: Record<string, string> = {
  "revenue-cycle-management": "RCM",
  "provider-credentialing": "Credentialing",
  "medical-transcription": "Transcription",
};
