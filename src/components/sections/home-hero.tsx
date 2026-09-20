"use client";

import { useEffect, useState } from "react";
import type { HomeContent } from "@/content/types";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/cn";

const workflow = [
  "Documentation review",
  "Coding and claim preparation",
  "Payer response tracking",
  "Denial and AR follow-up",
] as const;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return reduced;
}

export function HomeHero({ hero }: { hero: HomeContent["hero"] }) {
  const [activeStep, setActiveStep] = useState(0);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const timer = window.setInterval(() => {
      setActiveStep((step) => (step + 1) % workflow.length);
    }, 1800);
    return () => window.clearInterval(timer);
  }, [reducedMotion]);

  return (
    <section className="relative isolate overflow-hidden bg-hero-light text-navy-900">
      <div className="pointer-events-none absolute inset-0 bg-grid-medical opacity-80 [mask-image:radial-gradient(75%_75%_at_74%_28%,black,transparent)]" />
      <div className="pointer-events-none absolute -left-36 top-16 size-72 rounded-full bg-brand-200/45 blur-3xl" aria-hidden="true" />
      <Container size="wide" className="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.07fr_0.93fr] lg:gap-16 lg:py-28">
        <div>
          <Eyebrow className="bg-white/75 shadow-sm ring-1 ring-brand-200/80">
            <Icon name="shield-check" className="size-3.5" strokeWidth={2.4} />
            {hero.badge}
          </Eyebrow>
          <h1 className="mt-6 font-display text-[2.6rem] leading-[1.04] text-navy-950 sm:text-[3.4rem] lg:text-[4rem]">
            <span className="sr-only">{site.name}: </span>
            {hero.title.map((line, i) => (
              <span key={i} className="block">
                {line.split(" ").map((word, j) => (
                  <span key={j}>
                    {j > 0 ? " " : null}
                    {word === hero.highlight ? <em className="not-italic text-gradient-medical">{word}</em> : word}
                  </span>
                ))}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-slate-700 sm:text-lg">{hero.lead}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row animate-fade-up delay-3">
            <Button href={hero.primary.href} size="lg" arrow>
              {hero.primary.label}
            </Button>
            <Button href={hero.secondary.href} variant="secondary" size="lg">
              {hero.secondary.label}
            </Button>
          </div>
        </div>

        <div className="relative animate-fade-up delay-4">
          <div className="absolute -inset-8 rounded-full bg-sky-200/50 blur-3xl" aria-hidden="true" />
          <div className="hero-workflow-card relative overflow-hidden rounded-2xl border border-white/80 bg-white/80 p-5 shadow-float backdrop-blur-xl sm:p-7">
            <div className="absolute inset-x-0 top-0 h-1 bg-surface-2">
              <span
                className="block h-full origin-left bg-gradient-to-r from-brand-500 via-teal-500 to-sky-500 transition-transform duration-700 ease-out"
                style={{ transform: `scaleX(${(activeStep + 1) / workflow.length})` }}
              />
            </div>

            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700">Revenue cycle view</p>
                <p className="mt-1 text-[1.08rem] font-semibold text-navy-950">From encounter to resolution</p>
              </div>
              <span className="workflow-activity flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-sky-100 text-brand-700 ring-1 ring-inset ring-brand-200">
                <Icon name="activity" className="size-5" />
              </span>
            </div>

            <div className="relative mt-7">
              <span className="absolute bottom-5 left-[0.875rem] top-5 w-px bg-line-strong" aria-hidden="true" />
              <span
                className="absolute left-[0.875rem] top-5 w-px origin-top bg-gradient-to-b from-brand-500 to-sky-500 transition-transform duration-700 ease-out"
                style={{ height: "calc(100% - 2.5rem)", transform: `scaleY(${activeStep / (workflow.length - 1)})` }}
                aria-hidden="true"
              />
              <ol className="relative grid gap-3" aria-label="Simplified claim workflow">
                {workflow.map((label, i) => {
                  const isActive = i === activeStep;
                  const isReached = i <= activeStep;
                  return (
                    <li
                      key={label}
                      className={cn(
                        "group flex items-center gap-3 rounded-xl border px-3.5 py-3 transition-all duration-500 sm:px-4",
                        isActive
                          ? "translate-x-1 border-brand-200 bg-gradient-to-r from-brand-50 to-sky-50 shadow-card"
                          : "border-line/80 bg-white/65",
                      )}
                    >
                      <span
                        className={cn(
                          "relative z-10 flex size-7 shrink-0 items-center justify-center rounded-full text-[12px] font-bold ring-4 ring-white transition-colors duration-500",
                          isReached ? "bg-brand-600 text-white" : "bg-surface-2 text-slate-500",
                          isActive && "workflow-node-active",
                        )}
                      >
                        {isReached && i < activeStep ? <Icon name="check" className="size-3.5" strokeWidth={2.7} /> : i + 1}
                      </span>
                      <span className={cn("flex-1 text-[13.5px] font-medium transition-colors", isReached ? "text-navy-900" : "text-slate-500")}>{label}</span>
                      <span className={cn("size-2 rounded-full transition-all duration-500", isActive ? "scale-100 bg-teal-500 shadow-[0_0_0_5px_rgba(18,167,123,.12)]" : "scale-75 bg-line-strong")} />
                    </li>
                  );
                })}
              </ol>
            </div>

            <dl className="mt-5 grid grid-cols-2 gap-2 border-t border-line pt-5">
              {hero.stats.map((s) => (
                <div key={s.label} className="rounded-lg bg-gradient-to-br from-white to-surface px-3 py-3 ring-1 ring-inset ring-line/80">
                  <dt className="text-[11px] leading-snug text-slate-500">{s.label}</dt>
                  <dd className="mt-1 text-[13.5px] font-semibold text-navy-900">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
