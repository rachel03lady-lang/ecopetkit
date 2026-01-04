import { cache } from "react";

export const getProductsOverview = cache(async (lang: string = "en-us") => {
  // 1. URI Tactic: Same as About Page
  const uri = `/${lang}/products/`;

  // 2. Simple Inline Mapping (No langUtils)
  // GraphQL requires uppercase ENUMS (EN, FR, DE). Next.js gives us lowercase (en-us, fr).
  const langMap: Record<string, string> = {
    "en-us": "EN-US",
    en: "EN",
    fr: "FR",
    de: "DE",
    es: "ES",
  };

  // Default to EN if something weird comes in
  const gqlLang = langMap[lang.toLowerCase()] || "EN-US";

  console.log(`[Products] Fetching URI: ${uri} | GQL Enum: ${gqlLang}`);

  const query = `
    query GetProductsOverview($lang: LanguageCodeFilterEnum!, $uri: ID!) {
      page(id: $uri, idType: URI) {
        seo { title description canonicalUrl focusKeywords }
        productPageContent {
            pageHeader {
              title
              searchPlaceholder
            }
            blogSection {
              header
              subheader
            }
            faqSection {
              header
              subheader
              faqs {
                question
                answer
              }
            }
            bottomCta {
              tagline
              label
              url
            }
        }
      }
      products(where: { language: $lang, status: PUBLISH }, first: 100) {
        nodes {
          id
          title
          slug
          uri
          productCoreInfo { tagline }
          featuredImage { node { sourceUrl altText } }
          productCategories { nodes { name slug } } 
        }
      }
      posts(first: 3, where: { language: $lang, status: PUBLISH }) {
        nodes {
          id
          title
          slug
          date
          excerpt
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  `;

  try {
    const res = await fetch(process.env.NEXT_PUBLIC_WP_GRAPHQL_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { lang: gqlLang, uri } }),
      next: { revalidate: 60 },
    });

    const json = await res.json();

    // Log errors if GraphQL complains (e.g. Invalid Enum)
    if (json.errors) {
      console.error("[Products] GraphQL Errors:", json.errors);
      return null;
    }

    const data = json?.data;
    if (!data?.page) {
      console.error(`[Products] ❌ Page Not Found: ${uri}`);
      return null;
    }

    // 1. Content
    const pageContent = data.page.productPageContent;

    // 2. Products
    const products =
      data.products?.nodes?.map((p: any) => ({
        id: p.id,
        name: p.title,
        slug: p.slug,
        image: p.featuredImage?.node?.sourceUrl || "/images/placeholder.jpg",
        tagline: p.productCoreInfo?.tagline || "",
        category: p.productCategories?.nodes?.[0]?.name || "Uncategorized",
        link: p.uri?.replace("/product/", "/products/"),
      })) || [];

    // 3. Blog Posts
    const blogPosts =
      data.posts?.nodes?.map((post: any) => ({
        id: post.id,
        title: post.title,
        slug: post.slug,
        date: post.date,
        excerpt: post.excerpt?.replace(/<[^>]+>/g, "").slice(0, 100) + "...",
        image:
          post.featuredImage?.node?.sourceUrl || "/images/blog-placeholder.jpg",
      })) || [];

    return {
      seo: data.page.seo,
      content: pageContent,
      products: products,
      blogPosts: blogPosts,
    };
  } catch (error) {
    console.error("[Products] Fetch Error:", error);
    return null;
  }
});
