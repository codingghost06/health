import type { Block, Step } from "@/content/types";
import { cn } from "@/lib/cn";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

type StepsBlock = Extract<Block, { type: "steps" }>;

export function StepsList({ items, className }: { items: readonly Step[]; className?: string }) {
  const horizontal = items.length <= 4;
  return (
    <ol
      className={cn(
        "grid gap-6",
        horizontal ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {items.map((step, i) => (
        <li key={step.title} className="relative rounded-xl border border-line bg-white p-6 shadow-card">
          <span className="flex size-10 items-center justify-center rounded-full bg-navy-900 font-display text-[1.2rem] leading-none text-white ring-4 ring-brand-50">
            {i + 1}
          </span>
          <h3 className="mt-4 text-[1.0625rem] font-semibold text-navy-900">{step.title}</h3>
          <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-slate-600">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function StepsBlock({ block, tone }: { block: StepsBlock; tone: "white" | "surface" }) {
  return (
    <Section tone={tone}>
      <SectionHeading eyebrow={block.eyebrow} title={block.title} lead={block.lead} />
      <StepsList items={block.items} className="mt-10" />
    </Section>
  );
}
