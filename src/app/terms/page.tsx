import type { Metadata } from "next";
import { PageHero } from "@/components/blocks/page-hero";
import { Section } from "@/components/ui/section";
import { routes, site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Website Terms",
  description: "Terms for using the Revplus Multisolutions public website and its educational content.",
  path: routes.terms,
});

const sections = [
  {
    title: "Informational purpose",
    body: "This website provides general information about Revplus Multisolutions and medical revenue cycle services. It is not medical, coding, legal, tax or reimbursement advice, and it should not replace guidance based on the facts of a particular organization or claim.",
  },
  {
    title: "No service relationship from website use",
    body: "Browsing the site, using the planning calculator or sending an inquiry does not create a client relationship. Services, responsibilities, pricing, security arrangements and any performance expectations must be defined in a separate written agreement.",
  },
  {
    title: "Planning calculator",
    body: "Calculator results use only the assumptions entered by the visitor. They are illustrative scenarios, not forecasts, reimbursement advice or guarantees of collections, savings or financial results.",
  },
  {
    title: "Payers, specialties and third parties",
    body: "References to payer environments and healthcare specialties are descriptive. They do not represent endorsements, formal payer partnerships, universal coverage of every workflow or a promise that a particular claim will be paid.",
  },
  {
    title: "Site availability and updates",
    body: "Revplus may revise this public information as its services and website change. The site may occasionally be unavailable for maintenance or hosting-related reasons. Contact Revplus directly before relying on the site for a time-sensitive decision.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", href: routes.home }]}
        title={["Website Terms"]}
        lead="Terms for the use of this public website, its educational material and planning tools."
      />
      <Section size="narrow">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-700">Last updated September 19, 2026</p>
        <div className="mt-8 grid gap-10">
          {sections.map((section) => (
            <section key={section.title} aria-labelledby={section.title.replaceAll(" ", "-").toLowerCase()}>
              <h2 id={section.title.replaceAll(" ", "-").toLowerCase()} className="font-display text-2xl text-navy-900 sm:text-3xl">
                {section.title}
              </h2>
              <p className="mt-4 text-[1rem] leading-relaxed text-slate-600">{section.body}</p>
            </section>
          ))}
        </div>
        <p className="mt-12 rounded-xl border border-line bg-surface p-5 text-[0.95rem] leading-relaxed text-slate-600">
          Questions about these website terms may be directed to Revplus at{" "}
          <a className="font-semibold text-brand-700 underline-offset-4 hover:underline" href={site.phone.href}>{site.phone.display}</a>{" "}
          or by mail at {site.address.display}.
        </p>
      </Section>
    </>
  );
}
