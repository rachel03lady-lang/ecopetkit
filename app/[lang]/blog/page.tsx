import { getBlogPageData } from "@/lib/wordpress";
// FIX: The component is named 'BlogIndex' in your file 'BlogINdex.tsx'
import { BlogIndexed } from "@/components/blog/BlogIndexed";
import { notFound } from "next/navigation";

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
