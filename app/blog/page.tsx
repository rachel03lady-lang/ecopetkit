"use client"
import BlogPage from "@/components/blog/blogPage/BlogPage"
import BlogHeader from "@/components/blog/header/BlogHeader";
import { BLOG_PAGE_CONTENT } from "@/constants/blogpage";
import { useLanguage } from "@/app/providers/LanguageProvider";
export default function Blog(){
    const { language, t } = useLanguage();
    const pageContent = BLOG_PAGE_CONTENT[language];

    return (
      <div className="pt-20 bg-slate-50 min-h-screen">
        <BlogHeader
          eyebrow={pageContent.header.eyebrow}
          title={pageContent.header.title}
          description={pageContent.header.description}
        />
        <BlogPage />
      </div>
    );
}
