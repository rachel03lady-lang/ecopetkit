import { Language, ProductsPageContent, Product } from "@/types/types";

export const PRODUCTS_PAGE_CONTENT: Record<Language, ProductsPageContent> = {
  en: {
    seo: {
      title: "Smart Pet Products Manufacturer | EcoPetKit",
      description:
        "OEM & ODM smart pet products including feeders, litter boxes, pet cameras, and smart health devices.",
      keywords: [
        "smart pet products manufacturer",
        "OEM pet products",
        "ODM pet devices",
        "smart pet feeder",
        "smart litter box",
      ],
    },

    h1: "Products",

    searchPlaceholder: "Search products...",
    categoriesLabel: "Categories:",
    productDetailsLabel: "Product Details",
  },

  de: {
    seo: {
      title: "Hersteller intelligenter Haustierprodukte | EcoPetKit",
      description: "OEM- und ODM-Hersteller für intelligente Haustierprodukte.",
      keywords: ["OEM Haustierprodukte", "Intelligente Haustiergeräte"],
    },

    h1: "Produkte",

    searchPlaceholder: "Produkte suchen...",
    categoriesLabel: "Kategorien:",
    productDetailsLabel: "Produktdetails",
  },

  fr: {
    seo: {
      title: "Fabricant de produits intelligents pour animaux | EcoPetKit",
      description:
        "Fabricant OEM et ODM de produits intelligents pour animaux.",
      keywords: ["produits animaux OEM", "fabricant animaux intelligents"],
    },

    h1: "Produits",

    searchPlaceholder: "Rechercher des produits...",
    categoriesLabel: "Catégories:",
    productDetailsLabel: "Détails du produit",
  },

  es: {
    seo: {
      title: "Fabricante de productos inteligentes para mascotas | EcoPetKit",
      description:
        "Fabricante OEM y ODM de productos inteligentes para mascotas.",
      keywords: ["productos mascotas OEM", "fabricante mascotas inteligentes"],
    },

    h1: "Productos",

    searchPlaceholder: "Buscar productos...",
    categoriesLabel: "Categorías:",
    productDetailsLabel: "Detalles del producto",
  },
};

