import { Language } from "@/types/types";

export type BlogPageContent = {
  header: {
    eyebrow: string;
    title: string;
    description: string;
  };
  sidebar: {
    searchTitle: string;
    searchPlaceholder: string;
    categoriesTitle: string;
    recentPostsTitle: string;
    tagsTitle: string;
    newsletter: {
      title: string;
      description: string;
      placeholder: string;
      buttonText: string;
    };
  };
};

export const BLOG_PAGE_CONTENT: Record<Language, BlogPageContent> = {
  en: {
    header: {
      eyebrow: "Our Journal",
      title: "Industry Insights",
      description:
        "Latest insights on smart pet technology, manufacturing trends, and market analysis.",
    },
    sidebar: {
      searchTitle: "Search",
      searchPlaceholder: "Search articles...",
      categoriesTitle: "Categories",
      recentPostsTitle: "Recent Posts",
      tagsTitle: "Popular Tags",
      newsletter: {
        title: "Subscribe",
        description:
          "Get the latest industry insights delivered to your inbox.",
        placeholder: "Your email address",
        buttonText: "Join Newsletter",
      },
    },
  },

  de: {
    header: {
      eyebrow: "Unser Journal",
      title: "Brancheneinblicke",
      description:
        "Neueste Einblicke in intelligente Haustiertechnologie, Fertigungstrends und Marktanalysen.",
    },
    sidebar: {
      searchTitle: "Suche",
      searchPlaceholder: "Artikel suchen...",
      categoriesTitle: "Kategorien",
      recentPostsTitle: "Neueste Beiträge",
      tagsTitle: "Beliebte Tags",
      newsletter: {
        title: "Abonnieren",
        description: "Erhalten Sie die neuesten Brancheneinblicke per E-Mail.",
        placeholder: "Ihre E-Mail-Adresse",
        buttonText: "Abonnieren",
      },
    },
  },

  es: {
    header: {
      eyebrow: "Nuestro Diario",
      title: "Perspectivas de la Industria",
      description:
        "Últimas ideas sobre tecnología inteligente para mascotas, tendencias de fabricación y análisis de mercado.",
    },
    sidebar: {
      searchTitle: "Buscar",
      searchPlaceholder: "Buscar artículos...",
      categoriesTitle: "Categorías",
      recentPostsTitle: "Publicaciones Recientes",
      tagsTitle: "Etiquetas Populares",
      newsletter: {
        title: "Suscribirse",
        description: "Recibe las últimas ideas del sector en tu correo.",
        placeholder: "Tu correo electrónico",
        buttonText: "Unirse",
      },
    },
  },

  fr: {
    header: {
      eyebrow: "Notre Journal",
      title: "Analyses du Secteur",
      description:
        "Dernières analyses sur la technologie intelligente pour animaux, les tendances industrielles et le marché.",
    },
    sidebar: {
      searchTitle: "Recherche",
      searchPlaceholder: "Rechercher des articles...",
      categoriesTitle: "Catégories",
      recentPostsTitle: "Articles Récents",
      tagsTitle: "Tags Populaires",
      newsletter: {
        title: "S’abonner",
        description: "Recevez les dernières analyses du secteur par email.",
        placeholder: "Votre adresse email",
        buttonText: "S’abonner",
      },
    },
  },
};