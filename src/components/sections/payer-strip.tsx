import Link from "next/link";
import type { HomeContent } from "@/content/types";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";

export function PayerStrip({ strip }: { strip: HomeContent["payerStrip"] }) {
  return (
    <section className="border-y border-sky-200/70 bg-gradient-to-r from-white via-sky-50 to-brand-50 py-5" aria-label="Common payer environments">
      <Container size="wide" className="flex flex-col items-center gap-3 md:flex-row md:gap-6">
        <p className="shrink-0 text-[11.5px] font-semibold uppercase tracking-[0.18em] text-slate-600">{strip.label}</p>
        <ul className="flex flex-wrap justify-center gap-2 md:justify-start">
          {strip.payers.map((p) => (
            <li key={p} className="rounded-full border border-line bg-white/80 px-3.5 py-1.5 text-[13px] font-semibold text-navy-800 shadow-sm">
              {p}
            </li>
          ))}
          <li>
            <Link
              href={strip.more.href}
              className="inline-flex items-center gap-1 rounded-full border border-brand-200 bg-brand-100/80 px-3.5 py-1.5 text-[13px] font-semibold text-brand-700 transition hover:bg-brand-200"
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
