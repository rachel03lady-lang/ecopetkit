import {
  Cpu,
  Globe,
  Smartphone,
  Factory,
  PenTool,
  Wrench,
  Zap,
  Box,
  PackageCheck,
  Award,
  Microscope,
  Settings,
  Truck,
  ShieldCheck,
  Users,
} from "lucide-react";

import {
  ProcessStep,
  Language,
  BlogPost,
  FAQPageContent,
  TradeFair,
  DownloadItem,
  FooterContent,
  ServiceBannerTranslations,
  CaseStudyTranslations,
  CustomizationTiersTranslations,
  DownloadsPageContent,
  TradeFairsPageContent,
} from "@/types/types";

//services page  start here
//services page banner

export const SERVICE_BANNER_CONTENT: ServiceBannerTranslations = {
  en: {
    title: "OEM/ODM Services",
    description:
      "Comprehensive turnkey solutions. We handle the complexity of manufacturing so you can focus on brand growth.",
  },

  de: {
    title: "OEM/ODM Dienstleistungen",
    description:
      "Umfassende schlüsselfertige Lösungen. Wir übernehmen die Komplexität der Fertigung, damit Sie sich auf das Wachstum Ihrer Marke konzentrieren können.",
  },

  fr: {
    title: "Services OEM/ODM",
    description:
      "Solutions clés en main complètes. Nous gérons la complexité de la fabrication afin que vous puissiez vous concentrer sur la croissance de votre marque.",
  },

  es: {
    title: "Servicios OEM/ODM",
    description:
      "Soluciones integrales llave en mano. Nos encargamos de la complejidad de la fabricación para que usted pueda centrarse en el crecimiento de su marca.",
  },
};

export const SERVICES_CAPABILITIES: Record<
  Language,
  { title: string; desc: string; icon: any }[]
> = {
  en: [
    {
      title: "Industrial Design",
      desc: "Award-winning ID team creating ergonomic and aesthetic pet products.",
      icon: PenTool,
    },
    {
      title: "Mold Making",
      desc: "In-house CNC center ensuring 0.005mm precision for high-fidelity parts.",
      icon: Box,
    },
    {
      title: "App Development",
      desc: "Native iOS/Android development with Tuya/AWS IoT integration.",
      icon: Smartphone,
    },
    {
      title: "Electronic Engineering",
      desc: "PCB layout, firmware coding, and antenna debugging.",
      icon: Cpu,
    },
    {
      title: "Quality Control",
      desc: "Rigorous 4-stage QC process (IQC, IPQC, FQC, OQC).",
      icon: ShieldCheck,
    },
    {
      title: "Certifications",
      desc: "Handling CE, FCC, RoHS, TELEC, and PSE compliance.",
      icon: Award,
    },
  ],
  de: [
    {
      title: "Industriedesign",
      desc: "Preisgekröntes ID-Team für ergonomische Produkte.",
      icon: PenTool,
    },
    {
      title: "Formenbau",
      desc: "Internes CNC-Zentrum für 0,005mm Präzision.",
      icon: Box,
    },
    {
      title: "App-Entwicklung",
      desc: "Native iOS/Android-Entwicklung mit IoT-Integration.",
      icon: Smartphone,
    },
    {
      title: "Elektronik",
      desc: "PCB-Layout, Firmware-Codierung und Antennen-Debugging.",
      icon: Cpu,
    },
    {
      title: "Qualitätskontrolle",
      desc: "Strenger 4-stufiger QC-Prozess.",
      icon: ShieldCheck,
    },
    {
      title: "Zertifizierungen",
      desc: "Abwicklung von CE, FCC, RoHS, TELEC Compliance.",
      icon: Award,
    },
  ],
  fr: [
    {
      title: "Design Industriel",
      desc: "Équipe ID primée créant des produits esthétiques.",
      icon: PenTool,
    },
    {
      title: "Fabrication de Moules",
      desc: "Centre CNC interne assurant une précision de 0,005mm.",
      icon: Box,
    },
    {
      title: "Dév. d'Applications",
      desc: "Développement natif iOS/Android avec intégration IoT.",
      icon: Smartphone,
    },
    {
      title: "Ingénierie Électronique",
      desc: "Conception PCB, firmware et débogage d'antenne.",
      icon: Cpu,
    },
    {
      title: "Contrôle Qualité",
      desc: "Processus QC rigoureux en 4 étapes.",
      icon: ShieldCheck,
    },
    {
      title: "Certifications",
      desc: "Gestion de la conformité CE, FCC, RoHS.",
      icon: Award,
    },
  ],
  es: [
    {
      title: "Diseño Industrial",
      desc: "Equipo de ID galardonado creando productos estéticos.",
      icon: PenTool,
    },
    {
      title: "Fabricación de Moldes",
      desc: "Centro CNC interne con precisión de 0.005mm.",
      icon: Box,
    },
    {
      title: "Desarrollo de App",
      desc: "Desarrollo nativo iOS/Android con integración IoT.",
      icon: Smartphone,
    },
    {
      title: "Ingeniería Electrónica",
      desc: "Diseño de PCB, firmware y depuración de antenas.",
      icon: Cpu,
    },
    {
      title: "Control de Calidad",
      desc: "Proceso riguroso de QC de 4 etapas.",
      icon: ShieldCheck,
    },
    {
      title: "Certificaciones",
      desc: "Gestión de cumplimiento CE, FCC, RoHS.",
      icon: Award,
    },
  ],
};

export const CUSTOMIZATION_TIERS_CONTENT: CustomizationTiersTranslations = {
  en: {
    sectionTitle: "Customization Tiers",
    tiers: [
      {
        tierLabel: "Tier 1",
        title: "Private Label (OEM)",
        features: [
          "Logo Printing",
          "Custom Packaging",
          "Manual Language",
          "Standard App Skin",
        ],
        moq: "MOQ: 500 - 1,000 units",
      },
      {
        tierLabel: "Tier 2",
        title: "Deep Customization",
        isPopular: true,
        features: [
          "Custom Color Injection",
          "Firmware Logic Modification",
          "Sensor Adjustment",
          "Custom App Features",
        ],
        moq: "MOQ: 2,000 - 3,000 units",
        ctaLabel: "Inquire Now",
        ctaHref: "/contact",
      },
      {
        tierLabel: "Tier 3",
        title: "New Product Dev (ODM)",
        features: [
          "Exclusive ID Design",
          "New Mold Tooling",
          "Proprietary PCB Design",
          "Full IP Ownership",
        ],
        moq: "MOQ: Project Based",
      },
    ],
  },

  de: {
    sectionTitle: "Anpassungsstufen",
    tiers: [
      {
        tierLabel: "Stufe 1",
        title: "Private Label (OEM)",
        features: [
          "Logo-Druck",
          "Individuelle Verpackung",
          "Handbuchsprache",
          "Standard App-Design",
        ],
        moq: "MOQ: 500 - 1.000 Einheiten",
      },
      {
        tierLabel: "Stufe 2",
        title: "Tiefgehende Anpassung",
        isPopular: true,
        features: [
          "Individuelle Farbinjektion",
          "Firmware-Logik Anpassung",
          "Sensor-Justierung",
          "Benutzerdefinierte App-Funktionen",
        ],
        moq: "MOQ: 2.000 - 3.000 Einheiten",
        ctaLabel: "Jetzt anfragen",
        ctaHref: "/contact",
      },
      {
        tierLabel: "Stufe 3",
        title: "Neue Produktentwicklung (ODM)",
        features: [
          "Exklusives ID-Design",
          "Neue Werkzeugformen",
          "Proprietäres PCB-Design",
          "Volles IP-Eigentum",
        ],
        moq: "MOQ: Projektbasiert",
      },
    ],
  },

  fr: {
    sectionTitle: "Niveaux de Personnalisation",
    tiers: [
      {
        tierLabel: "Niveau 1",
        title: "Marque Blanche (OEM)",
        features: [
          "Impression du logo",
          "Emballage personnalisé",
          "Langue du manuel",
          "Interface standard de l'application",
        ],
        moq: "MOQ : 500 - 1 000 unités",
      },
      {
        tierLabel: "Niveau 2",
        title: "Personnalisation Avancée",
        isPopular: true,
        features: [
          "Injection de couleur personnalisée",
          "Modification du firmware",
          "Ajustement des capteurs",
          "Fonctionnalités d’application personnalisées",
        ],
        moq: "MOQ : 2 000 - 3 000 unités",
        ctaLabel: "Demander un devis",
        ctaHref: "/contact",
      },
      {
        tierLabel: "Niveau 3",
        title: "Développement de Nouveau Produit (ODM)",
        features: [
          "Design ID exclusif",
          "Nouveaux moules",
          "Conception PCB propriétaire",
          "Propriété IP complète",
        ],
        moq: "MOQ : Basé sur le projet",
      },
    ],
  },

  es: {
    sectionTitle: "Niveles de Personalización",
    tiers: [
      {
        tierLabel: "Nivel 1",
        title: "Marca Blanca (OEM)",
        features: [
          "Impresión de logotipo",
          "Empaque personalizado",
          "Idioma del manual",
          "Diseño estándar de la app",
        ],
        moq: "MOQ: 500 - 1,000 unidades",
      },
      {
        tierLabel: "Nivel 2",
        title: "Personalización Profunda",
        isPopular: true,
        features: [
          "Inyección de color personalizada",
          "Modificación de firmware",
          "Ajuste de sensores",
          "Funciones personalizadas de la app",
        ],
        moq: "MOQ: 2,000 - 3,000 unidades",
        ctaLabel: "Consultar ahora",
        ctaHref: "/contact",
      },
      {
        tierLabel: "Nivel 3",
        title: "Desarrollo de Nuevo Producto (ODM)",
        features: [
          "Diseño ID exclusivo",
          "Nuevo moldeado",
          "Diseño PCB propietario",
          "Propiedad total de IP",
        ],
        moq: "MOQ: Basado en proyecto",
      },
    ],
  },
};


//service case study

export const CASE_STUDY_CONTENT: CaseStudyTranslations = {
  en: {
    badge: "Case Study",
    title: 'Project: "SmartFeeder Ultra"',
    details: [
      {
        label: "Challenge",
        value:
          "A US-based client needed a feeder that could handle freeze-dried food without jamming, with a sub-60 day launch timeline.",
      },
      {
        label: "Solution",
        value:
          'We engineered a patented "Reverse-Rotation" anti-jam rotor and utilized our existing modular PCB platform to expedite firmware development.',
      },
      {
        label: "Result",
        value:
          "Launched in 55 days. 0.2% defect rate. 50,000 units sold in Q1.",
      },
    ],
    ctaLabel: "Start Your Project",
    ctaHref: "/contact",
    image: {
      src: "https://picsum.photos/800/600?grayscale",
      alt: "SmartFeeder Ultra case study",
      placeholderTitle: "[Confidential Product Image Placeholder]",
      placeholderSubtitle: "Before/After Schematics",
    },
  },

  de: {
    badge: "Fallstudie",
    title: "Projekt: „SmartFeeder Ultra“",
    details: [
      {
        label: "Herausforderung",
        value:
          "Ein US-Kunde benötigte einen Futterautomaten für gefriergetrocknetes Futter ohne Verstopfung bei einer Markteinführungszeit unter 60 Tagen.",
      },
      {
        label: "Lösung",
        value:
          "Wir entwickelten einen patentierten Anti-Verstopfungsrotor mit Rückwärtsrotation und nutzten unsere modulare PCB-Plattform zur schnellen Firmware-Entwicklung.",
      },
      {
        label: "Ergebnis",
        value:
          "Markteinführung in 55 Tagen. 0,2 % Fehlerquote. 50.000 verkaufte Einheiten im ersten Quartal.",
      },
    ],
    ctaLabel: "Projekt starten",
    ctaHref: "/contact",
    image: {
      src: "https://picsum.photos/800/600?grayscale",
      alt: "SmartFeeder Ultra Fallstudie",
      placeholderTitle: "[Vertrauliches Produktbild]",
      placeholderSubtitle: "Vorher/Nachher-Schemata",
    },
  },

  fr: {
    badge: "Étude de Cas",
    title: "Projet : « SmartFeeder Ultra »",
    details: [
      {
        label: "Défi",
        value:
          "Un client américain avait besoin d’un distributeur capable de gérer des aliments lyophilisés sans blocage, avec un délai de lancement inférieur à 60 jours.",
      },
      {
        label: "Solution",
        value:
          "Nous avons conçu un rotor anti-blocage breveté à rotation inversée et utilisé notre plateforme PCB modulaire pour accélérer le développement du firmware.",
      },
      {
        label: "Résultat",
        value:
          "Lancement en 55 jours. Taux de défaut de 0,2 %. 50 000 unités vendues au premier trimestre.",
      },
    ],
    ctaLabel: "Démarrer votre projet",
    ctaHref: "/contact",
    image: {
      src: "https://picsum.photos/800/600?grayscale",
      alt: "Étude de cas SmartFeeder Ultra",
      placeholderTitle: "[Image produit confidentielle]",
      placeholderSubtitle: "Schémas avant/après",
    },
  },

  es: {
    badge: "Caso de Estudio",
    title: 'Proyecto: "SmartFeeder Ultra"',
    details: [
      {
        label: "Desafío",
        value:
          "Un cliente de EE. UU. necesitaba un alimentador capaz de manejar comida liofilizada sin atascos, con un plazo de lanzamiento inferior a 60 días.",
      },
      {
        label: "Solución",
        value:
          'Diseñamos un rotor antiatascos patentado de "rotación inversa" y utilizamos nuestra plataforma PCB modular para acelerar el desarrollo del firmware.',
      },
      {
        label: "Resultado",
        value:
          "Lanzado en 55 días. Tasa de defectos del 0,2 %. 50.000 unidades vendidas en el primer trimestre.",
      },
    ],
    ctaLabel: "Iniciar tu proyecto",
    ctaHref: "/contact",
    image: {
      src: "https://picsum.photos/800/600?grayscale",
      alt: "Caso de estudio SmartFeeder Ultra",
      placeholderTitle: "[Imagen confidencial del producto]",
      placeholderSubtitle: "Esquemas antes/después",
    },
  },
};


