import { gql } from "graphql-request";

const WP_API_URL = process.env.NEXT_PUBLIC_WP_GRAPHQL_URL;

// ==========================================
// 1. HELPERS & UTILS
// ==========================================

function getApiUrl() {
  if (!WP_API_URL) {
    throw new Error(
      "NEXT_PUBLIC_WP_GRAPHQL_URL is not defined in your .env.local file.",
    );
  }
  return WP_API_URL.endsWith("/") ? WP_API_URL.slice(0, -1) : WP_API_URL;
}

// Helper: Map 'en-us' to 'EN_US' for GraphQL (Used by Blog fetchers)
function getGqlLang(lang: string) {
  if (typeof lang !== "string") {
    console.warn(
      "[getGqlLang] Received non-string lang, defaulting to EN-US:",
      lang,
    );
    return "EN-US";
  }
  const map: Record<string, string> = {
    "en-us": "EN-US",
    en: "EN-US",
    fr: "FR",
    de: "DE",
    es: "ES",
  };
  return map[lang.toLowerCase()] || "EN-US";
}

// Helper: Map lang to Enum (Used by Post/Solution fetchers)
export function mapLangToEnum(lang: string): string {
  if (!lang) return "EN-US";
  const langLower = lang.toLowerCase();
  if (langLower === "en" || langLower === "en-us") return "EN-US";
  if (langLower === "de") return "DE";
  if (langLower === "fr") return "FR";
  if (langLower === "es") return "ES";
  return "EN-US";
}

export async function fetchAPI(
  query: string,
  { variables, next }: { variables?: any; next?: RequestInit["next"] } = {},
) {
  const headers = { "Content-Type": "application/json" };
  const apiUrl = getApiUrl();

  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers,
      body: JSON.stringify({ query, variables }),
      // Default to no-store if next config isn't provided (Dev mode safe)
      ...(next ? { next } : { cache: "no-store" }),
    });

    const json = await res.json();

    if (json.errors) {
      console.error("GraphQL Error:", JSON.stringify(json.errors, null, 2));
      throw new Error("Failed to fetch API");
    }

    return json.data;
  } catch (error) {
    console.error("Fetch problem:", error);
    throw new Error("Fetch failed");
  }
}

// ==========================================
// 2. INTERFACES
// ==========================================

export interface NavigationItem {
  id: string;
  label: string;
  hasChildren: boolean;
  href?: { uri: string } | null;
  children?: NavigationItem[];
}

export interface SiteTranslations {
  brandName: string;
  searchPlaceholder: string;
  navigationCta: {
    ctaLabel: string;
    ctaUrl: string;
  };
  navigationMenu: NavigationItem[];
  footer: {
    footerBrandName: string;
    footerBandDescription: string;
    footerProductTitle: string;
    // CORRECTED: Nested footerProduct structure
    footerProductsCategories: {
      footerProduct: {
        name: string;
        slug: string;
        uri: string;
      }[];
    }[];
    footerCompanyTitle: string;
    footerCompany: {
      companyLinks: { title: string; uri: string }[];
    };
    footerNewsletter: string;
    footerNewsletterDescription: string;
    footerNewsletterCtaPlaceholder: string;
    footerNewsletterCtaLabel: string;
  };
}

// ==========================================
// 3. DATA MAPPING HELPERS
// ==========================================

// Recursive Mapper for Navigation Menu
function mapMenuData(menuItems: any[]): NavigationItem[] {
  if (!Array.isArray(menuItems)) return [];

  return menuItems.map((item: any) => {
    // Correctly accessing the Relationship field nodes
    const linkedNode = item.href?.nodes?.[0];

    return {
      id: item.id || Math.random().toString(),
      label: item.label,
      // Map 'href.nodes[0]' -> 'href.uri'
      href: linkedNode ? { uri: linkedNode.uri } : null,
      hasChildren: !!item.hasChildren,
      children: item.children ? mapMenuData(item.children) : [],
    };
  });
}

// ==========================================
// 4. SITE TRANSLATIONS FETCHER (The Fix)
// ==========================================

export async function fetchSiteTranslations(
  lang: string,
): Promise<SiteTranslations | null> {
  const isEnglish = lang === "en" || lang === "en-us";
  const uri = isEnglish ? "/site-translations/" : `/${lang}/site-translations/`;

  const query = `
    query FetchSiteTranslations($uri: ID!) {
      page(id: $uri, idType: URI) {
        siteTranslations {
          brandName
          searchPlaceholder
          
          # --- Navigation ---
          navigationMenu {
            id
            hasChildren
            label
            href { nodes { ... on Page { uri } ... on Post { uri } ... on Solution { uri } } }
            children {
              id
              label
              href { nodes { ... on Page { uri } ... on Post { uri } ... on Solution { uri } } }
            }
          }
          
          # --- CTA ---
          navigationCta {
            ctaLabel
            ctaUrl
          }
          
          # --- Footer ---
          footer {
            footerBrandName
            footerBandDescription
            footerProductTitle
            
            # CORRECTED: Nested Query for Footer Products
            footerProductsCategories {
              footerProduct {
                nodes { ... on ProductCategory { name slug uri } }
              }
            }
            
            footerCompanyTitle
            footerCompany {
              companyRelatedPage {
                nodes { ... on Page { title uri } }
              }
            }
            
            footerNewsletter
            footerNewsletterDescription
            footerNewsletterCtaPlaceholder
            footerNewsletterCtaLabel
          }
        }
      }
    }
  `;

  try {
    const data = await fetchAPI(query, {
      variables: { uri },
      // Optimization: Cache this heavily
      next: { revalidate: 3600, tags: ["site-layout"] },
    });

    const raw = data?.page?.siteTranslations;
    if (!raw) return null;

    return {
      brandName: raw.brandName,
      searchPlaceholder: raw.searchPlaceholder,

      // 1. Run the Mapper for Menu
      navigationMenu: mapMenuData(raw.navigationMenu),

      // 2. Flatten CTA URL
      navigationCta: {
        ctaLabel: raw.navigationCta?.ctaLabel,
        ctaUrl: raw.navigationCta?.ctaUrl?.nodes?.[0]?.uri || "/contact",
      },

      // 3. Map Footer Data
      footer: {
        ...raw.footer,
        // Map the nested footerProduct nodes
        footerProductsCategories:
          raw.footer.footerProductsCategories?.map((item: any) => ({
            footerProduct: item.footerProduct?.nodes || [],
          })) || [],
        // Map the company links
        footerCompany: {
          companyLinks:
            raw.footer.footerCompany?.[0]?.companyRelatedPage?.nodes || [],
        },
      },
    };
  } catch (error) {
    console.error("Error fetching translations:", error);
    return null;
  }
}

// ==========================================
// 5. EXISTING FETCHERS (Blogs, Posts, Solutions)
// ==========================================

export async function getBlogPageData(lang: string) {
  const gqlLang = getGqlLang(lang);
  let targetUri = `/${lang}/blog/`;
  const query = `
    query BlogIndex($uri: ID!, $lang: LanguageCodeFilterEnum!) {
      page(id: $uri, idType: URI) {
        title
        seo { title description canonicalUrl }
        allBlogsPage {
          headers { tagline heading subtitle }
          popularTagsLabel searchLabel categoriesLabel recentPostLabel
          newsletter { title description emailPlaceholder buttonLabel }
        }
      }
      posts(where: { language: $lang, status: PUBLISH }, first: 20) {
        nodes {
          id title slug date excerpt
          featuredImage { node { sourceUrl altText } }
          categories { nodes { name slug } }
          tags { nodes { name slug } }
          author { node { name avatar { url } } }
        }
      }
    }
  `;
  let data = await fetchAPI(query, {
    variables: { uri: targetUri, lang: gqlLang },
  });
  if (!data?.page && (lang === "en" || lang === "en-us")) {
    targetUri = "/blog/";
    data = await fetchAPI(query, {
      variables: { uri: targetUri, lang: gqlLang },
    });
  }
  return data;
}

export async function getBlogPost(lang: string, slug: string) {
  const gqlLang = getGqlLang(lang);
  const query = `
    query SinglePost($slug: String!, $lang: LanguageCodeFilterEnum!) {
      posts(where: { name: $slug, language: $lang }) {
        nodes {
          id title date content
          featuredImage { node { sourceUrl altText } }
          author { node { name } }
          categories { nodes { name } }
          tags { nodes { name } }
          seo { title description canonicalUrl }
        }
      }
    }
  `;
  const data = await fetchAPI(query, { variables: { slug, lang: gqlLang } });
  return data?.posts?.nodes?.[0] || null;
}

export async function getPostBySlug(slug: string, lang: string) {
  const langEnum = mapLangToEnum(lang);
  const data = await fetchAPI(
    `query PostBySlug($id: ID!, $idType: PostIdType!, $lang: LanguageCodeFilterEnum!) {
      post(id: $id, idType: $idType) {
        id title slug content excerpt date
        featuredImage { node { sourceUrl altText caption } }
        categories { nodes { name slug } }
        author { node { name } }
        tags { nodes { name slug } }
        seo { title description canonicalUrl focusKeywords robots openGraph { title description url siteName locale image { url } } }
      }
      posts(first: 3, where: { language: $lang, notIn: [$id] }) {
        nodes { id title slug date featuredImage { node { sourceUrl } } }
      }
    }`,
    { variables: { id: slug, idType: "SLUG", lang: langEnum } },
  );

  return { post: data?.post || null, relatedPosts: data?.posts?.nodes || [] };
}

export async function getSolutionBySlug(slug: string, lang: string) {
  const langEnum = mapLangToEnum(lang);
  const query = `
    query GetSolutionBySlug($slug: String!, $lang: LanguageCodeFilterEnum!) {
      solutions(where: { name: $slug, language: $lang }) {
        nodes {
          id title slug content excerpt featuredImage { node { sourceUrl altText } }
          seo { title description canonicalUrl focusKeywords robots openGraph { title description url siteName locale image { url } } }
          solutionMeta {
            relatedProducts {
              nodes {
                ... on Product { id title slug featuredImage { node { sourceUrl altText } } }
              }
            }
          }
        }
      }
    }
  `;
  const data = await fetchAPI(query, { variables: { slug, lang: langEnum } });
  return data?.solutions?.nodes?.[0] || null;
}

export async function getSolutionsPage(lang: string) {
  const gqlLang = getGqlLang(lang);
  let targetUri = `/${lang}/solutions/`;
  const query = `
    query SolutionsPageData($uri: ID!, $lang: LanguageCodeFilterEnum!) {
      page(id: $uri, idType: URI) {
        title seo { title description canonicalUrl }
        solutionPage { title tagline description }
      }
      solutions(first: 100, where: { language: $lang }) {
        nodes {
          id title slug excerpt
          featuredImage { node { sourceUrl(size: LARGE) altText } }
        }
      }
    }
  `;
  let data = await fetchAPI(query, {
    variables: { uri: targetUri, lang: gqlLang },
  });
  if (!data?.page && (lang === "en" || lang === "en-us")) {
    targetUri = "/solutions/";
    data = await fetchAPI(query, {
      variables: { uri: targetUri, lang: gqlLang },
    });
  }
  return { page: data?.page, solutions: data?.solutions?.nodes || [] };
}

export async function getAllSolutions(lang: string): Promise<any[]> {
  const langEnum = mapLangToEnum(lang);
  const query = `
    query GetAllSolutions($lang: LanguageCodeFilterEnum!) {
      solutions(first: 100, where: { language: $lang }) {
        nodes {
          id title slug content excerpt
          featuredImage { node { sourceUrl(size: LARGE) altText } }
          language { code }
        }
      }
    }
  `;
  const data = await fetchAPI(query, { variables: { lang: langEnum } });
  return data?.solutions?.nodes || [];
}

export async function getProductsPageData(lang: string) {
  const langEnum = mapLangToEnum(lang);
  const uri = langEnum === "EN" ? "/products/" : `/${lang}/products/`;
  try {
    const data = await fetchAPI(
      `query ProductsPage($uri: ID!) {
          page(id: $uri, idType: URI) {
            id title content
            seo { title description }
          }
        }`,
      { variables: { uri } },
    );
    if (!data.page) return null;
    return data.page;
  } catch (error) {
    return null;
  }
}

// SEO metadata
export async function getSeoMetadata(uri: string) {
  const query = `
    query GetSeoData($uri: String!) {
      nodeByUri(uri: $uri) {
        ... on Page {
          seo { title description canonicalUrl focusKeywords robots openGraph { title description url siteName locale image { url } } }
        }
        ... on Post {
          seo { title description canonicalUrl focusKeywords robots openGraph { title description url siteName locale image { url } } }
        }
      }
    }
  `;
  try {
    const data = await fetchAPI(query, { variables: { uri } });
    return data?.nodeByUri?.seo || null;
  } catch (error) {
    console.error("Error fetching SEO metadata:", error);
    return null;
  }
}