export const PRODUCTS_DATA: Record<Language, Product[]> = {
  en: [
    {
      id: "f1",
      slug: "EcoFeed-Pro-X1",
      name: "EcoFeed Pro X1",
      relatedProductSlugs: [
        "KittenLitter-Box-S2", // example slugs — must match other product.slug values
        "EcoFeed-Pro-X1",
      ],
      video: {
        heading: "Product Overview Video",
        youtubeId: "dQw4w9WgXcQ", // only the ID, not full URL
        description: "See how EcoFeed Pro X1 works in real-world usage. This is the sample video of product description and usage. Follow the video to know more about the product.",
      },
      category: "Smart Feeders",
      tagline: "Precision Auto-Feeding Solution",
      isHot: true,
      image: "/images/products/ecofeed-x1-main.jpg",
      gallery: [
        "/images/products/ecofeed-x1-view1.jpg",
        "/images/products/ecofeed-x1-view2.jpg",
        "/images/products/ecofeed-x1-view3.jpg",
      ],

      certifications: ["CE", "FCC", "RoHS", "ISO9001"],

      /* ===== Buy Box ===== */
      buyBox: {
        items: [
          { label: "Model No.", value: "F1-2025" },
          { label: "MOQ", value: "500 Units" },
          { label: "Lead Time", value: "25–30 Days" },
          { label: "Warranty", value: "12 Months" },
        ],
        highlights: [
          "1080p Camera",
          "Dual Power Supply",
          "Anti-Jam Rotor",
          "Freshness Seal",
        ],
        buyBoxCTA: {
          buyCTA: {
            label: "Request Quote",
            href: "/contact",
          },
          downloadCTA: {
            label: "Download Spec Sheet",
            path: "/docs/specs/document.txt",
          },
        },
        compliance: [
          "Factory Direct Pricing",
          "Global Shipping",
          "OEM/ODM Support",
        ],
      },

      /* ===== Feature bar ===== */
      features: [
        "Dual-Spectrum IR Scanning",
        "Anti-Jam Smart Motor",
        "App-Controlled Feeding",
        "Food Freshness Protection",
      ],

      /* ===== Marketing sections ===== */
      marketingSections: [
        {
          title: "Advanced Feeding Intelligence",
          content:
            "Ensures precise portion control with real-time monitoring using intelligent sensors and app connectivity.",
          image: "/images/products/ecofeed-x1-view1.jpg",
          imageAlign: "right",
        },
        {
          title: "Safe for Daily Use",
          content:
            "Manufactured using food-grade materials and certified electronic components for continuous operation.",
          image: "/images/products/ecofeed-x1-view3.jpg",
          imageAlign: "left",
        },
      ],

      whatsIncluded: {
        title: "Whats Included",
        image: {
          url: "/images/package/package.jpg",
          alt: "package of the product",
          tagline: "Packaging Illustration",
        },

        whatsInTheBox: [
          "Smart Feeder Unit",
          "Stainless Steel Bowl",
          "Power Adapter",
          "User Manual",
        ],
      },
      specs: {
        sectionHeading: "Technical Specifications",
        items: [
          { label: "Capacity", value: "4L / 27 Cups" },
          { label: "Food Size", value: "2–20mm" },
          { label: "Power", value: "12V / 2A" },
          { label: "Material", value: "ABS + PC (Food Grade)" },
        ],
      },

      /* ===== OEM Customization ===== */
      oemCustomization: {
        heading: "OEM Customization",
        subheading:
          "Make it yours. Comprehensive branding options for distributors.",
        availableOptionsLabel: "Available Customization Options",
        cards: [
          {
            icon: "🎨",
            title: "Color & Finish",
            description:
              "Custom Pantone colors with matte or glossy surface finishes.",
          },
          {
            icon: "⚡",
            title: "Logo Branding",
            description:
              "Silk screen printing, laser engraving, or mold-in logo.",
          },
          {
            icon: "📦",
            title: "Packaging",
            description:
              "Custom retail boxes, manuals, and multilingual packaging.",
          },
          {
            icon: "📱",
            title: "App & Software",
            description:
              "Custom app skins, firmware tuning, and API integration.",
          },
        ],
        customizationOptions: ["color", "size", "Depends on pet age"],
      },

      faq: [
        {
          question: "What is the MOQ for private label orders?",
          answer: "The standard MOQ is 500 units for logo customization.",
        },
        {
          question: "Is the product safe for pets?",
          answer:
            "Yes, all materials are FDA food-grade certified and safety-tested.",
        },
      ],

      seo: {
        title: "EcoFeed Pro X1 – OEM Smart Pet Feeder Manufacturer | EcoPetKit",
        description:
          "EcoFeed Pro X1 is a professional OEM smart pet feeder with camera, anti-jam motor, and private labeling support.",
        keywords: [
          "smart pet feeder manufacturer",
          "OEM pet feeder",
          "automatic pet feeder OEM",
          "private label pet feeder",
        ],
      },
      bottom_CTA: {
        heading: "Ready to launch this product?",
        description:
          "Get a competitive quote within 24 hours. We support low MOQ for trial orders.",
        buttonLabel: "Inquire Now",
        buttonHref: "/contact",
      },
    },
    {
      id: "k2",
      slug: "KittenLitter-Box-S2",
      name: "KittenLitter Box S2",
      relatedProductSlugs: [
        "KittenLitter-Box-S2", // example slugs — must match other product.slug values
        "EcoFeed-Pro-X1",
      ],
      video: {
        heading: "Product Overview Video",
        youtubeId: "dQw4w9WgXcQ", // only the ID, not full URL
        description: "See how KittenLitter Box S2 works in real-world usage.",
      },
      category: "Smart Litter Boxes",
      tagline: "Odor-Free, Self-Cleaning Litter Box",
      isHot: true,
      image: "/images/products/kitten-littre-main.jpg",
      gallery: [
        "/images/products/kitten-littre-view1.jpg",
        "/images/products/kitten-littre-view2.jpg",
        "/images/products/kitten-littre-view3.jpg",
      ],
      certifications: ["CE", "FCC", "RoHS"],
      buyBox: {
        items: [
          { label: "Model No.", value: "K2-2025" },
          { label: "MOQ", value: "300 Units" },
          { label: "Lead Time", value: "30–35 Days" },
          { label: "Warranty", value: "24 Months" },
        ],
        highlights: [
          "Odor-Free System",
          "One-Click Cleaning",
          "Safety Sensors",
          "Spacious Interior",
        ],
        buyBoxCTA: {
          buyCTA: {
            label: "Request Quote",
            href: "/contact",
          },
          downloadCTA: {
            label: "Download Spec Sheet",
            path: "/docs/specs/document.txt",
          },
        },
        compliance: [
          "Factory Direct Pricing",
          "Global Shipping",
          "OEM/ODM Support",
        ],
      },
      features: [
        "Advanced odor control with activated carbon filter.",
        "Automated scooping mechanism for hands-free cleaning.",
        "Multi-cat friendly with high-precision weight sensors.",
        "Quiet operation for a peaceful home environment.",
      ],
      marketingSections: [
        {
          title: "Revolutionary Odor Control",
          content:
            "Our advanced system neutralizes odors completely, ensuring your home stays fresh and clean.",
          image: "/images/products/kitten-littre-info1.jpg",
          imageAlign: "right",
        },
        {
          title: "Effortless Maintenance",
          content:
            "With the one-click self-cleaning feature, maintaining the litter box has never been easier.",
          image: "/images/products/kitten-littre-info2.jpg",
          imageAlign: "left",
        },
      ],
      whatsIncluded: {
        title: "Whats Included",
        image: {
          url: "/images/package/package.jpg",
          alt: "package of the product",
          tagline: "Packaging Illustration",
        },

        whatsInTheBox: [
          "Smart Feeder Unit",
          "Stainless Steel Bowl",
          "Power Adapter",
          "User Manual",
        ],
      },
      specs: {
        sectionHeading: "Technical Specifications",
        items: [
          { label: "Capacity", value: "4L / 27 Cups" },
          { label: "Food Size", value: "2–20mm" },
          { label: "Power", value: "12V / 2A" },
          { label: "Material", value: "ABS + PC (Food Grade)" },
        ],
      },
      oemCustomization: {
        heading: "OEM Customization",
        subheading:
          "Make it yours. Comprehensive branding options for distributors.",
        availableOptionsLabel: "Available Customization Options",
        cards: [
          {
            icon: "🎨",
            title: "Color & Finish",
            description:
              "Custom Pantone colors with matte or glossy surface finishes.",
          },
          {
            icon: "⚡",
            title: "Logo Branding",
            description:
              "Silk screen printing, laser engraving, or mold-in logo.",
          },
          {
            icon: "📦",
            title: "Packaging",
            description:
              "Custom retail boxes, manuals, and multilingual packaging.",
          },
          {
            icon: "📱",
            title: "App & Software",
            description:
              "Custom app skins, firmware tuning, and API integration.",
          },
        ],
        customizationOptions: ["color", "size", "Depends on pet age"],
      },
      faq: [
        {
          question: "How often do I need to change the waste bag?",
          answer:
            "For a single cat, a waste bag typically lasts for about 15 days.",
        },
        {
          question: "Is it safe for my kitten?",
          answer:
            "Yes, the litter box is equipped with gravity and infrared sensors to ensure your cat's safety during operation.",
        },
      ],
      seo: {
        title: "KittenLitter Box S2 - Self-Cleaning Litter Box | EcoPetKit",
        description:
          "The KittenLitter Box S2 is a smart, self-cleaning litter box that offers superior odor control. Perfect for modern cat owners. OEM available.",
        keywords: [
          "self-cleaning litter box",
          "smart litter box",
          "automatic cat litter box",
          "odor-free litter box",
        ],
      },
      bottom_CTA: {
        heading: "Ready to launch this product?",
        description:
          "Get a competitive quote within 24 hours. We support low MOQ for trial orders.",
        buttonLabel: "Inquire Now",
        buttonHref: "/contact",
      },
    },
  ],
  de: [
    {
      id: "f1",
      slug: "EcoFeed-Pro-X1",
      name: "EcoFeed Pro X1",
      relatedProductSlugs: [
        "KittenLitter-Box-S2", // example slugs — must match other product.slug values
        "Azure-PDT-Infrared-Health",
      ],
      video: {
        heading: "Product Overview Video",
        youtubeId: "dQw4w9WgXcQ", // only the ID, not full URL
        description: "See how EcoFeed Pro X1 works in real-world usage.",
      },
      category: "Smart Feeders",
      tagline: "Precision Auto-Feeding Solution",
      isHot: true,
      image: "/images/products/ecoFeed-pro-x1-main.jpg",
      gallery: [
        "/images/products/ecoFeed-pro-x1-1.jpg",
        "/images/products/ecoFeed-pro-x1-2.jpg",
        "/images/products/ecoFeed-pro-x1-3.jpg",
      ],

      certifications: ["CE", "FCC", "RoHS", "ISO9001"],

      /* ===== Buy Box ===== */
      buyBox: {
        items: [
          { label: "Model No.", value: "F1-2025" },
          { label: "MOQ", value: "500 Units" },
          { label: "Lead Time", value: "25–30 Days" },
          { label: "Warranty", value: "12 Months" },
        ],
        highlights: [
          "1080p Camera",
          "Dual Power Supply",
          "Anti-Jam Rotor",
          "Freshness Seal",
        ],
        buyBoxCTA: {
          buyCTA: {
            label: "Request Quote",
            href: "/contact",
          },
          downloadCTA: {
            label: "Download Spec Sheet",
            path: "/docs/specs/document.txt",
          },
        },
        compliance: [
          "Factory Direct Pricing",
          "Global Shipping",
          "OEM/ODM Support",
        ],
      },

      /* ===== Feature bar ===== */
      features: [
        "Dual-Spectrum IR Scanning",
        "Anti-Jam Smart Motor",
        "App-Controlled Feeding",
        "Food Freshness Protection",
      ],

      /* ===== Marketing sections ===== */
      marketingSections: [
        {
          title: "Advanced Feeding Intelligence",
          content:
            "Ensures precise portion control with real-time monitoring using intelligent sensors and app connectivity.",
          image: "/images/products/ecoFeed-pro-x1-section-1.jpg",
          imageAlign: "right",
        },
        {
          title: "Safe for Daily Use",
          content:
            "Manufactured using food-grade materials and certified electronic components for continuous operation.",
          image: "/images/products/ecoFeed-pro-x1-section-2.jpg",
          imageAlign: "left",
        },
      ],

      whatsIncluded: {
        title: "Whats Included",
        image: {
          url: "/images/package/package.jpg",
          alt: "package of the product",
          tagline: "Packaging Illustration",
        },

        whatsInTheBox: [
          "Smart Feeder Unit",
          "Stainless Steel Bowl",
          "Power Adapter",
          "User Manual",
        ],
      },

      specs: {
        sectionHeading: "Technical Specifications",
        items: [
          { label: "Capacity", value: "4L / 27 Cups" },
          { label: "Food Size", value: "2–20mm" },
          { label: "Power", value: "12V / 2A" },
          { label: "Material", value: "ABS + PC (Food Grade)" },
        ],
      },

      /* ===== OEM Customization ===== */
      oemCustomization: {
        heading: "OEM Customization",
        subheading:
          "Make it yours. Comprehensive branding options for distributors.",
        availableOptionsLabel: "Available Customization Options",
        cards: [
          {
            icon: "🎨",
            title: "Color & Finish",
            description:
              "Custom Pantone colors with matte or glossy surface finishes.",
          },
          {
            icon: "⚡",
            title: "Logo Branding",
            description:
              "Silk screen printing, laser engraving, or mold-in logo.",
          },
          {
            icon: "📦",
            title: "Packaging",
            description:
              "Custom retail boxes, manuals, and multilingual packaging.",
          },
          {
            icon: "📱",
            title: "App & Software",
            description:
              "Custom app skins, firmware tuning, and API integration.",
          },
        ],
        customizationOptions: ["color", "size", "Depends on pet age"],
      },

      faq: [
        {
          question: "What is the MOQ for private label orders?",
          answer: "The standard MOQ is 500 units for logo customization.",
        },
        {
          question: "Is the product safe for pets?",
          answer:
            "Yes, all materials are FDA food-grade certified and safety-tested.",
        },
      ],

      seo: {
        title: "EcoFeed Pro X1 – OEM Smart Pet Feeder Manufacturer | EcoPetKit",
        description:
          "EcoFeed Pro X1 is a professional OEM smart pet feeder with camera, anti-jam motor, and private labeling support.",
        keywords: [
          "smart pet feeder manufacturer",
          "OEM pet feeder",
          "automatic pet feeder OEM",
          "private label pet feeder",
        ],
      },
      bottom_CTA: {
        heading: "Ready to launch this product?",
        description:
          "Get a competitive quote within 24 hours. We support low MOQ for trial orders.",
        buttonLabel: "Inquire Now",
        buttonHref: "/contact",
      },
    },
    {
      id: "k2",
      slug: "KittenLitter-Box-S2",
      name: "KittenLitter Box S2",
      relatedProductSlugs: [
        "KittenLitter-Box-S2", // example slugs — must match other product.slug values
        "Azure-PDT-Infrared-Health",
      ],
      video: {
        heading: "Product Overview Video",
        youtubeId: "dQw4w9WgXcQ", // only the ID, not full URL
        description: "See how EcoFeed Pro X1 works in real-world usage.",
      },
      category: "Smart Litter Boxes",
      tagline: "Odor-Free, Self-Cleaning Litter Box",
      isHot: true,
      image: "/images/products/kitten-littre-main.jpg",
      gallery: [
        "/images/products/kitten-littre-view1.jpg",
        "/images/products/kitten-littre-view2.jpg",
        "/images/products/kitten-littre-view3.jpg",
      ],
      certifications: ["CE", "FCC", "RoHS"],
      buyBox: {
        items: [
          { label: "Model No.", value: "K2-2025" },
          { label: "MOQ", value: "300 Units" },
          { label: "Lead Time", value: "30–35 Days" },
          { label: "Warranty", value: "24 Months" },
        ],
        highlights: [
          "Odor-Free System",
          "One-Click Cleaning",
          "Safety Sensors",
          "Spacious Interior",
        ],
        buyBoxCTA: {
          buyCTA: {
            label: "Request Quote",
            href: "/contact",
          },
          downloadCTA: {
            label: "Download Spec Sheet",
            path: "/docs/specs/document.txt",
          },
        },
        compliance: [
          "Factory Direct Pricing",
          "Global Shipping",
          "OEM/ODM Support",
        ],
      },
      features: [
        "Advanced odor control with activated carbon filter.",
        "Automated scooping mechanism for hands-free cleaning.",
        "Multi-cat friendly with high-precision weight sensors.",
        "Quiet operation for a peaceful home environment.",
      ],
      marketingSections: [
        {
          title: "Revolutionary Odor Control",
          content:
            "Our advanced system neutralizes odors completely, ensuring your home stays fresh and clean.",
          image: "/images/products/kitten-littre-info1.jpg",
          imageAlign: "right",
        },
        {
          title: "Effortless Maintenance",
          content:
            "With the one-click self-cleaning feature, maintaining the litter box has never been easier.",
          image: "/images/products/kitten-littre-info2.jpg",
          imageAlign: "left",
        },
      ],
      whatsIncluded: {
        title: "Whats Included",
        image: {
          url: "/images/package/package.jpg",
          alt: "package of the product",
          tagline: "Packaging Illustration",
        },

        whatsInTheBox: [
          "Smart Feeder Unit",
          "Stainless Steel Bowl",
          "Power Adapter",
          "User Manual",
        ],
      },
      specs: {
        sectionHeading: "Technical Specifications",
        items: [
          { label: "Capacity", value: "4L / 27 Cups" },
          { label: "Food Size", value: "2–20mm" },
          { label: "Power", value: "12V / 2A" },
          { label: "Material", value: "ABS + PC (Food Grade)" },
        ],
      },
      oemCustomization: {
        heading: "OEM Customization",
        subheading:
          "Make it yours. Comprehensive branding options for distributors.",
        availableOptionsLabel: "Available Customization Options",
        cards: [
          {
            icon: "🎨",
            title: "Color & Finish",
            description:
              "Custom Pantone colors with matte or glossy surface finishes.",
          },
          {
            icon: "⚡",
            title: "Logo Branding",
            description:
              "Silk screen printing, laser engraving, or mold-in logo.",
          },
          {
            icon: "📦",
            title: "Packaging",
            description:
              "Custom retail boxes, manuals, and multilingual packaging.",
          },
          {
            icon: "📱",
            title: "App & Software",
            description:
              "Custom app skins, firmware tuning, and API integration.",
          },
        ],
        customizationOptions: ["color", "size", "Depends on pet age"],
      },
      faq: [
        {
          question: "How often do I need to change the waste bag?",
          answer:
            "For a single cat, a waste bag typically lasts for about 15 days.",
        },
        {
          question: "Is it safe for my kitten?",
          answer:
            "Yes, the litter box is equipped with gravity and infrared sensors to ensure your cat's safety during operation.",
        },
      ],
      seo: {
        title: "KittenLitter Box S2 - Self-Cleaning Litter Box | EcoPetKit",
        description:
          "The KittenLitter Box S2 is a smart, self-cleaning litter box that offers superior odor control. Perfect for modern cat owners. OEM available.",
        keywords: [
          "self-cleaning litter box",
          "smart litter box",
          "automatic cat litter box",
          "odor-free litter box",
        ],
      },
      bottom_CTA: {
        heading: "Ready to launch this product?",
        description:
          "Get a competitive quote within 24 hours. We support low MOQ for trial orders.",
        buttonLabel: "Inquire Now",
        buttonHref: "/contact",
      },
    },
  ],
  fr: [
    {
      id: "f1",
      slug: "EcoFeed-Pro-X1",
      name: "EcoFeed Pro X1",
      relatedProductSlugs: [
        "KittenLitter-Box-S2", // example slugs — must match other product.slug values
        "Azure-PDT-Infrared-Health",
      ],
      video: {
        heading: "Product Overview Video",
        youtubeId: "dQw4w9WgXcQ", // only the ID, not full URL
        description: "See how EcoFeed Pro X1 works in real-world usage.",
      },
      category: "Smart Feeders",
      tagline: "Precision Auto-Feeding Solution",
      isHot: true,
      image: "/images/products/ecoFeed-pro-x1-main.jpg",
      gallery: [
        "/images/products/ecoFeed-pro-x1-1.jpg",
        "/images/products/ecoFeed-pro-x1-2.jpg",
        "/images/products/ecoFeed-pro-x1-3.jpg",
      ],

      certifications: ["CE", "FCC", "RoHS", "ISO9001"],

      /* ===== Buy Box ===== */
      buyBox: {
        items: [
          { label: "Model No.", value: "F1-2025" },
          { label: "MOQ", value: "500 Units" },
          { label: "Lead Time", value: "25–30 Days" },
          { label: "Warranty", value: "12 Months" },
        ],
        highlights: [
          "1080p Camera",
          "Dual Power Supply",
          "Anti-Jam Rotor",
          "Freshness Seal",
        ],
        buyBoxCTA: {
          buyCTA: {
            label: "Request Quote",
            href: "/contact",
          },
          downloadCTA: {
            label: "Download Spec Sheet",
            path: "/docs/specs/document.txt",
          },
        },
        compliance: [
          "Factory Direct Pricing",
          "Global Shipping",
          "OEM/ODM Support",
        ],
      },

      /* ===== Feature bar ===== */
      features: [
        "Dual-Spectrum IR Scanning",
        "Anti-Jam Smart Motor",
        "App-Controlled Feeding",
        "Food Freshness Protection",
      ],

      /* ===== Marketing sections ===== */
      marketingSections: [
        {
          title: "Advanced Feeding Intelligence",
          content:
            "Ensures precise portion control with real-time monitoring using intelligent sensors and app connectivity.",
          image: "/images/products/ecoFeed-pro-x1-section-1.jpg",
          imageAlign: "right",
        },
        {
          title: "Safe for Daily Use",
          content:
            "Manufactured using food-grade materials and certified electronic components for continuous operation.",
          image: "/images/products/ecoFeed-pro-x1-section-2.jpg",
          imageAlign: "left",
        },
      ],

      whatsIncluded: {
        title: "Whats Included",
        image: {
          url: "/images/package/package.jpg",
          alt: "package of the product",
          tagline: "Packaging Illustration",
        },

        whatsInTheBox: [
          "Smart Feeder Unit",
          "Stainless Steel Bowl",
          "Power Adapter",
          "User Manual",
        ],
      },

      specs: {
        sectionHeading: "Technical Specifications",
        items: [
          { label: "Capacity", value: "4L / 27 Cups" },
          { label: "Food Size", value: "2–20mm" },
          { label: "Power", value: "12V / 2A" },
          { label: "Material", value: "ABS + PC (Food Grade)" },
        ],
      },

      /* ===== OEM Customization ===== */
      oemCustomization: {
        heading: "OEM Customization",
        subheading:
          "Make it yours. Comprehensive branding options for distributors.",
        availableOptionsLabel: "Available Customization Options",
        cards: [
          {
            icon: "🎨",
            title: "Color & Finish",
            description:
              "Custom Pantone colors with matte or glossy surface finishes.",
          },
          {
            icon: "⚡",
            title: "Logo Branding",
            description:
              "Silk screen printing, laser engraving, or mold-in logo.",
          },
          {
            icon: "📦",
            title: "Packaging",
            description:
              "Custom retail boxes, manuals, and multilingual packaging.",
          },
          {
            icon: "📱",
            title: "App & Software",
            description:
              "Custom app skins, firmware tuning, and API integration.",
          },
        ],
        customizationOptions: ["color", "size", "Depends on pet age"],
      },

      faq: [
        {
          question: "What is the MOQ for private label orders?",
          answer: "The standard MOQ is 500 units for logo customization.",
        },
        {
          question: "Is the product safe for pets?",
          answer:
            "Yes, all materials are FDA food-grade certified and safety-tested.",
        },
      ],

      seo: {
        title: "EcoFeed Pro X1 – OEM Smart Pet Feeder Manufacturer | EcoPetKit",
        description:
          "EcoFeed Pro X1 is a professional OEM smart pet feeder with camera, anti-jam motor, and private labeling support.",
        keywords: [
          "smart pet feeder manufacturer",
          "OEM pet feeder",
          "automatic pet feeder OEM",
          "private label pet feeder",
        ],
      },
      bottom_CTA: {
        heading: "Ready to launch this product?",
        description:
          "Get a competitive quote within 24 hours. We support low MOQ for trial orders.",
        buttonLabel: "Inquire Now",
        buttonHref: "/contact",
      },
    },
    {
      id: "k2",
      slug: "KittenLitter-Box-S2",
      name: "KittenLitter Box S2",
      relatedProductSlugs: [
        "KittenLitter-Box-S2", // example slugs — must match other product.slug values
        "Azure-PDT-Infrared-Health",
      ],
      video: {
        heading: "Product Overview Video",
        youtubeId: "dQw4w9WgXcQ", // only the ID, not full URL
        description: "See how EcoFeed Pro X1 works in real-world usage.",
      },
      category: "Smart Litter Boxes",
      tagline: "Odor-Free, Self-Cleaning Litter Box",
      isHot: true,
      image: "/images/products/kitten-littre-main.jpg",
      gallery: [
        "/images/products/kitten-littre-view1.jpg",
        "/images/products/kitten-littre-view2.jpg",
        "/images/products/kitten-littre-view3.jpg",
      ],
      certifications: ["CE", "FCC", "RoHS"],
      buyBox: {
        items: [
          { label: "Model No.", value: "K2-2025" },
          { label: "MOQ", value: "300 Units" },
          { label: "Lead Time", value: "30–35 Days" },
          { label: "Warranty", value: "24 Months" },
        ],
        highlights: [
          "Odor-Free System",
          "One-Click Cleaning",
          "Safety Sensors",
          "Spacious Interior",
        ],
        buyBoxCTA: {
          buyCTA: {
            label: "Request Quote",
            href: "/contact",
          },
          downloadCTA: {
            label: "Download Spec Sheet",
            path: "/docs/specs/document.txt",
          },
        },
        compliance: [
          "Factory Direct Pricing",
          "Global Shipping",
          "OEM/ODM Support",
        ],
      },
      features: [
        "Advanced odor control with activated carbon filter.",
        "Automated scooping mechanism for hands-free cleaning.",
        "Multi-cat friendly with high-precision weight sensors.",
        "Quiet operation for a peaceful home environment.",
      ],
      marketingSections: [
        {
          title: "Revolutionary Odor Control",
          content:
            "Our advanced system neutralizes odors completely, ensuring your home stays fresh and clean.",
          image: "/images/products/kitten-littre-info1.jpg",
          imageAlign: "right",
        },
        {
          title: "Effortless Maintenance",
          content:
            "With the one-click self-cleaning feature, maintaining the litter box has never been easier.",
          image: "/images/products/kitten-littre-info2.jpg",
          imageAlign: "left",
        },
      ],
      whatsIncluded: {
        title: "Whats Included",
        image: {
          url: "/images/package/package.jpg",
          alt: "package of the product",
          tagline: "Packaging Illustration",
        },

        whatsInTheBox: [
          "Smart Feeder Unit",
          "Stainless Steel Bowl",
          "Power Adapter",
          "User Manual",
        ],
      },
      specs: {
        sectionHeading: "Technical Specifications",
        items: [
          { label: "Capacity", value: "4L / 27 Cups" },
          { label: "Food Size", value: "2–20mm" },
          { label: "Power", value: "12V / 2A" },
          { label: "Material", value: "ABS + PC (Food Grade)" },
        ],
      },
      oemCustomization: {
        heading: "OEM Customization",
        subheading:
          "Make it yours. Comprehensive branding options for distributors.",
        availableOptionsLabel: "Available Customization Options",
        cards: [
          {
            icon: "🎨",
            title: "Color & Finish",
            description:
              "Custom Pantone colors with matte or glossy surface finishes.",
          },
          {
            icon: "⚡",
            title: "Logo Branding",
            description:
              "Silk screen printing, laser engraving, or mold-in logo.",
          },
          {
            icon: "📦",
            title: "Packaging",
            description:
              "Custom retail boxes, manuals, and multilingual packaging.",
          },
          {
            icon: "📱",
            title: "App & Software",
            description:
              "Custom app skins, firmware tuning, and API integration.",
          },
        ],
        customizationOptions: ["color", "size", "Depends on pet age"],
      },
      faq: [
        {
          question: "How often do I need to change the waste bag?",
          answer:
            "For a single cat, a waste bag typically lasts for about 15 days.",
        },
        {
          question: "Is it safe for my kitten?",
          answer:
            "Yes, the litter box is equipped with gravity and infrared sensors to ensure your cat's safety during operation.",
        },
      ],
      seo: {
        title: "KittenLitter Box S2 - Self-Cleaning Litter Box | EcoPetKit",
        description:
          "The KittenLitter Box S2 is a smart, self-cleaning litter box that offers superior odor control. Perfect for modern cat owners. OEM available.",
        keywords: [
          "self-cleaning litter box",
          "smart litter box",
          "automatic cat litter box",
          "odor-free litter box",
        ],
      },
      bottom_CTA: {
        heading: "Ready to launch this product?",
        description:
          "Get a competitive quote within 24 hours. We support low MOQ for trial orders.",
        buttonLabel: "Inquire Now",
        buttonHref: "/contact",
      },
    },
  ],
  es: [
    {
      id: "f1",
      slug: "EcoFeed-Pro-X1",
      name: "EcoFeed Pro X1",
      relatedProductSlugs: [
        "KittenLitter-Box-S2", // example slugs — must match other product.slug values
        "Azure-PDT-Infrared-Health",
      ],
      video: {
        heading: "Product Overview Video",
        youtubeId: "dQw4w9WgXcQ", // only the ID, not full URL
        description: "See how EcoFeed Pro X1 works in real-world usage.",
      },
      category: "Smart Feeders",
      tagline: "Precision Auto-Feeding Solution",
      isHot: true,
      image: "/images/products/ecoFeed-pro-x1-main.jpg",
      gallery: [
        "/images/products/ecoFeed-pro-x1-1.jpg",
        "/images/products/ecoFeed-pro-x1-2.jpg",
        "/images/products/ecoFeed-pro-x1-3.jpg",
      ],

      certifications: ["CE", "FCC", "RoHS", "ISO9001"],

      /* ===== Buy Box ===== */
      buyBox: {
        items: [
          { label: "Model No.", value: "F1-2025" },
          { label: "MOQ", value: "500 Units" },
          { label: "Lead Time", value: "25–30 Days" },
          { label: "Warranty", value: "12 Months" },
        ],
        highlights: [
          "1080p Camera",
          "Dual Power Supply",
          "Anti-Jam Rotor",
          "Freshness Seal",
        ],
        buyBoxCTA: {
          buyCTA: {
            label: "Request Quote",
            href: "/contact",
          },
          downloadCTA: {
            label: "Download Spec Sheet",
            path: "/docs/specs/document.txt",
          },
        },
        compliance: [
          "Factory Direct Pricing",
          "Global Shipping",
          "OEM/ODM Support",
        ],
      },

      /* ===== Feature bar ===== */
      features: [
        "Dual-Spectrum IR Scanning",
        "Anti-Jam Smart Motor",
        "App-Controlled Feeding",
        "Food Freshness Protection",
      ],

      /* ===== Marketing sections ===== */
      marketingSections: [
        {
          title: "Advanced Feeding Intelligence",
          content:
            "Ensures precise portion control with real-time monitoring using intelligent sensors and app connectivity.",
          image: "/images/products/ecoFeed-pro-x1-section-1.jpg",
          imageAlign: "right",
        },
        {
          title: "Safe for Daily Use",
          content:
            "Manufactured using food-grade materials and certified electronic components for continuous operation.",
          image: "/images/products/ecoFeed-pro-x1-section-2.jpg",
          imageAlign: "left",
        },
      ],

      whatsIncluded: {
        title: "Whats Included",
        image: {
          url: "/images/package/package.jpg",
          alt: "package of the product",
          tagline: "Packaging Illustration",
        },

        whatsInTheBox: [
          "Smart Feeder Unit",
          "Stainless Steel Bowl",
          "Power Adapter",
          "User Manual",
        ],
      },

      specs: {
        sectionHeading: "Technical Specifications",
        items: [
          { label: "Capacity", value: "4L / 27 Cups" },
          { label: "Food Size", value: "2–20mm" },
          { label: "Power", value: "12V / 2A" },
          { label: "Material", value: "ABS + PC (Food Grade)" },
        ],
      },

      /* ===== OEM Customization ===== */
      oemCustomization: {
        heading: "OEM Customization",
        subheading:
          "Make it yours. Comprehensive branding options for distributors.",
        availableOptionsLabel: "Available Customization Options",
        cards: [
          {
            icon: "🎨",
            title: "Color & Finish",
            description:
              "Custom Pantone colors with matte or glossy surface finishes.",
          },
          {
            icon: "⚡",
            title: "Logo Branding",
            description:
              "Silk screen printing, laser engraving, or mold-in logo.",
          },
          {
            icon: "📦",
            title: "Packaging",
            description:
              "Custom retail boxes, manuals, and multilingual packaging.",
          },
          {
            icon: "📱",
            title: "App & Software",
            description:
              "Custom app skins, firmware tuning, and API integration.",
          },
        ],
        customizationOptions: ["color", "size", "Depends on pet age"],
      },

      faq: [
        {
          question: "What is the MOQ for private label orders?",
          answer: "The standard MOQ is 500 units for logo customization.",
        },
        {
          question: "Is the product safe for pets?",
          answer:
            "Yes, all materials are FDA food-grade certified and safety-tested.",
        },
      ],

      seo: {
        title: "EcoFeed Pro X1 – OEM Smart Pet Feeder Manufacturer | EcoPetKit",
        description:
          "EcoFeed Pro X1 is a professional OEM smart pet feeder with camera, anti-jam motor, and private labeling support.",
        keywords: [
          "smart pet feeder manufacturer",
          "OEM pet feeder",
          "automatic pet feeder OEM",
          "private label pet feeder",
        ],
      },
      bottom_CTA: {
        heading: "Ready to launch this product?",
        description:
          "Get a competitive quote within 24 hours. We support low MOQ for trial orders.",
        buttonLabel: "Inquire Now",
        buttonHref: "/contact",
      },
    },
    {
      id: "k2",
      slug: "KittenLitter-Box-S2",
      name: "KittenLitter Box S2",
      relatedProductSlugs: [
        "KittenLitter-Box-S2", // example slugs — must match other product.slug values
        "Azure-PDT-Infrared-Health",
      ],
      video: {
        heading: "Product Overview Video",
        youtubeId: "dQw4w9WgXcQ", // only the ID, not full URL
        description: "See how EcoFeed Pro X1 works in real-world usage.",
      },
      category: "Smart Litter Boxes",
      tagline: "Odor-Free, Self-Cleaning Litter Box",
      isHot: true,
      image: "/images/products/kitten-littre-main.jpg",
      gallery: [
        "/images/products/kitten-littre-view1.jpg",
        "/images/products/kitten-littre-view2.jpg",
        "/images/products/kitten-littre-view3.jpg",
      ],
      certifications: ["CE", "FCC", "RoHS"],
      buyBox: {
        items: [
          { label: "Model No.", value: "K2-2025" },
          { label: "MOQ", value: "300 Units" },
          { label: "Lead Time", value: "30–35 Days" },
          { label: "Warranty", value: "24 Months" },
        ],
        highlights: [
          "Odor-Free System",
          "One-Click Cleaning",
          "Safety Sensors",
          "Spacious Interior",
        ],
        buyBoxCTA: {
          buyCTA: {
            label: "Request Quote",
            href: "/contact",
          },
          downloadCTA: {
            label: "Download Spec Sheet",
            path: "/docs/specs/document.txt",
          },
        },
        compliance: [
          "Factory Direct Pricing",
          "Global Shipping",
          "OEM/ODM Support",
        ],
      },
      features: [
        "Advanced odor control with activated carbon filter.",
        "Automated scooping mechanism for hands-free cleaning.",
        "Multi-cat friendly with high-precision weight sensors.",
        "Quiet operation for a peaceful home environment.",
      ],
      marketingSections: [
        {
          title: "Revolutionary Odor Control",
          content:
            "Our advanced system neutralizes odors completely, ensuring your home stays fresh and clean.",
          image: "/images/products/kitten-littre-info1.jpg",
          imageAlign: "right",
        },
        {
          title: "Effortless Maintenance",
          content:
            "With the one-click self-cleaning feature, maintaining the litter box has never been easier.",
          image: "/images/products/kitten-littre-info2.jpg",
          imageAlign: "left",
        },
      ],
      whatsIncluded: {
        title: "Whats Included",
        image: {
          url: "/images/package/package.jpg",
          alt: "package of the product",
          tagline: "Packaging Illustration",
        },

        whatsInTheBox: [
          "Smart Feeder Unit",
          "Stainless Steel Bowl",
          "Power Adapter",
          "User Manual",
        ],
      },
      specs: {
        sectionHeading: "Technical Specifications",
        items: [
          { label: "Capacity", value: "4L / 27 Cups" },
          { label: "Food Size", value: "2–20mm" },
          { label: "Power", value: "12V / 2A" },
          { label: "Material", value: "ABS + PC (Food Grade)" },
        ],
      },
      oemCustomization: {
        heading: "OEM Customization",
        subheading:
          "Make it yours. Comprehensive branding options for distributors.",
        availableOptionsLabel: "Available Customization Options",
        cards: [
          {
            icon: "🎨",
            title: "Color & Finish",
            description:
              "Custom Pantone colors with matte or glossy surface finishes.",
          },
          {
            icon: "⚡",
            title: "Logo Branding",
            description:
              "Silk screen printing, laser engraving, or mold-in logo.",
          },
          {
            icon: "📦",
            title: "Packaging",
            description:
              "Custom retail boxes, manuals, and multilingual packaging.",
          },
          {
            icon: "📱",
            title: "App & Software",
            description:
              "Custom app skins, firmware tuning, and API integration.",
          },
        ],
        customizationOptions: ["color", "size", "Depends on pet age"],
      },
      faq: [
        {
          question: "How often do I need to change the waste bag?",
          answer:
            "For a single cat, a waste bag typically lasts for about 15 days.",
        },
        {
          question: "Is it safe for my kitten?",
          answer:
            "Yes, the litter box is equipped with gravity and infrared sensors to ensure your cat's safety during operation.",
        },
      ],
      seo: {
        title: "KittenLitter Box S2 - Self-Cleaning Litter Box | EcoPetKit",
        description:
          "The KittenLitter Box S2 is a smart, self-cleaning litter box that offers superior odor control. Perfect for modern cat owners. OEM available.",
        keywords: [
          "self-cleaning litter box",
          "smart litter box",
          "automatic cat litter box",
          "odor-free litter box",
        ],
      },
      bottom_CTA: {
        heading: "Ready to launch this product?",
        description:
          "Get a competitive quote within 24 hours. We support low MOQ for trial orders.",
        buttonLabel: "Inquire Now",
        buttonHref: "/contact",
      },
    },
  ],
};