//services page end here
//footer

export const FOOTER_CONTENT : Record<Language, FooterContent> = {
  en: {
    brand: {
      name: "EcoPetKit",
      description:
        "EcoPetKit is a global OEM/ODM partner for smart pet technology, delivering end-to-end innovation from concept to mass production.",
    },

    socialLinks: [
      { id: "linkedin", href: "#", label: "LinkedIn" },
      { id: "facebook", href: "#", label: "Facebook" },
      { id: "instagram", href: "#", label: "Instagram" },
      { id: "tiktok", href: "#", label: "TikTok" },
    ],

    sections: {
      products: {
        title: "Products",
        links: [
          { label: "Smart Feeders", href: "/products" },
          { label: "Water Fountains", href: "/products" },
          { label: "Smart Health", href: "/products" },
          { label: "Pet Cameras", href: "/products" },
          { label: "Air Purifiers", href: "/products" },
          { label: "Training Toys", href: "/products" },
        ],
      },
      company: {
        title: "Company",
        links: [
          { label: "About Us", href: "/about" },
          { label: "OEM / ODM Services", href: "/services" },
          { label: "Factory Tour", href: "/technology" },
          { label: "Trade Fairs", href: "/fairs" },
          { label: "Contact Us", href: "/contact" },
        ],
      },
      newsletter: {
        title: "Newsletter",
        description:
          "Subscribe to receive industry insights and product updates.",
        emailPlaceholder: "Enter your email",
        buttonLabel: "Join",
      },
    },

    bottom: {
      rights: "© 2025 EcoPetKit. All rights reserved.",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Sitemap", href: "#" },
      ],
    },
  },

  de: {
    brand: {
      name: "EcoPetKit",
      description:
        "EcoPetKit ist ein globaler OEM/ODM-Partner für intelligente Haustiertechnologie – von der Idee bis zur Serienproduktion.",
    },

    socialLinks: [
      { id: "linkedin", href: "#", label: "LinkedIn" },
      { id: "facebook", href: "#", label: "Facebook" },
      { id: "instagram", href: "#", label: "Instagram" },
      { id: "tiktok", href: "#", label: "TikTok" },
    ],

    sections: {
      products: {
        title: "Produkte",
        links: [
          { label: "Futterautomaten", href: "/products" },
          { label: "Trinkbrunnen", href: "/products" },
          { label: "Gesundheit & Pflege", href: "/products" },
          { label: "Haustierkameras", href: "/products" },
          { label: "Luftreiniger", href: "/products" },
          { label: "Trainingsspielzeug", href: "/products" },
        ],
      },
      company: {
        title: "Unternehmen",
        links: [
          { label: "Über Uns", href: "/about" },
          { label: "OEM / ODM Services", href: "/services" },
          { label: "Werksbesichtigung", href: "/technology" },
          { label: "Messen", href: "/fairs" },
          { label: "Kontakt", href: "/contact" },
        ],
      },
      newsletter: {
        title: "Newsletter",
        description:
          "Abonnieren Sie unseren Newsletter für Produktneuheiten und Brancheneinblicke.",
        emailPlaceholder: "E-Mail-Adresse eingeben",
        buttonLabel: "Abonnieren",
      },
    },

    bottom: {
      rights: "© 2025 EcoPetKit. Alle Rechte vorbehalten.",
      links: [
        { label: "Datenschutz", href: "#" },
        { label: "Nutzungsbedingungen", href: "#" },
        { label: "Sitemap", href: "#" },
      ],
    },
  },

  fr: {
    brand: {
      name: "EcoPetKit",
      description:
        "EcoPetKit est un partenaire OEM/ODM mondial pour les technologies intelligentes dédiées aux animaux, de la conception à la production de masse.",
    },

    socialLinks: [
      { id: "linkedin", href: "#", label: "LinkedIn" },
      { id: "facebook", href: "#", label: "Facebook" },
      { id: "instagram", href: "#", label: "Instagram" },
      { id: "tiktok", href: "#", label: "TikTok" },
    ],

    sections: {
      products: {
        title: "Produits",
        links: [
          { label: "Distributeurs Automatiques", href: "/products" },
          { label: "Fontaines à Eau", href: "/products" },
          { label: "Santé Animale", href: "/products" },
          { label: "Caméras pour Animaux", href: "/products" },
          { label: "Purificateurs d’Air", href: "/products" },
          { label: "Jouets Intelligents", href: "/products" },
        ],
      },
      company: {
        title: "Entreprise",
        links: [
          { label: "À Propos", href: "/about" },
          { label: "Services OEM / ODM", href: "/services" },
          { label: "Visite de l’Usine", href: "/technology" },
          { label: "Salons Professionnels", href: "/fairs" },
          { label: "Contact", href: "/contact" },
        ],
      },
      newsletter: {
        title: "Newsletter",
        description:
          "Abonnez-vous pour recevoir des actualités et tendances du secteur.",
        emailPlaceholder: "Entrez votre email",
        buttonLabel: "S’inscrire",
      },
    },

    bottom: {
      rights: "© 2025 EcoPetKit. Tous droits réservés.",
      links: [
        { label: "Politique de Confidentialité", href: "#" },
        { label: "Conditions d’Utilisation", href: "#" },
        { label: "Plan du Site", href: "#" },
      ],
    },
  },

  es: {
    brand: {
      name: "EcoPetKit",
      description:
        "EcoPetKit es un socio global OEM/ODM en tecnología inteligente para mascotas, desde la idea hasta la producción en masa.",
    },

    socialLinks: [
      { id: "linkedin", href: "#", label: "LinkedIn" },
      { id: "facebook", href: "#", label: "Facebook" },
      { id: "instagram", href: "#", label: "Instagram" },
      { id: "tiktok", href: "#", label: "TikTok" },
    ],

    sections: {
      products: {
        title: "Productos",
        links: [
          { label: "Comederos Inteligentes", href: "/products" },
          { label: "Fuentes de Agua", href: "/products" },
          { label: "Salud para Mascotas", href: "/products" },
          { label: "Cámaras para Mascotas", href: "/products" },
          { label: "Purificadores de Aire", href: "/products" },
          { label: "Juguetes de Entrenamiento", href: "/products" },
        ],
      },
      company: {
        title: "Empresa",
        links: [
          { label: "Sobre Nosotros", href: "/about" },
          { label: "Servicios OEM / ODM", href: "/services" },
          { label: "Tour de la Fábrica", href: "/technology" },
          { label: "Ferias Comerciales", href: "/fairs" },
          { label: "Contacto", href: "/contact" },
        ],
      },
      newsletter: {
        title: "Boletín",
        description:
          "Suscríbete para recibir novedades y tendencias del sector.",
        emailPlaceholder: "Introduce tu correo",
        buttonLabel: "Suscribirse",
      },
    },

    bottom: {
      rights: "© 2025 EcoPetKit. Todos los derechos reservados.",
      links: [
        { label: "Política de Privacidad", href: "#" },
        { label: "Términos de Servicio", href: "#" },
        { label: "Mapa del Sitio", href: "#" },
      ],
    },
  },
};


// UI Translation Strings
export const UI_TEXT = {
  en: {
    nav: {
      home: "Home",
      services: "OEM/ODM Services",
      products: "Products",
      about: "About",
      aboutUs: "About Us",
      downloads: "Download Center",
      fairs: "Trade Fairs",
      faq: "FAQ",
      factory: "Factory",
      blog: "Blog",
      contact: "Contact Us",
      getQuote: "Get Quote",
    },
    hero: {
      premier: "Premier OEM/ODM Manufacturer",
      viewProducts: "View Products",
    },
    footer: {
      about:
        "Empowering brands with intelligent pet care solutions. Your trusted partner for high-end OEM/ODM manufacturing.",
      products: "Products",
      company: "Company",
      newsletter: "Newsletter",
      subscribe: "Subscribe for the latest smart pet industry trends.",
      emailPlaceholder: "Email address",
      join: "Join",
      rights: "© 2025 EcoPetKit Manufacturing Ltd. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      sitemap: "Sitemap",
    },
    common: {
      readMore: "Read More",
      viewAll: "View All",
      contactUs: "Contact Us",
      startProject: "Start Your Project",
      downloadCatalog: "Download Catalogue",
      requestQuote: "Request Quote",
      downloadSpec: "Download Spec Sheet",
      inquireNow: "Inquire Now",
      backToProducts: "Back to Products",
      productDetails: "Product Details",
      techSpecs: "Technical Specifications",
      customization: "OEM Customization",
      whatsIncluded: "What's in the Box",
      relatedProducts: "Related Solutions",
      searchPlaceholder: "Search products...",
      blogTitle: "Industry Insights",
      faqTitle: "Manufacturing FAQ",
      exploreCategory: "Explore Category",
      hotProducts: "Hot Products",
      hotProductsBadge: "Best Seller",
      whyChooseUs: "Why Choose Us",
      aboutTitle: "One-Stop Smart Pet Solution",
    },
  },
  de: {
    nav: {
      home: "Startseite",
      services: "OEM/ODM Dienste",
      products: "Produkte",
      about: "Über uns",
      aboutUs: "Firmenprofil",
      downloads: "Download-Center",
      fairs: "Messen",
      faq: "FAQ",
      factory: "Fabrik",
      blog: "Blog",
      contact: "Kontakt",
      getQuote: "Angebot anfordern",
    },
    hero: {
      premier: "Führender OEM/ODM Hersteller",
      viewProducts: "Produkte ansehen",
    },
    footer: {
      about:
        "Wir stärken Marken mit intelligenten Lösungen für die Tierpflege. Ihr vertrauenswürdiger Partner für High-End-OEM/ODM-Fertigung.",
      products: "Produkte",
      company: "Unternehmen",
      newsletter: "Newsletter",
      subscribe: "Abonnieren Sie die neuesten Trends der Smart-Pet-Branche.",
      emailPlaceholder: "E-Mail-Adresse",
      join: "Abonnieren",
      rights: "© 2025 EcoPetKit Manufacturing Ltd. Alle Rechte vorbehalten.",
      privacy: "Datenschutz",
      terms: "AGB",
      sitemap: "Seitenübersicht",
    },
    common: {
      readMore: "Mehr lesen",
      viewAll: "Alle ansehen",
      contactUs: "Kontaktieren Sie uns",
      startProject: "Projekt starten",
      downloadCatalog: "Katalog herunterladen",
      requestQuote: "Angebot anfordern",
      downloadSpec: "Datenblatt laden",
      inquireNow: "Jetzt anfragen",
      backToProducts: "Zurück zu Produkten",
      productDetails: "Produktdetails",
      techSpecs: "Technische Daten",
      customization: "OEM Anpassung",
      whatsIncluded: "Lieferumfang",
      relatedProducts: "Verwandte Lösungen",
      searchPlaceholder: "Produkte suchen...",
      blogTitle: "Branchen-Einblicke",
      faqTitle: "Häufige Fragen (FAQ)",
      exploreCategory: "Kategorie erkunden",
      hotProducts: "Beliebte Produkte",
      hotProductsBadge: "Bestseller",
      whyChooseUs: "Warum wir",
      aboutTitle: "Smart Pet Gesamtlösung",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      services: "Services OEM/ODM",
      products: "Produits",
      about: "À propos",
      aboutUs: "Qui sommes-nous",
      downloads: "Centre de téléchargement",
      fairs: "Salons professionnels",
      faq: "FAQ",
      factory: "Usine",
      blog: "Blog",
      contact: "Contact",
      getQuote: "Devis",
    },
    hero: {
      premier: "Premier fabricant OEM/ODM",
      viewProducts: "Voir les produits",
    },
    footer: {
      about:
        "Donner aux marques des solutions intelligentes pour animaux. Votre partenaire de confiance pour la fabrication OEM/ODM haut de gamme.",
      products: "Produits",
      company: "Société",
      newsletter: "Bulletin",
      subscribe: "Abonnez-vous aux dernières tendances de l'industrie.",
      emailPlaceholder: "Adresse e-mail",
      join: "Rejoindre",
      rights: "© 2025 EcoPetKit Manufacturing Ltd. Tous droits réservés.",
      privacy: "Confidentialité",
      terms: "Conditions",
      sitemap: "Plan du site",
    },
    common: {
      readMore: "Lire la suite",
      viewAll: "Voir tout",
      contactUs: "Contactez-nous",
      startProject: "Démarrer le projet",
      downloadCatalog: "Télécharger le catalogue",
      requestQuote: "Demander un devis",
      downloadSpec: "Fiche technique",
      inquireNow: "Demander maintenant",
      backToProducts: "Retour aux produits",
      productDetails: "Détails du produit",
      techSpecs: "Spécifications Techniques",
      customization: "Personnalisation OEM",
      whatsIncluded: "Contenu de la boîte",
      relatedProducts: "Solutions connexes",
      searchPlaceholder: "Rechercher produits...",
      blogTitle: "Aperçus de l'industrie",
      faqTitle: "FAQ Fabrication",
      exploreCategory: "Explorer la catégorie",
      hotProducts: "Produits Phares",
      hotProductsBadge: "Meilleure Vente",
      whyChooseUs: "Pourquoi nous choisir",
      aboutTitle: "Solution Smart Pet tout-en-un",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios OEM/ODM",
      products: "Productos",
      about: "Acerca de",
      aboutUs: "Sobre Nosotros",
      downloads: "Centro de Descargas",
      fairs: "Ferias Comerciales",
      faq: "Preguntas Frecuentes",
      factory: "Fábrica",
      blog: "Blog",
      contact: "Contacto",
      getQuote: "Cotizar",
    },
    hero: {
      premier: "Fabricante líder OEM/ODM",
      viewProducts: "Ver Productos",
    },
    footer: {
      about:
        "Potenciando marcas con soluciones inteligentes para mascotas. Su socio de confianza para la fabricación OEM/ODM de alta gama.",
      products: "Productos",
      company: "Empresa",
      newsletter: "Boletín",
      subscribe: "Suscríbase para las últimas tendencias de la industria.",
      emailPlaceholder: "Correo electrónico",
      join: "Unirse",
      rights:
        "© 2025 EcoPetKit Manufacturing Ltd. Todos los derechos reservados.",
      privacy: "Privacidad",
      terms: "Términos",
      sitemap: "Mapa del sitio",
    },
    common: {
      readMore: "Leer más",
      viewAll: "Ver todo",
      contactUs: "Contáctenos",
      startProject: "Iniciar Proyecto",
      downloadCatalog: "Descargar Catálogo",
      requestQuote: "Solicitar Cotización",
      downloadSpec: "Ficha Técnica",
      inquireNow: "Consultar ahora",
      backToProducts: "Volver a productos",
      productDetails: "Detalles del producto",
      techSpecs: "Especificaciones Técnicas",
      customization: "Personalización OEM",
      whatsIncluded: "Qué hay en la caja",
      relatedProducts: "Soluciones relacionadas",
      searchPlaceholder: "Buscar productos...",
      blogTitle: "Perspectivas de la Industria",
      faqTitle: "Preguntas Frecuentes (FAQ)",
      exploreCategory: "Explorar categoría",
      hotProducts: "Productos Destacados",
      hotProductsBadge: "Más Vendido",
      whyChooseUs: "Por qué elegirnos",
      aboutTitle: "Solución integral Smart Pet",
    },
  },
};


