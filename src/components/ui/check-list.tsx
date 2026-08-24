import { cn } from "@/lib/cn";
import { Icon } from "./icon";

interface CheckListProps {
  items: readonly string[];
  className?: string;
  /** Compact = smaller text for inside cards. */
  compact?: boolean;
  columns?: 1 | 2;
}

export function CheckList({ items, className, compact, columns = 1 }: CheckListProps) {
  return (
    <ul
      className={cn(
        "grid gap-y-2.5",
        columns === 2 && "sm:grid-cols-2 sm:gap-x-6",
        compact ? "text-[0.9375rem]" : "text-[1.0625rem]",
        className,
      )}
    >
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-slate-700">
          <Icon
            name="check"
            className={cn("mt-[3px] shrink-0 text-teal-600", compact ? "size-4" : "size-5")}
            strokeWidth={2.2}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
