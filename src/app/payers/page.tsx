import type { Metadata } from "next";
import { payersPage } from "@/content/payers";
import { InnerPage } from "@/components/blocks/inner-page";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ ...payersPage.meta, path: payersPage.path });

export default function Page() {
  return <InnerPage page={payersPage} />;
}