//home about us

export const HOME_ABOUT_US = {
  en: {
    sectionLabel: "Who We Are",

    title: "One-Stop Smart Pet Solution",

    description: [
      "EcoPetKit is a global leader in the research, development, and manufacturing of smart pet products. We provide end-to-end OEM/ODM solutions for top brands in over 50 countries.",
      "With a 20,000m² intelligent production base and a team of 50+ R&D experts, we turn innovative concepts into market-ready products with speed and precision.",
    ],

    image: {
      src: "https://picsum.photos/800/600?random=999",
      alt: "EcoPetKit Factory",
    },

    stats: {
      value: "15+",
      label: "Years Experience",
      subText: "Specializing in Smart Pet IoT Manufacturing",
    },

    highlights: [
      "ISO9001 Certified",
      "BSCI Audited",
      "In-House R&D",
      "Global Logistics",
    ],

    cta: {
      label: "About Us",
      href: "/technology",
    },
  },

  de: {
    sectionLabel: "Über Uns",

    title: "One-Stop Smart-Pet-Lösung",

    description: [
      "EcoPetKit ist ein weltweit führendes Unternehmen in der Forschung, Entwicklung und Herstellung von intelligenten Haustierprodukten. Wir bieten umfassende OEM/ODM-Lösungen für führende Marken in über 50 Ländern.",
      "Mit einer 20.000 m² großen intelligenten Produktionsstätte und einem Team von über 50 F&E-Experten verwandeln wir innovative Ideen schnell und präzise in marktreife Produkte.",
    ],

    image: {
      src: "https://picsum.photos/800/600?random=999",
      alt: "EcoPetKit Fabrik",
    },

    stats: {
      value: "15+",
      label: "Jahre Erfahrung",
      subText: "Spezialisiert auf Smart Pet IoT Fertigung",
    },

    highlights: [
      "ISO9001 Zertifiziert",
      "BSCI Geprüft",
      "Eigene F&E",
      "Globale Logistik",
    ],

    cta: {
      label: "Über Uns",
      href: "/technology",
    },
  },

  fr: {
    sectionLabel: "Qui Sommes-Nous",

    title: "Solution Complète pour Animaux Intelligents",

    description: [
      "EcoPetKit est un leader mondial dans la recherche, le développement et la fabrication de produits intelligents pour animaux de compagnie. Nous proposons des solutions OEM/ODM complètes pour des marques de premier plan dans plus de 50 pays.",
      "Avec une base de production intelligente de 20 000 m² et une équipe de plus de 50 experts en R&D, nous transformons des concepts innovants en produits prêts pour le marché avec rapidité et précision.",
    ],

    image: {
      src: "https://picsum.photos/800/600?random=999",
      alt: "Usine EcoPetKit",
    },

    stats: {
      value: "15+",
      label: "Années d’Expérience",
      subText: "Spécialisé dans la fabrication IoT pour animaux intelligents",
    },

    highlights: [
      "Certifié ISO9001",
      "Audité BSCI",
      "R&D Interne",
      "Logistique Mondiale",
    ],

    cta: {
      label: "À Propos",
      href: "/technology",
    },
  },

  es: {
    sectionLabel: "Quiénes Somos",

    title: "Solución Integral para Mascotas Inteligentes",

    description: [
      "EcoPetKit es un líder global en la investigación, desarrollo y fabricación de productos inteligentes para mascotas. Ofrecemos soluciones OEM/ODM integrales para marcas líderes en más de 50 países.",
      "Con una base de producción inteligente de 20.000 m² y un equipo de más de 50 expertos en I+D, transformamos conceptos innovadores en productos listos para el mercado con rapidez y precisión.",
    ],

    image: {
      src: "https://picsum.photos/800/600?random=999",
      alt: "Fábrica de EcoPetKit",
    },

    stats: {
      value: "15+",
      label: "Años de Experiencia",
      subText: "Especializados en Fabricación IoT para Mascotas Inteligentes",
    },

    highlights: [
      "Certificación ISO9001",
      "Auditado por BSCI",
      "I+D Interno",
      "Logística Global",
    ],

    cta: {
      label: "Sobre Nosotros",
      href: "/technology",
    },
  },
};


export const HOME_CATEGORIES: Record<
  Language,
  {
    title: string;
    items: { id: string; name: string; image: string }[];
  }
> = {
  en: {
    title: "Explore Category",
    items: [
      {
        id: "Smart Feeders",
        name: "Smart Feeders",
        image: "https://picsum.photos/400/400?random=501",
      },
      {
        id: "Smart Fountains",
        name: "Water Fountains",
        image: "https://picsum.photos/400/400?random=502",
      },
      {
        id: "Smart Health",
        name: "Pet Health Care",
        image: "https://picsum.photos/400/400?random=503",
      },
      {
        id: "Smart Training",
        name: "Training Toys",
        image: "https://picsum.photos/400/400?random=504",
      },
      {
        id: "Smart Air Quality",
        name: "Air Purification",
        image: "https://picsum.photos/400/400?random=505",
      },
      {
        id: "Pet Cameras",
        name: "Pet Monitoring",
        image: "https://picsum.photos/400/400?random=506",
      },
    ],
  },

  de: {
    title: "Kategorie Entdecken",
    items: [
      {
        id: "Smart Feeders",
        name: "Futterautomaten",
        image: "https://picsum.photos/400/400?random=501",
      },
      {
        id: "Smart Fountains",
        name: "Trinkbrunnen",
        image: "https://picsum.photos/400/400?random=502",
      },
      {
        id: "Smart Health",
        name: "Gesundheitspflege",
        image: "https://picsum.photos/400/400?random=503",
      },
      {
        id: "Smart Training",
        name: "Training & Spielzeug",
        image: "https://picsum.photos/400/400?random=504",
      },
      {
        id: "Smart Air Quality",
        name: "Luftreinigung",
        image: "https://picsum.photos/400/400?random=505",
      },
      {
        id: "Pet Cameras",
        name: "Überwachung",
        image: "https://picsum.photos/400/400?random=506",
      },
    ],
  },

  fr: {
    title: "Explorer les Catégories",
    items: [
      {
        id: "Smart Feeders",
        name: "Distributeurs",
        image: "https://picsum.photos/400/400?random=501",
      },
      {
        id: "Smart Fountains",
        name: "Fontaines à Eau",
        image: "https://picsum.photos/400/400?random=502",
      },
      {
        id: "Smart Health",
        name: "Soins de Santé",
        image: "https://picsum.photos/400/400?random=503",
      },
      {
        id: "Smart Training",
        name: "Jouets Intelligents",
        image: "https://picsum.photos/400/400?random=504",
      },
      {
        id: "Smart Air Quality",
        name: "Purification d'Air",
        image: "https://picsum.photos/400/400?random=505",
      },
      {
        id: "Pet Cameras",
        name: "Caméras",
        image: "https://picsum.photos/400/400?random=506",
      },
    ],
  },

  es: {
    title: "Explorar Categorías",
    items: [
      {
        id: "Smart Feeders",
        name: "Alimentadores",
        image: "https://picsum.photos/400/400?random=501",
      },
      {
        id: "Smart Fountains",
        name: "Fuentes de Agua",
        image: "https://picsum.photos/400/400?random=502",
      },
      {
        id: "Smart Health",
        name: "Cuidado de Salud",
        image: "https://picsum.photos/400/400?random=503",
      },
      {
        id: "Smart Training",
        name: "Entrenamiento",
        image: "https://picsum.photos/400/400?random=504",
      },
      {
        id: "Smart Air Quality",
        name: "Purificación de Aire",
        image: "https://picsum.photos/400/400?random=505",
      },
      {
        id: "Pet Cameras",
        name: "Cámaras",
        image: "https://picsum.photos/400/400?random=506",
      },
    ],
  },
};

//Home CTA 

export const HOME_CTA_CONTENT = {
  en: {
    title: "Ready to Disrupt the Market?",
    description:
      "Join 200+ global brands who trust EcoPetKit for their smart product manufacturing. Get your custom proposal within 24 hours.",
    primaryAction: {
      label: "Start Your Project",
      href: "/contact",
    },
    secondaryAction: {
      label: "Download Catalogue",
      href: "/products",
    },
  },

  de: {
    title: "Bereit, den Markt zu verändern?",
    description:
      "Über 200 globale Marken vertrauen EcoPetKit für die Entwicklung smarter Produkte. Erhalten Sie Ihr individuelles Angebot innerhalb von 24 Stunden.",
    primaryAction: {
      label: "Projekt Starten",
      href: "/contact",
    },
    secondaryAction: {
      label: "Katalog Herunterladen",
      href: "/products",
    },
  },

  fr: {
    title: "Prêt à révolutionner le marché ?",
    description:
      "Plus de 200 marques internationales font confiance à EcoPetKit pour la fabrication de produits intelligents. Recevez votre devis personnalisé sous 24 heures.",
    primaryAction: {
      label: "Démarrer le Projet",
      href: "/contact",
    },
    secondaryAction: {
      label: "Télécharger le Catalogue",
      href: "/products",
    },
  },

  es: {
    title: "¿Listo para transformar el mercado?",
    description:
      "Más de 200 marcas globales confían en EcoPetKit para la fabricación de productos inteligentes. Obtén tu propuesta personalizada en 24 horas.",
    primaryAction: {
      label: "Iniciar Proyecto",
      href: "/contact",
    },
    secondaryAction: {
      label: "Descargar Catálogo",
      href: "/products",
    },
  },
};



//factory content

