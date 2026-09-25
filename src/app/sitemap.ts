import type { MetadataRoute } from "next";
import { clinicData } from "@/data/dental";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: clinicData.seo.siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
