"use client";
import { Section } from "@/components/Section";
import { PRODUCTS_DATA } from "@/constants/products";
import { getCategoriesFromProducts } from "@/lib/getProductCategories";
import { useLanguage } from "@/app/providers/LanguageProvider";
import { useRouter } from "next/navigation";

export default function HomeCategories(){
     const { language, t } = useLanguage();
    const products = PRODUCTS_DATA[language];
    const categories = getCategoriesFromProducts(products);

     const router = useRouter();
    return (
      <Section className="py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Categories
          </h2>
          <div className="w-24 h-1 bg-slate-900 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="group cursor-pointer flex flex-col items-center"
              onClick={() => router.push("products")}
            >
              <div className="w-full aspect-square rounded-full overflow-hidden mb-4 border-2 border-slate-100 group-hover:border-slate-900 transition-colors duration-300 shadow-sm">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-accent transition-colors text-center uppercase tracking-wide">
                {cat.name}
              </h3>
            </div>
          ))}
        </div>
      </Section>
    );
}