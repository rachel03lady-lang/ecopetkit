import { getSolutionBySlug } from "@/lib/wordpress";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

type Props = {
  params: { lang: string; slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // FIX: Pass params.lang
  const post = await getSolutionBySlug(params.slug, params.lang);
  if (!post) return {};

  return {
    title: post.seo?.title || post.title,
    description:
      post.seo?.description || post.excerpt?.replace(/<[^>]+>/g, "") || "",
  };
}

export default async function SingleSolutionPage({ params }: Props) {
  // FIX: Pass params.lang here too
  const solution = await getSolutionBySlug(params.slug, params.lang);

  if (!solution) notFound();

  // Clean up Admin URLs if they appear in content
  const cleanContent =
    solution.content?.replace(/https:\/\/admin.ecopetkit.com/g, "") || "";

  // Extract Related Products safely
  const relatedProducts = solution.solutionMeta?.relatedProducts?.nodes || [];

  return (
    <article className="pt-24 bg-slate-50 min-h-screen pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* 1. TOP NAVIGATION */}
        <Link
          href={`/${params.lang}/solutions`}
          className="inline-flex items-center gap-2 text-slate-500 hover:text-accent mb-8 transition-colors font-medium"
        >
          <ArrowLeft size={16} /> Back to Solutions
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* MAIN CONTENT (Left) */}
          <div className="lg:col-span-8">
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                {solution.title}
              </h1>
            </header>

            {/* Featured Image */}
            {solution.featuredImage?.node && (
              <div className="rounded-2xl overflow-hidden shadow-sm mb-10 relative aspect-video bg-slate-200">
                <Image
                  src={solution.featuredImage.node.sourceUrl}
                  alt={solution.featuredImage.node.altText || solution.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* GUTENBERG CONTENT AREA */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100">
              <div
                className="prose prose-lg prose-slate max-w-none 
                           prose-headings:font-bold prose-headings:text-slate-900 
                           prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                           prose-img:rounded-xl prose-img:shadow-md"
                dangerouslySetInnerHTML={{ __html: cleanContent }}
              />
            </div>
          </div>

          {/* SIDEBAR (Right) */}
          <aside className="lg:col-span-4 space-y-8">
            {/* WIDGET: Related Products */}
            {relatedProducts.length > 0 && (
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 sticky top-24">
                <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                  Recommended Gear
                </h3>
                <div className="space-y-4">
                  {relatedProducts.map((prod: any) => (
                    <Link
                      key={prod.id}
                      href={`/${params.lang}/products/${prod.slug}`}
                      className="group flex gap-4 items-center p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                    >
                      <div className="w-16 h-16 bg-slate-100 rounded-md overflow-hidden relative flex-shrink-0">
                        {prod.featuredImage?.node && (
                          <Image
                            src={prod.featuredImage.node.sourceUrl}
                            alt={prod.title || prod.name} // Fallback to title/name
                            fill
                            className="object-cover"
                          />
                        )}
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-bold text-slate-900 text-sm leading-tight group-hover:text-accent transition-colors">
                          {prod.title || prod.name}
                        </h4>
                        <span className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                          View Details <ArrowRight size={10} />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* WIDGET: Contact / CTA */}
            <div className="bg-slate-900 p-8 rounded-xl text-white text-center">
              <h3 className="font-bold text-lg mb-2">
                Need a Custom Solution?
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                Our engineers can tailor this ecosystem for your specific
                facility needs.
              </p>
              <Link href={`/${params.lang}/contact`}>
                <button className="w-full py-3 bg-accent hover:bg-accent-dark text-white font-bold rounded-lg transition-colors">
                  Contact Sales
                </button>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
