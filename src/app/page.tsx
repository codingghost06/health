import type { Metadata } from "next";
import { home } from "@/content/home";
import { site } from "@/content/site";
import { CtaBand } from "@/components/blocks/cta-band";
import { HomeHero } from "@/components/sections/home-hero";
import { PayerStrip } from "@/components/sections/payer-strip";
import { Process } from "@/components/sections/process";
import { ServicesGrid } from "@/components/sections/services-grid";
import { SpecialtiesGrid } from "@/components/sections/specialties-grid";
import { Testimonials } from "@/components/sections/testimonials";
import { WhyUs } from "@/components/sections/why-us";
import { JsonLd } from "@/components/seo/json-ld";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: site.title,
  description: site.description,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <HomeHero hero={home.hero} />
      <PayerStrip strip={home.payerStrip} />
      <ServicesGrid content={home.services} />
      <WhyUs content={home.why} />
      <SpecialtiesGrid content={home.specialties} />
      <Process content={home.process} />
      <Testimonials content={home.testimonials} />
      <CtaBand {...home.cta} />
      <JsonLd
        data={serviceJsonLd(
          "Medical Billing & Revenue Cycle Management",
          "End-to-end medical billing, RCM, medical coding, provider credentialing, denial management, AR recovery, transcription and claims management for healthcare practices.",
          "/",
        )}
      />
    </>
  );
}
