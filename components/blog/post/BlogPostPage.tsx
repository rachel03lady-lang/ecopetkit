
"use client";
import { BlogPost } from "@/types/blogType";
import Image from "next/image";
import { Calendar, User, Tag } from "lucide-react";
import ContentRenderer from "./ContentRenderer";
import BlogSidebar from "./BlogSidebar";
import { useState, useEffect } from "react";

type Props = {
  post: BlogPost;
};

const BlogPostPage: React.FC<Props> = ({ post }) => {
  const [dateLabel, setDateLabel] = useState("");
  useEffect(() => {
      if (post.publishedAt) {
          setDateLabel(new Date(post.publishedAt).toLocaleDateString());
      }
  }, [post.publishedAt]);

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <article>
              <header className="mb-8">
                <h1 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} />
                    {dateLabel}
                  </span>
                  <span className="flex items-center gap-2">
                    <User size={16} />
                    {post.author.name}
                  </span>
                  {post.category?.[0] && (
                    <span className="flex items-center gap-2">
                      <Tag size={16} />
                      {post.category[0].name}
                    </span>
                  )}
                </div>
              </header>

              {post.featuredImage && (
                <div className="mb-8 relative aspect-video rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={post.featuredImage}
                    alt={post.featuredImageAlt || post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  {post.imageCaption && (
                    <p className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-3 text-center">
                      {post.imageCaption}
                    </p>
                  )}
                </div>
              )}

              <div className="prose prose-lg max-w-none prose-slate">
                <ContentRenderer contentBlocks={post.contentBlocks} />
                {post.content && <div dangerouslySetInnerHTML={{ __html: post.content }} />}
              </div>
            </article>
          </div>
          <div className="lg:col-span-1">
            <BlogSidebar post={post} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;

