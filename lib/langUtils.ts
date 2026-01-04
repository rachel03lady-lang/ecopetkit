// lib/langUtils.ts

export const getGraphQLLangEnum = (urlLang: string) => {
  const normalized = urlLang.toLowerCase();

  const map: Record<string, string> = {
    // FIX: Change 'EN' to 'EN_US' (matches standard WPGraphQL enum)
    "en-us": "EN-US",
    en: "EN-US",
    de: "DE",
    fr: "FR",
    es: "ES",
  };

  return map[normalized] || "EN-US";
};

export const getAcfLangKey = (urlLang: string) => {
  const normalized = urlLang.toLowerCase();
  if (normalized.startsWith("en")) return "en";
  return normalized;
};