export const FACTORY_CONTENT = {
  en: {
    highlight: {
      label: "Manufacturing Scale",
      title: "20,000m² Intelligent Production Base",
      description:
        "From precision mold injection to dust-free SMT workshops, our state-of-the-art facility ensures every product meets global quality standards.",
      cta: {
        label: "Virtual Factory Tour",
        href: "/about",
      },
    },

    hero: {
      title: "Intelligent Manufacturing Base",
      subtitle:
        "A 20,000m² state-of-the-art facility dedicated to Smart Pet IoT production. From mold injection to SMT and final assembly, we control quality at every step.",
    },

    stats: [
      { value: "20,000", label: "Square Meters", unit: "m²" },
      { value: "12", label: "Production Lines", unit: "Lines" },
      { value: "300,000", label: "Monthly Capacity", unit: "Units" },
      { value: "50+", label: "R&D Engineers", unit: "Experts" },
    ],

    workshops: [
      {
        id: "mold",
        title: "Precision Mold Center",
        desc: "In-house CNC machining center with 0.005mm precision. We maintain 2,000+ sets of molds to ensure rapid prototyping and modification.",
        icon: Settings,
        image: "https://picsum.photos/800/600?random=801",
      },
      {
        id: "injection",
        title: "Injection Molding",
        desc: "50+ Haitian automated injection machines ranging from 80T to 600T. Capable of dual-shot injection and food-grade ABS/PP processing.",
        icon: Box,
        image: "https://picsum.photos/800/600?random=802",
      },
      {
        id: "smt",
        title: "SMT & Electronics",
        desc: "Dust-free SMT workshops equipped with Samsung/Yamaha pick-and-place machines, AOI testing, and automatic soldering for reliable PCB assemblies.",
        icon: Cpu,
        image: "https://picsum.photos/800/600?random=803",
      },
      {
        id: "assembly",
        title: "Smart Assembly Lines",
        desc: "12 lean manufacturing lines with integrated digital SOPs. Every unit passes through 100% function testing, aging, and visual inspection.",
        icon: Factory,
        image: "https://picsum.photos/800/600?random=804",
      },
    ],
  },

  de: {
    highlight: {
      label: "Produktionsmaßstab",
      title: "20.000 m² intelligente Produktionsbasis",
      description:
        "Von präzisem Spritzguss bis hin zu staubfreien SMT-Werkstätten stellt unsere hochmoderne Anlage sicher, dass jedes Produkt globale Qualitätsstandards erfüllt.",
      cta: {
        label: "Virtuelle Fabrikbesichtigung",
        href: "/about",
      },
    },

    hero: {
      title: "Intelligente Fertigungsbasis",
      subtitle:
        "Eine 20.000 m² große, hochmoderne Anlage für Smart Pet IoT-Produktion – vom Spritzguss bis zur Endmontage.",
    },

    stats: [
      { value: "20.000", label: "Quadratmeter", unit: "m²" },
      { value: "12", label: "Produktionslinien", unit: "Linien" },
      { value: "300.000", label: "Monatliche Kapazität", unit: "Einheiten" },
      { value: "50+", label: "F&E Ingenieure", unit: "Experten" },
    ],

    workshops: [
      {
        id: "mold",
        title: "Präzisions-Formenzentrum",
        desc: "Internes CNC-Bearbeitungszentrum mit 0,005 mm Präzision. Über 2.000 Formen für schnelles Prototyping.",
        icon: Settings,
        image: "https://picsum.photos/800/600?random=801",
      },
      {
        id: "injection",
        title: "Spritzguss",
        desc: "50+ automatisierte Haitian-Spritzgussmaschinen von 80T bis 600T, geeignet für lebensmittelechte Materialien.",
        icon: Box,
        image: "https://picsum.photos/800/600?random=802",
      },
      {
        id: "smt",
        title: "SMT & Elektronik",
        desc: "Staubfreie SMT-Werkstätten mit AOI-Prüfung und automatischem Löten für zuverlässige PCB-Bestückung.",
        icon: Cpu,
        image: "https://picsum.photos/800/600?random=803",
      },
      {
        id: "assembly",
        title: "Smarte Montagelinien",
        desc: "12 Lean-Produktionslinien mit digitalen SOPs und 100% Funktionsprüfung.",
        icon: Factory,
        image: "https://picsum.photos/800/600?random=804",
      },
    ],
  },

  fr: {
    highlight: {
      label: "Capacité de Fabrication",
      title: "Base de production intelligente de 20 000 m²",
      description:
        "Du moulage de précision aux ateliers SMT sans poussière, notre usine garantit des standards de qualité mondiaux.",
      cta: {
        label: "Visite Virtuelle de l’Usine",
        href: "/about",
      },
    },

    hero: {
      title: "Base de Fabrication Intelligente",
      subtitle:
        "Une installation de pointe de 20 000 m² dédiée à la production IoT pour animaux, du moulage à l’assemblage final.",
    },

    stats: [
      { value: "20 000", label: "Mètres Carrés", unit: "m²" },
      { value: "12", label: "Lignes de Production", unit: "Lignes" },
      { value: "300 000", label: "Capacité Mensuelle", unit: "Unités" },
      { value: "50+", label: "Ingénieurs R&D", unit: "Experts" },
    ],

    workshops: [
      {
        id: "mold",
        title: "Centre de Moules de Précision",
        desc: "Usinage CNC interne avec une précision de 0,005 mm et plus de 2 000 moules.",
        icon: Settings,
        image: "https://picsum.photos/800/600?random=801",
      },
      {
        id: "injection",
        title: "Moulage par Injection",
        desc: "Plus de 50 machines automatisées pour des matériaux ABS/PP de qualité alimentaire.",
        icon: Box,
        image: "https://picsum.photos/800/600?random=802",
      },
      {
        id: "smt",
        title: "SMT & Électronique",
        desc: "Ateliers SMT sans poussière équipés de tests AOI et de soudure automatique.",
        icon: Cpu,
        image: "https://picsum.photos/800/600?random=803",
      },
      {
        id: "assembly",
        title: "Lignes d’Assemblage",
        desc: "12 lignes de fabrication lean avec contrôle fonctionnel à 100%.",
        icon: Factory,
        image: "https://picsum.photos/800/600?random=804",
      },
    ],
  },

  es: {
    highlight: {
      label: "Escala de Manufactura",
      title: "Base de producción inteligente de 20.000 m²",
      description:
        "Desde inyección de moldes de precisión hasta talleres SMT libres de polvo, nuestra planta garantiza estándares globales de calidad.",
      cta: {
        label: "Tour Virtual de la Fábrica",
        href: "/about",
      },
    },

    hero: {
      title: "Base de Fabricación Inteligente",
      subtitle:
        "Instalación de 20.000 m² dedicada a la producción IoT para mascotas, desde moldes hasta ensamblaje final.",
    },

    stats: [
      { value: "20.000", label: "Metros Cuadrados", unit: "m²" },
      { value: "12", label: "Líneas de Producción", unit: "Líneas" },
      { value: "300.000", label: "Capacidad Mensual", unit: "Unidades" },
      { value: "50+", label: "Ingenieros I+D", unit: "Expertos" },
    ],

    workshops: [
      {
        id: "mold",
        title: "Centro de Moldes",
        desc: "Mecanizado CNC interno con precisión de 0,005 mm y más de 2.000 moldes.",
        icon: Settings,
        image: "https://picsum.photos/800/600?random=801",
      },
      {
        id: "injection",
        title: "Inyección de Plástico",
        desc: "Más de 50 máquinas automatizadas Haitian para materiales de grado alimenticio.",
        icon: Box,
        image: "https://picsum.photos/800/600?random=802",
      },
      {
        id: "smt",
        title: "SMT y Electrónica",
        desc: "Talleres SMT sin polvo con pruebas AOI y soldadura automática.",
        icon: Cpu,
        image: "https://picsum.photos/800/600?random=803",
      },
      {
        id: "assembly",
        title: "Líneas de Montaje",
        desc: "12 líneas de producción lean con pruebas funcionales al 100%.",
        icon: Factory,
        image: "https://picsum.photos/800/600?random=804",
      },
    ],
  },
};



export const HERO_SLIDES = {
  en: [
    {
      id: 1,
      headline: "Engineering the Future of Pet Care",
      subhead:
        "World-class OEM/ODM solutions for smart feeders, fountains, and interactive tech.",
      cta: "Explore Solutions",
      bgImage: "https://picsum.photos/1920/1080?grayscale&blur=2",
    },
    {
      id: 2,
      headline: "Your Vision. Our Innovation.",
      subhead:
        "End-to-end manufacturing from Industrial Design to Mass Production with zero friction.",
      cta: "Start Your Project",
      bgImage: "https://picsum.photos/1920/1080?blur=4",
    },
    {
      id: 3,
      headline: "Smart Technology, Seamless Integration",
      subhead:
        "IoT-ready firmware, custom App development, and reliable cloud infrastructure.",
      cta: "View Tech Stack",
      bgImage: "https://picsum.photos/1920/1080?grayscale",
    },
  ],
  de: [
    {
      id: 1,
      headline: "Die Zukunft der Tierpflege gestalten",
      subhead:
        "Weltklasse OEM/ODM-Lösungen für intelligente Futterautomaten, Trinkbrunnen und interaktive Technik.",
      cta: "Lösungen erkunden",
      bgImage: "https://picsum.photos/1920/1080?grayscale&blur=2",
    },
    {
      id: 2,
      headline: "Ihre Vision. Unsere Innovation.",
      subhead:
        "End-to-End-Fertigung vom Industriedesign bis zur Massenproduktion ohne Reibungsverluste.",
      cta: "Projekt starten",
      bgImage: "https://picsum.photos/1920/1080?blur=4",
    },
    {
      id: 3,
      headline: "Smarte Technologie, nahtlose Integration",
      subhead:
        "IoT-fähige Firmware, individuelle App-Entwicklung und zuverlässige Cloud-Infrastruktur.",
      cta: "Tech-Stack ansehen",
      bgImage: "https://picsum.photos/1920/1080?grayscale",
    },
  ],
  fr: [
    {
      id: 1,
      headline: "Ingénierie de l'avenir des soins aux animaux",
      subhead:
        "Solutions OEM/ODM de classe mondiale pour distributeurs intelligents, fontaines et technologies interactives.",
      cta: "Explorer les solutions",
      bgImage: "https://picsum.photos/1920/1080?grayscale&blur=2",
    },
    {
      id: 2,
      headline: "Votre Vision. Notre Innovation.",
      subhead:
        "Fabrication de bout en bout, du design industriel à la production de masse.",
      cta: "Démarrer le projet",
      bgImage: "https://picsum.photos/1920/1080?blur=4",
    },
    {
      id: 3,
      headline: "Technologie intelligente, intégration transparente",
      subhead:
        "Firmware IoT, développement d'applications personnalisées et infrastructure cloud fiable.",
      cta: "Voir la technologie",
      bgImage: "https://picsum.photos/1920/1080?grayscale",
    },
  ],
  es: [
    {
      id: 1,
      headline: "Ingeniería del futuro del cuidado de mascotas",
      subhead:
        "Soluciones OEM/ODM de clase mundial para alimentadores inteligentes, fuentes y tecnología interactiva.",
      cta: "Explorar Soluciones",
      bgImage: "https://picsum.photos/1920/1080?grayscale&blur=2",
    },
    {
      id: 2,
      headline: "Su Visión. Nuestra Innovación.",
      subhead:
        "Fabricación integral desde el diseño industrial hasta la producción en masa.",
      cta: "Iniciar Proyecto",
      bgImage: "https://picsum.photos/1920/1080?blur=4",
    },
    {
      id: 3,
      headline: "Tecnología Inteligente, Integración Perfecta",
      subhead:
        "Firmware listo para IoT, desarrollo de aplicaciones personalizadas e infraestructura en la nube confiable.",
      cta: "Ver Tecnología",
      bgImage: "https://picsum.photos/1920/1080?grayscale",
    },
  ],
};

export const OEM_PROCESS: Record<Language, ProcessStep[]> = {
  en: [
    {
      number: "01",
      title: "Requirement Analysis",
      description:
        "In-depth consultation to define product specs, market positioning, and target BOM cost.",
    },
    {
      number: "02",
      title: "ID & MD Design",
      description:
        "Award-winning Industrial Design and structural engineering to ensure aesthetics meet manufacturability.",
    },
    {
      number: "03",
      title: "Prototyping",
      description:
        "Rapid 3D printing and CNC mockups for functional validation and aesthetic review.",
    },
    {
      number: "04",
      title: "Tooling & Molding",
      description:
        "In-house mold fabrication with precision CNC machining for high-fidelity parts.",
    },
    {
      number: "05",
      title: "Pilot Run (EVT/DVT/PVT)",
      description:
        "Rigorous testing phases to validate engineering, design, and production processes.",
    },
    {
      number: "06",
      title: "Mass Production",
      description:
        "Scaled manufacturing with ISO9001 quality control and global logistics support.",
    },
  ],
  de: [
    {
      number: "01",
      title: "Bedarfsanalyse",
      description:
        "Eingehende Beratung zur Definition von Produktspezifikationen und Ziel-BOM-Kosten.",
    },
    {
      number: "02",
      title: "ID & MD Design",
      description: "Preisgekröntes Industriedesign und Konstruktionstechnik.",
    },
    {
      number: "03",
      title: "Prototyping",
      description:
        "Schneller 3D-Druck und CNC-Modelle zur funktionalen Validierung.",
    },
    {
      number: "04",
      title: "Werkzeugbau",
      description: "Interne Formenfertigung mit Präzisions-CNC-Bearbeitung.",
    },
    {
      number: "05",
      title: "Pilotserie",
      description:
        "Strenge Testphasen (EVT/DVT/PVT) zur Validierung der Prozesse.",
    },
    {
      number: "06",
      title: "Massenproduktion",
      description: "Skalierte Fertigung mit ISO9001-Qualitätskontrolle.",
    },
  ],
  fr: [
    {
      number: "01",
      title: "Analyse des besoins",
      description:
        "Consultation approfondie pour définir les spécifications et le coût cible.",
    },
    {
      number: "02",
      title: "Design ID & MD",
      description: "Design industriel primé et ingénierie structurelle.",
    },
    {
      number: "03",
      title: "Prototypage",
      description: "Impression 3D rapide et maquettes CNC pour validation.",
    },
    {
      number: "04",
      title: "Outillage",
      description:
        "Fabrication de moules en interne avec usinage CNC de précision.",
    },
    {
      number: "05",
      title: "Série pilote",
      description: "Phases de test rigoureuses pour valider l'ingénierie.",
    },
    {
      number: "06",
      title: "Production de masse",
      description: "Fabrication à l'échelle avec contrôle qualité ISO9001.",
    },
  ],
  es: [
    {
      number: "01",
      title: "Análisis de Requisitos",
      description:
        "Consultoría profunda para definir especificaciones y costo objetivo.",
    },
    {
      number: "02",
      title: "Diseño ID y MD",
      description: "Diseño industrial galardonado e ingeniería estructural.",
    },
    {
      number: "03",
      title: "Prototipado",
      description: "Impresión 3D rápida y maquetas CNC para validación.",
    },
    {
      number: "04",
      title: "Moldaje",
      description:
        "Fabricación de moldes interna con mecanizado CNC de precisión.",
    },
    {
      number: "05",
      title: "Prueba Piloto",
      description: "Fases de prueba rigurosas para validar la ingeniería.",
    },
    {
      number: "06",
      title: "Producción en Masa",
      description: "Fabricación a escala con control de calidad ISO9001.",
    },
  ],
};

