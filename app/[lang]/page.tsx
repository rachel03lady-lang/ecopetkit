import Hero from "@/components/home/HomeHero/Hero";
import HomeCategories from "@/components/home/categories/HomeCategories";
import HomeAboutus from "@/components/home/about/HomeAboutus";
import WhyChooseUs from "@/components/home/whyChooseUs/WhyChooseUs";
import HotProducts from "@/components/home/hot-products/HotProducts";
import HomeFactoryHighlight from "@/components/home/manufacturingScale/HomeFactoryHighlight";
import HomeLatestNews from "@/components/home/latestNews/HomeLatestNews";
import HomeCTA from "@/components/home/homeCTA/HomeCTA";
import { getHomePage } from "@/lib/getHomePage";
import { getSeoMetadata } from "@/lib/wordpress"; // Import the new function
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: { lang: string };
};

// 1. GENERATE METADATA (Server Side)
export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const uri = `/${params.lang}/home`;
  const seo = await getSeoMetadata(uri);

  if (!seo) {
    return {
      title: "EcoPetKit | Smart Pet Care Solutions",
      description: "Leading OEM/ODM manufacturer for smart pet feeders and fountains.",
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

export default async function Home({ params }: Props) {
  const page = await getHomePage(params.lang);

  // --- DEBUG UI ---
  if (!page) {
    return notFound();
  }

  console.log("Home Page data =>", page.homePage);

  return (
    <main>
      <Hero banner={page.homePage.banner} />

      <HomeCategories
        title={page.homePage.categoriesSectionTitle}
        categories={page.homePage.categories}
      />

      <HomeAboutus data={page.homePage.about} />

      <WhyChooseUs data={page.homePage.whyChooseUs} />

      <HotProducts
        header={page.homePage.hotProducts}
        products={page.homePage.hotProductItems}
      />

      <HomeFactoryHighlight data={page.homePage.manufacturingScale} />

      <HomeLatestNews
        header={page.homePage.indusrtyInsights}
        posts={page.homePage.selectBlogs}
      />

      <HomeCTA data={page.homePage.bottomCta} />
    </main>
  );
}
