import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "./icon";

interface CardProps {
  as?: ElementType;
  id?: string;
  className?: string;
  children: ReactNode;
  /** Adds hover lift. Use for cards that link somewhere. */
  interactive?: boolean;
  /** Left border accent variant. */
  accent?: boolean;
}

export function Card({ as: Tag = "div", id, className, children, interactive, accent }: CardProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "relative rounded-xl border border-line bg-white p-6 shadow-card sm:p-7",
        interactive &&
          "transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-brand-200 hover:shadow-card-hover",
        accent && "border-l-[3px] border-l-brand-600",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

interface IconBadgeProps {
  name: IconName;
  size?: "sm" | "md" | "lg";
  tone?: "brand" | "teal" | "navy" | "gold";
  className?: string;
}

const badgeSizes = { sm: "size-9 rounded-lg [&>svg]:size-[18px]", md: "size-12 rounded-xl [&>svg]:size-6", lg: "size-14 rounded-xl [&>svg]:size-7" };
const badgeTones = {
  brand: "bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100",
  teal: "bg-teal-50 text-teal-600 ring-1 ring-inset ring-teal-100",
  navy: "bg-navy-900 text-white",
  gold: "bg-gold-500/15 text-gold-500 ring-1 ring-inset ring-gold-400/40",
};

/** Rounded tile that frames an icon — the replacement for the reference's emoji. */
export function IconBadge({ name, size = "md", tone = "brand", className }: IconBadgeProps) {
  return (
    <span className={cn("inline-flex shrink-0 items-center justify-center", badgeSizes[size], badgeTones[tone], className)}>
      <Icon name={name} strokeWidth={2} />
    </span>
  );
}
