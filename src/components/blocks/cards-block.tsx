import type { Block, ListCard } from "@/content/types";
import { cn } from "@/lib/cn";
import { Card, IconBadge } from "@/components/ui/card";
import { CheckList } from "@/components/ui/check-list";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

type CardsBlock = Extract<Block, { type: "cards" }>;

const cols = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

function Monogram({ code }: { code: string }) {
  return (
    <span className="inline-flex h-11 min-w-11 items-center justify-center rounded-lg bg-brand-50 px-2 text-[12px] font-bold tracking-wider text-brand-700 ring-1 ring-inset ring-brand-100">
      {code}
    </span>
  );
}

export function ListCardItem({ item, variant, headingLevel = "h3" }: { item: ListCard; variant: NonNullable<CardsBlock["variant"]>; headingLevel?: "h3" | "h4" }) {
  const centered = variant === "centered";
  const Heading = headingLevel;
  return (
    <Card id={item.id} accent={variant === "accent"} className={cn("flex h-full flex-col scroll-mt-24", centered && "items-center text-center")}>
      {item.monogram ? <Monogram code={item.monogram} /> : item.icon ? <IconBadge name={item.icon} size={centered ? "lg" : "md"} /> : null}
      <Heading className={cn("text-[1.0625rem] font-semibold leading-snug text-navy-900", (item.icon || item.monogram) && "mt-4")}>{item.title}</Heading>
      {item.sub ? <p className="mt-0.5 text-[13px] font-medium text-brand-600">{item.sub}</p> : null}
      {item.body ? <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-slate-600">{item.body}</p> : null}
      {item.bullets?.length ? (
        <ul className="mt-4 grid gap-1.5 border-t border-line pt-4">
          {item.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-[0.9rem] text-slate-700">
              <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-teal-500" />
              {b}
            </li>
          ))}
        </ul>
      ) : null}
    </Card>
  );
}

export function CardsBlock({ block, tone }: { block: CardsBlock; tone: "white" | "surface" }) {
  const variant = block.variant ?? "default";
  const columns = block.columns ?? 3;
  const panel = variant === "panel";
  const grid = (
    <div className={cn("grid gap-5", cols[columns])}>
      {block.items.map((item) => (
        <ListCardItem key={item.title} item={item} variant={variant} />
      ))}
    </div>
  );
  return (
    <Section id={block.id} tone={panel ? "white" : tone}>
      {panel ? (
        <div className="rounded-2xl bg-surface p-5 sm:p-8 lg:p-10">
          <SectionHeading eyebrow={block.eyebrow} title={block.title} lead={block.lead} size="sm" />
          <div className="mt-8">{grid}</div>
        </div>
      ) : (
        <>
          <SectionHeading eyebrow={block.eyebrow} title={block.title} lead={block.lead} align={variant === "centered" ? "center" : "left"} />
          <div className="mt-10">{grid}</div>
        </>
      )}
    </Section>
  );
}

/** Reusable `CheckList` re-export so pages can compose without a second import. */
export { CheckList };
