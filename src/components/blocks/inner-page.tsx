import type { InnerPage as InnerPageType } from "@/content/types";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { CtaBand } from "./cta-band";
import { PageHero } from "./page-hero";
import { RenderBlocks } from "./render-blocks";

/** Standard inner page: hero → blocks → closing CTA, with breadcrumb/FAQ schema. */
export function InnerPage({ page, extraJsonLd }: { page: InnerPageType; extraJsonLd?: object[] }) {
  const faq = page.blocks.find((b) => b.type === "faq");
  const jsonLd: object[] = [
    breadcrumbJsonLd([...page.hero.breadcrumb, { label: page.hero.title.join(" "), href: page.path }]),
    ...(faq ? [faqJsonLd(faq.items)] : []),
    ...(extraJsonLd ?? []),
  ];
  return (
    <>
      <PageHero {...page.hero} />
      <RenderBlocks blocks={page.blocks} />
      <CtaBand {...page.cta} />
      <JsonLd data={jsonLd} />
    </>
  );
}
