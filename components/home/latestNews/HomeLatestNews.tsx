"use client"
import React,{useState} from "react";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";
import { BLOG_POSTS } from "@/constants/blog";
import { useLanguage } from "@/app/providers/LanguageProvider";
import { Calendar } from "lucide-react";

export default function HomeLatestNews(){

    const { language, t } = useLanguage();
    const [dateLabel, setDateLabel] = useState("");
    const recentPosts = BLOG_POSTS[language].slice(0, 3);
    const router = useRouter();
       
    return (
      <Section>
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-bold">{t("common.blogTitle")}</h2>
          <Button variant="outline" onClick={() => router.push("blog")}>
            Read All Blogs
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentPosts.map((post) => {
            const dateLabel = post.publishedAt
              ? new Date(post.publishedAt).toLocaleDateString()
              : "";
            return(
            <div
              key={post.id}
              className="group cursor-pointer"
              onClick={() => router.push("blog")}
            >
              <div className="rounded-xl overflow-hidden mb-4 relative aspect-[16/10]">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded text-xs font-bold text-slate-900">
                  {post.category[0].name}
                </div>
              </div>
              <div className="text-xs text-slate-400 mb-2 flex gap-2">
            
                <Calendar size={12} /> {dateLabel}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-slate-500 text-sm line-clamp-2">
                {post.excerpt}
              </p>
            </div>
          );})}
        </div>
      </Section>
    );
}