import type { ServicePage } from "@/content/types";
import { medicalBilling } from "./medical-billing";
import { medicalCoding } from "./medical-coding";
import { revenueCycleManagement } from "./revenue-cycle-management";
import { providerCredentialing } from "./provider-credentialing";
import { denialManagement } from "./denial-management";
import { arRecovery } from "./ar-recovery";
import { medicalTranscription } from "./medical-transcription";
import { claimsManagement } from "./claims-management";

/** Home-page order. */
export const services = [
  medicalBilling,
  medicalCoding,
  revenueCycleManagement,
  providerCredentialing,
  denialManagement,
  arRecovery,
  medicalTranscription,
  claimsManagement,
] as const satisfies readonly ServicePage[];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
