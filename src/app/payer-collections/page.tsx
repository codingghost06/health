import type { Metadata } from "next";
import { payerCollectionsPage } from "@/content/payer-collections";
import { InnerPage } from "@/components/blocks/inner-page";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ ...payerCollectionsPage.meta, path: payerCollectionsPage.path });

export default function Page() {
  return <InnerPage page={payerCollectionsPage} />;
}
