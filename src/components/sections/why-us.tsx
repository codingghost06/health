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

        <ul className="grid content-center gap-4" aria-label="Revenue cycle operating approach">
          {content.metrics.map((m) => (
            <li key={m.label} className="group rounded-xl border border-line bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card-hover sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <span className="text-[13px] font-semibold uppercase tracking-[0.12em] text-slate-500">{m.label}</span>
                <Icon name="arrow-right" className="size-4 text-teal-600 transition-transform group-hover:translate-x-0.5" />
              </div>
              <p className="mt-3 text-[1.2rem] font-semibold text-navy-900">{m.value}</p>
              <p className="mt-1 text-[13.5px] leading-relaxed text-slate-500">{m.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
