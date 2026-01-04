"use client";
import { Section } from "@/components/Section";
import { useRouter } from "next/navigation";

// Interface based on your getHomePage query
interface CategoryItem {
  category: {
    nodes: {
      id: string;
      name: string;
      slug: string;
    }[];
  };
  categoryImage: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
}

interface Props {
  title: string;
  categories: CategoryItem[];
}

export default function HomeCategories({ title, categories }: Props) {
  const router = useRouter();

  // Guard clause if no categories are returned
  if (!categories || categories.length === 0) return null;

  return (
    <Section className="py-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">{title || "Categories"}</h2>
        <div className="w-24 h-1 bg-slate-900 mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((cat, idx) => {
          // Extract data safely
          const name = cat.category.nodes[0]?.name || "Uncategorized";
          const image = cat.categoryImage?.node?.sourceUrl || "";

          return (
            <div
              key={idx}
              className="group cursor-pointer flex flex-col items-center"
              onClick={() => router.push("products")}
            >
              <div className="w-full aspect-square rounded-full overflow-hidden mb-4 border-2 border-slate-100 group-hover:border-slate-900 transition-colors duration-300 shadow-sm">
                {image ? (
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-200" />
                )}
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-accent transition-colors text-center uppercase tracking-wide">
                {name}
              </h3>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
