import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./container";

interface SectionProps {
  id?: string;
  /** Background treatment. */
  tone?: "white" | "surface" | "dark";
  /** Vertical padding scale. */
  padding?: "default" | "tight" | "loose";
  size?: "default" | "narrow" | "wide";
  className?: string;
  children: ReactNode;
  "aria-labelledby"?: string;
}

const tones = {
  white: "bg-white",
  surface: "bg-surface",
  dark: "bg-navy-900 text-white",
};

const paddings = {
  tight: "py-12 sm:py-16",
  default: "py-16 sm:py-20 lg:py-24",
  loose: "py-20 sm:py-24 lg:py-32",
};

export function Section({ id, tone = "white", padding = "default", size, className, children, ...rest }: SectionProps) {
  return (
    <section id={id} className={cn("relative scroll-mt-20", tones[tone], paddings[padding], className)} {...rest}>
      <Container size={size}>{children}</Container>
    </section>
  );
}
