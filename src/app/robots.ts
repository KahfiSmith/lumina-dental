import type { MetadataRoute } from "next";
import { clinicData } from "@/data/dental";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${clinicData.seo.siteUrl}/sitemap.xml`,
  };
}
