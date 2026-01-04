"use client";
import React, { useState, useMemo } from "react";
import {
  Calendar,
  ArrowRight,
  User,
  Tag,
  Search,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/Button";

// Types for the props passed from Server
type BlogIndexProps = {
  lang: string;
  staticContent: any; // The ACF Labels
  posts: any[]; // The WP Posts
};

export const BlogIndexed: React.FC<BlogIndexProps> = ({
  lang,
  staticContent,
  posts,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const getLocaleForDate = (lang: string) => {
    const map: Record<string, string> = {
      "en-us": "EN-US",
      de: "de-DE",
      fr: "fr-FR",
      es: "es-ES",
    };
    return map[lang] || "en-us";
  };

  // 1. Extract unique categories dynamically from posts
  const categories = useMemo(() => {
    const cats = new Set(["All"]);
    posts.forEach((p) =>
      p.categories?.nodes?.forEach((c: any) => cats.add(c.name))
    );
    return Array.from(cats);
  }, [posts]);

  // 2. Extract unique tags dynamically
  const tags = useMemo(() => {
    const t = new Set();
    posts.forEach((p) => p.tags?.nodes?.forEach((tag: any) => t.add(tag.name)));
    return Array.from(t) as string[];
  }, [posts]);

  const recentPosts = posts.slice(0, 3);

  // 3. Filter Logic
  const filteredPosts = posts.filter((post) => {
    const postCats = post.categories?.nodes?.map((c: any) => c.name) || [];
    const matchesCategory =
      activeCategory === "All" || postCats.includes(activeCategory);

    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  console.log("Static Content:", staticContent);
  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-white border-b border-slate-200 py-16">
        <div className="container mx-auto px-6 text-center">
          <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">
            {staticContent?.headers?.tagline}
          </span>
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            {staticContent?.headers?.heading}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {staticContent?.headers?.subtitle}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content Column */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 flex flex-col group h-full"
                >
                  <div className="aspect-[16/10] relative overflow-hidden bg-slate-200">
                    {post.featuredImage?.node?.sourceUrl && (
                      <img
                        src={post.featuredImage.node.sourceUrl}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    )}
                    {post.categories?.nodes?.[0] && (
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded text-xs font-bold text-slate-900 flex items-center gap-1 shadow-sm">
                        <Tag size={12} className="text-accent" />{" "}
                        {post.categories.nodes[0].name}
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />{" "}
                        {new Date(post.date).toLocaleDateString(
                          getLocaleForDate(lang)
                        )}
                      </span>
                      <span className="flex items-center gap-1">
                        <User size={12} /> EcoPetKit Team
                      </span>
                    </div>
                    <Link href={`/${lang}/blog/${post.slug}`}>
                      <h3 className="text-xl font-bold mb-3 text-slate-900 leading-tight group-hover:text-accent transition-colors cursor-pointer">
                        {post.title}
                      </h3>
                    </Link>
                    <div
                      className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: post.excerpt }}
                    />
                    <Link
                      href={`/${lang}/blog/${post.slug}`}
                      className="text-slate-900 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all mt-auto group/btn"
                    >
                      Read More{" "}
                      <ArrowRight
                        size={16}
                        className="text-accent group-hover/btn:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination placeholder if needed */}
          </div>

          {/* Sidebar Column */}
          <div className="lg:w-1/3 space-y-8">
            {/* Search Widget */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-lg mb-4">
                {staticContent?.searchLabel}
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  size={18}
                />
              </div>
            </div>

            {/* Categories Widget */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-lg mb-4">
                {staticContent?.categoriesLabel}
              </h3>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full flex justify-between items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                        activeCategory === cat
                          ? "bg-slate-50 text-accent font-bold"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <span>{cat}</span>
                      {activeCategory === cat && <ChevronRight size={14} />}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts Widget */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-lg mb-6">
                {staticContent?.recentPostLabel}
              </h3>
              <div className="space-y-6">
                {recentPosts.map((post) => (
                  <Link
                    href={`/${lang}/blog/${post.slug}`}
                    key={post.id}
                    className="flex gap-4 group cursor-pointer"
                  >
                    <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100">
                      {post.featuredImage?.node?.sourceUrl && (
                        <img
                          src={post.featuredImage.node.sourceUrl}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      )}
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 mb-1">
                        {new Date(post.date).toLocaleDateString(
                          getLocaleForDate(lang)
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-accent transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Tags Cloud Widget */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-lg mb-4">
                {staticContent?.popularTagsLabel}
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full hover:bg-slate-200 cursor-pointer transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Newsletter Widget */}
            <div className="bg-slate-900 p-8 rounded-xl text-white text-center">
              <h3 className="font-bold text-xl mb-2">
                {staticContent?.newsletter?.title}
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                {staticContent?.newsletter?.description}
              </p>
              <input
                type="email"
                placeholder={staticContent?.newsletter?.emailPlaceholder}
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-accent mb-3 text-sm"
              />
              <Button className="w-full" size="sm">
                {staticContent?.newsletter?.buttonLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
