import Link from "next/link";
import type { HomeContent } from "@/content/types";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";

export function PayerStrip({ strip }: { strip: HomeContent["payerStrip"] }) {
  return (
    <section className="border-b border-white/10 bg-navy-950 py-5" aria-label="Payers we bill">
      <Container size="wide" className="flex flex-col items-center gap-3 md:flex-row md:gap-6">
        <p className="shrink-0 text-[11.5px] font-semibold uppercase tracking-[0.18em] text-white/50">{strip.label}</p>
        <ul className="flex flex-wrap justify-center gap-2 md:justify-start">
          {strip.payers.map((p) => (
            <li key={p} className="rounded-full border border-white/12 bg-white/[0.06] px-3.5 py-1.5 text-[13px] font-semibold text-white/85">
              {p}
            </li>
          ))}
          <li>
            <Link
              href={strip.more.href}
              className="inline-flex items-center gap-1 rounded-full border border-teal-500/40 bg-teal-500/15 px-3.5 py-1.5 text-[13px] font-semibold text-teal-100 transition hover:bg-teal-500/25"
            >
              {strip.more.label}
              <Icon name="arrow-right" className="size-3.5" strokeWidth={2.4} />
            </Link>
          </li>
        </ul>
      </Container>
    </section>
  );
}
