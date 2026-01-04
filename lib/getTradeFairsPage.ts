import { cache } from "react";

export const getTradeFairsPage = cache(async (lang: string = "en-us") => {
  // FIX: Always include language prefix (e.g. /en-us/trade-fairs/)
  const uri = `/${lang}/trade-fairs/`;

  console.log(`[getTradeFairsPage] Fetching: ${uri}`);

  const res = await fetch(process.env.NEXT_PUBLIC_WP_GRAPHQL_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query TradeFairsPage($uri: ID!) {
        page(id: $uri, idType: URI) {
          title
          seo {
            title
            description
            canonicalUrl
            focusKeywords
          }
          tradeFairsPage {
            banner {
              title
              description
            }
            items {
              name
              date
              location
              booth
              status
              image {
                node {
                  sourceUrl
                  altText
                  title
                  caption
                  description
                }
              }
            }
          }
        }
      }`,
      variables: { uri },
    }),
    next: { revalidate: 60 },
  });

  const json = await res.json();

  if (!json?.data?.page) {
    console.error(`[getTradeFairsPage] ❌ Page Not Found: ${uri}`);
    return null;
  }

  return json.data.page;
});
