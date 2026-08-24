/**
 * Revenue calculator domain logic. Pure functions, no React, so the formula
 * can be unit-tested and reused (e.g. in an email summary later).
 *
 * The formula is intentionally identical to the reference site:
 *   gross     = visits × allowed
 *   current   = gross × currentNcr
 *   projected = gross × improvedNcr × specialty
 *   arGain    = ar × arRecovery
 *   monthly   = max(0, (projected − current) + arGain)
 *   yearly    = monthly × 12
 *   gap       = max(0, improvedNcr − currentNcr)   (percentage points)
 */

export interface CalculatorInputs {
  /** Monthly patient visits / billable encounters. */
  visits: number;
  /** Average allowed amount per visit, USD. */
  allowed: number;
  /** Current net collection rate, percent (0–100). */
  currentNcr: number;
  /** Expected improved net collection rate, percent (0–100). */
  improvedNcr: number;
  /** Current monthly AR over 60 days, USD. */
  ar: number;
  /** Estimated AR recovery, percent (0–100). */
  arRecovery: number;
  /** Specialty multiplier, e.g. 1.12. */
  specialty: number;
}

export interface CalculatorResults {
  current: number;
  projected: number;
  arGain: number;
  monthly: number;
  yearly: number;
  /** Improvement gap in percentage points. */
  gap: number;
}

export interface FieldLimits {
  min: number;
  max: number;
  step: number;
}

/** Hard input limits. The reference only declared some of these in HTML and never enforced them. */
export const limits = {
  visits: { min: 50, max: 6000, step: 50 },
  allowed: { min: 20, max: 10000, step: 5 },
  currentNcr: { min: 40, max: 99, step: 1 },
  improvedNcr: { min: 50, max: 99, step: 1 },
  ar: { min: 0, max: 10_000_000, step: 1000 },
  arRecovery: { min: 0, max: 80, step: 1 },
} as const satisfies Record<Exclude<keyof CalculatorInputs, "specialty">, FieldLimits>;

export type NumericField = keyof typeof limits;

export const defaults: CalculatorInputs = {
  visits: 600,
  allowed: 185,
  currentNcr: 78,
  improvedNcr: 92,
  ar: 45000,
  arRecovery: 22,
  specialty: 1,
};

export function calculate(i: CalculatorInputs): CalculatorResults {
  const gross = i.visits * i.allowed;
  const current = gross * (i.currentNcr / 100);
  const projected = gross * (i.improvedNcr / 100) * i.specialty;
  const arGain = i.ar * (i.arRecovery / 100);
  const monthly = Math.max(0, projected - current + arGain);
  return {
    current,
    projected,
    arGain,
    monthly,
    yearly: monthly * 12,
    gap: Math.max(0, i.improvedNcr - i.currentNcr),
  };
}

export function clamp(value: number, { min, max }: FieldLimits) {
  if (!Number.isFinite(value)) return min;
  return Math.min(max, Math.max(min, value));
}

/** Returns a human message when a value is outside its limits, else null. */
export function validateField(field: NumericField, value: number): string | null {
  const l = limits[field];
  if (!Number.isFinite(value)) return "Enter a number.";
  if (value < l.min) return `Minimum is ${formatLimit(field, l.min)}.`;
  if (value > l.max) return `Maximum is ${formatLimit(field, l.max)}.`;
  return null;
}

function formatLimit(field: NumericField, n: number) {
  if (field === "allowed" || field === "ar") return formatCurrency(n);
  if (field.endsWith("Ncr") || field === "arRecovery") return `${n}%`;
  return formatNumber(n);
}

const usd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const num = new Intl.NumberFormat("en-US");

export function formatCurrency(n: number) {
  return usd.format(Math.round(n));
}

export function formatNumber(n: number) {
  return num.format(n);
}
