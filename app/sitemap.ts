import type { MetadataRoute } from "next";
import { WORK } from "@/lib/catalog";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/work`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...WORK.map((item) => ({
      url: `${SITE_URL}/work/${item.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