// export const PRODUCTS_DATA: Record<Language, Product[]> = {
//   en: [
//     {
//       id: "f1",
//       slug: "EcoFeed-Pro-X1",
//       name: "EcoFeed Pro X1",
//       category: "Smart Feeders",
//       tagline: "Precision Auto-Feeding Solution",

//       image: "/images/products/ecoFeed-pro-x1-main.jpg",
//       gallery: [
//         "/images/products/ecoFeed-pro-x1-1.jpg",
//         "/images/products/ecoFeed-pro-x1-2.jpg",
//         "/images/products/ecoFeed-pro-x1-3.jpg"
//       ],
//       detailImages: [
//         "/images/products/ecoFeed-pro-x1-detail-1.jpg",
//         "/images/products/ecoFeed-pro-x1-detail-2.jpg"
//       ],

//       highlights: [
//         "1080p Camera",
//         "Dual Power Supply",
//         "Anti-Jam Rotor",
//         "Freshness Seal"
//       ],

//       features: [
//         "1080p Camera",
//         "Dual Power Supply",
//         "Anti-Jam Rotor",
//         "Freshness Seal"
//       ],

//       marketingSections: [
//         {
//           title: "Advanced Feeding Intelligence for home Appliances",
//           content:
//             "Ensures all home appliances precise portion control with real-time monitoring using intelligent sensors and app connectivity.",
//           image: "/images/products/ecoFeed-pro-x1-section-1.jpg",
//           imageAlign: "right"
//         },
//         {
//           title: "Safe for Pets in home",
//           content:
//             "Manufactured using food-grade materials and certified electronic components for daily use.",
//           image: "/images/products/ecoFeed-pro-x1-section-2.jpg",
//           imageAlign: "left"
//         }
//       ],

