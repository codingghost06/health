import Link from "next/link";
import type { HomeContent } from "@/content/types";
import type { IconName } from "@/components/ui/icon";
import { services } from "@/content/services";
import { Card, IconBadge } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

interface ServiceCardProps {
  icon: IconName;
  title: string;
  body: string;
  href: string;
  linkLabel: string;
}

export function ServiceCard({ icon, title, body, href, linkLabel }: ServiceCardProps) {
  return (
    <Card as="article" interactive className="flex h-full flex-col">
      <IconBadge name={icon} />
      <h3 className="mt-5 text-[1.125rem] font-semibold text-navy-900">
        <Link href={href} className="after:absolute after:inset-0 after:rounded-xl focus-visible:outline-none">
          {title}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-slate-600">{body}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand-600">
        {linkLabel}
        <Icon name="arrow-right" className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2.4} />
      </span>
    </Card>
  );
}

export function ServicesGrid({ content }: { content: HomeContent["services"] }) {
  return (
    <Section id="services" aria-labelledby="services-title">
      <SectionHeading id="services-title" eyebrow={content.eyebrow} title={content.title} lead={content.lead} align="center" />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.slug} icon={s.icon} title={s.name} body={s.homeBlurb} href={s.path} linkLabel="Learn more" />
        ))}
        <ServiceCard
          icon={content.extra.icon ?? "receipt"}
          title={content.extra.title}
          body={content.extra.body ?? ""}
          href={content.extra.link.href}
          linkLabel={content.extra.link.label}
        />
      </div>
    </Section>
  );
}
