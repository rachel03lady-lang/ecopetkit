import ProductsClient from "@/components/products/product-page/ProductsClient";
import { getProductsOverview } from "@/lib/getProductsOverview";
import { getSeoMetadata } from "@/lib/wordpress";
import type { Metadata } from "next";

type Props = {
  params: { lang: string };
};

// 1. DYNAMIC METADATA FOR PRODUCT PAGE
export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  // Define the URI for this specific page (match your WordPress slug)
  const uri = `/${params.lang}/products/`;
  
  const seo = await getSeoMetadata(uri);

  // Fallback if WP data is missing
  if (!seo) {
    return {
      title: "Products | EcoPetKit",
      description: "View all pet products in Intelligent Pet Luxury from Ecopetkit",
    };
  }

  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: seo.canonicalUrl },
    openGraph: {
      title: seo.opengraphTitle || seo.title,
      description: seo.opengraphDescription || seo.description,
      url: seo.canonicalUrl,
      images: seo.opengraphImage?.sourceUrl ? [{ url: seo.opengraphImage.sourceUrl }] : [],
      locale: params.lang,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.twitterTitle || seo.title,
      description: seo.twitterDescription || seo.description,
      images: seo.twitterImage?.sourceUrl ? [seo.twitterImage.sourceUrl] : [],
    },
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
