import { cache } from "react";

export const getDownloadsPage = cache(async (lang: string = "en-us") => {
  // FIX: Always include language prefix (e.g. /en-us/downloads/)
  const uri = `/${lang}/downloads/`;

  console.log(`[getDownloadsPage] Fetching: ${uri}`);

  const res = await fetch(process.env.NEXT_PUBLIC_WP_GRAPHQL_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query DownloadsPage($uri: ID!) {
        page(id: $uri, idType: URI) {
          title
          seo {
            title
            description
            canonicalUrl
            focusKeywords
          }
          downloads {
            downloadBoxItems {
              title
              type
              file {
                node {
                  mediaItemUrl
                  sourceUrl
                  title
                  fileSize
                  mediaDetails {
                    file
                  }     
                }
              }
              publishedDate
              iconKey
              ctaLabel
            }
            heading
            subheading
          }
        }
      }`,
      variables: { uri },
    }),
    next: { revalidate: 60 },
  });

  const json = await res.json();

  if (!json?.data?.page) {
    console.error(`[getDownloadsPage] ❌ Page Not Found: ${uri}`);
    return null;
  }

  return json.data.page;
});
