import type { Block, FaqItem } from "@/content/types";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

type FaqBlock = Extract<Block, { type: "faq" }>;

/**
 * Accordion built on native <details>/<summary>. Zero JavaScript, keyboard
 * accessible out of the box, and `name` makes it exclusive (one open at a
 * time) in browsers that support it — matching the reference behaviour.
 */
export function FaqList({ items, group = "faq" }: { items: readonly FaqItem[]; group?: string }) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <details
          key={item.q}
          name={group}
          className="group rounded-xl border border-line bg-white shadow-card transition-[border-color,box-shadow] open:border-brand-200 open:shadow-card-hover hover:border-brand-200"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-xl px-5 py-4 text-[15.5px] font-semibold text-navy-900 transition group-open:text-brand-700 sm:px-6">
            <span>{item.q}</span>
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-transform duration-300 group-open:rotate-45">
              <Icon name="x" className="size-4 rotate-45" strokeWidth={2.4} />
            </span>
          </summary>
          <div className="border-t border-line bg-surface px-5 py-4 text-[0.95rem] leading-relaxed text-slate-700 sm:px-6">
            {item.a.map((p, i) => (
              <p key={i} className={i > 0 ? "mt-3" : undefined}>
                {p}
              </p>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}

export function FaqBlock({ block }: { block: FaqBlock }) {
  return (
    <Section id={block.id} tone="surface">
      <SectionHeading eyebrow={block.eyebrow} title={block.title} lead={block.lead} align="center" />
      <div className="mx-auto mt-10 max-w-3xl">
        <FaqList items={block.items} />
        {block.button ? (
          <div className="mt-8 text-center">
            <Button href={block.button.href} arrow>
              {block.button.label}
            </Button>
          </div>
        ) : null}
      </div>
    </Section>
  );
}