//       whatsInTheBox: [
//         "Smart pet box",
//         "Stainless Steel Bowl for pet",
//         "Power Adapter to charge pet box",
//         "User Manual"
//       ],

//       specs: [
//         { label: "Capacity", value: "4L / 27 Cups" },
//         { label: "Food Size", value: "2–20mm" },
//         { label: "Power", value: "12V / 2A" },
//         { label: "Material", value: "ABS+PC, Food Grade" }
//       ],

//       oemOptions: ["Logo Branding", "Custom Packaging", "App Skin", "Color Customization"],

//       faq: [
//         {
//           question: "What is the MOQ for private label in home appliances?",
//           answer: "Typically 500 units for logo customization."
//         },
//         {
//           question: "Is it safe for pets?",
//           answer: "Yes, all materials are FDA food-grade certified."
//         }
//       ],

//       certifications: ["CE", "FCC", "RoHS", "ISO9001"],

//       modelNo: "F1-2025",
//       moq: 500,
//       leadTime: "25-30 Days",
//       warranty: "12 Months",

//       seo: {
//         title: "EcoFeed Pro X1 — Precision Auto-Feeding Solution | EcoPetKit",
//         description:
//           "EcoFeed Pro X1 — professional automatic feeder with camera and anti-jam rotor. OEM & ODM options available.",
//         keywords: [
//           "eco feed pro x1",
//           "smart pet feeder",
//           "automatic pet feeder",
//           "oem smart feeder"
//         ]
//       }
//     },
//     {
//       id: "k2",
//       slug: "KittenLitter-Box-S2",
//       name: "KittenLitter Box S2",
//       category: "Smart Litter Boxes",
//       tagline: "Odor-Free, Self-Cleaning Litter Box",
//       image: "/images/products/kitten-littre-main.jpg",
//       gallery: [
//         "/images/products/kitten-littre-view1.jpg",
//         "/images/products/kitten-littre-view2.jpg",
//         "/images/products/kitten-littre-view3.jpg"
//       ],
//       detailImages: [
//         "/images/products/kitten-littre-info1.jpg",
//         "/images/products/kitten-littre-info2.jpg"
//       ],
//       highlights: [
//         "Odor-Free System",
//         "One-Click Cleaning",
//         "Safety Sensors",
//         "Spacious Interior"
//       ],
//       features: [
//         "Advanced odor control with activated carbon filter.",
//         "Automated scooping mechanism for hands-free cleaning.",
//         "Multi-cat friendly with high-precision weight sensors.",
//         "Quiet operation for a peaceful home environment."
//       ],
//       marketingSections: [
//         {
//           title: "Revolutionary Odor Control",
//           content: "Our advanced system neutralizes odors completely, ensuring your home stays fresh and clean. The combination of a sealed waste compartment and activated carbon filters traps and eliminates unpleasant smells.",
//           image: "/images/products/kitten-littre-info1.jpg",
//           imageAlign: "right"
//         },
//         {
//           title: "Effortless Maintenance",
//           content: "With the one-click self-cleaning feature, maintaining the litter box has never been easier. The device automatically sifts waste into a sealed, odor-proof bag, which you only need to replace every few weeks.",
//           image: "/images/products/kitten-littre-info2.jpg",
//           imageAlign: "left"
//         }
//       ],
//       whatsInTheBox: [
//         "KittenLitter Box S2",
//         "Waste Bags (3-month supply)",
//         "Activated Carbon Filter",
//         "Power Adapter",
//         "User Manual"
//       ],
//       specs: [
//         { label: "Waste Capacity", value: "9L" },
//         { label: "Cat Weight Range", value: "1.5kg - 8kg" },
//         { label: "Power", value: "12V / 1.5A" },
//         { label: "Material", value: "PP, ABS" }
//       ],
//       oemOptions: ["Custom Color", "Logo Printing", "Branded Packaging"],
//       faq: [
//         {
//           question: "How often do I need to change the waste bag?",
//           answer: "For a single cat, a waste bag typically lasts for about 15 days."
//         },
//         {
//           question: "Is it safe for my kitten?",
//           answer: "Yes, the litter box is equipped with gravity and infrared sensors to ensure your cat's safety during operation."
//         }
//       ],
//       certifications: ["CE", "FCC", "RoHS"],
//       modelNo: "K2-2025",
//       moq: 300,
//       leadTime: "30-35 Days",
//       warranty: "24 Months",
//       seo: {
//         title: "KittenLitter Box S2 - Self-Cleaning Litter Box | EcoPetKit",
//         description: "The KittenLitter Box S2 is a smart, self-cleaning litter box that offers superior odor control. Perfect for modern cat owners. OEM available.",
//         keywords: [
//           "self-cleaning litter box",
//           "smart litter box",
//           "automatic cat litter box",
//           "odor-free litter box"
//         ]
//       }
//     }
//   ],

