// app/products/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProductClient from "./ProductClient";
import { PRODUCTS_DATA } from "@/constants/products";
import { Language } from "@/types/types";


interface ProductPageProps {
  params: { slug: string };
}

// export async function generateMetadata({
//   params,
// }: ProductPageProps): Promise<Metadata> {
//   const language: Language = "en"; // Phase1 default; later use language provider
//   const product = PRODUCTS_DATA[language].find((p) => p.slug === params.slug);
//   if (!product) notFound();

//   return {
//     title: product.seo.title,
//     description: product.seo.description,
//     keywords: product.seo.keywords,
//     alternates: { canonical: `/products/${product.slug}` },
//     openGraph: {
//       title: product.seo.title,
//       description: product.seo.description,
//       url: `https://ecopetkit.com/products/${product.slug}`,
//       images: [{ url: product.image, alt: product.name }],
//     },
//   };
// }

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const language: Language = "en"; // Phase 1 default
  const product = PRODUCTS_DATA[language].find((p) => p.slug === params.slug);

  if (!product) notFound();

  return {
    title: product.seo.title,
    description: product.seo.description,
    keywords: product.seo.keywords,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title: product.seo.title,
      description: product.seo.description,
      url: `https://ecopetkit.com/products/${product.slug}`,
      images: [
        {
          url: new URL(product.image, "https://ecopetkit.com"),
          alt: product.name,
        },
      ],
    },
  };
}



export default function Page({ params }: ProductPageProps) {
  const language: Language = "en";
  const product = PRODUCTS_DATA[language].find((p) => p.slug === params.slug);
  if (!product) notFound();
  
  

  // Pass the product object to client component (serializable)
  return (
    <ProductClient product={product} allProducts={PRODUCTS_DATA[language]}  />
  );
}
