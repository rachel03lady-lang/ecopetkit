"use client";
import { BlogPost } from "@/types/blogType";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/app/providers/LanguageProvider";
import { PRODUCTS_DATA } from "@/constants/products";

type Props = {
  post: BlogPost;
};

const BlogSidebar: React.FC<Props> = ({ post }) => {
  const { language } = useLanguage();
  const allProducts = PRODUCTS_DATA[language];

  return (
    <aside className="space-y-8">
      {post.tags && post.tags.length > 0 && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-lg mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Link
                href={`/blog/tags/${tag.toLowerCase().replace(/ /g, '-')}`}
                key={tag}
                className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm hover:bg-slate-200"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      )}

      {post.relatedProducts && post.relatedProducts.length > 0 && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-lg mb-4">Related Products</h3>
          <div className="space-y-4">
            {post.relatedProducts.map((relatedProduct) => {
              const product = allProducts.find(p => p.slug === relatedProduct.slug);
              if (!product) return null;

              return (
                <Link
                  href={`/products/${product.slug}`}
                  key={product.slug}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-16 h-16 bg-slate-100 rounded-lg flex-shrink-0 relative overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 group-hover:text-accent transition-colors">
                      {product.name}
                    </h4>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </aside>
  );
};

export default BlogSidebar;