import { cn } from "@/lib/cn";
import type { Stat as StatType } from "@/content/types";

interface StatProps extends StatType {
  tone?: "light" | "dark";
  size?: "md" | "lg";
  className?: string;
}

export function Stat({ value, label, tone = "light", size = "md", className }: StatProps) {
  const light = tone === "light";
  return (
    <div className={cn("flex flex-col", className)}>
      <span
        className={cn(
          "font-display leading-none tabular-nums",
          size === "lg" ? "text-4xl sm:text-[2.75rem]" : "text-[1.9rem] sm:text-[2.1rem]",
          light ? "text-white" : "text-navy-900",
        )}
      >
        {value}
      </span>
      <span className={cn("mt-1.5 text-[13px] font-medium", light ? "text-brand-200/90" : "text-slate-500")}>{label}</span>
    </div>
  );
}

interface StatRowProps {
  stats: readonly StatType[];
  tone?: "light" | "dark";
  className?: string;
}

export function StatRow({ stats, tone = "light", className }: StatRowProps) {
  return (
    <dl className={cn("grid grid-cols-2 gap-x-6 gap-y-6 sm:flex sm:flex-wrap sm:gap-x-12", className)}>
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col-reverse">
          <dt className={cn("mt-1.5 text-[13px] font-medium", tone === "light" ? "text-brand-200/90" : "text-slate-500")}>
            {s.label}
          </dt>
          <dd className={cn("font-display text-[1.9rem] leading-none tabular-nums sm:text-[2.1rem]", tone === "light" ? "text-white" : "text-navy-900")}>
            {s.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
