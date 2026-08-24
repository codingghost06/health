import type { Metadata } from "next";
import { departmentsPage } from "@/content/departments";
import { InnerPage } from "@/components/blocks/inner-page";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ ...departmentsPage.meta, path: departmentsPage.path });

export default function Page() {
  return <InnerPage page={departmentsPage} />;
}
