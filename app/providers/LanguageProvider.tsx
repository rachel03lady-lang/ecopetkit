"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchSiteTranslations } from "@/lib/wordpress";

// 1. Define the Shape of your UI Data
type UiData = {
  navigationMenu?: any[];
  footer?: any;
  brandName?: string;
  searchPlaceholder?: string;
  navigationCta?: {
    ctaLabel?: string;
    ctaUrl?: string;
  };
};

// 2. Add 'initialUI' and 'lang' to Props
type LanguageProviderProps = {
  children: React.ReactNode;
  lang?: string; // Passed from layout
  initialUI?: UiData | null; // Passed from layout (Server Data)
};

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  ui: UiData | null;
  loading: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({
  children,
  lang = "en-us",
  initialUI = null, // Default to null if not passed
}: LanguageProviderProps) {
  const [language, setLanguage] = useState(lang);

  // 3. Initialize state with Server Data (Instant Load!)
  const [ui, setUi] = useState<UiData | null>(initialUI);

  // If we have initialUI, we are not loading. Otherwise, we are.
  const [loading, setLoading] = useState(!initialUI);

  // OPTIONAL: Only fetch on client if we somehow didn't get server data
  // or if language changes significantly on client-side (SPA navigation)
  useEffect(() => {
    // If we already have UI data matching the current lang, don't re-fetch
    if (ui && language === lang) return;

    let isMounted = true;

    async function loadTranslations() {
      try {
        setLoading(true);
        console.log(`[Client] Fetching translations for: ${language}`);
        const data = await fetchSiteTranslations(language);
        if (isMounted) {
          setUi(data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Failed to load translations", error);
        if (isMounted) setLoading(false);
      }
    }

    loadTranslations();

    return () => {
      isMounted = false;
    };
  }, [language, lang, ui]); // Dependencies

  return (
    <LanguageContext.Provider value={{ language, setLanguage, ui, loading }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
