import Hero from "@/components/home/HomeHero/Hero";
import HomeCategories from "@/components/home/categories/HomeCategories";
import HomeAboutus from "@/components/home/about/HomeAboutus";
import WhyChooseUs from "@/components/home/whyChooseUs/WhyChooseUs";
import HotProducts from "@/components/home/hot-products/HotProducts";
import HomeFactoryHighlight from "@/components/home/manufacturingScale/HomeFactoryHighlight";
import HomeLatestNews from "@/components/home/latestNews/HomeLatestNews";
import HomeCTA from "@/components/home/homeCTA/HomeCTA";
export default function Home() {
  return (
    <main>
      <Hero />
      <HomeCategories />
      <HomeAboutus />
      <WhyChooseUs />
      <HotProducts />
      <HomeFactoryHighlight />
      <HomeLatestNews />
      <HomeCTA />
      
    </main>
  );
}
