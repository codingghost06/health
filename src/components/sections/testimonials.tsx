import type { HomeContent } from "@/content/types";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

function Stars() {
  return (
    <span className="flex gap-0.5 text-gold-500" aria-label="5 out of 5 stars" role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="star" className="size-4 fill-current" strokeWidth={0} />
      ))}
    </span>
  );
}

export function Testimonials({ content }: { content: HomeContent["testimonials"] }) {
  return (
    <Section aria-labelledby="testimonials-title">
      <SectionHeading id="testimonials-title" eyebrow={content.eyebrow} title={content.title} align="center" />
      <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {content.items.map((t) => (
          <li key={t.name}>
            <Card as="figure" className="flex h-full flex-col">
              <Stars />
              <blockquote className="mt-4 flex-1 text-[0.975rem] leading-relaxed text-slate-700">
                <p>&ldquo;{t.quote}&rdquo;</p>
              </blockquote>
              <figcaption className="mt-5 border-t border-line pt-4">
                <span className="block text-[14.5px] font-semibold text-navy-900">{t.name}</span>
                <span className="block text-[13px] text-slate-500">{t.role}</span>
              </figcaption>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
