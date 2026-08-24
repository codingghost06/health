import Link from "next/link";
import type { PageHero as PageHeroType } from "@/content/types";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { StatRow } from "@/components/ui/stat";

/** Dark hero used by every inner page. */
export function PageHero({ breadcrumb, title, lead, stats }: PageHeroType) {
  return (
    <section className="relative isolate overflow-hidden bg-hero text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-60 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
      <Container className="relative py-14 sm:py-16 lg:py-20">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-white/60">
            {breadcrumb.map((b) => (
              <li key={b.href} className="flex items-center gap-1.5">
                <Link href={b.href} className="transition hover:text-white">
                  {b.label}
                </Link>
                <Icon name="chevron-down" className="size-3.5 -rotate-90 text-white/40" />
              </li>
            ))}
            <li aria-current="page" className="text-white/85">
              {title[0]}
            </li>
          </ol>
        </nav>
        <h1 className="mt-6 max-w-3xl font-display text-[2.35rem] leading-[1.06] text-white sm:text-[3rem] lg:text-[3.5rem]">
          {title.map((line, i) => (
            <span key={i} className={i > 0 ? "sm:block" : undefined}>
              {i > 0 ? " " : null}
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-white/75 sm:text-lg">{lead}</p>
        {stats?.length ? (
          <div className="mt-10 border-t border-white/12 pt-8 animate-fade-up delay-1">
            <StatRow stats={stats} />
          </div>
        ) : null}
      </Container>
    </section>
  );
}