// --- DATA DEFINITIONS ---

//core values
export const CORE_VALUES: Record<
  Language,
  {
    title: string;
    description: string;
    items: { title: string; description: string; icon: any }[];
  }
> = {
  en: {
    title: "Why Choose Us",
    description:
      "We combine agile innovation with industrial strength to deliver category-defining products.",

    items: [
      {
        title: "R&D Excellence",
        description:
          "50+ engineers dedicated to embedded systems and AI algorithms.",
        icon: Cpu,
      },
      {
        title: "Global Standard",
        description: "ISO9001, BSCI certified manufacturing for US/EU markets.",
        icon: Globe,
      },
      {
        title: "Turnkey Solutions",
        description: "From ID design to mass production and logistics.",
        icon: PackageCheck,
      },
      {
        title: "Smart Ecosystem",
        description: "Unified App platform for all connected devices.",
        icon: Smartphone,
      },
    ],
  },

  de: {
    title: "Warum Uns Wählen",
    description:
      "Wir verbinden agile Innovation mit industrieller Stärke, um marktprägende Produkte zu liefern.",

    items: [
      {
        title: "F&E Exzellenz",
        description: "50+ Ingenieure für eingebettete Systeme und KI.",
        icon: Cpu,
      },
      {
        title: "Weltweiter Standard",
        description:
          "ISO9001- und BSCI-zertifizierte Fertigung für US/EU-Märkte.",
        icon: Globe,
      },
      {
        title: "Komplettlösungen",
        description: "Vom ID-Design bis zur Massenproduktion und Logistik.",
        icon: PackageCheck,
      },
      {
        title: "Smartes Ökosystem",
        description: "Einheitliche App-Plattform für alle vernetzten Geräte.",
        icon: Smartphone,
      },
    ],
  },

  fr: {
    title: "Pourquoi Nous Choisir",
    description:
      "Nous combinons innovation agile et puissance industrielle pour proposer des produits de référence.",

    items: [
      {
        title: "Excellence R&D",
        description:
          "Plus de 50 ingénieurs dédiés aux systèmes embarqués et à l’IA.",
        icon: Cpu,
      },
      {
        title: "Normes Internationales",
        description:
          "Fabrication certifiée ISO9001 et BSCI pour les marchés US/UE.",
        icon: Globe,
      },
      {
        title: "Solutions Clés en Main",
        description:
          "Du design industriel à la production de masse et à la logistique.",
        icon: PackageCheck,
      },
      {
        title: "Écosystème Intelligent",
        description:
          "Plateforme applicative unifiée pour tous les appareils connectés.",
        icon: Smartphone,
      },
    ],
  },

  es: {
    title: "Por Qué Elegirnos",
    description:
      "Combinamos innovación ágil con fortaleza industrial para ofrecer productos líderes en su categoría.",

    items: [
      {
        title: "Excelencia en I+D",
        description:
          "Más de 50 ingenieros dedicados a sistemas integrados y algoritmos de IA.",
        icon: Cpu,
      },
      {
        title: "Estándar Global",
        description:
          "Fabricación certificada ISO9001 y BSCI para mercados de EE. UU. y la UE.",
        icon: Globe,
      },
      {
        title: "Soluciones Llave en Mano",
        description:
          "Desde el diseño industrial hasta la producción en masa y la logística.",
        icon: PackageCheck,
      },
      {
        title: "Ecosistema Inteligente",
        description:
          "Plataforma de aplicaciones unificada para todos los dispositivos conectados.",
        icon: Smartphone,
      },
    ],
  },
};


// not in use
//create a product translation map

// export const PRODUCT_TRANSLATIONS: Record<
//   Language,
//   Record<
//     string,
//     {
//       name: string;
//       tagline: string;
//       description: string;
//       features: string[];
//       oemOptions?: string[];
//       whatsInTheBox?: string[];
//       marketingSections?: {
//         title: string;
//         content: string;
//       }[];
//       faq?: {
//         question: string;
//         answer: string;
//       }[];
//     }
//   >
// > = {
//   /* ======================= EN ======================= */
//   en: {
//     L2: {
//       name: "EcoRay Laser L2",
//       tagline: "Professional Veterinary Grade Cold Laser Therapy",
//       description:
//         "A handheld dual-wavelength laser therapy device designed for pet pain relief, wound healing, and inflammation reduction. Safe for home use.",
//       features: [
//         "650nm + 808nm Dual Wave",
//         "2600mAh Long Battery",
//         "Ergonomic Grip",
//         "LCD Display",
//       ],
//       whatsInTheBox: [
//         "Laser Device",
//         "Protective Glasses",
//         "Charger",
//         "User Manual",
//         "Carrying Case",
//       ],
//       marketingSections: [
//         {
//           title: "Advanced Pain Relief",
//           content:
//             "Uses photobiomodulation technology to accelerate tissue repair and reduce inflammation.",
//         },
//         {
//           title: "Safe for Home Use",
//           content:
//             "Built-in intelligent timer and safety lock ensure secure daily operation.",
//         },
//       ],
//       faq: [
//         {
//           question: "Is it safe?",
//           answer: "Yes, it is FDA cleared for safe home use.",
//         },
//       ],
//     },

//     H2: {
//       name: "Azure PDT Infrared Health Scanner",
//       tagline: "Smart Infrared Therapy & ICU Unit",
//       description:
//         "Revolutionary smart pet ICU combining infrared health scanning with tri-band PDT therapy for accelerated recovery.",
//       features: [
//         "Dual-Spectrum IR Scanning",
//         "Tri-Band PDT Therapy",
//         "Smart ICU Climate Control",
//         "Negative Ion Purification",
//         "App Monitoring",
//       ],
//       whatsInTheBox: [
//         "Azure PDT Unit",
//         "Power Cord",
//         "Nebulizer Hose Kit",
//         "Removable Floor Tray",
//         "User Manual",
//       ],
//       marketingSections: [
//         {
//           title: "Science of Light & Sensing",
//           content:
//             "Combines real-time IR health monitoring with therapeutic photodynamic light treatment.",
//         },
//         {
//           title: "Hospital-Grade ICU Environment",
//           content:
//             "Maintains precise temperature and humidity with medical-grade air purification.",
//         },
//       ],
//       faq: [
//         {
//           question: "What is the MOQ?",
//           answer:
//             "50 units for logo branding, 300 units for full customization.",
//         },
//         {
//           question: "Is infrared light safe?",
//           answer: "Yes, it uses safe dispersed LED arrays.",
//         },
//       ],
//     },

//     H1: {
//       name: "AI Diagnosis Pad",
//       tagline: "Early Detection of Joint & Weight Issues",
//       description:
//         "Smart pressure-sensitive pad that analyzes gait and weight distribution to detect early health risks.",
//       features: [
//         "Gait Analysis",
//         "Weight Monitoring",
//         "App Reports",
//         "Easy to Clean",
//       ],
//       whatsInTheBox: ["Diagnosis Pad", "Power Adapter", "Quick Start Guide"],
//     },

//     AP1: {
//       name: "Smart Pet Air Purifier",
//       tagline: "Eliminates Dander & Odor",
//       description:
//         "High-efficiency HEPA air purifier specifically engineered for pet households.",
//       features: [
//         "HEPA-13 Filter",
//         "Odor Sensor",
//         "Quiet Sleep Mode",
//         "App Control",
//       ],
//       whatsInTheBox: ["Air Purifier Unit", "HEPA Filter", "User Manual"],
//     },

//     TT1: {
//       name: "Smart Training Tower",
//       tagline: "Interactive Puzzle & Treat Dispenser",
//       description:
//         "Engaging smart toy with progressive puzzles and app-controlled rewards.",
//       features: [
//         "3 Puzzle Levels",
//         "Audio Cues",
//         "Treat Dispenser",
//         "Activity Log",
//       ],
//       whatsInTheBox: ["Training Tower", "Treat Loader", "User Manual"],
//     },

//     F1: {
//       name: "EcoFeed Pro X1",
//       tagline: "Precision Auto-Feeding Solution",
//       description:
//         "Smart automatic feeder with anti-jam technology and built-in camera.",
//       features: [
//         "1080p Camera",
//         "Dual Power Supply",
//         "Anti-Jam Rotor",
//         "Freshness Seal",
//       ],
//       whatsInTheBox: [
//         "Smart Feeder",
//         "Stainless Bowl",
//         "Power Adapter",
//         "Desiccant Pack",
//       ],
//     },

//     W1: {
//       name: "HydraPure Ultra",
//       tagline: "Wireless Pump Technology",
//       description:
//         "Ultra-quiet smart water fountain with wireless pump and UV sterilization.",
//       features: [
//         "Wireless Pump",
//         "UV Sterilization",
//         "Battery Backup",
//         "Filter Alert",
//       ],
//       whatsInTheBox: [
//         "Water Fountain",
//         "Filter",
//         "Wireless Pump Base",
//         "USB Cable",
//       ],
//     },

//     C1: {
//       name: "Sentinel 360",
//       tagline: "AI Tracking Pet Camera",
//       description:
//         "Smart pet camera with AI tracking, night vision, and two-way audio.",
//       features: [
//         "360° Pan & Tilt",
//         "Night Vision",
//         "Bark Detection",
//         "Laser Toy",
//       ],
//       whatsInTheBox: [
//         "Camera Unit",
//         "Wall Mount",
//         "Power Adapter",
//         "User Manual",
//       ],
//     },

//     L1: {
//       name: "CleanStep Auto",
//       tagline: "Self-Cleaning Litter Robot",
//       description:
//         "Automatic litter box with odor control and intelligent safety sensors.",
//       features: [
//         "Auto Scooping",
//         "Odor Control",
//         "Health Tracking",
//         "Safety Stop",
//       ],
//       whatsInTheBox: ["Litter Box", "Waste Liners", "Power Adapter"],
//     },
//   },

//   /* ======================= DE ======================= */
//   de: {
//     L2: {
//       name: "EcoRay Laser L2",
//       tagline: "Professionelle veterinärmedizinische Kaltlaser-Therapie",
//       description:
//         "Handliches Dual-Wellenlängen-Lasertherapiegerät zur Schmerzlinderung, Wundheilung und Entzündungshemmung bei Haustieren.",
//       features: [
//         "650nm + 808nm Doppelwellenlänge",
//         "2600mAh Hochleistungsakku",
//         "Ergonomischer Griff",
//         "LCD-Anzeige",
//       ],
//     },

//     H2: {
//       name: "Azure PDT Infrarot-Gesundheitsscanner",
//       tagline: "Smartes Infrarot-Therapie- & ICU-System",
//       description:
//         "Revolutionäre Smart-Pet-ICU mit Infrarot-Gesundheitsscanning und PDT-Therapie.",
//       features: [
//         "Dual-Spektrum-Infrarotscan",
//         "Tri-Band PDT-Therapie",
//         "Intelligente ICU-Klimasteuerung",
//         "Negative-Ionen-Reinigung",
//         "App-Überwachung",
//       ],
//     },

//     H1: {
//       name: "KI-Diagnosematte",
//       tagline: "Früherkennung von Gelenk- und Gewichtsproblemen",
//       description:
//         "Druckempfindliche Matte zur Analyse von Gangbild und Gewichtsverteilung.",
//       features: [
//         "Ganganalyse",
//         "Gewichtsüberwachung",
//         "App-Berichte",
//         "Leicht zu reinigen",
//       ],
//     },

//     AP1: {
//       name: "Smart Haustier-Luftreiniger",
//       tagline: "Beseitigt Gerüche und Tierhaare",
//       description:
//         "Hocheffizienter HEPA-Luftreiniger speziell für Haustierumgebungen.",
//       features: [
//         "HEPA-13-Filter",
//         "Geruchssensor",
//         "Leiser Nachtmodus",
//         "App-Steuerung",
//       ],
//     },

//     TT1: {
//       name: "Smart Training Turm",
//       tagline: "Interaktives Puzzle- & Belohnungsspielzeug",
//       description:
//         "Intelligentes Trainingsspielzeug mit App-gesteuerten Belohnungen.",
//       features: [
//         "3 Puzzle-Stufen",
//         "Audio-Signale",
//         "Leckerli-Spender",
//         "Aktivitätsprotokoll",
//       ],
//     },

//     F1: {
//       name: "EcoFeed Pro X1",
//       tagline: "Präzise automatische Fütterung",
//       description:
//         "Intelligenter Futterautomat mit Anti-Blockier-System und Kamera.",
//       features: [
//         "1080p Kamera",
//         "Doppelte Stromversorgung",
//         "Anti-Verklemmungsrotor",
//         "Frischeversiegelung",
//       ],
//     },

//     W1: {
//       name: "HydraPure Ultra",
//       tagline: "Kabellose Pumpentechnologie",
//       description: "Flüsterleiser Wasserspender mit UV-Sterilisation.",
//       features: [
//         "Kabellose Pumpe",
//         "UV-Sterilisation",
//         "Batterie-Backup",
//         "Filterwarnung",
//       ],
//     },

