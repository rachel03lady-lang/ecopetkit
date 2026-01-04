import { cache } from "react";

export const getContactPage = cache(async (lang: string = "en-us") => {
  // Logic to handle language-specific URIs for the contact page
  // Assumes the slug is always 'contact' (e.g., /contact/ or /de/contact/)
  const uri = lang === "en-us" ? "/contact/" : `/${lang}/contact/`;

  console.log(`[Contact] Fetching URI: ${uri}`);

  const query = `query ContactPage($uri: ID!) {
  page(id: $uri, idType: URI) {
    seo {
      title
      description
      canonicalUrl
    }
    contactPage {
      banner {
        title
        subtitle
      }
      contactInformation {
        heading
        contact {
          icon
          contactLabel
          contactValue
        }
        moreHelp {
          label
          description
          arrowLabel
        }
      }
      contactForm {
        nameLabel
        namePlaceholder
        companyLabel
        companyPlaceholder
        emailLabel
        emailPlaceholder
        businessTypeLabel
        businessTypes{
          value
        }
       projectDetailsLabel
        projectDetailsPlaceholder
        ctaLabel
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
    cache: "no-store", // Ensure fresh data
  });

  const json = await res.json();

  if (!json.data?.page) {
    console.error(`[getContactPage] Error: Page not found for URI: ${uri}`);
    return null;
  }

  return json.data.page;
});
