import Link from "next/link";
import { footerColumns } from "@/content/nav";
import { site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <Container size="wide" className="py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:gap-8">
          <div>
            <Logo inverted />
            <p className="mt-5 max-w-xs text-[14.5px] leading-relaxed text-white/60">
              America&apos;s most trusted medical billing and revenue cycle management company. Serving 4,800+ physicians,
              hospitals, labs, and clinics in all 50 states.
            </p>
            <ul className="mt-6 grid gap-3 text-[14.5px]">
              <li>
                <a href={site.phone.href} className="inline-flex items-center gap-2.5 text-white/80 transition hover:text-white">
                  <Icon name="phone" className="size-4 text-teal-500" />
                  {site.phone.display}
                </a>
              </li>
              <li>
                <a href={site.email.href} className="inline-flex items-center gap-2.5 text-white/80 transition hover:text-white">
                  <Icon name="mail" className="size-4 text-teal-500" />
                  {site.email.display}
                </a>
              </li>
              <li className="inline-flex items-start gap-2.5 text-white/80">
                <Icon name="map-pin" className="mt-1 size-4 shrink-0 text-teal-500" />
                <span>{site.address.display}</span>
              </li>
            </ul>
          </div>

          {footerColumns.map((col) => (
            <nav key={col.title} aria-label={`Footer ${col.title}`}>
              <h2 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white">{col.title}</h2>
              <ul className="mt-4 grid gap-2.5">
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link href={l.href} className="text-[14.5px] text-white/60 transition hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-7 text-[13px] text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {site.copyrightYear} {site.legalName}. All rights reserved. · {site.address.display} ·{" "}
            <a href={site.phone.href} className="hover:text-white">
              {site.phone.display}
            </a>
          </p>
          <ul className="flex flex-wrap gap-2" aria-label="Compliance and memberships">
            {site.badges.map((b) => (
              <li key={b} className="rounded-md border border-white/15 px-2.5 py-1 text-[11px] font-semibold tracking-wider text-white/70">
                {b}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
