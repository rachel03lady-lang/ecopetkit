
import { MetadataRoute  } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap>{
  const baseUrl = "https://www.ecopetkit.com";
  const languages = ["en-us", "de", "fr", "es"];
  //defnie the main pages

  const routes = [
    "",
    "/about",
    "/products",
    "/solutions",
    "/blog",
    "/contact",
    "/services",
    "/downloads",
    "/trade-fairs",
    "/faq",
  ];

  // Generate localized URLs for all static routes
  const sitemapEntries = routes.flatMap((route) =>
    languages.map((lang) => ({
      url: `${baseUrl}/${lang}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    }))
  );

  return sitemapEntries;
}