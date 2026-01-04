"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import HotProductCard from "./HotProductCard";

interface HotProductItem {
  hotProduct: {
    nodes: {
      id: string;
      title: string;
      slug: string;
      featuredImage: {
        node: {
          sourceUrl: string;
          altText: string;
        };
      };
      productCoreInfo: {
        tagline: string;
        ishot: boolean; // Note: Ensure casing matches your query (ishot vs isHot)
      };
      categories?: {
        nodes: { name: string }[];
      };
    }[];
  };
}

interface HeaderData {
  title: string;
  tagline: string;
  ctaLabel: string;
  ctaHref: string;
}

interface Props {
  header: HeaderData;
  products: HotProductItem[];
}

export default function HotProducts({ header, products }: Props) {
  const router = useRouter();

  if (!products) return null;

  return (
    <Section background="gray">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <span className="text-accent font-bold uppercase tracking-widest text-sm mb-2 block">
            {header?.tagline || "Hot Products"}
          </span>
          <h2 className="text-4xl font-bold text-slate-900">
            {header?.title || "Our Most Popular Products"}
          </h2>
        </div>

        <Button
          variant="outline"
          onClick={() => router.push(header?.ctaHref || "/products")}
        >
          {header?.ctaLabel || "View All"}{" "}
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((item, idx) => {
          const product = item.hotProduct.nodes[0];
          if (!product) return null;

          return (
            <Link
              key={product.id || idx}
              href={`/products/${product.slug}`}
              className="block h-full"
            >
              <HotProductCard product={product} />
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
