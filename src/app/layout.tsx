import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/content/site";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  // icons: {
  //   apple: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/brand/revplus-mark.png`,
  // },
  icons: {
  icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/icon.svg`,
  shortcut: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/icon.svg`,
  apple: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/brand/revplus-mark.png`,
  },
  // Static preview builds (GitHub Pages) must not be indexed; the real domain is canonical.
  robots:
    process.env.NEXT_PUBLIC_DEPLOY_TARGET === "github-pages"
      ? { index: false, follow: false }
      : { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: site.url,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b2648",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only z-50 rounded-md bg-brand-600 px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
      </body>
    </html>
  );
}
