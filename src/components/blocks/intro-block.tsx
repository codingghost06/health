import type { Block } from "@/content/types";
import { cn } from "@/lib/cn";
import { CheckList } from "@/components/ui/check-list";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

type IntroBlock = Extract<Block, { type: "intro" }>;

function Timeline({ items }: { items: IntroBlock["aside"] extends infer A ? (A extends { items: infer I } ? I : never) : never }) {
  return (
    <ol className="relative border-l-2 border-brand-100 pl-7">
      {items.map((step, i) => (
        <li key={step.title} className={cn("relative", i < items.length - 1 && "pb-7")}>
          <span className="absolute -left-[calc(1.75rem+5px)] top-1 flex size-[18px] items-center justify-center rounded-full border-2 border-brand-600 bg-white">
            <span className="size-2 rounded-full bg-brand-600" />
          </span>
          <h3 className="text-[1.0625rem] font-semibold text-navy-900">{step.title}</h3>
          <p className="mt-1 text-[0.9375rem] leading-relaxed text-slate-600">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}

function Blocks({ items }: { items: { title: string; body: string }[] }) {
  return (
    <div className="grid gap-4">
      {items.map((b) => (
        <div key={b.title} className="rounded-xl border border-line bg-white p-5 shadow-card sm:p-6">
          <h3 className="text-[1.0625rem] font-semibold text-navy-900">{b.title}</h3>
          <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-slate-600">{b.body}</p>
        </div>
      ))}
    </div>
  );
}

export function IntroBlock({ block, tone }: { block: IntroBlock; tone: "white" | "surface" }) {
  const hasAside = !!block.aside?.items.length;
  const hasBullets = block.bullets.length > 0;
  return (
    <Section tone={tone}>
      <div className={cn("grid gap-12", hasAside && "lg:grid-cols-[1fr_1fr] lg:gap-16")}>
        <div>
          <SectionHeading eyebrow={block.eyebrow} title={block.title} lead={block.lead} />
          {hasBullets ? <CheckList items={block.bullets} className="mt-8" columns={hasAside ? 1 : 2} /> : null}
        </div>
        {hasAside && block.aside ? (
          <div className={cn(block.aside.kind === "blocks" && tone === "white" && "rounded-2xl bg-surface p-5 sm:p-6")}>
            {block.aside.kind === "timeline" ? <Timeline items={block.aside.items} /> : <Blocks items={block.aside.items} />}
          </div>
        ) : null}
      </div>
    </Section>
  );
}
