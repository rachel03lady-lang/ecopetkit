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

// Generate SEO Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // FIX 1: Pass params.lang as the second argument
  const { post } = await getPostBySlug(params.slug, params.lang);

  if (!post) return {};

  return {
    title: post.seo?.title || post.title,
    description:
      post.seo?.description || post.excerpt?.replace(/<[^>]+>/g, "") || "",
  };
}

export default async function SingleBlogPage({ params }: Props) {
  // FIX 2: Pass params.lang as the second argument
  const data = await getPostBySlug(params.slug, params.lang);

  // Helper: Handle if data is null or undefined
  if (!data || !data.post) {
    notFound();
  }

  const { post } = data;

  return (
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
  );
}
