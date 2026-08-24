"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { primaryNav, navCta, type Menu, type NavItem } from "@/content/nav";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Logo } from "@/components/ui/logo";

/* -------------------------------------------------------------------------- */
/* Desktop dropdown                                                            */
/* -------------------------------------------------------------------------- */

function DesktopMenu({
  item,
  open,
  onOpen,
  onClose,
}: {
  item: NavItem;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const menu = item.menu as Menu;
  const id = useId();
  const ref = useRef<HTMLLIElement>(null);
  const closeTimer = useRef<number | null>(null);

  const scheduleClose = () => {
    closeTimer.current = window.setTimeout(onClose, 120);
  };
  const cancelClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        ref.current?.querySelector<HTMLElement>("button")?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const wide = menu.columns === 3;

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        onOpen();
      }}
      onMouseLeave={scheduleClose}
      onBlur={(e) => {
        if (!ref.current?.contains(e.relatedTarget as Node)) onClose();
      }}
    >
      <div className="flex items-center">
        <Link
          href={item.href}
          onClick={onClose}
          className="rounded-l-md py-2 pl-3 pr-1 text-[14.5px] font-medium text-slate-700 transition hover:text-brand-700"
        >
          {item.label}
        </Link>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          aria-label={`${item.label} menu`}
          onClick={() => (open ? onClose() : onOpen())}
          className="rounded-r-md py-2 pl-0.5 pr-2 text-slate-500 transition hover:text-brand-700"
        >
          <Icon
            name="chevron-down"
            className={cn(
              "size-4 transition-transform duration-200",
              open && "rotate-180",
            )}
            strokeWidth={2.4}
          />
        </button>
      </div>

      <div
        id={id}
        className={cn(
          "absolute top-full z-40 pt-2 transition-[opacity,transform,visibility] duration-200 ease-out",
          wide
            ? "left-1/2 w-[min(760px,calc(100vw-2rem))] -translate-x-1/2"
            : "left-0 w-80",
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0",
        )}
      >
        <div className="overflow-hidden rounded-xl border border-line bg-white shadow-float">
          <ul
            className={cn(
              "grid gap-0.5 p-2.5",
              wide ? "grid-cols-3" : "grid-cols-1",
            )}
          >
            {menu.items.map((m) => (
              <li key={m.href + m.label}>
                <Link
                  href={m.href}
                  onClick={onClose}
                  className="group flex items-start gap-3 rounded-lg px-3 py-2.5 transition hover:bg-brand-50 focus-visible:bg-brand-50"
                >
                  {m.icon ? (
                    <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md bg-surface-2 text-brand-600 transition group-hover:bg-brand-100">
                      <Icon name={m.icon} className="size-4" strokeWidth={2} />
                    </span>
                  ) : null}
                  <span className="min-w-0">
                    <span className="block text-[14px] font-semibold text-navy-900">
                      {m.label}
                    </span>
                    {m.sub ? (
                      <span className="block text-[12.5px] leading-snug text-slate-500">
                        {m.sub}
                      </span>
                    ) : null}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          {menu.footer ? (
            <div className="flex items-center justify-between gap-4 border-t border-line bg-surface px-5 py-3 text-[13px]">
              <span className="text-slate-500">{menu.footer.text}</span>
              <Link
                href={menu.footer.link.href}
                onClick={onClose}
                className="inline-flex items-center gap-1 font-semibold text-brand-600 hover:text-brand-700"
              >
                {menu.footer.link.label}
                <Icon
                  name="arrow-right"
                  className="size-3.5"
                  strokeWidth={2.4}
                />
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </li>
  );
}

/* -------------------------------------------------------------------------- */
/* Mobile drawer                                                               */
/* -------------------------------------------------------------------------- */

function MobileGroup({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();
  if (!item.menu) {
    return (
      <Link
        href={item.href}
        onClick={onNavigate}
        className="flex min-h-12 items-center rounded-lg px-3 text-[16px] font-semibold text-navy-900 hover:bg-brand-50"
      >
        {item.label}
      </Link>
    );
  }
  return (
    <div className="rounded-lg">
      <div className="flex items-stretch">
        <Link
          href={item.href}
          onClick={onNavigate}
          className="flex min-h-12 flex-1 items-center rounded-l-lg px-3 text-[16px] font-semibold text-navy-900 hover:bg-brand-50"
        >
          {item.label}
        </Link>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          aria-label={`${open ? "Collapse" : "Expand"} ${item.label}`}
          onClick={() => setOpen((v) => !v)}
          className="flex w-12 items-center justify-center rounded-r-lg text-slate-500 hover:bg-brand-50"
        >
          <Icon
            name="chevron-down"
            className={cn("size-5 transition-transform", open && "rotate-180")}
          />
        </button>
      </div>
      <ul
        id={id}
        hidden={!open}
        className="mb-2 grid gap-0.5 border-l-2 border-brand-100 pl-3"
      >
        {item.menu.items.map((m) => (
          <li key={m.href + m.label}>
            <Link
              href={m.href}
              onClick={onNavigate}
              className="flex min-h-11 items-center gap-2.5 rounded-md px-2 text-[15px] text-slate-700 hover:bg-brand-50 hover:text-navy-900"
            >
              {m.icon ? (
                <Icon
                  name={m.icon}
                  className="size-4 shrink-0 text-brand-600"
                />
              ) : null}
              {m.label}
            </Link>
          </li>
        ))}
        {item.menu.footer ? (
          <li>
            <Link
              href={item.menu.footer.link.href}
              onClick={onNavigate}
              className="flex min-h-11 items-center gap-1 px-2 text-[14px] font-semibold text-brand-600"
            >
              {item.menu.footer.link.label}
              <Icon name="arrow-right" className="size-3.5" strokeWidth={2.4} />
            </Link>
          </li>
        ) : null}
      </ul>
    </div>
  );
}

function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    panelRef.current?.querySelector<HTMLElement>("a,button")?.focus();
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 overflow-hidden lg:hidden",
        open
          ? "visible"
          : "invisible delay-300 [transition:visibility_0s_0.3s]",
      )}
      aria-hidden={!open}
    >
      {/* Scrim */}
      <div
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-navy-950/50 backdrop-blur-[2px] transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
      />
      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={cn(
          "absolute inset-y-0 right-0 flex w-[min(92vw,380px)] flex-col bg-white shadow-float transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex h-[72px] items-center justify-between border-b border-line px-5">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex size-11 items-center justify-center rounded-md text-slate-600 hover:bg-surface-2"
          >
            <Icon name="x" className="size-6" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Mobile">
          <div className="grid gap-1">
            {primaryNav.map((item) => (
              <MobileGroup key={item.label} item={item} onNavigate={onClose} />
            ))}
          </div>
        </nav>
        <div className="border-t border-line p-5">
          <Button href={navCta.href} className="w-full" arrow>
            {navCta.label}
          </Button>
          <a
            href={site.phone.href}
            className="mt-4 flex items-center justify-center gap-2 text-[15px] font-semibold text-navy-900"
          >
            <Icon name="phone" className="size-4 text-brand-600" />
            {site.phone.display}
          </a>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Header                                                                      */
/* -------------------------------------------------------------------------- */

export function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [drawer, setDrawer] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback(() => setOpenMenu(null), []);
  const closeDrawer = useCallback(() => setDrawer(false), []);

  return (
    <header className="sticky top-0 z-40">
      {/* The blur lives on an inner wrapper: `backdrop-filter` on <header> itself would make it the
          containing block for the fixed-position mobile drawer and clip it to the header's height. */}
      <div
        className={cn(
          "border-b bg-white/90 backdrop-blur-md transition-[border-color,box-shadow] duration-300",
          scrolled
            ? "border-line shadow-[0_1px_0_rgba(15,42,76,.04),0_8px_24px_rgba(15,42,76,.06)]"
            : "border-transparent",
        )}
      >
        <Container
          size="wide"
          className="flex h-[72px] items-center justify-between gap-6"
        >
          <Logo />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {primaryNav.map((item) =>
                item.menu ? (
                  <DesktopMenu
                    key={item.label}
                    item={item}
                    open={openMenu === item.label}
                    onOpen={() => setOpenMenu(item.label)}
                    onClose={closeMenu}
                  />
                ) : (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className={cn(
                        "rounded-md px-3 py-2 text-[14.5px] font-medium transition hover:text-brand-700",
                        pathname === item.href
                          ? "text-brand-700"
                          : "text-slate-700",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.phone.href}
              className="hidden items-center gap-1.5 text-[14px] font-semibold text-navy-900 transition hover:text-brand-700 xl:inline-flex"
            >
              <Icon name="phone" className="size-4 text-brand-600" />
              {site.phone.display}
            </a>
            <Button
              href={navCta.href}
              size="sm"
              className="hidden sm:inline-flex"
            >
              {navCta.label}
            </Button>
            <button
              type="button"
              onClick={() => setDrawer(true)}
              aria-label="Open menu"
              aria-expanded={drawer}
              className="flex size-11 items-center justify-center rounded-md text-navy-900 hover:bg-surface-2 lg:hidden"
            >
              <Icon name="menu" className="size-6" />
            </button>
          </div>
        </Container>
      </div>

      <MobileDrawer open={drawer} onClose={closeDrawer} />
    </header>
  );
}
