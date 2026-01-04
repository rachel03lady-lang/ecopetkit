import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSolutionsPage } from "@/lib/wordpress"; // Updated import name
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

type Props = {
  params: { lang: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getSolutionsPage(params.lang);
  return {
    title: data?.page?.seo?.title ?? "Solutions",
    description: data?.page?.seo?.description ?? "",
  };
}

export default async function SolutionsIndexPage({ params }: Props) {
  // Fetch both Page Data (Header) and Solutions List (Grid)
  const { page, solutions } = await getSolutionsPage(params.lang);

  // If the page itself doesn't exist in WP, show 404
  if (!page) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-2xl font-bold text-red-500">Page Not Found</h1>
        <p>Please ensure a page with slug "solution" exists in WordPress.</p>
      </div>
    );
  }

  // Use ACF data for header, with fallbacks
  const headerData = page.solutionPage || {};

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      {/* Header Section (Dynamic from ACF) */}
      <div className="container mx-auto px-6 text-center mb-16">
        <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">
          {headerData.tagline || "Our Solutions"}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          {headerData.title || page.title}
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          {headerData.description}
        </p>
      </div>

      {/* Solutions Grid */}
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution: any) => (
            <Link
              key={solution.id}
              href={`/${params.lang}/solutions/${solution.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col"
            >
              {/* Image Area */}
              <div className="aspect-[4/3] relative overflow-hidden bg-slate-200">
                {solution.featuredImage?.node?.sourceUrl ? (
                  <img
                    src={solution.featuredImage.node.sourceUrl}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400 bg-slate-100">
                    No Image
                  </div>
                )}
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                <h3 className="absolute bottom-6 left-6 right-6 text-2xl font-bold text-white group-hover:text-accent-light transition-colors">
                  {solution.title}
                </h3>
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col flex-grow">
                <div
                  className="text-slate-600 mb-6 line-clamp-3 flex-grow text-sm"
                  dangerouslySetInnerHTML={{ __html: solution.excerpt }}
                />
                <div className="flex items-center text-accent font-bold group-hover:gap-4 gap-2 transition-all mt-auto">
                  View Solution
                  <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
