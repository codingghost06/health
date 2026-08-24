import type { Block, Tile } from "@/content/types";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/icon";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

type TilesBlock = Extract<Block, { type: "tiles" }>;

export function TileGrid({ items, className, children }: { items: readonly Tile[]; className?: string; children?: React.ReactNode }) {
  return (
    <ul className={cn("grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6", className)}>
      {items.map((t) => (
        <li
          key={t.label}
          id={t.id}
          className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-line bg-white px-3 py-5 text-center shadow-card transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-brand-200 hover:bg-brand-50"
        >
          <span className="flex size-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600 transition group-hover:bg-white">
            <Icon name={t.icon} className="size-5" strokeWidth={2} />
          </span>
          <span className="text-[13.5px] font-semibold leading-tight text-navy-900">{t.label}</span>
          {t.sub ? <span className="text-[12px] text-slate-500">{t.sub}</span> : null}
        </li>
      ))}
      {children}
    </ul>
  );
}

export function TilesBlock({ block, tone }: { block: TilesBlock; tone: "white" | "surface" }) {
  return (
    <Section id={block.id} tone={tone}>
      <SectionHeading eyebrow={block.eyebrow} title={block.title} lead={block.lead} align="center" />
      <TileGrid items={block.items} className="mt-10" />
    </Section>
  );
}
