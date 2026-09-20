import type { Metadata } from "next";
import { PageHero } from "@/components/blocks/page-hero";
import { Section } from "@/components/ui/section";
import { routes, site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Website Privacy Notice",
  description: "How Revplus Multisolutions handles information submitted through this website.",
  path: routes.privacy,
});

const sections = [
  {
    title: "Information this website may receive",
    body: [
      "When you use the consultation form, you may provide your name, work contact details, organization, specialty, approximate monthly visit volume, areas of interest and a message. Please do not include patient names, medical records or other protected health information in this general inquiry form.",
      "The website's hosting environment may also produce routine technical logs needed to deliver and protect the site, such as request times, browser information and network addresses.",
    ],
  },
  {
    title: "How inquiry information is used",
    body: [
      "Information submitted through the consultation form is used to review and respond to the inquiry, understand the requested service and maintain related business records. Service providers used for website hosting or form delivery may process information as part of providing those functions.",
      "Consultation requests are transmitted through Web3Forms. Do not use this general inquiry form to send patient information, medical records or other protected health information.",
    ],
  },
  {
    title: "HIPAA and this public website",
    body: [
      "Revplus provides HIPAA-compliant service workflows, but this public consultation form is not a patient portal or a channel for clinical records. A prospective client should use the phone number below to discuss an appropriate information-sharing process before sending protected health information.",
    ],
  },
  {
    title: "Choices and questions",
    body: [
      `To ask about information submitted through this website, call ${site.phone.display} or write to ${site.address.display}. The public business email address is not yet confirmed and is therefore not listed.`,
      "Inquiry records may be retained while the request is handled and as reasonably needed for operational or legal purposes. This notice may be updated when the site's data practices or contact channels change.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", href: routes.home }]}
        title={["Website Privacy Notice"]}
        lead="A plain-language overview of the information this public website may receive and how consultation inquiries are handled."
      />
      <Section size="narrow">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-700">Last updated September 20, 2026</p>
        <div className="mt-8 grid gap-10">
          {sections.map((section) => (
            <section key={section.title} aria-labelledby={section.title.replaceAll(" ", "-").toLowerCase()}>
              <h2 id={section.title.replaceAll(" ", "-").toLowerCase()} className="font-display text-2xl text-navy-900 sm:text-3xl">
                {section.title}
              </h2>
              <div className="mt-4 grid gap-4 text-[1rem] leading-relaxed text-slate-600">
                {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>
          ))}
        </div>
      </Section>
    </>
  );
}
