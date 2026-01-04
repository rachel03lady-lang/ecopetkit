// app/[lang]/blog/[slug]/page.tsx
import { getPostBySlug } from "@/lib/wordpress";
import BlogPage from "@/components/blog/blogPage/BlogPage"; // Client Component
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS_DATA } from "@/constants/products";

// 1. Generate SEO Metadata dynamically
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.seo?.title || post.title,
    description: post.seo?.description || post.excerpt.replace(/<[^>]+>/g, ""), // Strip HTML from excerpt
    openGraph: {
      images: [post.featuredImage?.node?.sourceUrl],
    },
  };
}

// 2. The Page Component
export default async function Page({
  params,
}: {
  params: { lang: string; slug: string };
}) {
  const postData = await getPostBySlug(params.slug);

  if (!postData) {
    notFound();
  }

  const allProducts = PRODUCTS_DATA["en"] || [];
  const relatedProducts = allProducts
    .filter((product) =>
      postData.tags.nodes.some(
        (tag: any) =>
          product.name.toLowerCase().includes(tag.name.toLowerCase()) ||
          product.slug === tag.slug
      )
    )
    .map((p) => ({ slug: p.slug, name: p.name, image: p.image })); // Format for your component

  // 4. Transform WP Data to your Component's Type
  const formattedPost = {
    id: postData.slug,
    title: postData.title,
    excerpt: postData.excerpt,
    content: postData.content, // HTML from WP
    publishedAt: postData.date,
    author: {
      name: postData.author.node.name,
      avatar: postData.author.node.avatar?.url,
    },
    featuredImage: postData.featuredImage?.node?.sourceUrl,
    featuredImageAlt: postData.featuredImage?.node?.altText,
    imageCaption: postData.featuredImage?.node?.caption,
    category: postData.categories.nodes,
    tags: postData.tags.nodes.map((t: any) => t.name),
    relatedProducts: relatedProducts, // Injected calculated products
  };

  return <BlogPage post={formattedPost} />;
}
