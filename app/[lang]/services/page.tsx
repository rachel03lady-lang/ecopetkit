import ServiceBanner from "@/components/services/banner/ServiceBanner";
import ServicesGrid from "@/components/services/servicesGrid/ServicesGrid";
import CaseStudy from "@/components/services/caseStudy/CaseStudy";
import CustomizationTier from "@/components/services/customizationTier/CustomizationTier";
import { getServicesPage } from "@/lib/getServicesPage";
import { getSeoMetadata } from "@/lib/wordpress";
import type { Metadata } from "next";

type Props = {
  params: { lang: string };
};

// 1. DYNAMIC METADATA FOR CONTACT PAGE
export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  // Define the URI for this specific page (match your WordPress slug)
  const uri =
    params.lang === "en-us" ? "/services/" : `/${params.lang}/services/`;
  
  const seo = await getSeoMetadata(uri);

  // Fallback if WP data is missing
  if (!seo) {
    return {
      title: "Services | EcoPetKit",
      description:"All reliable services provided by the Ecopetkit team to contribute towards the Intelligent Pet Luxury.",
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


export default async function ServicesPage({ params }: Props) {
  // 1. Pass the dynamic language from URL
  const page = await getServicesPage(params.lang);

  // --- DEBUG UI ---
  if (!page) {
    return (
      <div className="p-10 bg-red-100 text-red-900 border-4 border-red-500 m-10 rounded text-lg pt-32">
        <h1 className="font-bold text-2xl mb-4">⚠️ SERVICES PAGE NOT FOUND</h1>
        <p>
          Could not fetch data for URI:{" "}
          <strong>/{params.lang}/services/</strong>
        </p>
        <p className="mt-2">
          Check your WordPress pages list to ensure the slug is correct.
        </p>
      </div>
    );
  }

  // 2. Access data DIRECTLY (No [lang] index needed anymore)
  const content = page.servicesPage || {};

  return (
    <main className="pt-20">
      {content.hero && <ServiceBanner data={content.hero} />}
      {content.capabilities && <ServicesGrid data={content.capabilities} />}
      {content.caseStudy && <CaseStudy data={content.caseStudy} />}
      {/* Pass title and tiers data to the component */}
      {content.tiers && (
        <CustomizationTier data={content.tiers} title={content.title} />
      )}
    </main>
  );
}
