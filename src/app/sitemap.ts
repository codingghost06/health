import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { routes, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticPaths: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: routes.home, priority: 1, changeFrequency: "weekly" },
    { path: routes.services, priority: 0.9, changeFrequency: "monthly" },
    { path: routes.specialties, priority: 0.8, changeFrequency: "monthly" },
    { path: routes.payers, priority: 0.8, changeFrequency: "monthly" },
    { path: routes.departments, priority: 0.7, changeFrequency: "monthly" },
    { path: routes.payerCollections, priority: 0.7, changeFrequency: "monthly" },
    { path: routes.calculator, priority: 0.8, changeFrequency: "monthly" },
    { path: routes.resources, priority: 0.6, changeFrequency: "weekly" },
    { path: routes.freeAudit, priority: 0.9, changeFrequency: "monthly" },
  ];
  return [
    ...staticPaths.map((p) => ({
      url: `${site.url}${p.path === "/" ? "" : p.path}`,
      lastModified,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...services.map((s) => ({
      url: `${site.url}${s.path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
