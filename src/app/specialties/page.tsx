import type { Metadata } from "next";
import { specialtiesPage } from "@/content/specialties";
import { InnerPage } from "@/components/blocks/inner-page";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ ...specialtiesPage.meta, path: specialtiesPage.path });

export default function Page() {
  return <InnerPage page={specialtiesPage} />;
}