//     C1: {
//       name: "Sentinel 360",
//       tagline: "KI-gestützte Haustierkamera",
//       description: "360°-Haustierkamera mit KI-Tracking und Nachtsicht.",
//       features: [
//         "360° Schwenk & Neigung",
//         "Nachtsicht",
//         "Bellerkennung",
//         "Laser-Spielzeug",
//       ],
//     },

//     L1: {
//       name: "CleanStep Auto",
//       tagline: "Selbstreinigende Katzentoilette",
//       description:
//         "Automatische Katzentoilette mit Geruchskontrolle und Sicherheitsfunktionen.",
//       features: [
//         "Automatische Reinigung",
//         "Geruchskontrolle",
//         "Gesundheitsüberwachung",
//         "Sicherheitsstopp",
//       ],
//     },
//   },

//   /* ======================= FR ======================= */
//   fr: {
//     L2: {
//       name: "EcoRay Laser L2",
//       tagline: "Thérapie laser vétérinaire professionnelle",
//       description:
//         "Appareil laser portable à double longueur d’onde pour soulager la douleur et accélérer la guérison.",
//       features: [
//         "Double onde 650nm + 808nm",
//         "Batterie longue durée 2600mAh",
//         "Prise ergonomique",
//         "Écran LCD",
//       ],
//     },

//     H2: {
//       name: "Scanner de santé infrarouge Azure PDT",
//       tagline: "Unité ICU intelligente à infrarouge",
//       description:
//         "ICU intelligente combinant analyse infrarouge et thérapie PDT.",
//       features: [
//         "Scan infrarouge double spectre",
//         "Thérapie PDT tri-bande",
//         "Contrôle climatique intelligent",
//         "Purification par ions négatifs",
//         "Surveillance via application",
//       ],
//     },

//     H1: {
//       name: "Tapis de diagnostic IA",
//       tagline: "Détection précoce des problèmes articulaires",
//       description:
//         "Tapis intelligent analysant la démarche et la répartition du poids.",
//       features: [
//         "Analyse de la démarche",
//         "Suivi du poids",
//         "Rapports via application",
//         "Nettoyage facile",
//       ],
//     },

//     AP1: {
//       name: "Purificateur d’air intelligent",
//       tagline: "Élimine poils et odeurs",
//       description:
//         "Purificateur HEPA haute efficacité pour foyers avec animaux.",
//       features: [
//         "Filtre HEPA-13",
//         "Capteur d’odeurs",
//         "Mode silencieux",
//         "Contrôle via application",
//       ],
//     },

//     TT1: {
//       name: "Tour d’entraînement intelligente",
//       tagline: "Jouet interactif distributeur de friandises",
//       description:
//         "Jouet intelligent stimulant avec récompenses contrôlées par application.",
//       features: [
//         "3 niveaux de puzzle",
//         "Signaux audio",
//         "Distributeur de friandises",
//         "Suivi d’activité",
//       ],
//     },

//     F1: {
//       name: "EcoFeed Pro X1",
//       tagline: "Solution d’alimentation automatique",
//       description:
//         "Distributeur intelligent avec caméra intégrée et système anti-blocage.",
//       features: [
//         "Caméra 1080p",
//         "Double alimentation",
//         "Rotor anti-blocage",
//         "Joint de fraîcheur",
//       ],
//     },

//     W1: {
//       name: "HydraPure Ultra",
//       tagline: "Technologie de pompe sans fil",
//       description: "Fontaine à eau silencieuse avec stérilisation UV.",
//       features: [
//         "Pompe sans fil",
//         "Stérilisation UV",
//         "Batterie de secours",
//         "Alerte de filtre",
//       ],
//     },

//     C1: {
//       name: "Sentinel 360",
//       tagline: "Caméra intelligente avec suivi IA",
//       description: "Caméra 360° avec vision nocturne et suivi intelligent.",
//       features: [
//         "Rotation 360°",
//         "Vision nocturne",
//         "Détection des aboiements",
//         "Laser interactif",
//       ],
//     },

//     L1: {
//       name: "CleanStep Auto",
//       tagline: "Litière autonettoyante",
//       description:
//         "Litière automatique avec contrôle des odeurs et sécurité intelligente.",
//       features: [
//         "Nettoyage automatique",
//         "Contrôle des odeurs",
//         "Suivi santé",
//         "Arrêt de sécurité",
//       ],
//     },
//   },

//   /* ======================= ES ======================= */
//   es: {
//     L2: {
//       name: "EcoRay Laser L2",
//       tagline: "Terapia láser veterinaria profesional",
//       description:
//         "Dispositivo láser portátil de doble longitud de onda para alivio del dolor y recuperación.",
//       features: [
//         "Doble onda 650nm + 808nm",
//         "Batería de larga duración 2600mAh",
//         "Agarre ergonómico",
//         "Pantalla LCD",
//       ],
//     },

//     H2: {
//       name: "Escáner de Salud Infrarrojo Azure PDT",
//       tagline: "Unidad ICU inteligente con infrarrojos",
//       description:
//         "Unidad ICU inteligente que combina escaneo infrarrojo y terapia PDT.",
//       features: [
//         "Escaneo infrarrojo de doble espectro",
//         "Terapia PDT tri-banda",
//         "Control climático inteligente",
//         "Purificación por iones negativos",
//         "Monitoreo por app",
//       ],
//     },

//     H1: {
//       name: "Alfombrilla de Diagnóstico IA",
//       tagline: "Detección temprana de problemas articulares",
//       description:
//         "Alfombrilla inteligente que analiza la pisada y distribución del peso.",
//       features: [
//         "Análisis de la marcha",
//         "Monitoreo de peso",
//         "Reportes en app",
//         "Fácil limpieza",
//       ],
//     },

//     AP1: {
//       name: "Purificador de Aire Inteligente",
//       tagline: "Elimina olores y caspa",
//       description:
//         "Purificador HEPA de alta eficiencia diseñado para hogares con mascotas.",
//       features: [
//         "Filtro HEPA-13",
//         "Sensor de olores",
//         "Modo silencioso",
//         "Control por app",
//       ],
//     },

//     TT1: {
//       name: "Torre de Entrenamiento Inteligente",
//       tagline: "Juguete interactivo dispensador de premios",
//       description: "Juguete inteligente con puzzles progresivos y recompensas.",
//       features: [
//         "3 niveles de juego",
//         "Señales de audio",
//         "Dispensador de premios",
//         "Registro de actividad",
//       ],
//     },

//     F1: {
//       name: "EcoFeed Pro X1",
//       tagline: "Alimentación automática de precisión",
//       description:
//         "Comedero inteligente con cámara integrada y sistema anti-atascos.",
//       features: [
//         "Cámara 1080p",
//         "Doble fuente de energía",
//         "Rotor anti-atascos",
//         "Sellado de frescura",
//       ],
//     },

//     W1: {
//       name: "HydraPure Ultra",
//       tagline: "Tecnología de bomba inalámbrica",
//       description: "Fuente de agua silenciosa con esterilización UV.",
//       features: [
//         "Bomba inalámbrica",
//         "Esterilización UV",
//         "Batería de respaldo",
//         "Alerta de filtro",
//       ],
//     },

//     C1: {
//       name: "Sentinel 360",
//       tagline: "Cámara inteligente con seguimiento IA",
//       description: "Cámara 360° con visión nocturna y seguimiento automático.",
//       features: [
//         "Rotación 360°",
//         "Visión nocturna",
//         "Detección de ladridos",
//         "Juguete láser",
//       ],
//     },

//     L1: {
//       name: "CleanStep Auto",
//       tagline: "Arenero autolimpiante",
//       description:
//         "Arenero automático con control de olores y sensores de seguridad.",
//       features: [
//         "Limpieza automática",
//         "Control de olores",
//         "Seguimiento de salud",
//         "Parada de seguridad",
//       ],
//     },
//   },
// };


// const PRODUCT_DATA_EN: ProductItem[] = [
//   {
//     id: "L2",
//     category: "Smart Health",
//     name: "EcoRay Laser L2",
//     tagline: "Professional Veterinary Grade Cold Laser Therapy",
//     description:
//       "A handheld dual-wavelength laser therapy device designed for pet pain relief, wound healing, and inflammation reduction. Safe for home use.",
//     features: [
//       "650nm + 808nm Dual Wave",
//       "2600mAh Long Battery",
//       "Ergonomic Grip",
//       "LCD Display",
//     ],
//     specs: [
//       { labelKey: "Laser Type", value: "Class 3B" },
//       { labelKey: "Battery", value: "2600mAh Li-ion" },
//       { labelKey: "Wavelength", value: "650nm & 808nm" },
//     ],
//     image: "https://picsum.photos/600/600?random=1",
//     gallery: [
//       "https://picsum.photos/800/800?random=1",
//       "https://picsum.photos/800/800?random=11",
//       "https://picsum.photos/800/800?random=12",
//       "https://picsum.photos/800/800?random=13",
//       "https://picsum.photos/800/800?random=14",
//     ],
//     detailImages: [
//       "https://picsum.photos/1000/600?random=101",
//       "https://picsum.photos/1000/600?random=102",
//     ],
//     oemOptions: ["Logo Printing", "Custom Wavelength", "Packaging"],
//     marketingSections: [
//       {
//         title: "Advanced Pain Relief",
//         content: "Uses photobiomodulation to accelerate tissue repair.",
//         image: "https://picsum.photos/800/600?random=201",
//         imageAlign: "right",
//       },
//       {
//         title: "Safe for Home Use",
//         content: "Intelligent timer and safety lock ensure secure operation.",
//         image: "https://picsum.photos/800/600?random=202",
//         imageAlign: "left",
//       },
//     ],
//     whatsInTheBox: [
//       "Laser Device",
//       "Protective Glasses",
//       "Charger",
//       "User Manual",
//       "Carrying Case",
//     ],
//     faq: [
//       {
//         question: "Is it safe?",
//         answer: "Yes, it is FDA cleared for home use.",
//       },
//     ],
//   },
//   {
//     id: "H2",
//     category: "Smart Health",
//     name: "Azure PDT Infrared Health Scanner",
//     tagline: "Smart Infrared Therapy & ICU Unit",
//     description:
//       "Revolutionary B2B Smart Pet ICU with Infrared Health Scanning and dual-wavelength PDT therapy for rapid recovery. Combines diagnostic monitoring (temp/respiration) with medical-grade healing light.",
//     features: [
//       "Dual-Spectrum IR Scanning",
//       "Tri-Band PDT (Red/Blue/IR)",
//       "Smart ICU Climate Control",
//       "Negative Ion Purification",
//       "App Monitoring",
//     ],
//     specs: [
//       { labelKey: "Wavelengths", value: "Red 630nm / Blue 415nm / IR 850nm" },
//       { labelKey: "Internal Volume", value: "88L (Fits pets < 15kg)" },
//       { labelKey: "Temp Control", value: "18°C - 38°C (±0.5°C)" },
//       { labelKey: "Power", value: "1200W Max / 50W Eco" },
//       { labelKey: "Material", value: "Medical Grade ABS + Tempered Glass" },
//     ],
//     image: "https://picsum.photos/600/600?random=20",
//     gallery: [
//       "https://picsum.photos/800/800?random=21",
//       "https://picsum.photos/800/800?random=22",
//       "https://picsum.photos/800/800?random=23",
//     ],
//     detailImages: [],
//     oemOptions: [
//       "Brand Identity (Logo/Glass)",
//       "Custom Pantone Color",
//       "App UI Customization",
//       "Firmware Logic",
//     ],
//     whatsInTheBox: [
//       "Azure PDT Unit",
//       "Power Cord",
//       "Nebulizer Hose Kit",
//       "Removable Floor Tray",
//       "User Manual",
//     ],
//     marketingSections: [
//       {
//         title: "The Science of Light & Sensing",
//         content:
//           "Dual-modality system: Real-time health scanning via IR sensors detects fever and distress, while Tri-Band PDT (Red/Blue/IR) accelerates tissue repair and treats skin conditions.",
//         image: "https://picsum.photos/800/600?random=201",
//         imageAlign: "right",
//       },
//       {
//         title: "Hospital-Grade ICU Environment",
//         content:
//           "Maintains precise temperature (18-38°C) and humidity for critical care. Built-in negative ion purification removes 99.9% of airborne pathogens.",
//         image: "https://picsum.photos/800/600?random=202",
//         imageAlign: "left",
//       },
//     ],
//     faq: [
//       {
//         question: "What is the MOQ for private label?",
//         answer: "50 units for logo, 300 units for full color customization.",
//       },
//       {
//         question: "Is the IR light safe?",
//         answer: "Yes, it uses dispersed LED arrays safe for ambient exposure.",
//       },
//       {
//         question: "Does it support nebulization?",
//         answer: "Yes, includes an external port for medical nebulizers.",
//       },
//     ],
//   },
//   {
//     id: "H1",
//     category: "Smart Health",
//     name: "AI Diagnosis Pad",
//     tagline: "Early Detection of Joint & Weight Issues",
//     description:
//       "Smart pressure-sensitive pad that analyzes pet gait and weight distribution to detect early signs of arthritis or injury.",
//     features: [
//       "Gait Analysis",
//       "Weight Monitoring",
//       "App Reports",
//       "Easy Clean",
//     ],
//     specs: [
//       { labelKey: "Sensors", value: "1024 Pressure Points" },
//       { labelKey: "Connectivity", value: "Wi-Fi + BLE" },
//     ],
//     image: "https://picsum.photos/600/600?random=2",
//     gallery: ["https://picsum.photos/800/800?random=2"],
//     detailImages: [],
//     oemOptions: ["App Branding", "Size Customization"],
//     whatsInTheBox: ["Diagnosis Pad", "Power Adapter", "Quick Start Guide"],
//   },
//   {
//     id: "AP1",
//     category: "Smart Air Quality",
//     name: "Smart Pet Air Purifier",
//     tagline: "Eliminates Dander & Odor",
//     description:
//       "HEPA-13 purification system specifically tuned to capture pet hair, dander, and neutralize ammonia odors.",
//     features: [
//       "HEPA-13 Filter",
//       "Odor Sensor",
//       "Quiet Sleep Mode",
//       "App Control",
//     ],
//     specs: [
//       { labelKey: "CADR", value: "400m³/h" },
//       { labelKey: "Noise", value: "<30dB" },
//     ],
//     image: "https://picsum.photos/600/600?random=3",
//     gallery: ["https://picsum.photos/800/800?random=3"],
//     detailImages: [],
//     oemOptions: ["Filter Composition", "Housing Color"],
//     whatsInTheBox: ["Purifier Unit", "HEPA Filter", "Manual"],
//   },
//   {
//     id: "TT1",
//     category: "Smart Training",
//     name: "Smart Training Tower",
//     tagline: "Interactive Puzzle & Treat Dispenser",
//     description:
//       "Keeps pets engaged with progressive puzzle levels and automatic treat rewards controlled via App.",
//     features: [
//       "3 Puzzle Levels",
//       "Audio Cues",
//       "Treat Dispenser",
//       "Activity Log",
//     ],
//     specs: [
//       { labelKey: "Capacity", value: "500g Treats" },
//       { labelKey: "Material", value: "Food Grade ABS" },
//     ],
//     image: "https://picsum.photos/600/600?random=4",
//     gallery: ["https://picsum.photos/800/800?random=4"],
//     detailImages: [],
//     oemOptions: ["Game Logic", "Sound Packs"],
//     whatsInTheBox: ["Training Tower", "Treat Loader", "Manual"],
//   },
//   {
//     id: "F1",
//     category: "Smart Feeders",
//     name: "EcoFeed Pro X1",
//     tagline: "Precision Auto-Feeding Solution",
//     description:
//       "Jam-free dispensing mechanism suitable for freeze-dried food. Integrated camera for remote monitoring.",
//     features: [
//       "1080p Camera",
//       "Dual Power Supply",
//       "Anti-Jam Rotor",
//       "Freshness Seal",
//     ],
//     specs: [
//       { labelKey: "Capacity", value: "4L / 17 Cups" },
//       { labelKey: "Food Size", value: "2-12mm" },
//     ],
//     image: "https://picsum.photos/600/600?random=5",
//     gallery: ["https://picsum.photos/800/800?random=5"],
//     detailImages: [],
//     oemOptions: ["Logo", "App Skin", "Color"],
//     whatsInTheBox: ["Feeder", "Stainless Bowl", "Adapter", "Desiccant"],
//     tags: ["hot"],
//   },
//   {
//     id: "W1",
//     category: "Smart Fountains",
//     name: "HydraPure Ultra",
//     tagline: "Wireless Pump Tech",
//     description:
//       "Ultra-quiet water fountain with wireless pump technology for easy cleaning and maximum safety.",
//     features: [
//       "Wireless Pump",
//       "UV Sterilization",
//       "Battery Backup",
//       "Filter Alert",
//     ],
//     specs: [
//       { labelKey: "Capacity", value: "2.5L" },
//       { labelKey: "Noise", value: "<20dB" },
//     ],
//     image: "https://picsum.photos/600/600?random=6",
//     gallery: ["https://picsum.photos/800/800?random=6"],
//     detailImages: [],
//     oemOptions: ["Filter Type", "Logo"],
//     whatsInTheBox: ["Fountain", "Filter", "Wireless Pump Base", "Cable"],
//     tags: ["hot"],
//   },
//   {
//     id: "C1",
//     category: "Pet Cameras",
//     name: "Sentinel 360",
//     tagline: "AI Tracking Pet Camera",
//     description:
//       "360-degree rotation with AI pet detection and auto-tracking. Two-way audio to comfort pets remotely.",
//     features: ["360° Pan/Tilt", "Night Vision", "Bark Alert", "Laser Toy"],
//     specs: [
//       { labelKey: "Resolution", value: "2K QHD" },
//       { labelKey: "Storage", value: "Cloud/SD" },
//     ],
//     image: "https://picsum.photos/600/600?random=7",
//     gallery: ["https://picsum.photos/800/800?random=7"],
//     detailImages: [],
//     oemOptions: ["Housing Design", "App Branding"],
//     whatsInTheBox: ["Camera", "Wall Mount", "Adapter", "Manual"],
//     tags: ["hot"],
//   },
//   {
//     id: "L1",
//     category: "Smart Litter Boxes",
//     name: "CleanStep Auto",
//     tagline: "Self-Cleaning Litter Robot",
//     description:
//       "Automatic scooping and odor control. Safety sensors prevent operation when cat is present.",
//     features: ["Auto Scoop", "Odor Control", "Health Tracking", "Safety Stop"],
//     specs: [
//       { labelKey: "Capacity", value: "65L" },
//       { labelKey: "Cat Weight", value: "1-10kg" },
//     ],
//     image: "https://picsum.photos/600/600?random=8",
//     gallery: ["https://picsum.photos/800/800?random=8"],
//     detailImages: [],
//     oemOptions: ["Logo", "Color"],
//     whatsInTheBox: ["Litter Box", "Waste Liners", "Adapter"],
//     tags: ["hot"],
//   },
// ];

