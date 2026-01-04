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
      BottomCTA: {
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
      BottomCTA: {
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
      BottomCTA: {
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
      BottomCTA: {
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
      BottomCTA: {
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
      BottomCTA: {
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
      BottomCTA: {
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
      BottomCTA: {
        heading: "Ready to launch this product?",
        description:
          "Get a competitive quote within 24 hours. We support low MOQ for trial orders.",
        buttonLabel: "Inquire Now",
        buttonHref: "/contact",
      },
    },
  ],
};

