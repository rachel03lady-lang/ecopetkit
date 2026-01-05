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

  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: seo.canonicalUrl },
    openGraph: {
      title: seo.opengraphTitle || seo.title,
      description: seo.opengraphDescription || seo.description,
      url: seo.canonicalUrl,
      images: seo.opengraphImage?.sourceUrl ? [{ url: seo.opengraphImage.sourceUrl }] : [],
      locale: params.lang,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.twitterTitle || seo.title,
      description: seo.twitterDescription || seo.description,
      images: seo.twitterImage?.sourceUrl ? [seo.twitterImage.sourceUrl] : [],
    },
  };
}



export default async function contact({ params }: Props) {
  const page = await getContactPage(params.lang);
  console.log("Data contact =>", page);

  return <ContactPage data={page.contactPage} />;
}
