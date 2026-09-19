import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

interface LogoMarkProps {
  className?: string;
  /** Use on dark backgrounds. */
  inverted?: boolean;
}

export function LogoMark({ className, inverted }: LogoMarkProps) {
  return (
    <span
      className={cn(
        "relative block size-11 shrink-0 overflow-hidden rounded-xl bg-white shadow-[0_3px_14px_rgba(4,31,68,.12)]",
        inverted && "ring-1 ring-white/20",
        className,
      )}
    >
      <Image
        src={`${basePath}/brand/revplus-mark.png`}
        alt=""
        fill
        sizes="48px"
        className="scale-[1.65] object-cover"
        priority
      />
    </span>
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
      <LogoMark inverted={inverted} className="size-11" />
      <span className="flex flex-col leading-none">
        <span className={cn("text-[1.02rem] font-bold leading-none tracking-[-0.02em] sm:text-[1.12rem]", inverted ? "text-white" : "text-navy-900")}>
          Revplus
        </span>
        <span className={cn("mt-1 text-[8px] font-semibold uppercase tracking-[0.16em] sm:text-[8.5px]", inverted ? "text-teal-300" : "text-teal-700")}>
          Medical Solutions
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
