"use client";
import { useParams } from "next/navigation";
import { BLOG_POSTS } from "@/constants/blog";
import { useLanguage } from "@/app/providers/LanguageProvider";
import { BlogPost } from "@/types/blogType";
import BlogPostPage from "@/components/blog/post/BlogPostPage";
import { useEffect, useState } from "react";

export default function BlogPostDetailPage() {
  const { slug } = useParams();
  const { language } = useLanguage();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const posts = BLOG_POSTS[language];
    const foundPost = posts.find((p) => p.slug === slug);
    if (foundPost) {
      setPost(foundPost);
    }
  }, [slug, language]);

  if (!post) {
    return <div className="pt-20 bg-slate-50 min-h-screen text-center text-lg">Post not found</div>;
  }

  return <BlogPostPage post={post} />;
}
