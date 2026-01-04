import Hero from "@/components/home/HomeHero/Hero";
import HomeCategories from "@/components/home/categories/HomeCategories";
import HomeAboutus from "@/components/home/about/HomeAboutus";
import WhyChooseUs from "@/components/home/whyChooseUs/WhyChooseUs";
import HotProducts from "@/components/home/hot-products/HotProducts";
import HomeFactoryHighlight from "@/components/home/manufacturingScale/HomeFactoryHighlight";
import HomeLatestNews from "@/components/home/latestNews/HomeLatestNews";
import HomeCTA from "@/components/home/homeCTA/HomeCTA";
import { getHomePage } from "@/lib/getHomePage";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: { lang: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = await getHomePage(params.lang);

  return {
    title: page?.seo?.title ?? "ECOPETKIT",
    description: page?.seo?.description ?? "",
    alternates: page?.seo?.canonicalUrl
      ? { canonical: page.seo.canonicalUrl }
      : undefined,
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
