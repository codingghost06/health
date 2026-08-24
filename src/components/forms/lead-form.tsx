"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { cn } from "@/lib/cn";
import { parseLead, serviceOptions, specialtyOptions, type LeadFieldErrors, type LeadInput } from "@/lib/lead";
import { freeAuditPage } from "@/content/free-audit";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

type Status = "idle" | "submitting" | "success" | "error";

const f = freeAuditPage.form;

const inputCls = (invalid?: boolean) =>
  cn(
    "h-12 w-full rounded-md border bg-white px-4 text-[15px] text-ink outline-none transition placeholder:text-slate-500 focus:border-brand-500 focus:ring-4 focus:ring-brand-100",
    invalid ? "border-danger-600" : "border-line-strong",
  );

function Field({
  id,
  label,
  error,
  children,
  className,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-[14px] font-semibold text-navy-900">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-err`} role="alert" className="mt-1.5 text-[13px] font-medium text-danger-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function LeadForm() {
  const id = useId();
  const startedAt = useRef<number>(0);
  const formRef = useRef<HTMLFormElement>(null);
  // Stamp when the form became interactive; the API rejects submissions faster than a human could fill it.
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<LeadFieldErrors>({});
  const [serverMessage, setServerMessage] = useState<string>("");

  const collect = (): LeadInput => {
    const fd = new FormData(formRef.current!);
    const s = (k: string) => String(fd.get(k) ?? "");
    return {
      practice: s("practice"),
      firstName: s("firstName"),
      lastName: s("lastName"),
      email: s("email"),
      phone: s("phone"),
      specialty: s("specialty"),
      service: s("service"),
      message: s("message"),
      website: s("website"),
      startedAt: startedAt.current,
    };
  };

  const validateOne = (name: keyof LeadInput) => {
    const parsed = parseLead(collect());
    const next = parsed.success ? {} : parsed.errors;
    setErrors((prev) => ({ ...prev, [name]: next[name] }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = collect();
    const parsed = parseLead(data);
    if (!parsed.success) {
      const errs = parsed.errors;
      setErrors(errs);
      const first = Object.keys(errs)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setErrors({});
    setStatus("submitting");
    setServerMessage("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; message?: string; errors?: LeadFieldErrors };
      if (res.ok && json.ok) {
        setStatus("success");
        formRef.current?.reset();
        return;
      }
      if (json.errors) setErrors(json.errors);
      setServerMessage(json.message || "Something went wrong. Please try again.");
      setStatus("error");
    } catch {
      setServerMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div role="status" className="flex flex-col items-center rounded-2xl border border-teal-100 bg-teal-50 p-8 text-center sm:p-10">
        <span className="flex size-14 items-center justify-center rounded-full bg-white text-teal-600 shadow-card">
          <Icon name="check" className="size-8" strokeWidth={2.2} />
        </span>
        <h3 className="mt-5 font-display text-[1.75rem] text-navy-900">{f.success.title}</h3>
        <p className="mt-2 max-w-md text-[15px] leading-relaxed text-slate-600">{f.success.body}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button href={site.phone.href} variant="secondary" icon="phone">
            {site.phone.display}
          </Button>
          <Button
            variant="link"
            onClick={() => {
              startedAt.current = Date.now();
              setStatus("idle");
            }}
          >
            Submit another request
          </Button>
        </div>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="grid gap-5" aria-busy={submitting}>
      <Field id={`${id}-practice`} label={f.labels.practice} error={errors.practice}>
        <input id={`${id}-practice`} name="practice" type="text" autoComplete="organization" placeholder={f.placeholders.practice} required maxLength={120}
          aria-invalid={!!errors.practice} aria-describedby={errors.practice ? `${id}-practice-err` : undefined} onBlur={() => validateOne("practice")} className={inputCls(!!errors.practice)} />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={`${id}-firstName`} label={f.labels.firstName} error={errors.firstName}>
          <input id={`${id}-firstName`} name="firstName" type="text" autoComplete="given-name" placeholder={f.placeholders.firstName} required maxLength={60}
            aria-invalid={!!errors.firstName} aria-describedby={errors.firstName ? `${id}-firstName-err` : undefined} onBlur={() => validateOne("firstName")} className={inputCls(!!errors.firstName)} />
        </Field>
        <Field id={`${id}-lastName`} label={f.labels.lastName} error={errors.lastName}>
          <input id={`${id}-lastName`} name="lastName" type="text" autoComplete="family-name" placeholder={f.placeholders.lastName} required maxLength={60}
            aria-invalid={!!errors.lastName} aria-describedby={errors.lastName ? `${id}-lastName-err` : undefined} onBlur={() => validateOne("lastName")} className={inputCls(!!errors.lastName)} />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={`${id}-email`} label={f.labels.email} error={errors.email}>
          <input id={`${id}-email`} name="email" type="email" autoComplete="email" inputMode="email" placeholder={f.placeholders.email} required maxLength={160}
            aria-invalid={!!errors.email} aria-describedby={errors.email ? `${id}-email-err` : undefined} onBlur={() => validateOne("email")} className={inputCls(!!errors.email)} />
        </Field>
        <Field id={`${id}-phone`} label={f.labels.phone} error={errors.phone}>
          <input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder={f.placeholders.phone} required maxLength={30}
            aria-invalid={!!errors.phone} aria-describedby={errors.phone ? `${id}-phone-err` : undefined} onBlur={() => validateOne("phone")} className={inputCls(!!errors.phone)} />
        </Field>
      </div>

      <Field id={`${id}-specialty`} label={f.labels.specialty} error={errors.specialty}>
        <div className="relative">
          <select id={`${id}-specialty`} name="specialty" required defaultValue="" aria-invalid={!!errors.specialty} aria-describedby={errors.specialty ? `${id}-specialty-err` : undefined}
            onChange={() => validateOne("specialty")} className={cn(inputCls(!!errors.specialty), "appearance-none pr-10 invalid:text-slate-500")}>
            <option value="" disabled>{f.placeholders.specialty}</option>
            {specialtyOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
          <Icon name="chevron-down" className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
        </div>
      </Field>

      <Field id={`${id}-service`} label={f.labels.service} error={errors.service}>
        <div className="relative">
          <select id={`${id}-service`} name="service" required defaultValue="" aria-invalid={!!errors.service} aria-describedby={errors.service ? `${id}-service-err` : undefined}
            onChange={() => validateOne("service")} className={cn(inputCls(!!errors.service), "appearance-none pr-10 invalid:text-slate-500")}>
            <option value="" disabled>{f.placeholders.service}</option>
            {serviceOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
          <Icon name="chevron-down" className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
        </div>
      </Field>

      <Field id={`${id}-message`} label={f.labels.message} error={errors.message}>
        <textarea id={`${id}-message`} name="message" rows={4} placeholder={f.placeholders.message} maxLength={2000}
          aria-invalid={!!errors.message} aria-describedby={errors.message ? `${id}-message-err` : undefined} className={cn(inputCls(!!errors.message), "h-auto resize-y py-3")} />
      </Field>

      {/* Honeypot: invisible to humans, tempting to bots. */}
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor={`${id}-website`}>Website</label>
        <input id={`${id}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && serverMessage ? (
        <p role="alert" className="flex items-start gap-2 rounded-md border border-danger-600/30 bg-danger-50 px-4 py-3 text-[14px] text-danger-600">
          <Icon name="alert" className="mt-0.5 size-4 shrink-0" strokeWidth={2.2} />
          <span>
            {serverMessage}{" "}
            <a href={site.phone.href} className="font-semibold underline">
              {site.phone.display}
            </a>{" "}
            ·{" "}
            <a href={site.email.href} className="font-semibold underline">
              {site.email.display}
            </a>
          </span>
        </p>
      ) : null}

      <Button type="submit" size="lg" className="w-full" disabled={submitting} arrow={!submitting}>
        {submitting ? (
          <span className="inline-flex items-center gap-2">
            <span className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" />
            Sending…
          </span>
        ) : (
          f.submit
        )}
      </Button>
      <p className="text-center text-[13px] text-slate-500">{f.footnote}</p>
    </form>
  );
}
