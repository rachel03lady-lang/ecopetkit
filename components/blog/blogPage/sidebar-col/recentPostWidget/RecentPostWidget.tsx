// components/blog/blogPage/sidebar-col/recentPostWidget/RecentPostWidget.tsx
"use client";
import React from "react";
import { BlogPost } from "@/types/blogType";
import RecentPostItem from "./RecentPostItem";

type Props = {
  posts: BlogPost[];
  recentPostTitle: string;
  lang: string;
};

const RecentPostWidget: React.FC<Props> = ({
  posts,
  recentPostTitle,
  lang,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
      <h3 className="font-bold text-lg mb-6">{recentPostTitle}</h3>
      <div className="space-y-6">
        {posts.map((post) => (
          <RecentPostItem key={post.id} post={post} lang={lang} />
        ))}
      </div>
    </div>
  );
};

export default RecentPostWidget;