//   // German (basic translations; refine later)
//   de: [
//     {
//       id: "f1",
//       slug: "EcoFeed-Pro-X1",
//       name: "EcoFeed Pro X1",
//       category: "Smart Futterspender",
//       tagline: "Präzise Auto-Fütterungslösung",

//       image: "/images/products/ecoFeed-pro-x1-main.jpg",
//       gallery: [
//         "/images/products/ecoFeed-pro-x1-1.jpg",
//         "/images/products/ecoFeed-pro-x1-2.jpg"
//       ],

//       highlights: [
//         "1080p Kamera",
//         "Duale Stromversorgung",
//         "Anti-Jam Rotor",
//         "Frische Siegel"
//       ],

//       features: [
//         "1080p Kamera",
//         "Duale Stromversorgung",
//         "Anti-Jam Rotor",
//         "Frische Siegel"
//       ],

//       marketingSections: [
//         {
//           title: "Fortschrittliche Fütterungsintelligenz",
//           content:
//             "Präzise Portionskontrolle mit Echtzeitüberwachung durch intelligente Sensoren und App-Konnektivität.",
//           image: "/images/products/ecoFeed-pro-x1-section-1.jpg",
//           imageAlign: "right"
//         },
//         {
//           title: "Sicher für Haustiere",
//           content:
//             "Hergestellt aus lebensmittelechten Materialien und geprüften Elektronikkomponenten.",
//           image: "/images/products/ecoFeed-pro-x1-section-2.jpg",
//           imageAlign: "left"
//         }
//       ],

//       whatsInTheBox: [
//         "Smart pet box",
//         "Edelstahl-Schale",
//         "Netzteil",
//         "Benutzerhandbuch"
//       ],

//       specs: [
//         { label: "Kapazität", value: "4L / 27 Cups" },
//         { label: "Futtergröße", value: "2–20mm" }
//       ],

//       oemOptions: ["Logo Branding", "Custom Packaging"],
//       faq: [
//         { question: "MOQ für Private Label?", answer: "Typischerweise 500 Einheiten." }
//       ],
//       certifications: ["CE", "FCC", "RoHS", "ISO9001"],
//       modelNo: "F1-2025",
//       moq: 500,
//       leadTime: "25-30 Tage",
//       warranty: "12 Monate",
//       seo: {
//         title: "EcoFeed Pro X1 — Präzise Auto-Fütterungslösung | EcoPetKit",
//         description: "EcoFeed Pro X1 — automatischer Futterspender mit Kamera und Anti-Jam-Funktion.",
//         keywords: ["smart futterspender", "eco feed"]
//       }
//     },
//     {
//       id: "k2",
//       slug: "KittenLitter-Box-S2",
//       name: "KittenLitter Box S2",
//       category: "Intelligente Katzentoiletten",
//       tagline: "Geruchsfreie, selbstreinigende Katzentoilette",
//       image: "/images/products/kitten-littre-main.jpg",
//       gallery: [
//         "/images/products/kitten-littre-view1.jpg",
//         "/images/products/kitten-littre-view2.jpg",
//         "/images/products/kitten-littre-view3.jpg"
//       ],
//       detailImages: [
//         "/images/products/kitten-littre-info1.jpg",
//         "/images/products/kitten-littre-info2.jpg"
//       ],
//       highlights: [
//         "Geruchsfreies System",
//         "Ein-Klick-Reinigung",
//         "Sicherheitssensoren",
//         "Geräumiger Innenraum"
//       ],
//       features: [
//         "Fortschrittliche Geruchskontrolle mit Aktivkohlefilter.",
//         "Automatischer Schaufelmechanismus für berührungslose Reinigung.",
//         "Geeignet für mehrere Katzen mit hochpräzisen Gewichtssensoren.",
//         "Leiser Betrieb für eine ruhige Wohnatmosphäre."
//       ],
//       marketingSections: [
//         {
//           title: "Revolutionäre Geruchskontrolle",
//           content: "Unser fortschrittliches System neutralisiert Gerüche vollständig und sorgt dafür, dass Ihr Zuhause frisch und sauber bleibt.",
//           image: "/images/products/kitten-littre-info1.jpg",
//           imageAlign: "right"
//         },
//         {
//           title: "Mühelose Wartung",
//           content: "Mit der Ein-Klick-Selbstreinigungsfunktion war die Wartung der Katzentoilette noch nie einfacher.",
//           image: "/images/products/kitten-littre-info2.jpg",
//           imageAlign: "left"
//         }
//       ],
//       whatsInTheBox: [
//         "KittenLitter Box S2",
//         "Abfallbeutel (3-Monats-Vorrat)",
//         "Aktivkohlefilter",
//         "Netzteil",
//         "Benutzerhandbuch"
//       ],
//       specs: [
//         { label: "Abfallkapazität", value: "9L" },
//         { label: "Katzengewichtsbereich", value: "1.5kg - 8kg" },
//         { label: "Leistung", value: "12V / 1.5A" },
//         { label: "Material", value: "PP, ABS" }
//       ],
//       oemOptions: ["Benutzerdefinierte Farbe", "Logodruck", "Markenverpackung"],
//       faq: [
//         {
//           question: "Wie oft muss ich den Abfallbeutel wechseln?",
//           answer: "Bei einer einzelnen Katze reicht ein Abfallbeutel in der Regel für etwa 15 Tage."
//         },
//         {
//           question: "Ist es sicher für mein Kätzchen?",
//           answer: "Ja, die Katzentoilette ist mit Schwerkraft- und Infrarotsensoren ausgestattet, um die Sicherheit Ihrer Katze während des Betriebs zu gewährleisten."
//         }
//       ],
//       certifications: ["CE", "FCC", "RoHS"],
//       modelNo: "K2-2025",
//       moq: 300,
//       leadTime: "30-35 Tage",
//       warranty: "24 Monate",
//       seo: {
//         title: "KittenLitter Box S2 - Selbstreinigende Katzentoilette | EcoPetKit",
//         description: "Die KittenLitter Box S2 ist eine intelligente, selbstreinigende Katzentoilette mit hervorragender Geruchskontrolle. Perfekt für moderne Katzenbesitzer. OEM verfügbar.",
//         keywords: [
//           "selbstreinigende katzentoilette",
//           "intelligente katzentoilette",
//           "automatische katzentoilette",
//           "geruchsfreie katzentoilette"
//         ]
//       }
//     }
//   ],

