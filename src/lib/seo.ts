import type { Metadata } from "next";
import { site } from "@/content/site";

interface PageMeta {
  title: string;
  description: string;
  path: string;
  /** Skip the "| Health Billing" suffix (home page). */
  absoluteTitle?: boolean;
}

/** Builds consistent per-page metadata: canonical, OG and Twitter cards. */
export function pageMetadata({ title, description, path, absoluteTitle }: PageMeta): Metadata {
  const url = `${site.url}${path === "/" ? "" : path}`;
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

/* ---------------------------------------------------------------------- */
/* JSON-LD                                                                 */
/* ---------------------------------------------------------------------- */

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: `${site.url}/icon.svg`,
  email: site.email.display,
  telephone: site.phone.e164,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  areaServed: "US",
  description:
    "Medical billing, revenue cycle management, coding, credentialing, denial management and AR recovery for physicians, hospitals, labs and clinics across the United States.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.phone.e164,
    contactType: "sales",
    email: site.email.display,
    areaServed: "US",
    availableLanguage: "English",
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  description: "America's premier medical billing and revenue cycle management partner for healthcare practices.",
};

export function serviceJsonLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: name,
    url: `${site.url}${path}`,
    description,
    provider: { "@type": "Organization", name: site.name, url: site.url },
    areaServed: { "@type": "Country", name: "United States" },
  };
}

export function breadcrumbJsonLd(items: { label: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.label,
      item: `${site.url}${it.href === "/" ? "" : it.href}`,
    })),
  };
}

export function faqJsonLd(items: { q: string; a: string[] }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a.join("\n\n") },
    })),
  };
}
