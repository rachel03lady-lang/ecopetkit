// Get the base WordPress URL from environment variables and clean it.
const WP_BASE_URL = (
  process.env.NEXT_PUBLIC_WP_GRAPHQL_URL || "https://admin.ecopetkit.com/graphql"
).replace(/\/graphql\/?$/, ""); // Remove /graphql suffix
const WP_API_URL = `${WP_BASE_URL}/graphql`; // The final, clean GraphQL endpoint.

/**
 * Generates a prioritized list of potential URIs for finding a product.
 * @param lang The language code (e.g., 'en', 'de').
 * @param slug The product's slug.
 * @returns An array of URI strings to try in order.
 */
function getProductUriCandidates(lang: string, slug: string): string[] {
  const normalizedLang = (lang || "").toLowerCase();
  const candidates = new Set<string>();

  const productPostTypes = ["product", "products"]; // Common post type slugs

  // For non-English languages, prioritize the language-prefixed URI.
  if (normalizedLang && normalizedLang !== "en" && normalizedLang !== "en-us") {
    for (const postType of productPostTypes) {
      candidates.add(`/${normalizedLang}/${postType}/${slug}/`);
    }
  }

  // Always add the default/English URIs as the primary or fallback option.
  // This is crucial for both English pages and for finding cross-language linked products.
  for (const postType of productPostTypes) {
    candidates.add(`/${postType}/${slug}/`);
  }
  
  // Add a final, absolute fallback for the slug alone.
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
        seo { title description }
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

  // Loop through candidates and try to fetch the product until found.
  for (const uri of candidateURIs) {
    try {
      const res = await fetch(WP_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, variables: { uri } }),
        next: { revalidate: 60 },
      });

      if (!res.ok) {
        continue; // Don't stop, just try the next URI
      }

      const json = await res.json();
      const product = json?.data?.productBy;

      if (product) {
        console.log(`Success: Found product for slug "${slug}" with URI: ${uri}`);
        return product; // Found it, return immediately.
      }
    } catch (error) {
      console.error(`getProduct: Fetch failed for URI "${uri}".`, error);
      // Don't re-throw here, allow the loop to continue.
    }
  }

  console.warn(
    `getProduct: Failed to find product for slug "${slug}" (lang: "${lang}"). Tried URIs:`,
    candidateURIs
  );
  return null;
}