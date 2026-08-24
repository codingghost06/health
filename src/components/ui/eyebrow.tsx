import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface EyebrowProps {
  children: ReactNode;
  tone?: "brand" | "light" | "gold";
  className?: string;
}

const tones = {
  brand: "bg-brand-100 text-brand-700",
  light: "bg-white/10 text-brand-200 ring-1 ring-white/15",
  gold: "bg-gold-500/15 text-gold-300 ring-1 ring-gold-400/40",
};

/** Small uppercase pill label placed above section titles. */
export function Eyebrow({ children, tone = "brand", className }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
