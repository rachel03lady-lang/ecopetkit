"use client";
import { BlogPost } from "@/types/blogType";
import Link from "next/link";
import { useState, useEffect } from "react";

type Props = {
  post: BlogPost;
  lang: string;
};

const RecentPostItem: React.FC<Props> = ({ post, lang }) => {
  const [dateLabel, setDateLabel] = useState("");
  useEffect(() => {
    if (post.publishedAt) {
      setDateLabel(new Date(post.publishedAt).toLocaleDateString(lang));
    }
  }, [post.publishedAt, lang]);

  return (
    <div className="flex gap-4 group cursor-pointer">
      <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
        <img
          src={post.featuredImage}
          alt={post.featuredImageAlt ?? post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div>
        <div className="text-xs text-slate-400 mb-1">{dateLabel}</div>
        <Link
          href={`/${lang}/blog/${post.slug}`}
          className="text-sm font-bold text-slate-900 leading-snug group-hover:text-accent transition-colors line-clamp-2"
        >
          {post.title}
        </Link>
      </div>
    </div>
  );
};

export default RecentPostItem;
