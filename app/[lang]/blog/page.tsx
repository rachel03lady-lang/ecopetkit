import { getBlogPageData, getSeoMetadata } from "@/lib/wordpress";
// FIX: The component is named 'BlogIndex' in your file 'BlogINdex.tsx'
import { BlogIndexed } from "@/components/blog/BlogIndexed";
import { notFound } from "next/navigation";
import { Metadata } from "next";



// 1. DYNAMIC METADATA FOR BLOG PAGE
export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  // Define the URI for this specific page (match your WordPress slug)
  const uri = `/${params.lang}/blog/`;
  
  const seo = await getSeoMetadata(uri);

  // Fallback if WP data is missing
  if (!seo) {
    return {
      title: "Blogs | EcoPetKit",
      description: "Read all articles written on Intelligent Pet Luxury from Ecopetkit",
    };
  }

  const og = seo.openGraph || {};
  const robotsArray = seo.robots || [];
  const isNoIndex = robotsArray.includes("noindex");
  const isNoFollow = robotsArray.includes("nofollow");

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.canonicalUrl,
    },
    robots: {
      index: !isNoIndex,
      follow: !isNoFollow,
    },
    openGraph: {
      title: og.title || seo.title,
      description: og.description || seo.description,
      url: og.url || seo.canonicalUrl,
      siteName: og.siteName,
      locale: og.locale || params.lang,
      images: og.image?.url ? [{ url: og.image.url }] : [],
      type: "website",
    },
    // Twitter fallback (using OG data since Twitter block is gone)
    twitter: {
      card: "summary_large_image",
      title: og.title || seo.title,
      description: og.description || seo.description,
      images: og.image?.url ? [og.image.url] : [],
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: { lang: string };
}) {
  // 1. Fetch Data (The query already filters by language!)
  const data = await getBlogPageData(params.lang);

  console.log("[BlogPage] Data:", data);

  if (!data?.page) return notFound();

  // FIX: Access 'allBlogsPage' directly.
  // Do NOT use [langKey] because the query result is already flat.
  const staticContent = data.page.allBlogsPage || {};

  // Safely access posts
  const posts = data.posts?.nodes || [];

  console.log("[BlogPage] Final Static Content:", staticContent);

  return (
    <BlogIndexed lang={params.lang} staticContent={staticContent} posts={posts} />
  );
}
