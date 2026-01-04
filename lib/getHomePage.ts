import { cache } from "react";

export const getHomePage = cache(async (lang: string = "en-us") => {
  const uri = `/${lang}/home`;

  const langMap: Record<string, string> = {
    "en-us": "EN-US",
    en: "EN",
    fr: "FR",
    de: "DE",
    es: "ES",
  };

  const gqlLang = langMap[lang.toLowerCase()] || "EN-US";

  console.log(`[Home] fetching uri => ${uri} and SQL Enum => ${gqlLang}`);

  const query = `query homePage($uri: ID!) {
  page(id: $uri, idType: URI) {
    seo {
      title
      description
      canonicalUrl
      focusKeywords
    }
    homePage {
      banner{
        tagline
        title
        subtitle
        image{
          node {
                  sourceUrl
                  altText
                  title
                  caption
                  description
                }
        }
        ctaPrimaryLabel
        ctaPrimaryUrl{
          nodes {
            ... on Page { uri }
            ... on Post { uri }
          }
        }
        ctaSecondaryLabel
        ctaSecondaryHref
        {
          nodes {
            ... on Page { uri }
            ... on Post { uri }
          }
        }
      }
      categoriesSectionTitle
      categories {
  category {
    nodes {
      ... on ProductCategory {
        id
        name
        slug
      }
    }
  }
        categoryImage{
          node {
                  sourceUrl
                  altText
                  title
                  caption
                  description
                }
        }
}
      about{
        tagline
        title
        description
        highlights
        {
          highlight
        }
        image{node {
                  sourceUrl
                  altText
                  title
                  caption
                  description
                }}
        card{
          title
          subtitle
          info
        }
        ctaLabel
        ctaHref
        {
          nodes {
            ... on Page { uri }
            ... on Solution { uri }
          }
        }
      }
      whyChooseUs{
        title
        subtitle
        cards{
         icon
          title
          info
        }
      }
      hotProducts{
        title
        tagline
        ctaLabel
        ctaHref
      }
      hotProductItems {
        hotProduct {
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
              productCoreInfo {
                tagline
                ishot
              }
            }
          }
        }
      }
      manufacturingScale{
        label
        title
        description
        ctaLabel
        ctaUrl
        productionInfo{
          label
          value
        }
        image{
          node {
                  sourceUrl
                  altText
                  title
                  caption
                  description
                }
        }
      }
      indusrtyInsights{
        title
        ctaLabel
        ctaHref
      }
      selectBlogs {
        blog {
          nodes {
            ... on Post {
              id
              title
              date
              uri
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
        }
      }
      bottomCta {
        title
        description
        primaryCtaLabel
        primaryCtaHref
        secondaryCtaLabel
        secondaryCtaHref {
          node {
            ... on MediaItem {
              mediaItemUrl
            }
          }
        }
      }
    }
  }
                   }`;
  const res = await fetch(process.env.NEXT_PUBLIC_WP_GRAPHQL_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query,
      variables: { uri },
    }),
    next: { revalidate: 60 },
  });
  const json = await res.json();
  if (!json) {
    console.error(`[getHomePage] error Page not fount ${uri}}`);
    return null;
  }

  return json.data.page;
});
