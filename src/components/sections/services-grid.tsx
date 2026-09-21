"use client";

import Link from "next/link";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type TouchEvent,
} from "react";
import type { HomeContent } from "@/content/types";
import type { IconName } from "@/components/ui/icon";
import { routes } from "@/content/site";
import { services } from "@/content/services";
import { Card, IconBadge } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/cn";

interface ServiceCardProps {
  icon: IconName;
  title: string;
  body: string;
  href: string;
  linkLabel: string;
  tabIndex?: number;
}

export function ServiceCard({
  icon,
  title,
  body,
  href,
  linkLabel,
  tabIndex,
}: ServiceCardProps) {
  return (
    <Card
      as="article"
      interactive
      className="flex h-full w-full flex-col bg-white/95"
    >
      <IconBadge name={icon} />
      <h3 className="mt-5 text-[1.125rem] font-semibold text-navy-900">
        <Link
          href={href}
          tabIndex={tabIndex}
          className="after:absolute after:inset-0 after:rounded-xl focus-visible:outline-none"
        >
          {title}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-slate-600">
        {body}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand-600">
        {linkLabel}
        <Icon
          name="arrow-right"
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
          strokeWidth={2.4}
        />
      </span>
    </Card>
  );
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    const sync = () => setMatches(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, [query]);
  return matches;
}

export function ServicesGrid({
  content,
}: {
  content: HomeContent["services"];
}) {
  const isTablet = useMediaQuery("(min-width: 768px)");
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const perPage = isTablet ? 2 : 1;
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const [timerVersion, setTimerVersion] = useState(0);
  const [announcement, setAnnouncement] = useState("");
  const touchStart = useRef<number | null>(null);

  const items = useMemo(
    () => [
      ...services.map((service) => ({
        key: service.slug,
        icon: service.icon,
        title: service.name,
        body: service.homeBlurb,
        href: service.path,
        linkLabel: "Learn more",
      })),
      {
        key: "payment-posting",
        icon: content.extra.icon ?? ("receipt" as IconName),
        title: content.extra.title,
        body: content.extra.body ?? "",
        href: content.extra.link.href,
        linkLabel: content.extra.link.label,
      },
      {
        key: "services-overview",
        icon: "layers" as IconName,
        title: "Explore the Full Service Overview",
        body: "See how Revplus approaches billing, coding, credentialing, claims, denials and receivables as connected parts of the revenue cycle.",
        href: routes.services,
        linkLabel: "View all services",
      },
    ],
    [content],
  );

  const pageCount = Math.ceil(items.length / perPage);
  const currentPage = page % pageCount;
  const startIndex = currentPage * perPage;

  useEffect(() => {
    if (paused || reducedMotion || pageCount < 2) return;
    const timer = window.setInterval(() => {
      setPage((current) => (current + 1) % pageCount);
    }, 3000);
    return () => window.clearInterval(timer);
  }, [pageCount, paused, reducedMotion, timerVersion]);

  const move = (direction: 1 | -1, announce = true) => {
    setPage((current) => {
      const next = (current + direction + pageCount) % pageCount;
      if (announce)
        setAnnouncement(`Showing service set ${next + 1} of ${pageCount}.`);
      return next;
    });
    setTimerVersion((version) => version + 1);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      move(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      move(-1);
    }
  };

  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStart.current = event.changedTouches[0]?.clientX ?? null;
    setPaused(true);
  };

  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const end = event.changedTouches[0]?.clientX;
    if (touchStart.current !== null && end !== undefined) {
      const distance = end - touchStart.current;
      if (Math.abs(distance) > 45) move(distance < 0 ? 1 : -1);
    }
    touchStart.current = null;
    setPaused(false);
  };

  return (
    <Section
      id="services"
      tone="surface"
      aria-labelledby="services-title"
      className="overflow-hidden"
    >
      <SectionHeading
        id="services-title"
        eyebrow={content.eyebrow}
        title={content.title}
        lead={content.lead}
        align="center"
      />

      <div
        className="mt-12"
        role="region"
        aria-roledescription="carousel"
        aria-label="Revplus services"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget))
            setPaused(false);
        }}
        onKeyDown={onKeyDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <p className="sr-only" aria-live="polite">
          {announcement}
        </p>
        <div className="-mx-2.5 overflow-hidden px-0.5 py-2">
          <ul
            className={cn(
              "flex items-stretch",
              reducedMotion
                ? "transition-none"
                : "transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)]",
            )}
            style={{
              width: `${(items.length * 100) / perPage}%`,
              transform: `translateX(-${(startIndex * 100) / items.length}%)`,
            }}
          >
            {/* {items.map((item, index) => {
              const visible = index >= startIndex && index < startIndex + perPage;
              return (
                <li
                  key={item.key}
                  className="flex shrink-0 px-2.5"
                  style={{ width: `${100 / items.length}%` }}
                  aria-hidden={!visible}
                >
                  <ServiceCard {...item} tabIndex={visible ? undefined : -1} />
                </li>
              );
            })} */}
            {items.map((item, index) => {
              const visible =
                index >= startIndex && index < startIndex + perPage;

              const { key, ...cardProps } = item;

              return (
                <li
                  key={key}
                  className="flex shrink-0 px-2.5"
                  style={{ width: `${100 / items.length}%` }}
                  aria-hidden={!visible}
                >
                  <ServiceCard
                    {...cardProps}
                    tabIndex={visible ? undefined : -1}
                  />
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-4 sm:justify-between">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => move(-1)}
              className="flex size-11 items-center justify-center rounded-full border border-line-strong bg-white text-navy-900 shadow-card transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700"
              aria-label="Show previous services"
            >
              <Icon
                name="arrow-right"
                className="size-4 rotate-180"
                strokeWidth={2.4}
              />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              className="flex size-11 items-center justify-center rounded-full border border-line-strong bg-white text-navy-900 shadow-card transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700"
              aria-label="Show next services"
            >
              <Icon name="arrow-right" className="size-4" strokeWidth={2.4} />
            </button>
          </div>

          <div
            className="flex items-center gap-2"
            aria-label={`Service set ${currentPage + 1} of ${pageCount}`}
          >
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => {
                  setPage(index);
                  setTimerVersion((version) => version + 1);
                  setAnnouncement(
                    `Showing service set ${index + 1} of ${pageCount}.`,
                  );
                }}
                className={cn(
                  "h-2.5 rounded-full transition-[width,background-color] duration-300",
                  currentPage === index
                    ? "w-7 bg-brand-600"
                    : "w-2.5 bg-line-strong hover:bg-brand-300",
                )}
                aria-label={`Show service set ${index + 1}`}
                aria-current={currentPage === index ? "true" : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
