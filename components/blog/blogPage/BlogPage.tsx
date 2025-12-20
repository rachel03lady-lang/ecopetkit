"use client"
import React, { useMemo, useState } from "react";
import { BLOG_POSTS } from "@/constants/blog";
import { useLanguage } from "@/app/providers/LanguageProvider";


import { BlogPost } from "@/types/blogType";
import MainContentCol from "@/components/blog/blogPage/mainContentCol/MainContentCol";
import SidebarCol from "@/components/blog/blogPage/sidebar-col/SidebarCol";


const BlogPage: React.FC = () => {

    const { language } = useLanguage();
    const posts = BLOG_POSTS[language] ?? [];
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = useMemo(() => {
      const set = new Map<string, string>();
      posts.forEach((p) => {
        p.category?.forEach((c) => set.set(c.slug, c.name));
      });
      return [
        { slug: "all", name: "All" },
        ...Array.from(set).map(([slug, name]) => ({ slug, name })),
      ];
    }, [posts]);

    const tags = useMemo(() => {
      const s = new Set<string>();
      posts.forEach((p) => p.tags?.forEach((t) => s.add(t)));
      return Array.from(s);
    }, [posts]);

    const recentPosts = posts.slice(0, 3);

    const filteredPosts: BlogPost[] = posts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" ||
        activeCategory === "all" ||
        post.category?.some(
          (c) => c.name === activeCategory || c.slug === activeCategory
        );
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        q === "" ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        (post.content || "").toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });

  return (
    <div className="container mx-auto px-6 max-w-7xl py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-2/3">
          <MainContentCol posts={filteredPosts} />
        </div>
        <div className="lg:w-1/3 space-y-8">
          <SidebarCol
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            recentPosts={recentPosts}
            tags={tags}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPage
