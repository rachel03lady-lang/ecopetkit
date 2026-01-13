import { gql } from "graphql-request";

const WP_API_URL = process.env.NEXT_PUBLIC_WP_GRAPHQL_URL;

// --- HELPER: Map 'en-us' to 'EN_US' for GraphQL ---
function getGqlLang(lang: string) {
  if (typeof lang !== "string") {
    console.warn(
      "[getGqlLang] Received non-string lang, defaulting to EN-US:",
      lang
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

function getApiUrl() {
  if (!WP_API_URL) {
    throw new Error(
      "NEXT_PUBLIC_WP_GRAPHQL_URL is not defined in your .env.local file."
    );
  }
  return WP_API_URL.endsWith("/") ? WP_API_URL.slice(0, -1) : WP_API_URL;
}

export async function fetchAPI(
  query: string,
  { variables }: { variables?: any } = {}
) {
  const headers = { "Content-Type": "application/json" };
  const apiUrl = getApiUrl();

  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers,
      body: JSON.stringify({ query, variables }),
      cache: "no-store",
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
// 1. CLEAN INTERFACES (Used by Components)
// ==========================================

export interface LinkObj {
  uri: string;
  title?: string;
  target?: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  hasChildren: boolean;
  href?: LinkObj | null;
  children?: NavigationItem[];
}

export interface FooterProduct {
  id?: string;
  name: string;
  slug: string;
  uri: string;
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
    footerProductsCategories: {
      footerProduct: FooterProduct[];
    }[];
    footerCompanyTitle: string;
    // FIX: Updated to hold a list of links (LinkObj[]) since you selected multiple pages
    footerCompany: {
      companyLinks: LinkObj[];
    };
    footerNewsletter: string;
    footerNewsletterDescription: string;
    footerNewsletterCtaPlaceholder: string;
    footerNewsletterCtaLabel: string;
  };
}

// ==========================================
// 2. RAW INTERFACES (Matching Your Query Output)
// ==========================================

interface AcfConnection<T> {
  nodes: T[];
}

interface RawNavigationItem {
  id: string;
  label: string;
  hasChildren: boolean;
  href?: AcfConnection<{ uri: string }>;
  children?: RawNavigationItem[];
}

interface RawFooterProduct {
  footerProduct: AcfConnection<{
    id?: string;
    name: string;
    slug: string;
    uri: string;
  }>;
}

// FIX: Matches your new One-to-Many output
interface RawFooterCompanyRow {
  companyRelatedPage?: {
    nodes: {
      title: string;
      uri: string;
    }[];
  };
}

interface RawSiteTranslations {
  page: {
    siteTranslations: {
      brandName: string;
      searchPlaceholder: string;
      navigationCta: {
        ctaLabel: string;
        ctaUrl: string;
      };
      navigationMenu: RawNavigationItem[];
      footer: {
        footerBrandName: string;
        footerBandDescription: string;
        footerProductTitle: string;
        footerProductsCategories: RawFooterProduct[];
        footerCompanyTitle: string;
        // FIX: Array of rows, each containing a list of nodes
        footerCompany: RawFooterCompanyRow[];
        footerNewsletter: string;
        footerNewsletterDescription: string;
        footerNewsletterCtaPlaceholder: string;
        footerNewsletterCtaLabel: string;
      };
    };
  };
}

export function mapLangToEnum(lang: string): string {
  if (!lang) return "EN-US";
  const langLower = lang.toLowerCase();
  if (langLower === "en" || langLower === "en-us") return "EN-US";
  if (langLower === "de") return "DE";
  if (langLower === "fr") return "FR";
  if (langLower === "es") return "ES";
  return "EN-US";
}

// --- EXISTING FETCHERS ---
// BlOG fetcher 
//get blog page data
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

//get blog post
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
//get blog post by slug

// lib/wordpress.ts

// lib/wordpress.ts

export async function getPostBySlug(slug: string, lang: string) {
  const langEnum = mapLangToEnum(lang);
  
  const data = await fetchAPI(
    `query PostBySlug($id: ID!, $idType: PostIdType!, $lang: LanguageCodeFilterEnum!) {
      post(id: $id, idType: $idType) {
        id
        title
        slug
        content
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
            altText
            caption
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
        author {
          node {
            name
          }
        }
        tags {
          nodes {
            name
            slug
          }
        }
        # --- FIXED SEO BLOCK (Based on your Introspection) ---
        seo {
          title
          description
          canonicalUrl
          focusKeywords
          robots # Returns a list like ["index", "follow"]
          openGraph {
            title
            description
            url
            siteName
            locale
            image {
              url
            }
          }
        }
      }
      # --- RELATED POSTS ---
      posts(first: 3, where: { language: $lang, notIn: [$id] }) {
        nodes {
          id
          title
          slug
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }`,
    { 
      variables: { 
        id: slug, 
        idType: "SLUG", 
        lang: langEnum 
      } 
    }
  );

  return { 
    post: data?.post || null, 
    relatedPosts: data?.posts?.nodes || [] 
  };
}

// export async function getPostBySlug(slug: string, lang: string) {
//   const langEnum = mapLangToEnum(lang);
//   const data = await fetchAPI(
//     `query PostBySlug($id: ID!, $idType: PostIdType!, $lang: LanguageCodeFilterEnum!) {
//       post(id: $id, idType: $idType) {
//         id title slug content date
//         featuredImage { node { sourceUrl altText } }
//         categories { nodes { name slug } }
//         author { node { name } }
//         tags { nodes { name slug } }
//         seo {
//           title
//           description
//           canonicalUrl
//           focusKeywords
//           metaRobotsNoindex
//           metaRobotsNofollow
//           opengraphTitle
//           opengraphDescription
//           opengraphUrl
//           opengraphImage {
//             sourceUrl
//           }
//           twitterTitle
//           twitterDescription
//           twitterImage {
//             sourceUrl
//           }
//             twitterCard
//         }
//       }
//       posts(first: 3, where: { language: $lang, notIn: [$id] }) {
//         nodes {
//           id title slug date
//           featuredImage { node { sourceUrl } }
//         }
//       }
//     }`,
//     { variables: { id: slug, idType: "SLUG", lang: langEnum } }
//   );
//   return { post: data?.post, relatedPosts: data?.posts?.nodes || [] };
// }


//solutions

export async function getSolutionBySlug(slug: string, lang: string) {
  const langEnum = mapLangToEnum(lang);

  const query = `
    query GetSolutionBySlug($slug: String!, $lang: LanguageCodeFilterEnum!) {
      solutions(where: { name: $slug, language: $lang }) {
        nodes {
          id
          title
          slug
          content
          excerpt
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          # --- FIXED SEO BLOCK (Same as Blog/Product) ---
          seo {
            title
            description
            canonicalUrl
            focusKeywords
            robots
            openGraph {
              title
              description
              url
              siteName
              locale
              image {
                url
              }
            }
          }
          # --- Solution Meta ---
          solutionMeta {
            relatedProducts {
              nodes {
                ... on Product {
                  id
                  title
                  slug
                  featuredImage {
                    node {
                      sourceUrl
                      altText
                    }
                  }
                }
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
      { variables: { uri } }
    );
    if (!data.page) return null;
    return data.page;
  } catch (error) {
    return null;
  }
}



// ==========================================
// 3. FETCH SITE TRANSLATIONS (FINAL)
// ==========================================

const FETCH_SITE_TRANSLATIONS_QUERY = `
  query FetchSiteTranslations($uri: ID!) {
    page(id: $uri, idType: URI) {
      id
      siteTranslations {
        brandName
        searchPlaceholder
        navigationCta { ctaLabel ctaUrl }
        navigationMenu {
          id label hasChildren
          href { 
            nodes {
              ... on Page { uri } 
              ... on Post { uri }
            }
          }
          children {
            id label
            href { 
              nodes {
                ... on Page { uri } 
                ... on Post { uri }
              }
            }
          }
        }
        footer {
          footerBrandName footerBandDescription footerProductTitle
          footerProductsCategories {
            footerProduct {
              nodes {
                ... on ProductCategory { id name slug uri }
                ... on TermNode { name slug uri }
              }
            }
          }
          footerCompanyTitle
          footerCompany {
            companyRelatedPage {
              nodes {
                ... on Page {
                  title
                  uri
                }
              }
            }
          }
          footerNewsletter footerNewsletterDescription footerNewsletterCtaPlaceholder footerNewsletterCtaLabel
        }
      }
    }
  }
`;

export async function fetchSiteTranslations(
  lang: string
): Promise<SiteTranslations | null> {
  const variables = { uri: "/site-translations" };

  try {
    const data = await fetchAPI(FETCH_SITE_TRANSLATIONS_QUERY, { variables });
    const rawData = data as RawSiteTranslations;

    if (!rawData?.page?.siteTranslations) return null;
    const rawTrans = rawData.page.siteTranslations;

    // Helper for Navigation: Takes a Connection with nodes
    const flattenNavHref = (connection?: AcfConnection<{ uri: string }>) => {
      return connection?.nodes?.[0] ? { uri: connection.nodes[0].uri } : null;
    };

    // --- MAPPING LOGIC ---

    // 1. Navigation Mapping
    const cleanedMenu: NavigationItem[] =
      rawTrans.navigationMenu?.map((item) => {
        const mappedChildren: NavigationItem[] =
          item.children?.map((child) => ({
            id: child.id,
            label: child.label,
            hasChildren: false,
            children: [],
            href: flattenNavHref(child.href),
          })) || [];

        return {
          id: item.id,
          label: item.label,
          hasChildren: item.hasChildren,
          href: flattenNavHref(item.href),
          children: mappedChildren,
        };
      }) || [];

    // 2. Footer Products Mapping
    const cleanedFooterProducts =
      rawTrans.footer.footerProductsCategories?.map((cat) => ({
        footerProduct: cat.footerProduct?.nodes || [],
      })) || [];

    // 3. Footer Company Mapping
    // FIX: Get the first row, then get the list of nodes from that row
    const firstCompanyRow = rawTrans.footer.footerCompany?.[0];
    const companyLinksList = firstCompanyRow?.companyRelatedPage?.nodes || [];

    return {
      brandName: rawTrans.brandName,
      searchPlaceholder: rawTrans.searchPlaceholder,
      navigationCta: rawTrans.navigationCta,
      navigationMenu: cleanedMenu,
      footer: {
        ...rawTrans.footer,
        footerProductsCategories: cleanedFooterProducts,
        footerCompany: {
          companyLinks: companyLinksList, // Now returns the full array
        },
      },
    };
  } catch (error) {
    console.error("Error fetching translations:", error);
    return null;
  }
}


// SEO metadata

export async function getSeoMetadata(uri: string) {
  const query = `
    query GetSeoData($uri: String!) {
      nodeByUri(uri: $uri) {
        ... on Page {
          seo {
            title
            description
            canonicalUrl
            focusKeywords
            robots
            openGraph {
              title
              description
              url
              siteName
              locale
              image {
                url
              }
            }
          }
        }
        ... on Post {
          seo {
            title
            description
            canonicalUrl
            focusKeywords
            robots
            openGraph {
              title
              description
              url
              siteName
              locale
              image {
                url
              }
            }
          }
        }
        # If you have an archive page for products that is actually a "Page" type, the above covers it.
        # If it's a "Product" type, add "... on Product { seo { ... } }" with the same fields.
      }
    }
  `;

  try {
    const data = await fetchAPI(query, { variables: { uri } });

    // Return the SEO object from whichever type was returned
    return data?.nodeByUri?.seo || null;
  } catch (error) {
    console.error("Error fetching SEO metadata:", error);
    return null;
  }
}