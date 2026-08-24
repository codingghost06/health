import type { Block } from "@/content/types";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

type BandBlock = Extract<Block, { type: "band" }>;

/** In-page dark call-out with one or two buttons (e.g. "Not yet credentialed?"). */
export function BandBlock({ block }: { block: BandBlock }) {
  return (
    <section className="bg-white py-6 sm:py-8">
      <Container>
        <div className="flex flex-col gap-6 rounded-2xl bg-navy-900 px-6 py-8 text-white sm:px-10 sm:py-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-[1.75rem] text-white sm:text-[2rem]">{block.title}</h2>
            <p className="mt-2 text-[1rem] leading-relaxed text-white/75">{block.lead}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            {block.buttons.map((b) => (
              <Button key={b.href + b.label} href={b.href} variant={b.variant === "ghost" ? "ghostDark" : "onDark"} arrow={b.variant !== "ghost"}>
                {b.label}
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
