import ProductsClient from "@/components/products/product-page/ProductsClient";
import { getProductsOverview } from "@/lib/getProductsOverview";
import type { Metadata } from "next";

type Props = {
  params: { lang: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getProductsOverview(params.lang);
  return {
    title: data?.seo?.title ?? "Products",
    description: data?.seo?.description ?? "",
    alternates: data?.seo?.canonicalUrl
      ? { canonical: data.seo.canonicalUrl }
      : undefined,
  };
}

export default async function ProductsPage({ params }: Props) {
  const data = await getProductsOverview(params.lang);

  // --- DEBUG UI ---
  if (!data) {
    return (
      <div className="p-10 bg-red-100 text-red-900 border-4 border-red-500 m-10 rounded text-lg pt-32">
        <h1 className="font-bold text-2xl mb-4">⚠️ PRODUCTS PAGE ERROR</h1>
        <p>
          Could not fetch data for URI:{" "}
          <strong>/{params.lang}/products/</strong>
        </p>
      </div>
    );
  }

  return (
    <ProductsClient
      content={data.content}
      products={data.products}
      blogPosts={data.blogPosts} // Pass real blog data
    />
  );
}