// const translateProducts = (lang: string): ProductItem[] => {
//   return PRODUCT_DATA_EN.map((p) => ({
//     ...p,
//     description: `[${lang.toUpperCase()}] ${p.description}`,
//     tagline: `[${lang.toUpperCase()}] ${p.tagline}`,
//   }));
// };

// export const PRODUCTS: Record<Language, ProductItem[]> = {
//   en: PRODUCT_DATA_EN,
//   de: translateProducts("de"),
//   fr: translateProducts("fr"),
//   es: translateProducts("es"),
// };

export const BLOG_POSTS: Record<Language, BlogPost[]> = {
  en: [
    {
      id: "1",
      title: "The Rise of AI in Pet Care",
      excerpt:
        "How artificial intelligence is transforming pet health monitoring with predictive analytics and behavior tracking.",
      date: "Oct 12, 2024",
      image: "https://picsum.photos/600/400?random=10",
      category: "Technology",
    },
    {
      id: "2",
      title: "Sustainable Manufacturing",
      excerpt:
        "EcoPetKit's commitment to using recycled ABS materials and eco-friendly packaging in our production lines.",
      date: "Sep 28, 2024",
      image: "https://picsum.photos/600/400?random=11",
      category: "Industry",
    },
    {
      id: "3",
      title: "2025 Pet Tech Trends",
      excerpt:
        "What to expect in the next generation of smart feeders: Voice integration, facial recognition, and more.",
      date: "Sep 15, 2024",
      image: "https://picsum.photos/600/400?random=12",
      category: "Market",
    },
    {
      id: "4",
      title: "Selecting the Right OEM Partner",
      excerpt:
        "Key factors to consider when choosing a manufacturing partner for your smart pet device startup.",
      date: "Aug 22, 2024",
      image: "https://picsum.photos/600/400?random=13",
      category: "Business",
    },
    {
      id: "5",
      title: "Understanding IP Ratings",
      excerpt:
        "Why waterproofing matters for smart fountains and outdoor pet trackers. A guide to IPX standards.",
      date: "Aug 10, 2024",
      image: "https://picsum.photos/600/400?random=14",
      category: "Technology",
    },
    {
      id: "6",
      title: "Global Supply Chain Updates",
      excerpt:
        "Navigating logistics challenges in Q4 2024. How we ensure on-time delivery for holiday seasons.",
      date: "Jul 30, 2024",
      image: "https://picsum.photos/600/400?random=15",
      category: "Logistics",
    },
  ],
  de: [
    {
      id: "1",
      title: "Aufstieg der KI in der Tierpflege",
      excerpt:
        "Wie künstliche Intelligenz die Gesundheitsüberwachung verändert.",
      date: "12. Okt 2024",
      image: "https://picsum.photos/600/400?random=10",
      category: "Technologie",
    },
    {
      id: "2",
      title: "Nachhaltige Fertigung",
      excerpt: "EcoPetKits Verpflichtung zu recycelten Materialien.",
      date: "28. Sep 2024",
      image: "https://picsum.photos/600/400?random=11",
      category: "Industrie",
    },
    {
      id: "3",
      title: "Pet Tech Trends 2025",
      excerpt: "Was wir von der nächsten Generation erwarten können.",
      date: "15. Sep 2024",
      image: "https://picsum.photos/600/400?random=12",
      category: "Markt",
    },
    {
      id: "4",
      title: "Wahl des richtigen OEM-Partners",
      excerpt: "Schlüsselfaktoren bei der Auswahl eines Fertigungspartners.",
      date: "22. Aug 2024",
      image: "https://picsum.photos/600/400?random=13",
      category: "Business",
    },
    {
      id: "5",
      title: "IP-Schutzarten verstehen",
      excerpt: "Warum Wasserdichtigkeit wichtig ist.",
      date: "10. Aug 2024",
      image: "https://picsum.photos/600/400?random=14",
      category: "Technologie",
    },
    {
      id: "6",
      title: "Lieferketten-Updates",
      excerpt: "Logistikherausforderungen im Q4 2024.",
      date: "30. Jul 2024",
      image: "https://picsum.photos/600/400?random=15",
      category: "Logistik",
    },
  ],
  fr: [
    {
      id: "1",
      title: "L'IA dans les soins aux animaux",
      excerpt: "Comment l'IA transforme le suivi de santé.",
      date: "12 Oct 2024",
      image: "https://picsum.photos/600/400?random=10",
      category: "Technologie",
    },
    {
      id: "2",
      title: "Fabrication Durable",
      excerpt: "L'engagement d'EcoPetKit pour les matériaux recyclés.",
      date: "28 Sep 2024",
      image: "https://picsum.photos/600/400?random=11",
      category: "Industrie",
    },
    {
      id: "3",
      title: "Tendances Pet Tech 2025",
      excerpt: "À quoi s'attendre pour la prochaine génération.",
      date: "15 Sep 2024",
      image: "https://picsum.photos/600/400?random=12",
      category: "Marché",
    },
    {
      id: "4",
      title: "Choisir le bon partenaire OEM",
      excerpt: "Facteurs clés pour choisir un partenaire de fabrication.",
      date: "22 Aoû 2024",
      image: "https://picsum.photos/600/400?random=13",
      category: "Business",
    },
    {
      id: "5",
      title: "Comprendre les indices IP",
      excerpt: "Pourquoi l'étanchéité est importante.",
      date: "10 Aoû 2024",
      image: "https://picsum.photos/600/400?random=14",
      category: "Technologie",
    },
    {
      id: "6",
      title: "Mises à jour logistiques",
      excerpt: "Naviguer dans les défis logistiques du T4 2024.",
      date: "30 Juil 2024",
      image: "https://picsum.photos/600/400?random=15",
      category: "Logistique",
    },
  ],
  es: [
    {
      id: "1",
      title: "El auge de la IA en cuidado de mascotas",
      excerpt: "Cómo la IA transforma el monitoreo de salud.",
      date: "12 Oct 2024",
      image: "https://picsum.photos/600/400?random=10",
      category: "Tecnología",
    },
    {
      id: "2",
      title: "Fabricación Sostenible",
      excerpt: "El compromiso de EcoPetKit con materiales reciclados.",
      date: "28 Sep 2024",
      image: "https://picsum.photos/600/400?random=11",
      category: "Industria",
    },
    {
      id: "3",
      title: "Tendencias Pet Tech 2025",
      excerpt: "Qué esperar de la próxima generación.",
      date: "15 Sep 2024",
      image: "https://picsum.photos/600/400?random=12",
      category: "Mercado",
    },
    {
      id: "4",
      title: "Elegir el socio OEM adecuado",
      excerpt: "Factores clave al elegir un socio de fabricación.",
      date: "22 Ago 2024",
      image: "https://picsum.photos/600/400?random=13",
      category: "Negocios",
    },
    {
      id: "5",
      title: "Entendiendo las clasificaciones IP",
      excerpt: "Por qué importa la impermeabilización.",
      date: "10 Ago 2024",
      image: "https://picsum.photos/600/400?random=14",
      category: "Tecnología",
    },
    {
      id: "6",
      title: "Actualizaciones de la cadena de suministro",
      excerpt: "Navegando los desafíos logísticos en Q4 2024.",
      date: "30 Jul 2024",
      image: "https://picsum.photos/600/400?random=15",
      category: "Logística",
    },
  ],
};


//faq


