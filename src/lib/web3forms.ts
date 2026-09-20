import type { Lead } from "./lead";

export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
export const WEB3FORMS_ACCESS_KEY = "e1ab462c-af10-4aae-a46e-4ef6aff60d98";
export const WEB3FORMS_SUBJECT = "Revplus Medical Solutions — New Consultation Request";

/**
 * Web3Forms access keys are public form identifiers intended for browser use.
 * Keeping the payload builder here makes every submitted field explicit and
 * independently testable without introducing a server dependency.
 */
export function buildWeb3FormsPayload(lead: Lead): Record<string, string> {
  return {
    access_key: WEB3FORMS_ACCESS_KEY,
    subject: WEB3FORMS_SUBJECT,
    from_name: "Revplus Medical Solutions Website",
    form_name: "Consultation Request",
    name: `${lead.firstName} ${lead.lastName}`,
    first_name: lead.firstName,
    last_name: lead.lastName,
    email: lead.email,
    phone: lead.phone,
    practice: lead.practice,
    specialty: lead.specialty,
    service: lead.service,
    message: lead.message,
    botcheck: lead.website,
  };
}
