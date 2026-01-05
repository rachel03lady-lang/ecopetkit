// app/[lang]/products/[slug]/page.tsx

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProduct } from "@/lib/getProduct";
import ProductClient from "@/app/[lang]/products/[slug]/ProductClient";

interface Props {
  params: {
    lang: string;
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProduct(params.lang, params.slug);

  if (!product) return {};

  const seo = product.seo || {};
  const og = seo.openGraph || {};

  // Robots Logic
  const robotsArray = seo.robots || [];
  const isNoIndex = robotsArray.includes("noindex");
  const isNoFollow = robotsArray.includes("nofollow");

  // Fallback Values
  const title = seo.title || product.title;
  const description = seo.description || product.productCoreInfo?.tagline || "";
  const imageUrl = og.image?.url || product.featuredImage?.node?.sourceUrl;

  return {
    title: title,
    description: description,
    alternates: {
      canonical: seo.canonicalUrl,
    },
    robots: {
      index: !isNoIndex,
      follow: !isNoFollow,
      googleBot: {
        index: !isNoIndex,
        follow: !isNoFollow,
      },
    },
    openGraph: {
      title: og.title || title,
      description: og.description || description,
      url: og.url || seo.canonicalUrl,
      siteName: og.siteName || "EcoPetKit",
      locale: og.locale || params.lang,
      type: "website", // Products are usually 'website' or 'product' (if mapped)
      images: imageUrl
        ? [
            {
              url: imageUrl,
              alt: product.featuredImage?.node?.altText || title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: og.title || title,
      description: og.description || description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const product = await getProduct(params.lang, params.slug);

  if (!product) notFound();

  return <ProductClient product={product} lang={params.lang} />;
}
