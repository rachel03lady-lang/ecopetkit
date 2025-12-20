// lib/productUtils.ts (or wherever appropriate)
import { Product } from "@/types/types";

/**
 * Resolve related products for a given product.
 * - If product.relatedProductSlugs exists, return those (in same order).
 * - Otherwise fallback to same-category items (excluding itself).
 */
export function getRelatedProducts(
  product: Product,
  allProducts: Product[],
  limit = 3
): Product[] {
  if (product.relatedProductSlugs && product.relatedProductSlugs.length > 0) {
    const resolved = product.relatedProductSlugs
      .map((slug) => allProducts.find((p) => p.slug === slug))
      .filter((p): p is Product => !!p); // filter out undefined
    return resolved.slice(0, limit);
  }

  // fallback: same category, exclude itself
  return allProducts
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, limit);
}
