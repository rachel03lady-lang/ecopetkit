"use client";
import { BlogPost } from "@/types/blogType";
import { ChevronRight } from "lucide-react";
import CardBlogs from "@/components/blog/blogPage/mainContentCol/blog-card/CardBlogs";

type Props = {
  posts: BlogPost[];
};
const MainContentCol: React.FC<Props> = ({ posts }) => {
  return (
    <div className="lg:w-2/3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post) => (
          <CardBlogs key={post.id} post={post} />
        ))}
      </div>
      {/* paggination */}
      <div className="mt-12 flex justify-center gap-2">
        <button className="w-10 h-10 rounded-lg bg-slate-900 text-white font-bold flex items-center justify-center">
          1
        </button>
        <button className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-slate-600 font-bold flex items-center justify-center hover:bg-slate-50">
          2
        </button>
        <button className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-slate-600 font-bold flex items-center justify-center hover:bg-slate-50">
          3
        </button>
        <button className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-slate-600 font-bold flex items-center justify-center hover:bg-slate-50">
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default MainContentCol;
