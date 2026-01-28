import { fetchSiteTranslations } from "@/lib/wordpress";
import { LanguageProvider } from "@/app/providers/LanguageProvider"; // Ensure path is correct
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// FIX: Define Params Type
type Props = {
  children: React.ReactNode;
  params: { lang: string };
};

export default async function LangLayout({ children, params }: Props) {
  // 1. Fetch on Server (Cached for 1 hour)
  const uiData = await fetchSiteTranslations(params.lang);

  return (
    // 2. Pass data to Provider (Now TypeScript is happy!)
    <LanguageProvider initialUI={uiData} lang={params.lang}>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </LanguageProvider>
  );
}
