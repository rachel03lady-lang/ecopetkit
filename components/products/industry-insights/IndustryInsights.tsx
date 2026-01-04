"use client";
import { Section } from "@/components/Section";
import { Calendar } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  image: string;
}

interface Props {
  data: {
    header: string; // "Industry Insights" label from WP
    subheader: string; // Subtitle from WP
  };
  posts: BlogPost[];
}

export default function IndustryInsights({ data, posts }: Props) {
  if (!posts || posts.length === 0) return null;

  return (
    <Section background="white">
      <div className="mb-12">
        <span className="text-accent font-bold uppercase tracking-widest text-sm">
          {data?.header || "Industry Insights"}
        </span>
        <h2 className="text-3xl font-bold mt-2">
          {data?.subheader || "Latest News"}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => {
          const dateLabel = post.date
            ? new Date(post.date).toLocaleDateString("en-US")
            : "";

          return (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group cursor-pointer"
            >
              <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-slate-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                <Calendar size={12} />
                {dateLabel}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-slate-500 text-sm line-clamp-2 mb-4">
                {post.excerpt}
              </p>
              <div className="inline-flex items-center font-bold text-sm text-slate-900 group-hover:text-accent">
                Read More
              </div>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