//   // French
//   fr: [
//     {
//       id: "f1",
//       slug: "EcoFeed-Pro-X1",
//       name: "EcoFeed Pro X1",
//       category: "Distributeurs Intelligents",
//       tagline: "Solution d'alimentation automatique de précision",

//       image: "/images/products/ecoFeed-pro-x1-main.jpg",
//       gallery: ["/images/products/ecoFeed-pro-x1-1.jpg"],
//       highlights: ["Caméra 1080p", "Alimentation double", "Rotor anti-bourrage", "Scellement fraîcheur"],
//       features: ["Caméra 1080p", "Alimentation double", "Rotor anti-bourrage", "Scellement fraîcheur"],
//       marketingSections: [
//         {
//           title: "Intelligence d'alimentation avancée",
//           content: "Contrôle précis des portions et surveillance en temps réel.",
//           image: "/images/products/ecoFeed-pro-x1-section-1.jpg",
//           imageAlign: "right"
//         }
//       ],
//       whatsInTheBox: ["Distributeur", "Bol en acier inoxydable", "Adaptateur", "Manuel"],
//       specs: [{ label: "Capacité", value: "4L / 27 Cups" }],
//       oemOptions: ["Logo", "Packaging"],
//       faq: [{ question: "MOQ?", answer: "500 unités typiques." }],
//       certifications: ["CE", "FCC", "RoHS", "ISO9001"],
//       modelNo: "F1-2025",
//       moq: 500,
//       leadTime: "25-30 Jours",
//       warranty: "12 Mois",
//       seo: {
//         title: "EcoFeed Pro X1 — Distributeur automatique | EcoPetKit",
//         description: "EcoFeed Pro X1, distributeur automatique avec caméra et options OEM.",
//         keywords: ["distributeur automatique", "pet feeder"]
//       }
//     },
//     {
//       id: "k2",
//       slug: "KittenLitter-Box-S2",
//       name: "KittenLitter Box S2",
//       category: "Litières Intelligentes",
//       tagline: "Litière autonettoyante et sans odeur",
//       image: "/images/products/kitten-littre-main.jpg",
//       gallery: [
//         "/images/products/kitten-littre-view1.jpg",
//         "/images/products/kitten-littre-view2.jpg",
//         "/images/products/kitten-littre-view3.jpg"
//       ],
//       detailImages: [
//         "/images/products/kitten-littre-info1.jpg",
//         "/images/products/kitten-littre-info2.jpg"
//       ],
//       highlights: [
//         "Système sans odeur",
//         "Nettoyage en un clic",
//         "Capteurs de sécurité",
//         "Intérieur spacieux"
//       ],
//       features: [
//         "Contrôle avancé des odeurs avec filtre à charbon actif.",
//         "Mécanisme de ramassage automatisé pour un nettoyage mains libres.",
//         "Adapté à plusieurs chats avec des capteurs de poids de haute précision.",
//         "Fonctionnement silencieux pour un environnement domestique paisible."
//       ],
//       marketingSections: [
//         {
//           title: "Contrôle révolutionnaire des odeurs",
//           content: "Notre système avancé neutralise complètement les odeurs, garantissant que votre maison reste fraîche et propre.",
//           image: "/images/products/kitten-littre-info1.jpg",
//           imageAlign: "right"
//         },
//         {
//           title: "Entretien sans effort",
//           content: "Avec la fonction d'autonettoyage en un clic, l'entretien de la litière n'a jamais été aussi simple.",
//           image: "/images/products/kitten-littre-info2.jpg",
//           imageAlign: "left"
//         }
//       ],
//       whatsInTheBox: [
//         "KittenLitter Box S2",
//         "Sacs à déchets (approvisionnement de 3 mois)",
//         "Filtre à charbon actif",
//         "Adaptateur secteur",
//         "Manuel d'utilisation"
//       ],
//       specs: [
//         { label: "Capacité des déchets", value: "9L" },
//         { label: "Plage de poids du chat", value: "1.5kg - 8kg" },
//         { label: "Alimentation", value: "12V / 1.5A" },
//         { label: "Matériau", value: "PP, ABS" }
//       ],
//       oemOptions: ["Couleur personnalisée", "Impression de logo", "Emballage de marque"],
//       faq: [
//         {
//           question: "À quelle fréquence dois-je changer le sac à déchets ?",
//           answer: "Pour un seul chat, un sac à déchets dure généralement environ 15 jours."
//         },
//         {
//           question: "Est-ce sans danger pour mon chaton ?",
//           answer: "Oui, la litière est équipée de capteurs de gravité et infrarouges pour assurer la sécurité de votre chat pendant le fonctionnement."
//         }
//       ],
//       certifications: ["CE", "FCC", "RoHS"],
//       modelNo: "K2-2025",
//       moq: 300,
//       leadTime: "30-35 Jours",
//       warranty: "24 Mois",
//       seo: {
//         title: "KittenLitter Box S2 - Litière autonettoyante | EcoPetKit",
//         description: "La KittenLitter Box S2 est une litière intelligente et autonettoyante qui offre un contrôle supérieur des odeurs. Parfait pour les propriétaires de chats modernes. OEM disponible.",
//         keywords: [
//           "litière autonettoyante",
//           "litière intelligente",
//           "litière automatique pour chat",
//           "litière sans odeur"
//         ]
//       }
//     }
//   ],

//   // Spanish
//   es: [
//     {
//       id: "f1",
//       slug: "EcoFeed-Pro-X1",
//       name: "EcoFeed Pro X1",
//       category: "Comederos Inteligentes",
//       tagline: "Solución de alimentación automática de precisión",

//       image: "/images/products/ecoFeed-pro-x1-main.jpg",
//       gallery: ["/images/products/ecoFeed-pro-x1-1.jpg"],
//       highlights: ["Cámara 1080p", "Doble alimentación", "Rotor anti atasco"],
//       features: ["Cámara 1080p", "Doble alimentación", "Rotor anti atasco"],
//       marketingSections: [
//         {
//           title: "Inteligencia avanzada de alimentación",
//           content: "Control de porciones con sensores inteligentes y conectividad de aplicación.",
//           image: "/images/products/ecoFeed-pro-x1-section-1.jpg",
//           imageAlign: "right"
//         }
//       ],
//       whatsInTheBox: ["Comedero", "Bol de acero", "Adaptador", "Manual"],
//       specs: [{ label: "Capacidad", value: "4L / 27 Cups" }],
//       oemOptions: ["Marca", "Packaging"],
//       faq: [{ question: "MOQ?", answer: "500 unidades." }],
//       certifications: ["CE", "FCC", "RoHS", "ISO9001"],
//       modelNo: "F1-2025",
//       moq: 500,
//       leadTime: "25-30 Días",
//       warranty: "12 Meses",
//       seo: {
//         title: "EcoFeed Pro X1 — Comedero automático | EcoPetKit",
//         description: "EcoFeed Pro X1 - comedero con cámara y opción de personalización OEM.",
//         keywords: ["comedero automático", "smart feeder"]
//       }
//     },
//     {
//       id: "k2",
//       slug: "KittenLitter-Box-S2",
//       name: "KittenLitter Box S2",
//       category: "Areneros Inteligentes",
//       tagline: "Arenero autolimpiable y sin olores",
//       image: "/images/products/kitten-littre-main.jpg",
//       gallery: [
//         "/images/products/kitten-littre-view1.jpg",
//         "/images/products/kitten-littre-view2.jpg",
//         "/images/products/kitten-littre-view3.jpg"
//       ],
//       detailImages: [
//         "/images/products/kitten-littre-info1.jpg",
//         "/images/products/kitten-littre-info2.jpg"
//       ],
//       highlights: [
//         "Sistema sin olores",
//         "Limpieza con un clic",
//         "Sensores de seguridad",
//         "Interior espacioso"
//       ],
//       features: [
//         "Control avanzado de olores con filtro de carbón activado.",
//         "Mecanismo de recogida automatizado para una limpieza sin manos.",
//         "Apto para varios gatos con sensores de peso de alta precisión.",
//         "Funcionamiento silencioso para un ambiente hogareño tranquilo."
//       ],
//       marketingSections: [
//         {
//           title: "Control de olores revolucionario",
//           content: "Nuestro sistema avanzado neutraliza los olores por completo, asegurando que su hogar se mantenga fresco y limpio.",
//           image: "/images/products/kitten-littre-info1.jpg",
//           imageAlign: "right"
//         },
//         {
//           title: "Mantenimiento sin esfuerzo",
//           content: "Con la función de autolimpieza con un solo clic, mantener el arenero nunca ha sido tan fácil.",
//           image: "/images/products/kitten-littre-info2.jpg",
//           imageAlign: "left"
//         }
//       ],
//       whatsInTheBox: [
//         "KittenLitter Box S2",
//         "Bolsas de basura (suministro para 3 meses)",
//         "Filtro de carbón activado",
//         "Adaptador de corriente",
//         "Manual de usuario"
//       ],
//       specs: [
//         { label: "Capacidad de residuos", value: "9L" },
//         { label: "Rango de peso del gato", value: "1.5kg - 8kg" },
//         { label: "Alimentación", value: "12V / 1.5A" },
//         { label: "Material", value: "PP, ABS" }
//       ],
//       oemOptions: ["Color personalizado", "Impresión de logotipo", "Embalaje de marca"],
//       faq: [
//         {
//           question: "¿Con qué frecuencia necesito cambiar la bolsa de basura?",
//           answer: "Para un solo gato, una bolsa de basura suele durar unos 15 días."
//         },
//         {
//           question: "¿Es seguro para mi gatito?",
//           answer: "Sí, el arenero está equipado con sensores de gravedad e infrarrojos para garantizar la seguridad de su gato durante el funcionamiento."
//         }
//       ],
//       certifications: ["CE", "FCC", "RoHS"],
//       modelNo: "K2-2025",
//       moq: 300,
//       leadTime: "30-35 Días",
//       warranty: "24 Meses",
//       seo: {
//         title: "KittenLitter Box S2 - Arenero autolimpiable | EcoPetKit",
//         description: "El KittenLitter Box S2 es un arenero inteligente y autolimpiable que ofrece un control de olores superior. Perfecto para los dueños de gatos modernos. OEM disponible.",
//         keywords: [
//           "arenero autolimpiable",
//           "arenero inteligente",
//           "arenero automático para gatos",
//           "arenero sin olores"
//         ]
//       }
//     }
//   ]
// };

