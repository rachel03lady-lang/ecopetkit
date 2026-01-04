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

  return {
    title: product.seo?.title ?? product.title,
    description: product.seo?.description ?? "",
    alternates: product.seo?.canonicalUrl
      ? { canonical: product.seo.canonicalUrl }
      : undefined,
    openGraph: {
      title: product.seo?.title ?? product.title,
      description: product.seo?.description ?? "",
      url: product.seo?.canonicalUrl,
      images: product.featuredImage?.node?.sourceUrl
        ? [
            {
              url: product.featuredImage.node.sourceUrl,
              alt: product.featuredImage.node.altText,
            },
          ]
        : [],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const product = await getProduct(params.lang, params.slug);
  if (!product) notFound();

  return <ProductClient product={product} lang={params.lang}  />;
}
