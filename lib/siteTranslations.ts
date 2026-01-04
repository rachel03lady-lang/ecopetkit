
import { fetchAPI } from "./wordpress";

/**
 * Fetches site-wide UI translations from the corresponding "Site Translations" page.
 *
 * @param lang The current language code (e.g., 'en', 'de').
 * @returns The flattened ACF data for UI text and settings.
 */
export async function fetchSiteTranslations(lang: string) {
  // English is the default and lives at the root, others are prefixed.
  const isEnglish = lang === 'en' || lang === 'en-us';
  const uri = isEnglish ? '/site-translations/' : `/${lang}/site-translations/`;

  const data = await fetchAPI(
    `
    query FetchSiteTranslations($uri: ID!) {
      page(id: $uri, idType: URI) {
        id
        siteTranslations {
          # --- Flattened fields from common, hero, brandSettings ---
          hotProductsBadge
          hotProducts
          viewAll
          premier
          viewProducts
          logo { sourceUrl altText }
          logoWhite { sourceUrl altText }

          # --- Navigation ---
          # Assuming 'navItem' was renamed/restructured to 'navigationItems'
          # Assuming 'ctaButton' was renamed/restructured to 'navigationCta'
          navigationItems {
            linkText
            link { 
              ... on Page { uri }
              ... on Post { uri }
            }
          }
          navigationCta {
            text
            link { 
              ... on Page { uri }
              ... on Post { uri }
            }
          }

          # --- Footer ---
          # Assuming fields were flattened and renamed
          footerDescription
          footerBottomBarText
          socialMediaLinks {
            icon
            url
          }
          # Using the field name suggested by the GraphQL error
          footerCompany {
            title
            companyRelatedPage { 
                nodes {
                  ... on Page { 
                    title
                    uri 
                  }
                }
              }
          }
        }
      }
    }
    `,
    {
      variables: {
        uri,
      },
    }
  );

  return data?.page?.siteTranslations;
}