// export const PRODUCTS_DATA: Record<Language, Product[]> = {
//   /* =========================
//      ENGLISH
//   ========================== */
//   en: [
//     {
//       slug: "EcoFeed-Pro-X1",
//       name: "EcoFeed Pro X1",
//       category: "Smart Feeders",
//       tagline: "Precision Auto-Feeding Solution",

//       image: "/images/products/ecofeed-x1-main.jpg",
//       gallery: [
//         "/images/products/ecofeed-x1-view1.jpg",
//         "/images/products/ecofeed-x1-view2.jpg",
//         "/images/products/ecofeed-x1-view3.jpg",
//       ],

//       highlights: [
//         "1080p Camera",
//         "Dual Power Supply",
//         "Anti-Jam Rotor",
//         "Freshness Seal",
//       ],

//       marketingSections: [
//         {
//           title: "Advanced Feeding Intelligence",
//           description:
//             "Ensures precise portion control with real-time monitoring using intelligent sensors and app connectivity.",
//           image: "/images/products/kitten-littre-info1.jpg",
//           imageAlign: "right",
//         },
//         {
//           title: "Safe for Everyday Use",
//           description:
//             "Manufactured using food-grade materials and certified electronic components for daily use.",
//           image: "/images/products/kitten-littre-info2.jpg",
//           imageAlign: "left",
//         },
//       ],

//       whatsInTheBox: [
//         "Smart Feeder Unit",
//         "Stainless Steel Bowl",
//         "Power Adapter",
//         "User Manual",
//       ],

//       specs: [
//         { label: "Capacity", value: "4L / 17 Cups" },
//         { label: "Food Size", value: "2–12mm" },
//       ],

//       oemOptions: [
//         "Logo Branding",
//         "Custom Packaging",
//         "App Skin",
//         "Color Customization",
//       ],

//       faq: [
//         {
//           question: "What is the MOQ for private label?",
//           answer: "Typically 500 units for logo customization.",
//         },
//         {
//           question: "Is it safe for pets?",
//           answer: "Yes, all materials are FDA food-grade certified.",
//         },
//       ],

//       seo: {
//         title: "EcoFeed Pro X1 Smart Pet Feeder | OEM Manufacturer",
//         description:
//           "OEM smart pet feeder with camera, dual power supply, and anti-jam technology for global brands.",
//         keywords: [
//           "smart pet feeder OEM",
//           "automatic pet feeder manufacturer",
//           "OEM pet feeder",
//         ],
//       },
//     },
//     {
//       slug: "Azure-PDT-Infrared-Health",
//       name: "Azure PDT Infrared Health",
//       category: "Home Appliances",
//       tagline: "Professional home appliances support",

//       image: "/images/products/kitten-littre-main.jpg",
//       gallery: [
//         "/images/products/kitten-littre-view1.jpg",
//         "/images/products/kitten-littre-view2.jpg",
//         "/images/products/kitten-littre-view3.jpg",
//       ],

//       highlights: [
//         "1080p rotate Camera",
//         "Dual Power",
//         "Anti-Jam Network",
//         "Freshness",
//       ],

//       marketingSections: [
//         {
//           title: "Advanced Feeding Intelligence for home Appliances",
//           description:
//             "Ensures all home appliances precise portion control with real-time monitoring using intelligent sensors and app connectivity.",
//           image: "/images/products/kitten-littre-info1.jpg",
//           imageAlign: "right",
//         },
//         {
//           title: "Safe for Pets in home",
//           description:
//             "Manufactured using food-grade materials and certified electronic components for daily use.",
//           image: "/images/products/kitten-littre-info2.jpg",
//           imageAlign: "left",
//         },
//       ],

//       whatsInTheBox: [
//         "Smart pet box",
//         "Stainless Steel Bowl for pet",
//         "Power Adapter to charge pet box",
//         "User Manual",
//       ],

//       specs: [
//         { label: "Capacity", value: "4L / 27 Cups" },
//         { label: "Food Size", value: "2–20mm" },
//       ],

//       oemOptions: [
//         "Logo Branding",
//         "Custom Packaging",
//         "App Skin",
//         "Color Customization",
//       ],

//       faq: [
//         {
//           question: "What is the MOQ for private label in home applainces?",
//           answer: "Typically 500 units for logo customization.",
//         },
//         {
//           question: "Is it safe for pets?",
//           answer: "Yes, all materials are FDA food-grade certified.",
//         },
//       ],

//       seo: {
//         title:
//           "EcoFeed Pro X1 Smart Pet Feeder | OEM Manufacturer | Home Appliances",
//         description:
//           "OEM smart pet feeder with camera, dual power supply, and anti-jam technology for global brands.",
//         keywords: [
//           "smart pet feeder OEM",
//           "automatic pet feeder manufacturer",
//           "OEM pet feeder",
//         ],
//       },
//     },
//   ],

//   /* =========================
//      GERMAN
//   ========================== */
//   de: [
//     {
//       slug: "EcoFeed-Pro-X1",
//       name: "EcoFeed Pro X1",
//       category: "Intelligente Futterautomaten",
//       tagline: "Präzise automatische Fütterungslösung",

//       image: "/images/products/ecofeed-x1-main.jpg",
//       gallery: [
//         "/images/products/ecofeed-x1-view1.jpg",
//         "/images/products/ecofeed-x1-view2.jpg",
//         "/images/products/ecofeed-x1-view3.jpg",
//       ],

//       highlights: [
//         "1080p Kamera",
//         "Doppelte Stromversorgung",
//         "Anti-Verstopfungs-Rotor",
//         "Frischeversiegelung",
//       ],

//       marketingSections: [
//         {
//           title: "Intelligente Fütterungstechnologie",
//           description:
//             "Präzise Portionskontrolle mit Echtzeitüberwachung durch intelligente Sensoren.",
//           image: "/images/products/kitten-littre-info1.jpg",
//           imageAlign: "right",
//         },
//         {
//           title: "Sicher für den täglichen Gebrauch",
//           description:
//             "Hergestellt aus lebensmittelechten Materialien und zertifizierten elektronischen Komponenten.",
//           image: "/images/products/kitten-littre-info2.jpg",
//           imageAlign: "left",
//         },
//       ],

//       whatsInTheBox: [
//         "Futterautomat",
//         "Edelstahlschale",
//         "Netzadapter",
//         "Benutzerhandbuch",
//       ],

//       specs: [
//         { label: "Kapazität", value: "4L / 17 Tassen" },
//         { label: "Futtergröße", value: "2–12mm" },
//       ],

//       oemOptions: [
//         "Logo-Branding",
//         "Individuelle Verpackung",
//         "App-Design",
//         "Farboptionen",
//       ],

//       faq: [
//         {
//           question: "Wie hoch ist die Mindestbestellmenge?",
//           answer: "In der Regel 500 Einheiten für Logo-Anpassungen.",
//         },
//         {
//           question: "Ist das Produkt sicher für Haustiere?",
//           answer:
//             "Ja, alle Materialien sind lebensmittelecht und zertifiziert.",
//         },
//       ],

//       seo: {
//         title: "EcoFeed Pro X1 Intelligenter Futterautomat | OEM Hersteller",
//         description:
//           "OEM intelligenter Futterautomat mit Kamera und Anti-Verstopfungs-Technologie.",
//         keywords: [
//           "OEM Futterautomat",
//           "intelligenter Haustier Futterspender",
//           "Haustierprodukte Hersteller",
//         ],
//       },
//     },
//     {
//       slug: "Azure-PDT-Infrared-Health",
//       name: "Azure PDT Infrared Health",
//       category: "Intelligente Futterautomaten",
//       tagline: "Präzise automatische Fütterungslösung",

//       image: "/images/products/kitten-littre-main.jpg",
//       gallery: [
//         "/images/products/kitten-littre-view1.jpg",
//         "/images/products/kitten-littre-view2.jpg",
//         "/images/products/kitten-littre-view3.jpg",
//       ],

//       highlights: [
//         "1080p Kamera",
//         "Doppelte Stromversorgung",
//         "Anti-Verstopfungs-Rotor",
//         "Frischeversiegelung",
//       ],

//       marketingSections: [
//         {
//           title: "Intelligente Fütterungstechnologie",
//           description:
//             "Präzise Portionskontrolle mit Echtzeitüberwachung durch intelligente Sensoren.",
//           image: "/images/products/kitten-littre-info1.jpg",
//           imageAlign: "right",
//         },
//         {
//           title: "Sicher für den täglichen Gebrauch",
//           description:
//             "Hergestellt aus lebensmittelechten Materialien und zertifizierten elektronischen Komponenten.",
//           image: "/images/products/kitten-littre-info2.jpg",
//           imageAlign: "left",
//         },
//       ],

//       whatsInTheBox: [
//         "Futterautomat",
//         "Edelstahlschale",
//         "Netzadapter",
//         "Benutzerhandbuch",
//       ],

//       specs: [
//         { label: "Kapazität", value: "4L / 17 Tassen" },
//         { label: "Futtergröße", value: "2–12mm" },
//       ],

//       oemOptions: [
//         "Logo-Branding",
//         "Individuelle Verpackung",
//         "App-Design",
//         "Farboptionen",
//       ],

