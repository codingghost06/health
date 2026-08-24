import Link from "next/link";
import type { HomeContent } from "@/content/types";
import { TileGrid } from "@/components/blocks/tiles-block";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function SpecialtiesGrid({ content }: { content: HomeContent["specialties"] }) {
  return (
    <Section aria-labelledby="specialties-title">
      <SectionHeading id="specialties-title" eyebrow={content.eyebrow} title={content.title} lead={content.lead} align="center" />
      <TileGrid items={content.tiles} className="mt-12">
        <li>
          <Link
            href={content.more.href}
            className="flex h-full flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-brand-300 bg-brand-50/60 px-3 py-5 text-center transition hover:bg-brand-100"
          >
            <span className="text-[1.05rem] font-semibold text-brand-700">{content.moreTile.label}</span>
            <span className="text-[12px] font-medium text-brand-600">{content.moreTile.sub}</span>
          </Link>
        </li>
      </TileGrid>
      <div className="mt-10 text-center">
        <Button href={content.more.href} arrow>
          {content.more.label}
        </Button>
      </div>
    </Section>
  );
}
