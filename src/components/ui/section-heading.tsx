import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Eyebrow } from "./eyebrow";

interface SectionHeadingProps {
  id?: string;
  eyebrow?: ReactNode;
  title: string | string[];
  lead?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  tone?: "dark" | "light";
  size?: "default" | "sm";
  className?: string;
}

/**
 * Eyebrow + display title + lead paragraph. Titles may be passed as an array
 * of lines which are rendered with explicit line breaks on larger screens.
 */
export function SectionHeading({
  id,
  eyebrow,
  title,
  lead,
  align = "left",
  as: Tag = "h2",
  tone = "dark",
  size = "default",
  className,
}: SectionHeadingProps) {
  const lines = Array.isArray(title) ? title : [title];
  const light = tone === "light";
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <Eyebrow tone={light ? "light" : "brand"}>{eyebrow}</Eyebrow> : null}
      <Tag
        id={id}
        className={cn(
          "font-display",
          eyebrow && "mt-4",
          size === "default"
            ? "text-[2rem] sm:text-[2.5rem] lg:text-[2.85rem]"
            : "text-[1.7rem] sm:text-[2rem] lg:text-[2.25rem]",
          light ? "text-white" : "text-navy-900",
        )}
      >
        {lines.map((line, i) => (
          <span key={i} className={cn(i > 0 && "sm:block")}>
            {i > 0 ? " " : null}
            {line}
          </span>
        ))}
      </Tag>
      {lead ? (
        <p className={cn("mt-4 text-[1.0625rem] leading-relaxed", light ? "text-white/75" : "text-slate-600")}>
          {lead}
        </p>
      ) : null}
    </div>
  );
}
