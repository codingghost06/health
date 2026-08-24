import type { HomeContent } from "@/content/types";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function Process({ content }: { content: HomeContent["process"] }) {
  return (
    <Section tone="surface" aria-labelledby="process-title">
      <SectionHeading id="process-title" eyebrow={content.eyebrow} title={content.title} lead={content.lead} align="center" />
      <ol className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {/* connector line (desktop) */}
        <div aria-hidden="true" className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-px bg-gradient-to-r from-brand-200 via-brand-400 to-teal-500 lg:block" />
        {content.steps.map((step, i) => (
          <li key={step.title} className="relative flex flex-col items-center text-center lg:px-2">
            <span className="relative flex size-12 items-center justify-center rounded-full bg-navy-900 font-display text-[1.35rem] leading-none text-white shadow-[0_0_0_6px_var(--color-surface)]">
              {i + 1}
            </span>
            <h3 className="mt-5 text-[1.0625rem] font-semibold text-navy-900">{step.title}</h3>
            <p className="mt-2 max-w-xs text-[0.95rem] leading-relaxed text-slate-600">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
