import Link from "next/link";
import { cn } from "@/lib/cn";
import { site } from "@/content/site";

interface LogoMarkProps {
  className?: string;
  /** Use on dark backgrounds. */
  inverted?: boolean;
}

/**
 * Brand mark: rounded square with a medical cross, a rising "revenue" arc and
 * a teal status dot — the same idea as the reference's CSS logo, drawn cleanly.
 */
export function LogoMark({ className, inverted }: LogoMarkProps) {
  const id = inverted ? "hb-mark-inv" : "hb-mark";
  return (
    <svg viewBox="0 0 48 48" className={cn("size-10", className)} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={inverted ? "#2f8be8" : "#1e7be0"} />
          <stop offset="1" stopColor={inverted ? "#0f3562" : "#0f427c"} />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="12" fill={`url(#${id})`} />
      {/* rising arc */}
      <path d="M11 33c6-11 15-16 26-16" fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="2.5" strokeLinecap="round" />
      {/* cross */}
      <rect x="21" y="12" width="6" height="24" rx="2" fill="#fff" />
      <rect x="12" y="21" width="24" height="6" rx="2" fill="#fff" />
      {/* status dot */}
      <circle cx="37" cy="37" r="5.5" fill="#10a394" stroke={inverted ? "#0b1f3a" : "#fff"} strokeWidth="2.5" />
    </svg>
  );
}

interface LogoProps {
  className?: string;
  inverted?: boolean;
  /** Renders as a link to home (default) or a static element. */
  asLink?: boolean;
}

export function Logo({ className, inverted, asLink = true }: LogoProps) {
  const content = (
    <>
      <LogoMark inverted={inverted} className="size-10 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-[1.35rem] leading-none tracking-[-0.005em]", inverted ? "text-white" : "text-navy-900")}>
          {site.name}
        </span>
        <span className={cn("mt-1 text-[9.5px] font-semibold uppercase tracking-[0.18em]", inverted ? "text-teal-500" : "text-teal-700")}>
          {site.tagline}
        </span>
      </span>
    </>
  );
  const cls = cn("inline-flex items-center gap-2.5 rounded-md", className);
  if (!asLink) return <span className={cls}>{content}</span>;
  return (
    <Link href="/" className={cls} title="Home">
      {content}
    </Link>
  );
}
