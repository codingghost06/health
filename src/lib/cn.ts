import { clsx, type ClassValue } from "clsx";

/** Tiny className joiner. Tailwind v4 has no conflicting-utility problem in our usage, so no merge lib needed. */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
