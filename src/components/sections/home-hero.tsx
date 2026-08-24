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
            <Icon name="trophy" className="size-3.5" strokeWidth={2.4} />
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

        <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.07] shadow-float backdrop-blur-md animate-fade-up delay-4" aria-label="Key performance figures">
          {hero.stats.map((s, i) => (
            <div
              key={s.label}
              className={[
                "flex flex-col-reverse gap-1.5 p-6 sm:p-7",
                i % 2 === 1 ? "border-l border-white/12" : "",
                i >= 2 ? "border-t border-white/12" : "",
              ].join(" ")}
            >
              <dt className="text-[13px] font-medium text-brand-200/90">{s.label}</dt>
              <dd className="font-display text-[2.2rem] leading-none tabular-nums text-white sm:text-[2.6rem]">{s.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
