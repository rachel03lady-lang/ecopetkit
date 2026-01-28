// app/[lang]/blog/[slug]/page.tsx

import { getPostBySlug } from "@/lib/wordpress";
import { notFound } from "next/navigation";
import { Calendar, User, Tag, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

type Props = {
  params: {
    lang: string;
    slug: string;
  };
};

// 1. UPDATED DYNAMIC METADATA
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { post } = await getPostBySlug(params.slug, params.lang);

  if (!post) return {};

  const seo = post.seo || {};
  const og = seo.openGraph || {};

  // Logic: Check if 'robots' array contains "noindex"
  const robotsArray = seo.robots || [];
  const isNoIndex = robotsArray.includes("noindex");
  const isNoFollow = robotsArray.includes("nofollow");

  // Fallback values
  const title = seo.title || post.title;
  const description =
    seo.description || post.excerpt?.replace(/<[^>]+>/g, "") || "";
  const imageUrl = og.image?.url || post.featuredImage?.node?.sourceUrl;

  return {
    title: title,
    description: description,
    alternates: {
      canonical: seo.canonicalUrl,
    },
    robots: {
      index: !isNoIndex,
      follow: !isNoFollow,
      googleBot: {
        index: !isNoIndex,
        follow: !isNoFollow,
      },
    },
    openGraph: {
      title: og.title || title,
      description: og.description || description,
      url: og.url || seo.canonicalUrl,
      siteName: og.siteName,
      locale: og.locale || params.lang,
      type: "article",
      images: imageUrl ? [{ url: imageUrl }] : [],
    },
    // Twitter Fallback (Using OG data)
    twitter: {
      card: "summary_large_image",
      title: og.title || title,
      description: og.description || description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default async function SingleBlogPage({ params }: Props) {
  const data = await getPostBySlug(params.slug, params.lang);

  if (!data || !data.post) {
    notFound();
  }
  const { post } = data;
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: post.featuredImage?.node?.sourceUrl,
    author: {
      "@type": "Person",
      name: post.author?.node?.name || "EcoPetKit Team",
    },
    datePublished: post.date,
    publisher: {
      "@type": "Organization",
      name: "EcoPetKit",
      logo: {
        "@type": "ImageObject",
        url: "https://ecopetkit.com/logo.png",
      },
    },
  };
  

  // ... (Keep the rest of your component JSX exactly the same) ...
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />

      <article className="pt-24 bg-slate-50 min-h-screen pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Breadcrumb / Back */}
          <Link
            href={`/${params.lang}/blog`}
            className="inline-flex items-center gap-2 text-slate-500 hover:text-accent mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-10 text-center">
            <div className="flex items-center justify-center gap-4 text-sm text-slate-500 mb-4">
              {post.categories?.nodes[0] && (
                <span className="text-accent font-bold uppercase tracking-widest text-xs">
                  {post.categories.nodes[0].name}
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center justify-center gap-6 text-slate-500 text-sm">
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                {new Date(post.date).toLocaleDateString(params.lang)}
              </span>
              <span className="flex items-center gap-2">
                <User size={16} />
                {post.author?.node?.name || "EcoPetKit Team"}
              </span>
            </div>
          </header>

          {/* Featured Image */}
          {post.featuredImage?.node && (
            <div className="rounded-2xl overflow-hidden shadow-lg mb-12 aspect-video relative">
              <img
                src={post.featuredImage.node.sourceUrl}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              {post.featuredImage.node.caption && (
                <div className="absolute bottom-0 w-full bg-black/60 text-white text-xs p-2 text-center">
                  {post.featuredImage.node.caption}
                </div>
              )}
            </div>
          )}

          {/* Content */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
            <div
              className="prose prose-lg prose-slate max-w-none prose-img:rounded-xl prose-a:text-accent hover:prose-a:text-accent-dark"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags Footer */}
            {post.tags?.nodes?.length > 0 && (
              <div className="mt-12 pt-8 border-t border-slate-100">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Tag size={18} /> Related Tags
                </h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags.nodes.map((tag: any) => (
                    <span
                      key={tag.slug}
                      className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm"
                    >
                      #{tag.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
    </>
  );
}
