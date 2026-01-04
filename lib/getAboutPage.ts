import { cache } from "react";

export const getAboutPage = cache(async (lang: string = "en-us") => {
  // FIX: Force URI structure
  const uri = `/${lang}/about/`;

  // This log appears in your VS Code TERMINAL, not browser console
  console.log(`[getAboutPage] Fetching: ${uri}`);

  const query = `query AboutPage($uri: ID!) {
    page(id: $uri, idType: URI) {
      title
      seo {
        title
        description
        canonicalUrl
        focusKeywords
      }
      aboutPage {
        hero {
          title
          description
          badge
        }
        rd {
          title
          subtitle
          items {
            label
            value
          }
          features {
            title
            description
            icon
          }
        }
        productionWorkshopHeader {
          badge
          title
          description
        }
        workshops {
          title
          icon_key
          description
          image {
            node {
              sourceUrl
              altText
              title
              caption
              description
            }
          }
          highlights {
            highlight
          }
        }        
        manufacturingCapability {
          badge
          title
          subtitle
          backgroundImage {
            node {
              sourceUrl
              altText
              title
              caption
              description
            }
          }
        }
        factoryStats {
          label
          value
        }
        qualityControl {
          title
          description
          steps {
            title
            stage
            description
            icon
          }
        }
        labTesting {
          title
          tests {
            label
          }
          badge
          description
          images {
            main {
              node {
                sourceUrl
                altText
                title
                caption
                description
              }
            }
            secondary {
              node {
                sourceUrl
                altText
                title
                caption
                description
              }
            }
          }
          rmaRate {
           value
           label
          }
        }
        certifications {
          label
        }
        cta {
          title
          description
          primaryButton {
            label
            href
          }
          secondaryButton {
            label
            href
          }
        }
      }
    }
  }`;

  try {
    const res = await fetch(process.env.NEXT_PUBLIC_WP_GRAPHQL_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { uri } }),
      // FIX: Disable cache to ensure you see fresh results immediately
      next: { revalidate: 0 },
    });

    const json = await res.json();

    if (!json?.data?.page) {
      console.error(`[getAboutPage] ❌ Page Not Found: ${uri}`);
      if (json.errors) console.error(json.errors);
      return null;
    }

    console.log(`[getAboutPage] ✅ Success`);
    return json.data.page;
  } catch (error) {
    console.error("[getAboutPage] ❌ Fetch Error:", error);
    return null;
  }
});
