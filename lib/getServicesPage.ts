import { cache } from "react";

export const getServicesPage = cache(async (lang: string = "en-us") => {
  // FIX: Always include language prefix.
  // Your WordPress structure is /en-us/services/, /es/services/, etc.
  const uri = `/${lang}/services/`;

  console.log(`[getServicesPage] Fetching: ${uri}`);

  const res = await fetch(process.env.NEXT_PUBLIC_WP_GRAPHQL_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query ServicesPage($uri: ID!) {
        page(id: $uri, idType: URI) {
          title
          seo {
            title
            description
            canonicalUrl
            focusKeywords
          }
          servicesPage {
            hero {
              heading
              subheading
            }
            capabilities {
              title
              description
              iconKey
            }
            caseStudy {
              label
              title
              caseStudySteps {
                stepLabel
                stepInformation
              }
              ctaLabel
              ctaLink
              imagePlaceholderTitle
              imagePlaceholderSubtitle
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
            title
            tiers {
              tierLabel
              title
              isPopular
              features { feature }
              moq
              ctaLabel
              ctaLink
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
    console.error(`[getServicesPage] ❌ Page Not Found: ${uri}`);
    return null;
  }

  return json.data.page;
});
