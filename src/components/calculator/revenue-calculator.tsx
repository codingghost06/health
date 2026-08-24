"use client";

import { useId, useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import {
  calculate,
  clamp,
  defaults,
  formatCurrency,
  formatNumber,
  limits,
  validateField,
  type CalculatorInputs,
  type NumericField,
} from "@/lib/calculator";
import { calculatorPage } from "@/content/calculator";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Icon } from "@/components/ui/icon";

type Raw = Record<NumericField, string>;

const toRaw = (i: CalculatorInputs): Raw => ({
  visits: String(i.visits),
  allowed: String(i.allowed),
  currentNcr: String(i.currentNcr),
  improvedNcr: String(i.improvedNcr),
  ar: String(i.ar),
  arRecovery: String(i.arRecovery),
});

const numericFields: NumericField[] = ["allowed", "currentNcr", "improvedNcr", "ar", "arRecovery"];
const adornments: Partial<Record<NumericField, { prefix?: string; suffix?: string }>> = {
  allowed: { prefix: "$" },
  ar: { prefix: "$" },
  currentNcr: { suffix: "%" },
  improvedNcr: { suffix: "%" },
  arRecovery: { suffix: "%" },
};

export function RevenueCalculator() {
  const c = calculatorPage;
  const baseId = useId();
  const [raw, setRaw] = useState<Raw>(() => toRaw(defaults));
  const [specialty, setSpecialty] = useState<number>(defaults.specialty);
  const [touched, setTouched] = useState<Partial<Record<NumericField, boolean>>>({});

  /** Parsed + clamped numbers used for the live calculation. */
  const inputs = useMemo<CalculatorInputs>(() => {
    const n = (f: NumericField) => clamp(Number(raw[f]), limits[f]);
    return {
      visits: n("visits"),
      allowed: n("allowed"),
      currentNcr: n("currentNcr"),
      improvedNcr: n("improvedNcr"),
      ar: n("ar"),
      arRecovery: n("arRecovery"),
      specialty,
    };
  }, [raw, specialty]);

  const results = useMemo(() => calculate(inputs), [inputs]);
  const errors = useMemo(() => {
    const e: Partial<Record<NumericField, string>> = {};
    for (const f of numericFields) {
      const msg = validateField(f, raw[f].trim() === "" ? NaN : Number(raw[f]));
      if (msg) e[f] = msg;
    }
    return e;
  }, [raw]);

  const noImprovement = inputs.improvedNcr <= inputs.currentNcr;
  const isDefault = specialty === defaults.specialty && numericFields.concat("visits").every((f) => raw[f] === String(defaults[f]));

  const set = (f: NumericField, v: string) => setRaw((r) => ({ ...r, [f]: v }));
  const blur = (f: NumericField) => {
    setTouched((t) => ({ ...t, [f]: true }));
    const n = Number(raw[f]);
    if (raw[f].trim() === "" || !Number.isFinite(n)) set(f, String(defaults[f]));
    else set(f, String(clamp(n, limits[f])));
  };
  const reset = () => {
    setRaw(toRaw(defaults));
    setSpecialty(defaults.specialty);
    setTouched({});
  };

  const fill = ((inputs.visits - limits.visits.min) / (limits.visits.max - limits.visits.min)) * 100;

  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-8">
      {/* ----------------------------------------------------------------- */}
      {/* Inputs                                                            */}
      {/* ----------------------------------------------------------------- */}
      <form
        className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-7"
        onSubmit={(e) => e.preventDefault()}
        aria-label="Calculator inputs"
        noValidate
      >
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-[1.05rem] font-semibold text-navy-900">Your practice</h3>
          <button
            type="button"
            onClick={reset}
            disabled={isDefault}
            className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[13px] font-semibold text-brand-600 transition hover:bg-brand-50 disabled:cursor-default disabled:opacity-40"
          >
            <Icon name="refresh" className="size-3.5" strokeWidth={2.4} />
            Reset
          </button>
        </div>

        {/* Visits slider */}
        <div className="mt-6">
          <div className="flex items-baseline justify-between">
            <label htmlFor={`${baseId}-visits`} className="text-[14px] font-semibold text-navy-900">
              {c.fields.visits.label}
            </label>
            <output htmlFor={`${baseId}-visits`} className="font-display text-[1.5rem] leading-none tabular-nums text-brand-700">
              {formatNumber(inputs.visits)}
            </output>
          </div>
          <input
            id={`${baseId}-visits`}
            type="range"
            className="slider mt-3"
            min={limits.visits.min}
            max={limits.visits.max}
            step={limits.visits.step}
            value={inputs.visits}
            onChange={(e) => set("visits", e.target.value)}
            style={{ "--fill": `${fill}%` } as React.CSSProperties}
            aria-describedby={`${baseId}-visits-help`}
          />
          <div className="mt-1.5 flex justify-between text-[12px] text-slate-500">
            <span>{formatNumber(limits.visits.min)}</span>
            <span>{formatNumber(limits.visits.max)}</span>
          </div>
          <p id={`${baseId}-visits-help`} className="mt-1 text-[13px] text-slate-500">
            {c.fields.visits.help}
          </p>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {numericFields.map((f) => {
            const id = `${baseId}-${f}`;
            const meta = c.fields[f];
            const err = touched[f] ? errors[f] : undefined;
            const ad = adornments[f] ?? {};
            return (
              <div key={f} className={cn(f === "allowed" && "sm:col-span-2")}>
                <label htmlFor={id} className="text-[14px] font-semibold text-navy-900">
                  {meta.label}
                </label>
                <div className="relative mt-2">
                  {ad.prefix ? (
                    <span className="pointer-events-none absolute inset-y-0 left-3.5 flex items-center text-[15px] text-slate-500">{ad.prefix}</span>
                  ) : null}
                  <input
                    id={id}
                    type="number"
                    inputMode="decimal"
                    min={limits[f].min}
                    max={limits[f].max}
                    step={limits[f].step}
                    value={raw[f]}
                    onChange={(e) => set(f, e.target.value)}
                    onBlur={() => blur(f)}
                    aria-invalid={!!err}
                    aria-describedby={cn(`${id}-limits`, "help" in meta && `${id}-help`, err && `${id}-err`)}
                    className={cn(
                      "h-12 w-full rounded-md border bg-white text-[15px] tabular-nums text-ink outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100",
                      ad.prefix ? "pl-8" : "pl-4",
                      ad.suffix ? "pr-9" : "pr-4",
                      err ? "border-danger-600" : "border-line-strong",
                    )}
                  />
                  {ad.suffix ? (
                    <span className="pointer-events-none absolute inset-y-0 right-3.5 flex items-center text-[15px] text-slate-500">{ad.suffix}</span>
                  ) : null}
                </div>
                <p id={`${id}-limits`} className="sr-only">
                  Between {limits[f].min} and {limits[f].max}.
                </p>
                {err ? (
                  <p id={`${id}-err`} role="alert" className="mt-1.5 text-[13px] font-medium text-danger-600">
                    {err}
                  </p>
                ) : "help" in meta && meta.help ? (
                  <p id={`${id}-help`} className="mt-1.5 text-[13px] text-slate-500">
                    {meta.help}
                  </p>
                ) : null}
              </div>
            );
          })}

          <div className="sm:col-span-2">
            <label htmlFor={`${baseId}-specialty`} className="text-[14px] font-semibold text-navy-900">
              {c.fields.specialty.label}
            </label>
            <div className="relative mt-2">
              <select
                id={`${baseId}-specialty`}
                value={specialty}
                onChange={(e) => setSpecialty(Number(e.target.value))}
                aria-describedby={`${baseId}-specialty-help`}
                className="h-12 w-full appearance-none rounded-md border border-line-strong bg-white pl-4 pr-10 text-[15px] text-ink outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
              >
                {c.specialties.map((s) => (
                  <option key={s.label} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
              <Icon name="chevron-down" className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
            </div>
            <p id={`${baseId}-specialty-help`} className="mt-1.5 text-[13px] text-slate-500">
              {c.fields.specialty.help}
            </p>
          </div>
        </div>
      </form>

      {/* ----------------------------------------------------------------- */}
      {/* Results                                                           */}
      {/* ----------------------------------------------------------------- */}
      <div
        className="rounded-2xl border border-brand-100 bg-gradient-to-b from-white to-brand-50 p-5 shadow-card sm:p-7 lg:sticky lg:top-24"
        role="region"
        aria-live="polite"
        aria-label="Estimated opportunity"
      >
        <Eyebrow>{c.results.eyebrow}</Eyebrow>
        <p className="mt-5 text-[13.5px] font-medium text-slate-600">{c.results.monthly}</p>
        <p className="mt-1 font-display text-[2.8rem] leading-none tabular-nums text-navy-900 sm:text-[3.2rem]">{formatCurrency(results.monthly)}</p>
        <p className="mt-4 text-[13.5px] font-medium text-slate-600">{c.results.yearly}</p>
        <p className="mt-1 font-display text-[1.9rem] leading-none tabular-nums text-teal-600">{formatCurrency(results.yearly)}</p>

        {noImprovement ? (
          <p className="mt-5 flex items-start gap-2 rounded-md border border-gold-400/50 bg-gold-300/20 px-3.5 py-2.5 text-[13.5px] text-slate-700">
            <Icon name="alert" className="mt-0.5 size-4 shrink-0 text-gold-500" strokeWidth={2.2} />
            <span>
              Your expected rate is not higher than your current rate, so the estimate only reflects AR recovery. Raise the
              improved rate to see the full opportunity.
            </span>
          </p>
        ) : null}

        <dl className="mt-6 grid grid-cols-2 gap-3">
          {(
            [
              ["current", results.current, formatCurrency],
              ["projected", results.projected, formatCurrency],
              ["arGain", results.arGain, formatCurrency],
              ["gap", results.gap, (n: number) => `${n.toFixed(0)}%`],
            ] as const
          ).map(([key, value, fmt]) => (
            <div key={key} className="rounded-lg border border-line bg-white p-4">
              <dt className="text-[12px] font-semibold text-slate-500">{c.results[key]}</dt>
              <dd className="mt-1 text-[1.2rem] font-bold tabular-nums text-brand-700">{fmt(value)}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-5 text-[12.5px] leading-relaxed text-slate-500">{c.disclaimer}</p>
        <Button href={c.button.href} className="mt-5 w-full" arrow>
          {c.button.label}
        </Button>
      </div>

      {/* Mobile sticky summary so results stay visible while editing inputs */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 p-3 lg:hidden" aria-hidden="true">
        <div className="pointer-events-auto mx-auto flex max-w-md items-center justify-between gap-4 rounded-xl border border-white/15 bg-navy-900/95 px-4 py-3 text-white shadow-float backdrop-blur">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-200">Extra per month</p>
            <p className="font-display text-[1.5rem] leading-none tabular-nums">{formatCurrency(results.monthly)}</p>
          </div>
          <div className="text-right">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-200">Per year</p>
            <p className="text-[1.05rem] font-bold tabular-nums text-teal-100">{formatCurrency(results.yearly)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
