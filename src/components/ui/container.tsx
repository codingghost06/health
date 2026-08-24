import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ContainerProps {
  as?: ElementType;
  size?: "default" | "narrow" | "wide";
  className?: string;
  children: ReactNode;
  id?: string;
}

const sizes = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
};

export function Container({ as: Tag = "div", size = "default", className, children, id }: ContainerProps) {
  return (
    <Tag id={id} className={cn("mx-auto w-full px-5 sm:px-6 lg:px-8", sizes[size], className)}>
      {children}
    </Tag>
  );
}
