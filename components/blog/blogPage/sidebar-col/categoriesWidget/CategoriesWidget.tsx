// components/blog/blogPage/sidebar-col/categoriesWidget/CategoriesWidget.tsx
"use client"
import React from "react";
import { ChevronRight } from "lucide-react";

type CategoryOption = { slug: string; name: string };

type Props = {
  categories: CategoryOption[];
  active: string;
  onChange: (v: string) => void;
  categoryTitle:string;
};

const CategoriesWidget: React.FC<Props> = ({
  categories,
  active,
  onChange,
  categoryTitle,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
      <h3 className="font-bold text-lg mb-4">{categoryTitle}</h3>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat.slug}>
            <button
              onClick={() => onChange(cat.slug === "all" ? "All" : cat.slug)}
              className={`w-full flex justify-between items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                active === cat.name ||
                active === cat.slug ||
                (active === "All" && cat.slug === "all")
                  ? "bg-slate-50 text-accent font-bold"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <span>{cat.name}</span>
              {(active === cat.name ||
                active === cat.slug ||
                (active === "All" && cat.slug === "all")) && (
                <ChevronRight size={14} />
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesWidget;
