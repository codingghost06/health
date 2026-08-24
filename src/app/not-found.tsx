import type { Metadata } from "next";
import { routes } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <Container size="narrow" className="text-center">
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-brand-600">404</p>
        <h1 className="mt-3 font-display text-[2.5rem] sm:text-[3rem]">We couldn&apos;t find that page.</h1>
        <p className="mx-auto mt-4 max-w-md text-[1.0625rem] text-slate-600">
          The link may be outdated. Head back home or jump straight to a free revenue audit.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={routes.home} variant="secondary">
            Back to home
          </Button>
          <Button href={routes.freeAudit} arrow>
            Get a free audit
          </Button>
        </div>
      </Container>
    </section>
  );
}
