"use client";

import { ChevronRight } from "lucide-react";
import { Product } from "@/types/types";

interface Props {
  product: Product;
}

export default function HotProductCard({ product }: Props) {
  console.log("product: =>", product);
  return (
    <div
      
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-slate-100 cursor-pointer"
    >
      <div className="aspect-square bg-slate-50 overflow-hidden relative p-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
        />

        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold uppercase border border-slate-100">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold mb-2 line-clamp-1 group-hover:text-accent transition-colors">
          {product.name}
        </h3>

        <p className="text-sm text-slate-500 mb-4 line-clamp-2">
          {product.tagline}
        </p>

        <div className="mt-auto pt-4 border-t border-slate-50 flex items-center text-sm font-bold text-slate-900 group-hover:text-accent">
          Learn More <ChevronRight size={16} className="ml-1" />
        </div>
      </div>
    </div>
  );
}
