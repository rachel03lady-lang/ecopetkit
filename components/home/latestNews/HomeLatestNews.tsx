"use client";
import React from "react";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";
import { Calendar } from "lucide-react";

interface BlogPostItem {
  blog: {
    nodes: {
      id: string;
      title: string;
      date: string;
      uri: string;
      featuredImage: {
        node: {
          sourceUrl: string;
        };
      };
    }[];
  };
}

interface HeaderData {
  title: string;
  ctaLabel: string;
  ctaHref: string;
}

interface Props {
  header: HeaderData;
  posts: BlogPostItem[];
}

export default function HomeLatestNews({ header, posts }: Props) {
  const router = useRouter();

  // Flatten structure: posts array from WP has objects with { blog: { nodes: [...] } }
  // Assuming 'posts' from props is the Repeater array
  const recentPosts =
    posts?.map((item) => item.blog.nodes[0]).filter(Boolean) || [];

  if (recentPosts.length === 0) return null;

  return (
    <Section>
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-4xl font-bold">{header?.title || "Latest News"}</h2>
        <Button
          variant="outline"
          onClick={() => router.push(header?.ctaHref || "/blog")}
        >
          {header?.ctaLabel || "Read All Blogs"}
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {recentPosts.map((post) => {
          const dateLabel = post.date
            ? new Date(post.date).toLocaleDateString("en-US")
            : "";

          // Note: WP URI comes as /slug/, router push usually expects clean paths
          const link = post.uri || "/blog";

          return (
            <div
              key={post.id}
              className="group cursor-pointer"
              onClick={() => router.push(link)}
            >
              <div className="rounded-xl overflow-hidden mb-4 relative aspect-[16/10]">
                {post.featuredImage?.node?.sourceUrl ? (
                  <img
                    src={post.featuredImage.node.sourceUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-200" />
                )}
                {/* Category tag removed as it wasn't requested in query, add back if needed */}
              </div>
              <div className="text-xs text-slate-400 mb-2 flex gap-2">
                <Calendar size={12} /> {dateLabel}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors line-clamp-2">
                {post.title}
              </h3>
              {/* Excerpt not fetched in current query, removed */}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
