import type { Metadata } from "next";
import { freeAuditPage } from "@/content/free-audit";
import { routes } from "@/content/site";
import { PageHero } from "@/components/blocks/page-hero";
import { LeadForm } from "@/components/forms/lead-form";
import { JsonLd } from "@/components/seo/json-ld";
import { CheckList } from "@/components/ui/check-list";
import { Icon } from "@/components/ui/icon";
import { IconBadge } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ ...freeAuditPage.meta, path: routes.freeAudit });

export default function FreeAuditPage() {
  const p = freeAuditPage;
  return (
    <>
      <PageHero {...p.hero} />
      <Section tone="surface" aria-label="Free revenue audit request">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8 lg:p-10">
            <h2 className="font-display text-[1.75rem] text-navy-900 sm:text-[2rem]">{p.form.title}</h2>
            <div className="mt-6">
              <LeadForm />
            </div>
          </div>

          <aside className="grid gap-6">
            <div className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-7">
              <h2 className="text-[1.125rem] font-semibold text-navy-900">{p.direct.title}</h2>
              <ul className="mt-5 divide-y divide-line">
                {p.direct.items.map((it) => (
                  <li key={it.label} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                    <IconBadge name={it.icon} size="sm" tone="navy" />
                    <div>
                      <p className="text-[12px] font-semibold uppercase tracking-wider text-slate-500">{it.label}</p>
                      {it.href ? (
                        <a href={it.href} className="mt-0.5 block text-[15px] font-semibold text-brand-700 hover:underline">
                          {it.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 whitespace-pre-line text-[15px] font-semibold text-navy-900">{it.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-7">
              <h2 className="text-[1.125rem] font-semibold text-navy-900">{p.after.title}</h2>
              <CheckList items={p.after.items} compact className="mt-4" />
            </div>

            <div className="flex gap-4 rounded-2xl border border-teal-100 bg-teal-50 p-6">
              <IconBadge name={p.trust.icon} tone="gold" size="sm" className="bg-white" />
              <div>
                <p className="text-[15px] font-semibold text-navy-900">{p.trust.title}</p>
                <p className="mt-1 text-[14px] leading-relaxed text-slate-600">{p.trust.body}</p>
              </div>
            </div>
          </aside>
        </div>
        <p className="mt-8 flex items-center justify-center gap-2 text-[13px] text-slate-500">
          <Icon name="lock" className="size-3.5" />
          Your information is never shared. Submitting this form does not require any protected health information.
        </p>
      </Section>
      <JsonLd data={breadcrumbJsonLd([...p.hero.breadcrumb, { label: "Free Revenue Audit", href: routes.freeAudit }])} />
    </>
  );
}
