import type { Cta } from "@/content/types";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

/** Full-width closing call-to-action used at the bottom of every page. */
export function CtaBand({ title, lead, button, secondary }: Cta) {
  return (
    <section className="relative isolate overflow-hidden bg-cta text-white" aria-labelledby="cta-title">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40 [mask-image:radial-gradient(60%_80%_at_50%_100%,black,transparent)]" />
      <Container className="relative py-16 text-center sm:py-20 lg:py-24">
        <h2 id="cta-title" className="mx-auto max-w-3xl font-display text-[2rem] text-white sm:text-[2.6rem] lg:text-[3rem]">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-white/80">{lead}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={button.href} variant="onDark" size="lg" arrow>
            {button.label}
          </Button>
          {secondary ? (
            <Button href={secondary.href} variant="ghostDark" size="lg">
              {secondary.label}
            </Button>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
