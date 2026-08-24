import Link from "next/link";
import type { Block } from "@/content/types";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";

type ChipsBlock = Extract<Block, { type: "chips" }>;

/** Compact strip of payer pills (credentialing page). */
export function ChipsBlock({ block }: { block: ChipsBlock }) {
  return (
    <section className="border-y border-line bg-surface-2/60 py-8">
      <Container className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
        <h2 className="shrink-0 text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-600">{block.title}</h2>
        <ul className="flex flex-wrap gap-2">
          {block.items.map((c) => (
            <li key={c} className="rounded-full border border-line bg-white px-3.5 py-1.5 text-[13.5px] font-semibold text-navy-900">
              {c}
            </li>
          ))}
          {block.more ? (
            <li>
              <Link
                href={block.more.href}
                className="inline-flex items-center gap-1 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-[13.5px] font-semibold text-brand-700 transition hover:bg-brand-100"
              >
                {block.more.label}
                <Icon name="arrow-right" className="size-3.5" strokeWidth={2.4} />
              </Link>
            </li>
          ) : null}
        </ul>
      </Container>
    </section>
  );
}
