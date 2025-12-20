import { Product } from "@/types/types";

export interface DerivedCategory {
  name: string;
  slug: string;
  count: number;
  image?: string; // optional representative image
}

export function getCategoriesFromProducts(
  products: Product[]
): DerivedCategory[] {
  const map = new Map<string, DerivedCategory>();

  products.forEach((product) => {
    const name = product.category;
    const slug = name.toLowerCase().replace(/\s+/g, "-");

    if (!map.has(slug)) {
      map.set(slug, {
        name,
        slug,
        count: 1,
        image: product.image, // first product image as category image
      });
    } else {
      map.get(slug)!.count += 1;
    }
  });

  return Array.from(map.values());
}
