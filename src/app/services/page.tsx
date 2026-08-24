import type { Metadata } from "next";
import { services } from "@/content/services";
import { servicesHub } from "@/content/services-hub";
import { routes } from "@/content/site";
import { CtaBand } from "@/components/blocks/cta-band";
import { PageHero } from "@/components/blocks/page-hero";
import { ServiceCard } from "@/components/sections/services-grid";
import { JsonLd } from "@/components/seo/json-ld";
import { Section } from "@/components/ui/section";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ ...servicesHub.meta, path: routes.services });

export default function ServicesPage() {
  return (
    <>
      <PageHero {...servicesHub.hero} />
      <Section aria-labelledby="all-services-title">
        <h2 id="all-services-title" className="sr-only">
          All services
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} icon={s.icon} title={s.name} body={s.hubBlurb} href={s.path} linkLabel="View service" />
          ))}
          <ServiceCard
            icon={servicesHub.extra.icon ?? "shield-check"}
            title={servicesHub.extra.title}
            body={servicesHub.extra.body ?? ""}
            href={servicesHub.extra.link.href}
            linkLabel={servicesHub.extra.link.label}
          />
        </div>
      </Section>
      <CtaBand {...servicesHub.cta} />
      <JsonLd data={breadcrumbJsonLd([...servicesHub.hero.breadcrumb, { label: "Services", href: routes.services }])} />
    </>
  );
}
