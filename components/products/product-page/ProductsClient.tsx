"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Filter, Search, ChevronRight } from "lucide-react";
import IndustryInsights from "@/components/products/industry-insights/IndustryInsights";
import ProductFAQ from "@/components/products/productFAQ/ProductFAQ";

// Helper for slugs
const categoryToSlug = (category: string) =>
  category.toLowerCase().replace(/\s+/g, "-");

export default function ProductsClient({
  content,
  products,
  blogPosts,
}: {
  content: any;
  products: any[];
  blogPosts: any[];
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category");

  // Extract Categories dynamically
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(products.map((p) => p.category)))],
    [products]
  );

  const activeCategory = selectedCategory ?? "All";

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "All" ||
      categoryToSlug(product.category) === activeCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.tagline &&
        product.tagline.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      {/* ===== Header ===== */}
      <div className="bg-white py-12 border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <h1 className="text-4xl font-bold">
              {content?.pageHeader?.title || "Products"}
            </h1>

            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder={
                  content?.pageHeader?.searchPlaceholder || "Search..."
                }
                className="w-full pl-12 pr-4 py-3 rounded-full border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-slate-900 focus:bg-white outline-none transition"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center text-slate-500 text-sm font-bold uppercase tracking-wider mr-2">
              <Filter size={16} className="mr-2" /> Categories:
            </div>
            {categories.map((cat: any) => (
              <Link
                key={cat}
                href={cat === "All" ? "?" : `?category=${categoryToSlug(cat)}`}
                scroll={false}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory ===
                  (cat === "All" ? "All" : categoryToSlug(cat))
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Product Grid ===== */}
      <div className="container mx-auto px-6 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={product.link}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <div className="relative aspect-square bg-slate-50 p-8">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold uppercase text-slate-900">
                  {product.category}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition">
                  {product.name}
                </h3>
                <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                  {product.tagline}
                </p>

                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-medium text-accent">
                  <span>View Details</span>
                  <ChevronRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            No products found matching your criteria.
          </div>
        )}
      </div>

      {/* ===== Pass Data to Sub-Components ===== */}
      <IndustryInsights data={content?.blogSection} posts={blogPosts} />

      {/* Ensure you create/update ProductFAQ to accept content props similarly if needed */}
      <ProductFAQ data={content?.faqSection} />
    </div>
  );
}