export const FAQ_CONTENT: Record<Language, FAQPageContent> = {
  en: {
    banner: {
      title: "Frequently Asked Questions",
      description:
        "Common questions about OEM/ODM partnership, shipping, and warranty.",
    },
    items: [
      {
        question: "What is the MOQ for private label?",
        answer:
          "Typically 500 units for logo printing and 1,000 units for custom packaging.",
      },
      {
        question: "Do you provide SDK for App integration?",
        answer:
          "Yes, we provide Tuya IoT SDK or can develop a custom API for your cloud.",
      },
      {
        question: "What are your payment terms?",
        answer:
          "Standard terms are 30% deposit and 70% balance before shipment for OEM orders.",
      },
      {
        question: "Can I visit the factory?",
        answer:
          "Absolutely. We welcome global clients to visit our Shenzhen manufacturing facility.",
      },
    ],
    cta: {
      text: "Contact Our Team",
      href: "contact",
    },
  },

  de: {
    banner: {
      title: "Häufige Fragen",
      description:
        "Häufige Fragen zu OEM/ODM-Partnerschaften, Versand und Garantie.",
    },
    items: [
      {
        question: "Was ist die Mindestbestellmenge (MOQ)?",
        answer:
          "In der Regel 500 Einheiten für Logodruck und 1.000 Einheiten für kundenspezifische Verpackungen.",
      },
      {
        question: "Bieten Sie ein SDK für App-Integration an?",
        answer:
          "Ja, wir bieten das Tuya IoT SDK an oder entwickeln eine individuelle API.",
      },
      {
        question: "Wie lauten Ihre Zahlungsbedingungen?",
        answer:
          "Standardmäßig 30% Anzahlung und 70% Restzahlung vor dem Versand.",
      },
      {
        question: "Kann ich die Fabrik besuchen?",
        answer:
          "Selbstverständlich. Kunden sind herzlich eingeladen, unsere Fabrik in Shenzhen zu besuchen.",
      },
    ],
    cta: {
      text: "Kontaktieren Sie unser Team",
      href: "contact",
    },
  },

  fr: {
    banner: {
      title: "Questions Fréquentes",
      description:
        "Questions courantes sur le partenariat OEM/ODM, l’expédition et la garantie.",
    },
    items: [
      {
        question: "Quel est le MOQ pour le private label ?",
        answer:
          "Généralement 500 unités pour l’impression du logo et 1 000 unités pour l’emballage personnalisé.",
      },
      {
        question: "Fournissez-vous un SDK pour l’intégration d’applications ?",
        answer:
          "Oui, nous fournissons le SDK Tuya IoT ou pouvons développer une API personnalisée.",
      },
      {
        question: "Quelles sont vos conditions de paiement ?",
        answer: "30% d’acompte et 70% avant expédition pour les commandes OEM.",
      },
      {
        question: "Puis-je visiter l’usine ?",
        answer:
          "Absolument. Nous accueillons les clients dans notre usine de Shenzhen.",
      },
    ],
    cta: {
      text: "Contacter notre équipe",
      href: "contact",
    },
  },

  es: {
    banner: {
      title: "Preguntas Frecuentes",
      description:
        "Preguntas comunes sobre asociaciones OEM/ODM, envíos y garantía.",
    },
    items: [
      {
        question: "¿Cuál es el MOQ para marca privada?",
        answer:
          "Normalmente 500 unidades para impresión de logotipo y 1,000 unidades para embalaje personalizado.",
      },
      {
        question: "¿Ofrecen SDK para integración de aplicaciones?",
        answer:
          "Sí, ofrecemos el SDK de Tuya IoT o podemos desarrollar una API personalizada.",
      },
      {
        question: "¿Cuáles son sus condiciones de pago?",
        answer: "30% de anticipo y 70% antes del envío para pedidos OEM.",
      },
      {
        question: "¿Puedo visitar la fábrica?",
        answer:
          "Por supuesto. Invitamos a los clientes a visitar nuestra fábrica en Shenzhen.",
      },
    ],
    cta: {
      text: "Contactar con el equipo",
      href: "contact",
    },
  },
};



export const TRADE_FAIRS_CONTENT: Record<Language, TradeFairsPageContent> = {
  en: {
    banner: {
      title: "Trade Fairs",
      description: "Meet us in person at global pet exhibitions.",
    },
    items: [
      {
        id: "1",
        name: "Global Pet Expo 2025",
        date: "March 26–28, 2025",
        location: "Orlando, FL, USA",
        booth: "Booth #3819",
        image: "https://picsum.photos/600/400?random=951",
        status: "upcoming",
      },
      {
        id: "2",
        name: "Interzoo 2024",
        date: "May 7–10, 2024",
        location: "Nuremberg, Germany",
        booth: "Hall 4, Stand 4-321",
        image: "https://picsum.photos/600/400?random=952",
        status: "past",
      },
      {
        id: "3",
        name: "CIPS 2024",
        date: "Nov 12–15, 2024",
        location: "Guangzhou, China",
        booth: "Hall 10.1, A22",
        image: "https://picsum.photos/600/400?random=953",
        status: "past",
      },
    ],
  },

  de: {
    banner: {
      title: "Messen",
      description:
        "Treffen Sie uns persönlich auf internationalen Haustiermessen.",
    },
    items: [
      {
        id: "1",
        name: "Global Pet Expo 2025",
        date: "26.–28. März 2025",
        location: "Orlando, USA",
        booth: "Stand #3819",
        image: "https://picsum.photos/600/400?random=951",
        status: "upcoming",
      },
      {
        id: "2",
        name: "Interzoo 2024",
        date: "7.–10. Mai 2024",
        location: "Nürnberg, Deutschland",
        booth: "Halle 4, Stand 4-321",
        image: "https://picsum.photos/600/400?random=952",
        status: "past",
      },
      {
        id: "3",
        name: "CIPS 2024",
        date: "12.–15. Nov 2024",
        location: "Guangzhou, China",
        booth: "Halle 10.1, A22",
        image: "https://picsum.photos/600/400?random=953",
        status: "past",
      },
    ],
  },

  fr: {
    banner: {
      title: "Salons Professionnels",
      description:
        "Rencontrez-nous lors des salons internationaux dédiés aux animaux.",
    },
    items: [
      {
        id: "1",
        name: "Global Pet Expo 2025",
        date: "26–28 Mars 2025",
        location: "Orlando, États-Unis",
        booth: "Stand #3819",
        image: "https://picsum.photos/600/400?random=951",
        status: "upcoming",
      },
      {
        id: "2",
        name: "Interzoo 2024",
        date: "7–10 Mai 2024",
        location: "Nuremberg, Allemagne",
        booth: "Hall 4, Stand 4-321",
        image: "https://picsum.photos/600/400?random=952",
        status: "past",
      },
      {
        id: "3",
        name: "CIPS 2024",
        date: "12–15 Nov 2024",
        location: "Guangzhou, Chine",
        booth: "Hall 10.1, A22",
        image: "https://picsum.photos/600/400?random=953",
        status: "past",
      },
    ],
  },

  es: {
    banner: {
      title: "Ferias Comerciales",
      description:
        "Conózcanos en las principales ferias internacionales del sector de mascotas.",
    },
    items: [
      {
        id: "1",
        name: "Global Pet Expo 2025",
        date: "26–28 Marzo 2025",
        location: "Orlando, EE.UU.",
        booth: "Stand #3819",
        image: "https://picsum.photos/600/400?random=951",
        status: "upcoming",
      },
      {
        id: "2",
        name: "Interzoo 2024",
        date: "7–10 Mayo 2024",
        location: "Núremberg, Alemania",
        booth: "Hall 4, Stand 4-321",
        image: "https://picsum.photos/600/400?random=952",
        status: "past",
      },
      {
        id: "3",
        name: "CIPS 2024",
        date: "12–15 Nov 2024",
        location: "Guangzhou, China",
        booth: "Hall 10.1, A22",
        image: "https://picsum.photos/600/400?random=953",
        status: "past",
      },
    ],
  },
};


//downoads
export const DOWNLOADS_CONTENT: Record<Language, DownloadsPageContent> = {
  en: {
    banner: {
      title: "Download Center",
      description:
        "Access our latest product catalogues, technical specifications, and user manuals.",
    },
    items: [
      {
        id: "1",
        title: "2025 Full Product Catalogue",
        type: "Catalog",
        size: "24.5 MB",
        date: "Jan 2025",
      },
      {
        id: "2",
        title: "EcoFeed Pro X1 User Manual",
        type: "Manual",
        size: "4.2 MB",
        date: "Dec 2024",
      },
      {
        id: "3",
        title: "EcoRay Laser L2 Clinical Guide",
        type: "Manual",
        size: "2.1 MB",
        date: "Dec 2024",
      },
      {
        id: "4",
        title: "Smart Life App Setup Guide (iOS/Android)",
        type: "Software",
        size: "1.5 MB",
        date: "Nov 2024",
      },
    ],
  },

  de: {
    banner: {
      title: "Download-Zentrum",
      description:
        "Greifen Sie auf unsere neuesten Produktkataloge, technischen Spezifikationen und Benutzerhandbücher zu.",
    },
    items: [
      {
        id: "1",
        title: "Produktkatalog 2025",
        type: "Catalog",
        size: "24.5 MB",
        date: "Jan 2025",
      },
      {
        id: "2",
        title: "EcoFeed Pro X1 Benutzerhandbuch",
        type: "Manual",
        size: "4.2 MB",
        date: "Dez 2024",
      },
      {
        id: "3",
        title: "EcoRay Laser L2 Klinikleitfaden",
        type: "Manual",
        size: "2.1 MB",
        date: "Dez 2024",
      },
      {
        id: "4",
        title: "Smart Life App Einrichtungsanleitung",
        type: "Software",
        size: "1.5 MB",
        date: "Nov 2024",
      },
    ],
  },

  fr: {
    banner: {
      title: "Centre de Téléchargement",
      description:
        "Accédez à nos catalogues produits, spécifications techniques et manuels d’utilisation les plus récents.",
    },
    items: [
      {
        id: "1",
        title: "Catalogue Produits 2025",
        type: "Catalog",
        size: "24.5 MB",
        date: "Jan 2025",
      },
      {
        id: "2",
        title: "Manuel EcoFeed Pro X1",
        type: "Manual",
        size: "4.2 MB",
        date: "Déc 2024",
      },
      {
        id: "3",
        title: "Guide Clinique EcoRay Laser L2",
        type: "Manual",
        size: "2.1 MB",
        date: "Déc 2024",
      },
      {
        id: "4",
        title: "Guide de Configuration Smart Life",
        type: "Software",
        size: "1.5 MB",
        date: "Nov 2024",
      },
    ],
  },

  es: {
    banner: {
      title: "Centro de Descargas",
      description:
        "Acceda a nuestros catálogos de productos, especificaciones técnicas y manuales de usuario más recientes.",
    },
    items: [
      {
        id: "1",
        title: "Catálogo de Productos 2025",
        type: "Catalog",
        size: "24.5 MB",
        date: "Ene 2025",
      },
      {
        id: "2",
        title: "Manual EcoFeed Pro X1",
        type: "Manual",
        size: "4.2 MB",
        date: "Dic 2024",
      },
      {
        id: "3",
        title: "Guía Clínica EcoRay Laser L2",
        type: "Manual",
        size: "2.1 MB",
        date: "Dic 2024",
      },
      {
        id: "4",
        title: "Guía de Configuración Smart Life",
        type: "Software",
        size: "1.5 MB",
        date: "Nov 2024",
      },
    ],
  },
};

// export const GENERAL_FAQ: Record<Language, GeneralFAQ[]> = {
//   en: [
//     {
//       question: "What is the MOQ for private label?",
//       answer:
//         "Typically 500 units for logo printing and 1000 units for custom packaging.",
//     },
//     {
//       question: "Do you provide SDK for App integration?",
//       answer:
//         "Yes, we provide Tuya IoT SDK or can develop a custom API for your cloud.",
//     },
//     {
//       question: "What are your payment terms?",
//       answer: "30% deposit and 70% before shipment for OEM orders.",
//     },
//     {
//       question: "Can I visit the factory?",
//       answer: "Absolutely. We welcome clients to visit our Shenzhen facility.",
//     },
//   ],
//   de: [
//     {
//       question: "Was ist die Mindestbestellmenge (MOQ)?",
//       answer: "Typischerweise 500 Einheiten für Logodruck.",
//     },
//     {
//       question: "Bieten Sie ein SDK an?",
//       answer: "Ja, wir bieten das Tuya IoT SDK an.",
//     },
//     {
//       question: "Was sind Ihre Zahlungsbedingungen?",
//       answer: "30% Anzahlung, 70% vor Versand.",
//     },
//     {
//       question: "Kann ich die Fabrik besuchen?",
//       answer: "Absolut. Wir begrüßen Kunden in Shenzhen.",
//     },
//   ],
//   fr: [
//     {
//       question: "Quel est le MOQ?",
//       answer: "Généralement 500 unités pour l'impression de logo.",
//     },
//     {
//       question: "Fournissez-vous un SDK?",
//       answer: "Oui, nous fournissons le SDK Tuya IoT.",
//     },
//     {
//       question: "Quelles sont vos conditions de paiement?",
//       answer: "Acompte de 30%, 70% avant expédition.",
//     },
//     {
//       question: "Puis-je visiter l'usine?",
//       answer: "Absolument. Nous accueillons les clients à Shenzhen.",
//     },
//   ],
//   es: [
//     {
//       question: "¿Cuál es el MOQ?",
//       answer: "Típicamente 500 unidades para impresión de logo.",
//     },
//     { question: "¿Ofrecen SDK?", answer: "Sí, ofrecemos el SDK Tuya IoT." },
//     {
//       question: "¿Cuáles son sus condiciones de pago?",
//       answer: "30% de depósito, 70% antes del envío.",
//     },
//     {
//       question: "¿Puedo visitar la fábrica?",
//       answer: "Absolutamente. Damos la bienvenida a los clientes en Shenzhen.",
//     },
//   ],
// };