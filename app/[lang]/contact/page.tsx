// app/contact/page.tsx


import { getContactPage } from "@/lib/getContactPage";
import { Metadata } from "next";
import { getSeoMetadata } from "@/lib/wordpress";
import ContactPage from "@/components/contact/ContactPage";

type Props = {
  params: { lang: string };
};

// 1. DYNAMIC METADATA FOR CONTACT PAGE
export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  // Define the URI for this specific page (match your WordPress slug)
  const uri =
    params.lang === "en-us" ? "/contact/" : `/${params.lang}/contact/`;
  
  const seo = await getSeoMetadata(uri);

  // Fallback if WP data is missing
  if (!seo) {
    return {
      title: "Contact | EcoPetKit",
      description:"Looking for a reliable manufacturing partner? Tell us about your project requirements.",
    };
  }

  const og = seo.openGraph || {};
  const robotsArray = seo.robots || [];
  const isNoIndex = robotsArray.includes("noindex");
  const isNoFollow = robotsArray.includes("nofollow");

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.canonicalUrl,
    },
    robots: {
      index: !isNoIndex,
      follow: !isNoFollow,
    },
    openGraph: {
      title: og.title || seo.title,
      description: og.description || seo.description,
      url: og.url || seo.canonicalUrl,
      siteName: og.siteName,
      locale: og.locale || params.lang,
      images: og.image?.url ? [{ url: og.image.url }] : [],
      type: "website",
    },
    // Twitter fallback (using OG data since Twitter block is gone)
    twitter: {
      card: "summary_large_image",
      title: og.title || seo.title,
      description: og.description || seo.description,
      images: og.image?.url ? [og.image.url] : [],
    },
  };
}



export default async function contact({ params }: Props) {
  const page = await getContactPage(params.lang);
  console.log("Data contact =>", page);

  return <ContactPage data={page.contactPage} />;
}
