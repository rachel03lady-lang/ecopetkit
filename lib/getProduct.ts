// lib/getProduct.ts

// Get the base WordPress URL from environment variables and clean it.
const WP_BASE_URL = (
  process.env.NEXT_PUBLIC_WP_GRAPHQL_URL ||
  "https://admin.ecopetkit.com/graphql"
).replace(/\/graphql\/?$/, "");
const WP_API_URL = `${WP_BASE_URL}/graphql`;

function getProductUriCandidates(lang: string, slug: string): string[] {
  const normalizedLang = (lang || "").toLowerCase();
  const candidates = new Set<string>();
  const productPostTypes = ["product", "products"];

  // Language specific URIs
  if (normalizedLang && normalizedLang !== "en" && normalizedLang !== "en-us") {
    for (const postType of productPostTypes) {
      candidates.add(`/${normalizedLang}/${postType}/${slug}/`);
    }
  }

  // Default URIs
  for (const postType of productPostTypes) {
    candidates.add(`/${postType}/${slug}/`);
  }

  // Absolute fallback
  candidates.add(`/${slug}/`);

  return Array.from(candidates);
}

export async function getProduct(lang: string, slug: string) {
  if (!slug) {
    console.error("getProduct error: A product slug must be provided.");
    return null;
  }

  const candidateURIs = getProductUriCandidates(lang, slug);

  const query = `
    query GetProductByUri($uri: String!) {
      productBy(uri: $uri) {
        id
        title
        slug
        uri
        language { code locale }
        
        # --- FIXED SEO BLOCK (Matches RankMath Schema) ---
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

        productCategories { nodes { name slug } }
        featuredImage { node { sourceUrl altText } }
        
        # --- Flat ACF Fields ---
        productCoreInfo {
          tagline
          ishot
          socialShare { platform url ariaLabel }
          video { videoHeading videoYoutubeid videoDescription }
          gallery { nodes { sourceUrl altText } }
          certifications { label }
          buybox {
            buyBoxFeatures { label value }
            buyBoxHighlights { highlight }
            buyBoxCta {
              buyCta { label href }
              downloadCta { label path { node { mediaItemUrl } } }
            }
            buyboxCompliance { compliance }
          }
          features { feature }
          marketingsection {
            title
            content
            marketingImage { node { sourceUrl altText } }
            imageAlign
          }
          whatsincluded {
            title
            image { node { sourceUrl altText } }
            whatsInTheBox { boxItem }
          }
          specifications {
            sectionHeading
            specificationsCombo { specLabel specValue }
          }
          oemOptimozation {
            heading
            subheading
            availableOptionsLabel
            availableCustomization { customization }
            card { icon title description }
          }
          bottomcta { heading description buttonLabel buttonHref }
          faq { question answer }
          relatedproductslugs {
            nodes {
              ... on Product {
                id
                title
                slug
                uri
                featuredImage { node { sourceUrl } }
              }
            }
          }
        }
      }
    }
  `;

  // Loop through candidates
  for (const uri of candidateURIs) {
    try {
      const res = await fetch(WP_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, variables: { uri } }),
        next: { revalidate: 60 },
      });

      if (!res.ok) continue;

      const json = await res.json();
      const product = json?.data?.productBy;

      if (product) {
        // console.log(`Success: Found product for slug "${slug}" with URI: ${uri}`);
        return product;
      }
    } catch (error) {
      console.error(`getProduct: Fetch failed for URI "${uri}".`, error);
    }
  }

  console.warn(
    `getProduct: Failed to find product for slug "${slug}" (lang: "${lang}").`
  );
  return null;
}
