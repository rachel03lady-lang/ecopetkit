// components/blog/blogPage/sidebar-col/searchWidget/SearchWidget.tsx
"use client"
import React from "react";
import { Search } from "lucide-react";

type Props = {
  value: string;
  onChange: (v: string) => void;
  searchTitle: string;
  searchPlaceholder:string;
};

const SearchWidget: React.FC<Props> = ({
  value,
  onChange,
  searchTitle,
  searchPlaceholder,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
      <h3 className="font-bold text-lg mb-4">{searchTitle}</h3>
      <div className="relative">
        <input
          type="text"
          placeholder={searchPlaceholder}
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          size={18}
        />
      </div>
    </div>
  );
};

export default SearchWidget;
