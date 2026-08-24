import type { HomeContent } from "@/content/types";
import { Icon } from "@/components/ui/icon";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function WhyUs({ content }: { content: HomeContent["why"] }) {
  return (
    <Section tone="surface" aria-labelledby="why-title">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <SectionHeading id="why-title" eyebrow={content.eyebrow} title={content.title} lead={content.lead} />
          <ul className="mt-9 grid gap-6">
            {content.points.map((p) => (
              <li key={p.title} className="flex gap-4">
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600 ring-1 ring-inset ring-teal-100">
                  <Icon name="check" className="size-[18px]" strokeWidth={2.4} />
                </span>
                <div>
                  <h3 className="text-[1.0625rem] font-semibold text-navy-900">{p.title}</h3>
                  <p className="mt-1 text-[0.95rem] leading-relaxed text-slate-600">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <ul className="grid content-center gap-4" aria-label="Performance benchmarks">
          {content.metrics.map((m) => (
            <li key={m.label} className="rounded-xl border border-line bg-white p-5 shadow-card sm:p-6">
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-[14px] font-semibold text-slate-700">{m.label}</span>
                <span className="font-display text-[1.75rem] leading-none tabular-nums text-navy-900">{m.value}</span>
              </div>
              <div
                className="mt-3 h-2 overflow-hidden rounded-full bg-surface-2"
                role="meter"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={m.pct}
                aria-label={`${m.label}: ${m.value}`}
              >
                <div className="metric-fill h-full origin-left rounded-full bg-gradient-to-r from-brand-600 to-teal-500" style={{ width: `${m.pct}%` }} />
              </div>
              <p className="mt-2 text-[12.5px] text-slate-500">{m.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
