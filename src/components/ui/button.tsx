import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "./icon";

type Variant = "primary" | "secondary" | "onDark" | "ghostDark" | "link";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold whitespace-nowrap transition-[background-color,color,box-shadow,transform] duration-200 ease-out select-none disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white shadow-[0_1px_2px_rgba(15,42,76,.2),0_4px_14px_rgba(21,101,192,.28)] hover:bg-brand-700 hover:-translate-y-px active:translate-y-0",
  secondary:
    "bg-white text-brand-700 ring-1 ring-inset ring-line-strong hover:bg-brand-50 hover:ring-brand-200 hover:-translate-y-px active:translate-y-0",
  onDark:
    "bg-white text-navy-900 shadow-[0_6px_20px_rgba(0,0,0,.22)] hover:bg-brand-50 hover:-translate-y-px active:translate-y-0",
  ghostDark:
    "bg-white/10 text-white ring-1 ring-inset ring-white/30 backdrop-blur-sm hover:bg-white/16 hover:ring-white/50",
  link: "text-brand-600 hover:text-brand-700 p-0 rounded-none",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-[15px]",
  lg: "h-13 px-7 text-base",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  /** Show an arrow icon after the label. */
  arrow?: boolean;
  className?: string;
  children: ReactNode;
}

type ButtonLinkProps = CommonProps & { href: string; external?: boolean };
type ButtonButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export type ButtonProps = ButtonLinkProps | ButtonButtonProps;

function Inner({ icon, arrow, children }: Pick<CommonProps, "icon" | "arrow" | "children">) {
  return (
    <>
      {icon ? <Icon name={icon} className="size-[18px]" strokeWidth={2.2} /> : null}
      <span>{children}</span>
      {arrow ? <Icon name="arrow-right" className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2.4} /> : null}
    </>
  );
}

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", icon, arrow, className, children } = props;
  const cls = cn(base, "group", variants[variant], variant !== "link" && sizes[size], className);

  if ("href" in props && typeof props.href === "string") {
    const { href, external } = props;
    if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
          <Inner icon={icon} arrow={arrow}>
            {children}
          </Inner>
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        <Inner icon={icon} arrow={arrow}>
          {children}
        </Inner>
      </Link>
    );
  }

  const rest = { ...(props as ButtonButtonProps) };
  for (const k of ["href", "variant", "size", "icon", "arrow", "className", "children"] as const) delete rest[k];
  return (
    <button type="button" className={cls} {...rest}>
      <Inner icon={icon} arrow={arrow}>
        {children}
      </Inner>
    </button>
  );
}
