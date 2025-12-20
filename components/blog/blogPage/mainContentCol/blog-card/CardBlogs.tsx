"use client"
import { BlogPost } from "@/types/blogType";
import { Calendar, User, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";


type Props = {
  post: BlogPost;
};

const CardBlogs: React.FC<Props> = ({ post }) => {
    const [dateLabel, setDateLabel] = useState("");
    useEffect(() => {
        if (post.publishedAt) {
            setDateLabel(new Date(post.publishedAt).toLocaleDateString());
        }
    }, [post.publishedAt]);
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 flex flex-col group h-full">
      <div className="aspect-[16/10] relative overflow-hidden">
        <img
          src={post.featuredImage}
          alt={post.featuredImageAlt ?? post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {post.category?.[0] && (
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded text-xs font-bold text-slate-900 flex items-center gap-1 shadow-sm">
            <Tag size={12} className="text-accent" /> {post.category[0].name}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
          <span className="flex items-center gap-1">
            <Calendar size={12} /> {dateLabel}
          </span>
          <span className="flex items-center gap-1 ">
            <User size={12} /> {post.author?.name}
          </span>
        </div>
        <h3 className="text-md font-bold mb-3 text-slate-900 leading-tight group-hover:text-accent transition-colors cursor-pointer">
          {post.title}
        </h3>
        <p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>

        <Link
          href={`/blog/${post.slug}`}
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
  );
};

export default CardBlogs;