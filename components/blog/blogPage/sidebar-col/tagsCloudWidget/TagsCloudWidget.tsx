// components/blog/blogPage/sidebar-col/tagsCloudWidget/TagsCloudWidget.tsx
"use client"
import React from "react";
type Props = {
  tags: string[];
  popular:string;
};

const TagsCloudWidget: React.FC<Props> = ({ tags, popular }) => {

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
      <h3 className="font-bold text-lg mb-4">{popular}</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full hover:bg-slate-200 cursor-pointer transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagsCloudWidget;
