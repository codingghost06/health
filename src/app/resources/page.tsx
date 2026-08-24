import type { Metadata } from "next";
import { resourcesPage } from "@/content/resources";
import { routes } from "@/content/site";
import { CtaBand } from "@/components/blocks/cta-band";
import { PageHero } from "@/components/blocks/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ ...resourcesPage.meta, path: routes.resources });

export default function ResourcesPage() {
  return (
    <>
      <PageHero {...resourcesPage.hero} />
      {resourcesPage.sections.map((section, i) => (
        <Section key={section.id} id={section.id} tone={i % 2 === 0 ? "white" : "surface"} aria-labelledby={`${section.id}-title`}>
          <SectionHeading
            id={`${section.id}-title`}
            eyebrow={
              <>
                <Icon name={section.icon} className="size-3.5" strokeWidth={2.4} />
                {section.eyebrow}
              </>
            }
            title={section.title}
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {section.items.map((item) => (
              <li key={item.title}>
                <Card as="article" className="flex h-full flex-col">
                  {item.tag ? <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-teal-600">{item.tag}</span> : null}
                  {section.id === "guides" ? (
                    <span className="flex size-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                      <Icon name="file" className="size-5" />
                    </span>
                  ) : null}
                  <h3 className={["text-[1.0625rem] font-semibold leading-snug text-navy-900", item.tag || section.id === "guides" ? "mt-3" : ""].join(" ")}>
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-slate-600">{item.body}</p>
                  {item.result ? (
                    <p className="mt-4 inline-flex items-center gap-1.5 self-start rounded-md bg-teal-50 px-2.5 py-1 text-[13px] font-semibold text-teal-700">
                      <Icon name="trending-up" className="size-3.5" strokeWidth={2.4} />
                      {item.result.replace(/^[↑↓]\s*/, "")}
                    </p>
                  ) : null}
                  {section.id !== "case-studies" ? <p className="mt-4 text-[12.5px] font-medium text-slate-400">Coming soon</p> : null}
                </Card>
              </li>
            ))}
          </ul>
        </Section>
      ))}
      <div id="resource-pack" className="scroll-mt-20">
        <CtaBand {...resourcesPage.cta} />
      </div>
      <JsonLd data={breadcrumbJsonLd([...resourcesPage.hero.breadcrumb, { label: "Resources", href: routes.resources }])} />
    </>
  );
}
