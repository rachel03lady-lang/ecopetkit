import { cache } from "react";

export const getFaqPage = cache(async (lang: string = "en-us") => {
  // FIX: Always include language prefix to match your WP structure
  const uri = `/${lang}/faq/`;

  console.log(`[getFaqPage] Fetching: ${uri}`);

  const res = await fetch(process.env.NEXT_PUBLIC_WP_GRAPHQL_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query FAQPage($uri: ID!) {
          page(id: $uri, idType: URI) {
            title
            seo {
              title
              description
              canonicalUrl
              focusKeywords
            }
            faqPage {
                pageHeading
                pageSubheading
                faqItems { 
                  question 
                  answer 
                }
                ctaText
                ctaButtonLabel
                ctaButtonLink
            }
          }
        }
      `,
      variables: { uri },
    }),
    next: { revalidate: 60 },
  });

  const json = await res.json();

  if (!json?.data?.page) {
    console.error(`[getFaqPage] ❌ Page Not Found: ${uri}`);
    return null;
  }

  return json.data.page;
});
