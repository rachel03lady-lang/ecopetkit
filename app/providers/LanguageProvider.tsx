"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { fetchSiteTranslations } from "@/lib/wordpress";

// Helper to extract language from pathname
const getLangFromPathname = (pathname: string): string => {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0) {
    // Check for 2-letter codes or specific 'en-us'
    if (segments[0].length === 2 || segments[0] === "en-us") {
      return segments[0];
    }
  }
  return "en-us"; // Default fallback (matches your folder structure)
};

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void; // Added missing function
  t: (key: string) => string; // Added missing helper
  ui: any | null;
  loading: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en-us",
  setLanguage: () => {},
  t: (key) => key,
  ui: null,
  loading: true,
});

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const [language, setLanguage] = useState<string>(
    getLangFromPathname(pathname)
  );
  const [ui, setUi] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  // 1. Sync State with URL
  // When user navigates (e.g. router.push), this updates the language state automatically
  useEffect(() => {
    const currentLang = getLangFromPathname(pathname);
    setLanguage(currentLang);
  }, [pathname]);

  // 2. Fetch Data when Language Changes
  useEffect(() => {
    const loadTranslations = async () => {
      setLoading(true);
      try {
        const translations = await fetchSiteTranslations(language);
        setUi(translations);
      } catch (error) {
        console.error(
          `Failed to load site translations for lang: ${language}`,
          error
        );
        setUi(null);
      } finally {
        setLoading(false);
      }
    };

    loadTranslations();
  }, [language]);

  // Dummy translator helper to prevent crashes if used
  const t = (key: string) => key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, ui, loading }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
