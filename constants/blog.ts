// constants/blog.ts
import { BlogPost } from "@/types/blogType";
import { Language } from "@/types/types";






// note: export as collection keyed by language
export const BLOG_POSTS: Record<Language, BlogPost[]> = {
  en: [
    {
      id: "b1-en",
      wpId: undefined,
      language: "en",
      slug: "rise-of-ai-in-pet-care",

      title: "The Rise of AI in Pet Care",
      excerpt:
        "How artificial intelligence is transforming pet health monitoring with predictive analytics and behavior tracking.",
      content: "<p>Full content to be provided or sourced from WP.</p>",
      contentBlocks: [
        { id: "b1-en-block-1", type: "heading", level: 2, text: "Overview" },
        {
          id: "b1-en-block-2",
          type: "paragraph",
          text: "AI is improving predictive health alerts and behavior monitoring. This article explores common use cases.",
        },
        {
          id: "b1-en-block-3",
          type: "video",
          provider: "youtube",
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          caption: "Demo: AI health monitoring in smart feeders",
        },
      ],

      category: [
        { id: "cat-technology", slug: "technology", name: "Technology" },
        // you can add product category slugs if needed
      ],
      tags: ["AI", "Pet Care", "IoT", "Smart Devices"],

      featuredImage:
        "https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4",
      featuredImageAlt: "Dog with smart collar",
      imageCaption: "AI-powered pet health monitoring in action",

      relatedProducts: [{ slug: "EcoFeed-Pro-X1", title: "EcoFeed Pro X1" }],
      isFeatured: true,

      author: {
        name: "EcoPetKit Team",
        slug: "ecopetkit-team",
      },
      publishedAt: "2024-10-02T00:00:00.000Z",
      updatedAt: "2024-10-02T00:00:00.000Z",
      readingTime: 6,
      estimatedWordCount: 1200,

      seo: {
        metaTitle: "AI in Pet Care | Smart Pet Technology | EcoPetKit",
        metaDescription:
          "Discover how AI-powered pet care solutions are reshaping health monitoring and smart pet devices.",
        ogTitle: "The Rise of AI in Pet Care",
        ogDescription:
          "AI-driven innovation in smart pet products and health monitoring.",
        ogImage: "https://images.unsplash.com/photo-1583511655936-526d1e7b2d6c",
        twitterCard: "summary_large_image",
        canonical: "https://ecopetkit.com/blog/rise-of-ai-in-pet-care",
        noIndex: false,
        noFollow: false,
        structuredData: {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "The Rise of AI in Pet Care",
        },
      },

      status: "published",
    },

    {
      id: "b2-en",
      wpId: undefined,
      language: "en",
      slug: "sustainable-manufacturing-pet-products",

      title: "Sustainable Pet Products manufacturing",
      excerpt:
        "How EcoPetKit adopts recycled materials and eco-friendly processes in OEM manufacturing.",
      content: "<p>Full content to be provided or sourced from WP.</p>",
      contentBlocks: [
        {
          id: "b2-en-h1",
          type: "heading",
          level: 2,
          text: "Sustainability at Scale",
        },
        {
          id: "b2-en-p1",
          type: "paragraph",
          text: "Ecopetkit uses recycled ABS and reduced packaging. Here’s how it works across the supply chain.",
        },
        {
          id: "b2-en-gallery-1",
          type: "gallery",
          images: [
            {
              id: "g1",
              type: "image",
              url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
              alt: "Factory line",
              caption: "Eco-friendly production line",
            },
          ],
        },
      ],

      category: [{ id: "cat-industry", slug: "industry", name: "Industry" }],
      tags: ["Sustainability", "Manufacturing", "OEM"],
      featuredImage:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      featuredImageAlt: "Recycled material manufacturing",

      relatedProducts: [
        { slug: "KittenLitter-Box-S2", title: "KittenLitter Box S2" },
      ],

      isFeatured: false,
      author: {
        name: "EcoPetKit Team",
        slug: "ecopetkit-team",
      },
      publishedAt: "2024-09-28T00:00:00.000Z",
      updatedAt: "2024-09-28T00:00:00.000Z",
      readingTime: 5,
      estimatedWordCount: 900,

      seo: {
        metaTitle: "Sustainable Manufacturing for Pet Products",
        metaDescription:
          "Learn how sustainable OEM manufacturing improves eco-friendly pet products.",
        ogTitle: "Sustainable Manufacturing for Pet Products",
        ogDescription:
          "Eco-friendly manufacturing trends in the smart pet industry.",
        ogImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        twitterCard: "summary",
        canonical:
          "https://ecopetkit.com/blog/sustainable-manufacturing-pet-products",
        noIndex: false,
        noFollow: false,
        structuredData: {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Sustainable Manufacturing in Pet Products",
        },
      },

      status: "published",
    },
  ],

  // German translations
  de: [
    {
      id: "b1-de",
      wpId: undefined,
      language: "de",
      slug: "aufstieg-der-ki-in-der-tierpflege",
      title: "Der Aufstieg der KI in der Tierpflege",
      excerpt:
        "Wie künstliche Intelligenz das Gesundheitsmonitoring von Haustieren mit prädiktiver Analytik und Verhaltenserfassung verändert.",
      content: "<p>Vollständiger Inhalt folgt.</p>",
      contentBlocks: [
        { id: "b1-de-1", type: "heading", level: 2, text: "Übersicht" },
        {
          id: "b1-de-2",
          type: "paragraph",
          text: "KI verbessert die prädiktiven Warnungen und Verhaltensüberwachung für Haustiere. Dieser Artikel erläutert die Anwendungsfälle.",
        },
      ],
      category: [
        { id: "cat-technology", slug: "technology", name: "Technology" },
      ],
      tags: ["KI", "Tierpflege", "IoT"],
      featuredImage:
        "https://images.unsplash.com/photo-1583511655936-526d1e7b2d6c",
      featuredImageAlt: "Hund mit smartem Halsband",
      relatedProducts: [
        { slug: "smart-feeder-2000", title: "Smart Feeder 2000" },
      ],
      isFeatured: true,
      author: { name: "EcoPetKit Team", slug: "ecopetkit-team" },
      publishedAt: "2024-10-02T00:00:00.000Z",
      readingTime: 6,
      seo: {
        metaTitle: "KI in der Tierpflege | EcoPetKit",
        metaDescription:
          "Erfahren Sie, wie KI-gestützte Lösungen die Gesundheitsüberwachung für Haustiere verändern.",
        ogImage: "https://images.unsplash.com/photo-1583511655936-526d1e7b2d6c",
        canonical:
          "https://ecopetkit.com/de/blog/aufstieg-der-ki-in-der-tierpflege",
        noIndex: false,
        noFollow: false,
      },
      status: "published",
    },
    {
      id: "b2-de",
      language: "de",
      slug: "nachhaltige-fertigung-haustierprodukte",
      title: "Nachhaltige Fertigung in Haustierprodukten",
      excerpt:
        "Wie EcoPetKit recycelte Materialien und umweltfreundliche Prozesse in der OEM-Fertigung verwendet.",
      content: "<p>Vollständiger Inhalt folgt.</p>",
      category: [{ id: "cat-industry", slug: "industry", name: "Industry" }],
      tags: ["Nachhaltigkeit", "Fertigung", "OEM"],
      featuredImage:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      author: { name: "EcoPetKit Team", slug: "ecopetkit-team" },
      publishedAt: "2024-09-28T00:00:00.000Z",
      readingTime: 5,
      seo: {
        metaTitle: "Nachhaltige Fertigung für Haustierprodukte",
        metaDescription:
          "Erfahren Sie mehr über nachhaltige OEM-Fertigung für umweltfreundliche Haustierprodukte.",
        canonical:
          "https://ecopetkit.com/de/blog/nachhaltige-fertigung-haustierprodukte",
        noIndex: false,
        noFollow: false,
      },
      status: "published",
    },
  ],

  // Spanish
  es: [
    {
      id: "b1-es",
      language: "es",
      wpId: undefined,
      slug: "el-auge-de-la-ia-en-el-cuidado-de-mascotas",
      title: "El auge de la IA en el cuidado de mascotas",
      excerpt:
        "Cómo la inteligencia artificial está transformando el monitoreo de salud con analítica predictiva y seguimiento de comportamiento.",
      content: "<p>Contenido completo pronto.</p>",
      category: [
        { id: "cat-technology", slug: "technology", name: "Technology" },
      ],
      tags: ["IA", "Cuidado de mascotas", "IoT"],
      featuredImage:
        "https://images.unsplash.com/photo-1583511655936-526d1e7b2d6c",
      author: { name: "EcoPetKit Team" },
      publishedAt: "2024-10-02T00:00:00.000Z",
      readingTime: 6,
      seo: {
        metaTitle: "IA en el cuidado de mascotas | EcoPetKit",
        metaDescription:
          "Descubra cómo las soluciones impulsadas por IA están cambiando el monitoreo de salud de mascotas.",
        canonical:
          "https://ecopetkit.com/es/blog/el-auge-de-la-ia-en-el-cuidado-de-mascotas",
        noIndex: false,
        noFollow: false,
      },
      status: "published",
    },
    {
      id: "b2-es",
      language: "es",
      slug: "fabricacion-sostenible-productos-mascotas",
      title: "Fabricación sostenible de productos para mascotas",
      excerpt:
        "Cómo EcoPetKit adopta materiales reciclados y procesos eco-amigables.",
      content: "<p>Contenido completo pronto.</p>",
      category: [{ id: "cat-industry", slug: "industry", name: "Industry" }],
      tags: ["Sostenibilidad", "Fabricación", "OEM"],
      featuredImage:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      author: { name: "EcoPetKit Team" },
      publishedAt: "2024-09-28T00:00:00.000Z",
      readingTime: 5,
      seo: {
        metaTitle: "Fabricación sostenible para productos de mascotas",
        metaDescription:
          "Aprende cómo la fabricación sostenible mejora los productos eco-amigables para mascotas.",
        canonical:
          "https://ecopetkit.com/es/blog/fabricacion-sostenible-productos-mascotas",
        noIndex: false,
        noFollow: false,
      },
      status: "published",
    },
  ],

  // French
  fr: [
    {
      id: "b1-fr",
      language: "fr",
      slug: "essor-de-lia-dans-les-soins-pour-animaux",
      title: "L'essor de l'IA dans le soin des animaux",
      excerpt:
        "Comment l'intelligence artificielle transforme le suivi de la santé des animaux de compagnie.",
      content: "<p>Contenu complet à venir.</p>",
      category: [
        { id: "cat-technology", slug: "technology", name: "Technology" },
      ],
      tags: ["IA", "Soin des animaux", "IoT"],
      featuredImage:
        "https://images.unsplash.com/photo-1583511655936-526d1e7b2d6c",
      author: { name: "EcoPetKit Team" },
      publishedAt: "2024-10-02T00:00:00.000Z",
      readingTime: 6,
      seo: {
        metaTitle: "IA dans le soin des animaux | EcoPetKit",
        metaDescription:
          "Découvrez comment les solutions IA transforment le suivi de la santé animale.",
        canonical:
          "https://ecopetkit.com/fr/blog/essor-de-lia-dans-les-soins-pour-animaux",
        noIndex: false,
        noFollow: false,
      },
      status: "published",
    },

    {
      id: "b2-fr",
      language: "fr",
      slug: "fabrication-durable-produits-pour-animaux",
      title: "Fabrication durable dans les produits pour animaux",
      excerpt:
        "Comment EcoPetKit utilise des matériaux recyclés et des processus respectueux de l'environnement.",
      content: "<p>Contenu complet à venir.</p>",
      category: [{ id: "cat-industry", slug: "industry", name: "Industry" }],
      tags: ["Durabilité", "Fabrication", "OEM"],
      featuredImage:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      author: { name: "EcoPetKit Team" },
      publishedAt: "2024-09-28T00:00:00.000Z",
      readingTime: 5,
      seo: {
        metaTitle: "Fabrication durable pour produits animaux",
        metaDescription:
          "Apprenez comment la fabrication durable améliore les produits éco-responsables pour animaux.",
        canonical:
          "https://ecopetkit.com/fr/blog/fabrication-durable-produits-pour-animaux",
        noIndex: false,
        noFollow: false,
      },
      status: "published",
    },
  ],
};
