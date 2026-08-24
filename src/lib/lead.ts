/**
 * Lead form model + validation, shared by the client form and the API route so
 * both sides enforce identical rules. Hand-written (no schema library) to keep
 * the client bundle small.
 */

export const specialtyOptions = [
  "Primary Care / Internal Medicine",
  "Cardiology",
  "Orthopedics",
  "Nephrology",
  "Oncology / Hematology",
  "Behavioral Health / Psychiatry",
  "Neurology / Neurosurgery",
  "Radiology",
  "Pathology / Laboratory",
  "Ophthalmology",
  "OB/GYN",
  "Pediatrics",
  "Urgent Care",
  "Emergency Medicine",
  "Hospital / Health System",
  "Physical / Occupational Therapy",
  "Other",
] as const;

export const serviceOptions = [
  "Medical Billing (Full Service)",
  "Revenue Cycle Management",
  "Medical Coding",
  "Provider Credentialing",
  "Denial Management",
  "AR Recovery",
  "Medical Transcription",
  "Full Outsourcing / All Services",
] as const;

export type Specialty = (typeof specialtyOptions)[number];
export type ServiceOption = (typeof serviceOptions)[number];

/** Raw values as submitted (strings from the form, numbers for meta). */
export interface LeadInput {
  practice: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialty: string;
  service: string;
  message?: string;
  /** Honeypot — must stay empty. Bots that autofill every field trip it. */
  website?: string;
  /** Timestamp (ms) when the form was rendered; used to reject instant submissions. */
  startedAt: number;
}

/** Validated, normalised lead. */
export interface Lead {
  practice: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialty: Specialty;
  service: ServiceOption;
  message: string;
  website: string;
  startedAt: number;
}

export type LeadFieldErrors = Partial<Record<keyof LeadInput, string>>;

export type ParseResult = { success: true; data: Lead; errors?: undefined } | { success: false; errors: LeadFieldErrors; data?: undefined };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

function required(value: string, label: string, max: number): string | null {
  if (!value) return `${label} is required.`;
  if (value.length > max) return `${label} must be ${max} characters or fewer.`;
  return null;
}

/** Validates unknown input and returns either field errors or a clean `Lead`. */
export function parseLead(input: unknown): ParseResult {
  const raw = (input && typeof input === "object" ? input : {}) as Record<string, unknown>;
  const errors: LeadFieldErrors = {};

  const practice = str(raw.practice);
  const firstName = str(raw.firstName);
  const lastName = str(raw.lastName);
  const email = str(raw.email);
  const phone = str(raw.phone);
  const specialty = str(raw.specialty);
  const service = str(raw.service);
  const message = str(raw.message);
  const website = str(raw.website);
  const startedAt = typeof raw.startedAt === "number" && Number.isInteger(raw.startedAt) && raw.startedAt >= 0 ? raw.startedAt : NaN;

  const e = (k: keyof LeadInput, msg: string | null) => {
    if (msg && !errors[k]) errors[k] = msg;
  };

  e("practice", required(practice, "Practice name", 120));
  e("firstName", required(firstName, "First name", 60));
  e("lastName", required(lastName, "Last name", 60));
  e("email", required(email, "Email address", 160) ?? (EMAIL_RE.test(email) ? null : "Enter a valid email address."));
  e(
    "phone",
    required(phone, "Phone number", 30) ?? ((phone.match(/\d/g) ?? []).length >= 10 ? null : "Enter a valid phone number with area code."),
  );
  e("specialty", (specialtyOptions as readonly string[]).includes(specialty) ? null : "Select your specialty.");
  e("service", (serviceOptions as readonly string[]).includes(service) ? null : "Select a service.");
  e("message", message.length > 2000 ? "Message must be 2000 characters or fewer." : null);
  e("website", website.length > 0 ? "Invalid." : null);
  e("startedAt", Number.isNaN(startedAt) ? "Invalid." : null);

  if (Object.keys(errors).length) return { success: false, errors };
  return {
    success: true,
    data: {
      practice,
      firstName,
      lastName,
      email,
      phone,
      specialty: specialty as Specialty,
      service: service as ServiceOption,
      message,
      website,
      startedAt,
    },
  };
}
