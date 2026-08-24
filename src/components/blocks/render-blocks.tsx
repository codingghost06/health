import type { Block } from "@/content/types";
import { BandBlock } from "./band-block";
import { CardsBlock } from "./cards-block";
import { ChipsBlock } from "./chips-block";
import { FaqBlock } from "./faq-block";
import { IntroBlock } from "./intro-block";
import { StepsBlock } from "./steps-block";
import { TilesBlock } from "./tiles-block";

/**
 * Maps content blocks to renderers. Background tone alternates between
 * white and surface so long pages keep visual rhythm; blocks that bring
 * their own background (chips, faq, band, panel cards) don't consume a turn.
 */
const isSelfStyled = (block: Block) =>
  block.type === "chips" || block.type === "faq" || block.type === "band" || (block.type === "cards" && block.variant === "panel");

/** Pure helper: assigns alternating tones, skipping self-styled blocks. */
function withTones(blocks: readonly Block[]) {
  const out: { block: Block; tone: "white" | "surface" }[] = [];
  let turn = 0;
  for (const block of blocks) {
    out.push({ block, tone: turn % 2 === 0 ? "white" : "surface" });
    if (!isSelfStyled(block)) turn += 1;
  }
  return out;
}

export function RenderBlocks({ blocks }: { blocks: readonly Block[] }) {
  return (
    <>
      {withTones(blocks).map(({ block, tone }, i) => {
        const key = `${block.type}-${i}`;
        switch (block.type) {
          case "intro":
            return <IntroBlock key={key} block={block} tone={tone} />;
          case "cards":
            return <CardsBlock key={key} block={block} tone={tone} />;
          case "steps":
            return <StepsBlock key={key} block={block} tone={tone} />;
          case "tiles":
            return <TilesBlock key={key} block={block} tone={tone} />;
          case "chips":
            return <ChipsBlock key={key} block={block} />;
          case "faq":
            return <FaqBlock key={key} block={block} />;
          case "band":
            return <BandBlock key={key} block={block} />;
        }
      })}
    </>
  );
}
