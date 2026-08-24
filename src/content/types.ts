import type { IconName } from "@/components/ui/icon";

/** Small stat shown in heroes and stat rows. */
export interface Stat {
  value: string;
  label: string;
}

export interface Step {
  title: string;
  body: string;
}

export interface Feature {
  icon?: IconName;
  title: string;
  sub?: string;
  body: string;
}

export interface ListCard {
  /** Optional anchor id so nav dropdowns can deep-link to a card. */
  id?: string;
  icon?: IconName;
  /** Two/three-letter monogram used instead of an icon (payer cards). */
  monogram?: string;
  title: string;
  sub?: string;
  body?: string;
  bullets?: string[];
}

export interface Tile {
  id?: string;
  icon: IconName;
  label: string;
  sub?: string;
}

export interface FaqItem {
  q: string;
  a: string[];
}

export interface Cta {
  title: string;
  lead: string;
  button: { label: string; href: string };
  secondary?: { label: string; href: string };
}

/** Hero used by every inner page. */
export interface PageHero {
  breadcrumb: { label: string; href: string }[];
  /** Title lines; rendered as one h1 with line breaks. */
  title: string[];
  lead: string;
  stats?: Stat[];
}

/**
 * Page body is a list of blocks. Each block maps to exactly one renderer in
 * `components/blocks`. Keep the union small; prefer reusing a block with a
 * `variant` over adding a new one.
 */
export type Block =
  | {
      type: "intro";
      eyebrow?: string;
      title: string;
      lead: string;
      bullets: string[];
      aside?: { kind: "timeline" | "blocks"; items: Step[] };
    }
  | {
      type: "cards";
      id?: string;
      eyebrow?: string;
      title: string;
      lead?: string;
      columns?: 2 | 3 | 4;
      /** "panel" wraps the grid in a tinted surface; "accent" uses a left border accent. */
      variant?: "default" | "panel" | "accent" | "centered";
      items: ListCard[];
    }
  | {
      type: "steps";
      eyebrow?: string;
      title: string;
      lead?: string;
      items: Step[];
    }
  | {
      type: "tiles";
      id?: string;
      eyebrow?: string;
      title: string;
      lead?: string;
      items: Tile[];
    }
  | {
      type: "chips";
      title: string;
      items: string[];
      more?: { label: string; href: string };
    }
  | {
      type: "faq";
      id?: string;
      eyebrow?: string;
      title: string;
      lead?: string;
      items: FaqItem[];
      button?: { label: string; href: string };
    }
  | {
      type: "band";
      title: string;
      lead: string;
      buttons: { label: string; href: string; variant?: "primary" | "ghost" }[];
    };

export interface InnerPage {
  slug: string;
  path: string;
  meta: { title: string; description: string };
  hero: PageHero;
  blocks: Block[];
  cta: Cta;
}

export interface ServicePage extends InnerPage {
  /** Short name used in nav, cards and footer. */
  name: string;
  navSub: string;
  icon: IconName;
  /** Blurb used on the home services grid. */
  homeBlurb: string;
  /** Blurb used on the /services hub. */
  hubBlurb: string;
}

/* ---------------------------------------------------------------------- */
/* Home                                                                    */
/* ---------------------------------------------------------------------- */

export interface Link {
  label: string;
  href: string;
}

export interface Metric {
  label: string;
  value: string;
  /** Bar fill 0–100. */
  pct: number;
  note: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface HomeContent {
  hero: {
    badge: string;
    /** Title lines. The word matching `highlight` gets the gradient treatment. */
    title: string[];
    highlight: string;
    lead: string;
    primary: Link;
    secondary: Link;
    stats: Stat[];
  };
  payerStrip: { label: string; payers: string[]; more: Link };
  services: {
    eyebrow: string;
    title: string[];
    lead: string;
    /** Extra card that is not a service page (Payment Posting). */
    extra: ListCard & { link: Link };
  };
  why: {
    eyebrow: string;
    title: string[];
    lead: string;
    points: Step[];
    metrics: Metric[];
  };
  specialties: {
    eyebrow: string;
    title: string[];
    lead: string;
    tiles: Tile[];
    moreTile: { label: string; sub: string };
    more: Link;
  };
  process: { eyebrow: string; title: string; lead: string; steps: Step[] };
  testimonials: { eyebrow: string; title: string; items: Testimonial[] };
  cta: Cta;
}

/* ---------------------------------------------------------------------- */
/* Resources                                                               */
/* ---------------------------------------------------------------------- */

export interface ResourceItem {
  /** Category label (blog) or none. */
  tag?: string;
  title: string;
  body: string;
  /** Highlighted result line (case studies). */
  result?: string;
}

export interface ResourceSection {
  id: string;
  icon: IconName;
  eyebrow: string;
  title: string;
  items: ResourceItem[];
}

export interface ResourcesContent {
  meta: { title: string; description: string };
  hero: PageHero;
  sections: ResourceSection[];
  cta: Cta;
}
