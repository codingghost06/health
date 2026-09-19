import type { HomeContent } from "@/content/types";
import { Card, IconBadge } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function PartnershipPrinciples({ content }: { content: HomeContent["principles"] }) {
  return (
    <Section aria-labelledby="principles-title">
      <SectionHeading
        id="principles-title"
        eyebrow={content.eyebrow}
        title={content.title}
        lead={content.lead}
        align="center"
      />
      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {content.items.map((item) => (
          <li key={item.title}>
            <Card className="h-full">
              {item.icon ? <IconBadge name={item.icon} /> : null}
              <h3 className="mt-5 text-[1.08rem] font-semibold text-navy-900">{item.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-600">{item.body}</p>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