//       faq: [
//         {
//           question: "Wie hoch ist die Mindestbestellmenge?",
//           answer: "In der Regel 500 Einheiten für Logo-Anpassungen.",
//         },
//         {
//           question: "Ist das Produkt sicher für Haustiere?",
//           answer:
//             "Ja, alle Materialien sind lebensmittelecht und zertifiziert.",
//         },
//       ],

//       seo: {
//         title: "EcoFeed Pro X1 Intelligenter Futterautomat | OEM Hersteller",
//         description:
//           "OEM intelligenter Futterautomat mit Kamera und Anti-Verstopfungs-Technologie.",
//         keywords: [
//           "OEM Futterautomat",
//           "intelligenter Haustier Futterspender",
//           "Haustierprodukte Hersteller",
//         ],
//       },
//     },
//   ],

//   /* =========================
//      FRENCH
//   ========================== */
//   fr: [
//     {
//       slug: "EcoFeed-Pro-X1",
//       name: "EcoFeed Pro X1",
//       category: "Distributeurs Intelligents",
//       tagline: "Solution de distribution automatique de précision",

//       image: "/images/products/ecofeed-x1-main.jpg",
//       gallery: [
//         "/images/products/ecofeed-x1-view1.jpg",
//         "/images/products/ecofeed-x1-view2.jpg",
//         "/images/products/ecofeed-x1-view3.jpg",
//       ],

//       highlights: [
//         "Caméra 1080p",
//         "Double alimentation",
//         "Rotor anti-blocage",
//         "Joint de fraîcheur",
//       ],

//       marketingSections: [
//         {
//           title: "Technologie de distribution intelligente",
//           description:
//             "Contrôle précis des portions avec surveillance en temps réel via capteurs intelligents.",
//           image: "/images/products/kitten-littre-info1.jpg",
//           imageAlign: "right",
//         },
//         {
//           title: "Sécurité pour un usage quotidien",
//           description:
//             "Fabriqué avec des matériaux alimentaires certifiés et des composants électroniques sûrs.",
//           image: "/images/products/kitten-littre-info2.jpg",
//           imageAlign: "left",
//         },
//       ],

//       whatsInTheBox: [
//         "Distributeur automatique",
//         "Bol en acier inoxydable",
//         "Adaptateur secteur",
//         "Manuel utilisateur",
//       ],

//       specs: [
//         { label: "Capacité", value: "4L / 17 Tasses" },
//         { label: "Taille des croquettes", value: "2–12mm" },
//       ],

//       oemOptions: [
//         "Personnalisation du logo",
//         "Emballage personnalisé",
//         "Habillage de l’application",
//         "Options de couleur",
//       ],

//       faq: [
//         {
//           question: "Quelle est la quantité minimale de commande?",
//           answer: "Généralement 500 unités pour la personnalisation.",
//         },
//         {
//           question: "Le produit est-il sûr?",
//           answer: "Oui, tous les matériaux sont certifiés qualité alimentaire.",
//         },
//       ],

//       seo: {
//         title: "EcoFeed Pro X1 Distributeur Intelligent | Fabricant OEM",
//         description:
//           "Distributeur intelligent OEM avec caméra et technologie anti-blocage.",
//         keywords: [
//           "distributeur intelligent animaux",
//           "fabricant OEM animaux",
//           "produits intelligents animaux",
//         ],
//       },
//     },
//     {
//       slug: "Azure-PDT-Infrared-Health",
//       name: "Azure PDT Infrared Health",
//       category: "Distributeurs Intelligents",
//       tagline: "Solution de distribution automatique de précision",

//       image: "/images/products/kitten-littre-main.jpg",
//       gallery: [
//         "/images/products/kitten-littre-view1.jpg",
//         "/images/products/kitten-littre-view2.jpg",
//         "/images/products/kitten-littre-view3.jpg",
//       ],

//       highlights: [
//         "Caméra 1080p",
//         "Double alimentation",
//         "Rotor anti-blocage",
//         "Joint de fraîcheur",
//       ],

//       marketingSections: [
//         {
//           title: "Technologie de distribution intelligente",
//           description:
//             "Contrôle précis des portions avec surveillance en temps réel via capteurs intelligents.",
//           image: "/images/products/kitten-littre-info1.jpg",
//           imageAlign: "right",
//         },
//         {
//           title: "Sécurité pour un usage quotidien",
//           description:
//             "Fabriqué avec des matériaux alimentaires certifiés et des composants électroniques sûrs.",
//           image: "/images/products/kitten-littre-info2.jpg",
//           imageAlign: "left",
//         },
//       ],

//       whatsInTheBox: [
//         "Distributeur automatique",
//         "Bol en acier inoxydable",
//         "Adaptateur secteur",
//         "Manuel utilisateur",
//       ],

//       specs: [
//         { label: "Capacité", value: "4L / 17 Tasses" },
//         { label: "Taille des croquettes", value: "2–12mm" },
//       ],

//       oemOptions: [
//         "Personnalisation du logo",
//         "Emballage personnalisé",
//         "Habillage de l’application",
//         "Options de couleur",
//       ],

//       faq: [
//         {
//           question: "Quelle est la quantité minimale de commande?",
//           answer: "Généralement 500 unités pour la personnalisation.",
//         },
//         {
//           question: "Le produit est-il sûr?",
//           answer: "Oui, tous les matériaux sont certifiés qualité alimentaire.",
//         },
//       ],

//       seo: {
//         title: "EcoFeed Pro X1 Distributeur Intelligent | Fabricant OEM",
//         description:
//           "Distributeur intelligent OEM avec caméra et technologie anti-blocage.",
//         keywords: [
//           "distributeur intelligent animaux",
//           "fabricant OEM animaux",
//           "produits intelligents animaux",
//         ],
//       },
//     },
//   ],

//   /* =========================
//      SPANISH
//   ========================== */
//   es: [
//     {
//       slug: "EcoFeed-Pro-X1",
//       name: "EcoFeed Pro X1",
//       category: "Comederos Inteligentes",
//       tagline: "Solución de alimentación automática de precisión",

//       image: "/images/products/ecofeed-x1-main.jpg",
//       gallery: [
//         "/images/products/ecofeed-x1-view1.jpg",
//         "/images/products/ecofeed-x1-view2.jpg",
//         "/images/products/ecofeed-x1-view3.jpg",
//       ],

//       highlights: [
//         "Cámara 1080p",
//         "Fuente de energía dual",
//         "Rotor anti-atascos",
//         "Sellado de frescura",
//       ],

//       marketingSections: [
//         {
//           title: "Tecnología de alimentación inteligente",
//           description:
//             "Control preciso de porciones con monitoreo en tiempo real mediante sensores inteligentes.",
//           image: "/images/products/kitten-littre-info1.jpg",
//           imageAlign: "right",
//         },
//         {
//           title: "Seguro para uso diario",
//           description:
//             "Fabricado con materiales aptos para alimentos y componentes electrónicos certificados.",
//           image: "/images/products/kitten-littre-info2.jpg",
//           imageAlign: "left",
//         },
//       ],

//       whatsInTheBox: [
//         "Comedero automático",
//         "Tazón de acero inoxidable",
//         "Adaptador de corriente",
//         "Manual de usuario",
//       ],

//       specs: [
//         { label: "Capacidad", value: "4L / 17 Tazas" },
//         { label: "Tamaño del alimento", value: "2–12mm" },
//       ],

//       oemOptions: [
//         "Branding de logotipo",
//         "Empaque personalizado",
//         "Personalización de app",
//         "Opciones de color",
//       ],

//       faq: [
//         {
//           question: "¿Cuál es el MOQ para marca privada?",
//           answer: "Normalmente 500 unidades para personalización.",
//         },
//         {
//           question: "¿Es seguro para las mascotas?",
//           answer: "Sí, todos los materiales son de grado alimenticio.",
//         },
//       ],

//       seo: {
//         title: "EcoFeed Pro X1 Comedero Inteligente | Fabricante OEM",
//         description:
//           "Comedero inteligente OEM con cámara y tecnología anti-atascos.",
//         keywords: [
//           "comedero inteligente mascotas",
//           "fabricante OEM mascotas",
//           "productos inteligentes mascotas",
//         ],
//       },
//     },
//     {
//       slug: "Azure-PDT-Infrared-Health",
//       name: "Azure PDT Infrared Health",
//       category: "Comederos Inteligentes",
//       tagline: "Solución de alimentación automática de precisión",

//       image: "/images/products/kitten-littre-main.jpg",
//       gallery: [
//         "/images/products/kitten-littre-view1.jpg",
//         "/images/products/kitten-littre-view2.jpg",
//         "/images/products/kitten-littre-view3.jpg",
//       ],

//       highlights: [
//         "Cámara 1080p",
//         "Fuente de energía dual",
//         "Rotor anti-atascos",
//         "Sellado de frescura",
//       ],

//       marketingSections: [
//         {
//           title: "Tecnología de alimentación inteligente",
//           description:
//             "Control preciso de porciones con monitoreo en tiempo real mediante sensores inteligentes.",
//           image: "/images/products/kitten-littre-info1.jpg",
//           imageAlign: "right",
//         },
//         {
//           title: "Seguro para uso diario",
//           description:
//             "Fabricado con materiales aptos para alimentos y componentes electrónicos certificados.",
//           image: "/images/products/kitten-littre-info2.jpg",
//           imageAlign: "left",
//         },
//       ],

//       whatsInTheBox: [
//         "Comedero automático",
//         "Tazón de acero inoxidable",
//         "Adaptador de corriente",
//         "Manual de usuario",
//       ],

//       specs: [
//         { label: "Capacidad", value: "4L / 17 Tazas" },
//         { label: "Tamaño del alimento", value: "2–12mm" },
//       ],

//       oemOptions: [
//         "Branding de logotipo",
//         "Empaque personalizado",
//         "Personalización de app",
//         "Opciones de color",
//       ],

//       faq: [
//         {
//           question: "¿Cuál es el MOQ para marca privada?",
//           answer: "Normalmente 500 unidades para personalización.",
//         },
//         {
//           question: "¿Es seguro para las mascotas?",
//           answer: "Sí, todos los materiales son de grado alimenticio.",
//         },
//       ],

//       seo: {
//         title: "EcoFeed Pro X1 Comedero Inteligente | Fabricante OEM",
//         description:
//           "Comedero inteligente OEM con cámara y tecnología anti-atascos.",
//         keywords: [
//           "comedero inteligente mascotas",
//           "fabricante OEM mascotas",
//           "productos inteligentes mascotas",
//         ],
//       },
//     },
//   ],
// };
