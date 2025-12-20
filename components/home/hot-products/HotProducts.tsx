"use client";
import Link from "next/link";
import { PRODUCTS_DATA } from "@/constants/products";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/app/providers/LanguageProvider";
import { useRouter } from "next/navigation";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import HotProductCard from "./HotProductCard";

export default function HotProducts() {
  const { language, t } = useLanguage();
  const router = useRouter();

  // 1️⃣ Get all products for current language
  const allProducts = PRODUCTS_DATA[language];

  // 2️⃣ Filter hot products
  const hotProducts = allProducts.filter((product) => product.isHot === true);

  // 3️⃣ Fallback to first 4 products if none marked hot
  const productsToShow =
    hotProducts.length > 0 ? hotProducts.slice(0, 4) : allProducts.slice(0, 4);

  return (
    <Section background="gray">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <span className="text-accent font-bold uppercase tracking-widest text-sm mb-2 block">
            {t("common.hotProductsBadge")}
          </span>
          <h2 className="text-4xl font-bold text-slate-900">
            {t("common.hotProducts")}
          </h2>
        </div>

        <Button variant="outline" onClick={() => router.push("/products")}>
          {t("common.viewAll")} <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {productsToShow.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="block h-full"
          >
            <HotProductCard product={product} />
          </Link>
        ))}
      </div>
    </Section>
  );
}
