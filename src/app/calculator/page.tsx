import type { Metadata } from "next";
import { calculatorPage } from "@/content/calculator";
import { routes } from "@/content/site";
import { CtaBand } from "@/components/blocks/cta-band";
import { PageHero } from "@/components/blocks/page-hero";
import { RevenueCalculator } from "@/components/calculator/revenue-calculator";
import { JsonLd } from "@/components/seo/json-ld";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ ...calculatorPage.meta, path: routes.calculator });

export default function CalculatorPage() {
  return (
    <>
      <PageHero {...calculatorPage.hero} />
      <Section tone="surface" className="pb-28 lg:pb-24" aria-labelledby="calc-title">
        <SectionHeading id="calc-title" eyebrow={calculatorPage.eyebrow} title={calculatorPage.title} />
        <div className="mt-10">
          <RevenueCalculator />
        </div>
      </Section>
      <CtaBand {...calculatorPage.cta} />
      <JsonLd data={breadcrumbJsonLd([...calculatorPage.hero.breadcrumb, { label: "Calculator", href: routes.calculator }])} />
    </>
  );
}
