import type { HomeContent } from "@/content/types";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Icon } from "@/components/ui/icon";

export function HomeHero({ hero }: { hero: HomeContent["hero"] }) {
  return (
    <section className="relative isolate overflow-hidden bg-hero text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-70 [mask-image:radial-gradient(60%_70%_at_70%_20%,black,transparent)]" />
      <Container size="wide" className="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-28">
        <div>
          <Eyebrow tone="gold">
            <Icon name="shield-check" className="size-3.5" strokeWidth={2.4} />
            {hero.badge}
          </Eyebrow>
          <h1 className="mt-6 font-display text-[2.6rem] leading-[1.04] text-white sm:text-[3.4rem] lg:text-[4rem]">
            <span className="sr-only">{site.name}: </span>
            {hero.title.map((line, i) => (
              <span key={i} className="block">
                {line.split(" ").map((word, j) => (
                  <span key={j}>
                    {j > 0 ? " " : null}
                    {word === hero.highlight ? <em className="not-italic text-gradient-gold">{word}</em> : word}
                  </span>
                ))}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-white/78 sm:text-lg">{hero.lead}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row animate-fade-up delay-3">
            <Button href={hero.primary.href} variant="onDark" size="lg" arrow>
              {hero.primary.label}
            </Button>
            <Button href={hero.secondary.href} variant="ghostDark" size="lg">
              {hero.secondary.label}
            </Button>
          </div>
        </div>

        <div className="relative animate-fade-up delay-4">
          <div className="absolute -inset-8 rounded-full bg-teal-500/15 blur-3xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.09] p-5 shadow-float backdrop-blur-md sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-200">Revenue cycle view</p>
                <p className="mt-1 text-[1.08rem] font-semibold text-white">From encounter to resolution</p>
              </div>
              <span className="flex size-10 items-center justify-center rounded-xl bg-teal-400/15 text-teal-200 ring-1 ring-inset ring-teal-300/25">
                <Icon name="activity" className="size-5" />
              </span>
            </div>

            <ol className="mt-7 grid gap-3" aria-label="Simplified claim workflow">
              {["Documentation review", "Coding and claim preparation", "Payer response tracking", "Denial and AR follow-up"].map((label, i) => (
                <li key={label} className="flex items-center gap-3 rounded-xl border border-white/10 bg-navy-950/25 px-4 py-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-teal-400/15 text-[12px] font-bold text-teal-100 ring-1 ring-inset ring-teal-300/20">
                    {i + 1}
                  </span>
                  <span className="flex-1 text-[13.5px] font-medium text-white/85">{label}</span>
                  <Icon name="check" className="size-4 text-teal-300" />
                </li>
              ))}
            </ol>

            <dl className="mt-5 grid grid-cols-2 gap-2 border-t border-white/10 pt-5">
              {hero.stats.map((s) => (
                <div key={s.label} className="rounded-lg bg-white/[0.06] px-3 py-3">
                  <dt className="text-[11px] leading-snug text-white/55">{s.label}</dt>
                  <dd className="mt-1 text-[13.5px] font-semibold text-white">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
