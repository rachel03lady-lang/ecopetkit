import {
  Cpu,
  Wifi,
  ShieldCheck,
  Database,
  Factory,
  Activity,
  Settings,
  Truck,
  Award,
} from "lucide-react";
import { AboutContent, ProductionWorkshopHeaderContent } from "@/types/types";

//missed production workshop contents



export const PRODUCTION_WORKSHOP_HEADER: ProductionWorkshopHeaderContent = {
  en: {
    badge: "Process & Scale",
    title: "Smart Production Workshops",
    description:
      "Our vertically integrated supply chain ensures that every component—from the plastic shell to the PCB—is manufactured to strict quality standards under one roof.",
  },

  de: {
    badge: "Prozess & Skalierung",
    title: "Intelligente Produktionswerkstätten",
    description:
      "Unsere vertikal integrierte Lieferkette stellt sicher, dass jede Komponente – von der Kunststoffhülle bis zur Leiterplatte – unter einem Dach nach strengen Qualitätsstandards gefertigt wird.",
  },

  fr: {
    badge: "Processus & Échelle",
    title: "Ateliers de Production Intelligents",
    description:
      "Notre chaîne d’approvisionnement intégrée verticalement garantit que chaque composant — de la coque plastique au PCB — est fabriqué sous un même toit selon des normes de qualité strictes.",
  },

  es: {
    badge: "Proceso y Escala",
    title: "Talleres de Producción Inteligente",
    description:
      "Nuestra cadena de suministro integrada verticalmente garantiza que cada componente — desde la carcasa plástica hasta la PCB — se fabrique bajo estrictos estándares de calidad en una sola instalación.",
  },
};


//main about content
export const ABOUT_CONTENT: AboutContent = {
  en: {
    hero: {
      badge: "Company Profile",
      title: "About Us",
      description:
        "Founded on the principles of innovation and reliability, EcoPetKit has grown into a global leader in Smart Pet IoT. We combine advanced engineering with vertically integrated manufacturing to empower brands worldwide.",
    },

    rd: {
      title: "Engineering Powerhouse",
      description:
        "Our R&D center is staffed by experts from top tech firms, specializing in embedded systems, fluid dynamics, and AI vision algorithms. We invest 15% of annual revenue into R&D.",
      stats: [
        { value: "50+", label: "Full-time Engineers" },
        { value: "100+", label: "Patents (Utility & Design)" },
      ],
      features: [
        {
          title: "Embedded AI",
          description:
            "Edge computing for pet behavior recognition without cloud latency.",
          icon: Cpu,
        },
        {
          title: "Connectivity",
          description:
            "Dual-band Wi-Fi + BLE 5.0 for seamless pairing experiences.",
          icon: Wifi,
        },
        {
          title: "Safety Logic",
          description:
            "Redundant safety sensors to prevent pinching or jamming.",
          icon: ShieldCheck,
        },
        {
          title: "Cloud Data",
          description:
            "GDPR-compliant servers (AWS/Azure) for user data protection.",
          icon: Database,
        },
      ],
    },

    factoryHero: {
      badge: "Manufacturing Capability",
      title: "Intelligent Manufacturing Base",
      subtitle:
        "A 20,000m² state-of-the-art facility dedicated to Smart Pet IoT production. From mold injection to SMT and final assembly.",
      backgroundImage: "https://picsum.photos/1920/1080?grayscale&blur=2",
    },

    factoryStats: [
      { value: "20,000", label: "Square Meters" },
      { value: "12", label: "Production Lines" },
      { value: "300,000", label: "Monthly Capacity" },
      { value: "50+", label: "R&D Engineers" },
    ],

    workshops: [
      {
        id: "mold",
        title: "Precision Mold Center",
        description:
          "In-house CNC machining with 0.005mm precision supporting rapid prototyping.",
        image: "https://picsum.photos/800/600?random=801",
        icon: Settings,
        highlights: [
          "ISO 9001:2015 Certified Process",
          "Real-time MES Data Tracking",
        ],
      },
      {
        id: "injection",
        title: "Injection Molding",
        description: "50+ automated injection machines from 80T to 600T.",
        image: "https://picsum.photos/800/600?random=802",
        icon: Factory,
        highlights: ["Food-grade ABS/PP", "Dual-shot injection"],
      },
      {
        id: "smt",
        title: "SMT & Electronics",
        description:
          "Dust-free SMT workshops with AOI and automated soldering.",
        image: "https://picsum.photos/800/600?random=803",
        icon: Activity,
        highlights: ["Samsung/Yamaha lines", "100% PCB testing"],
      },
      {
        id: "assembly",
        title: "Smart Assembly Lines",
        description: "Lean assembly lines with digital SOPs and aging tests.",
        image: "https://picsum.photos/800/600?random=804",
        icon: Factory,
        highlights: ["100% functional testing", "Visual inspection"],
      },
    ],

    qualityControl: {
      title: "Total Quality Management",
      description:
        "Quality isn't inspected in; it's built in. Our 4-stage QC protocol ensures defect rates stay below 0.3%.",
      steps: [
        {
          stage: "IQC",
          title: "Incoming Material",
          description: "Raw materials tested for compliance and spec accuracy.",
          icon: Settings,
        },
        {
          stage: "IPQC",
          title: "In-Process Checks",
          description: "Hourly inspections and automated AOI testing.",
          icon: Activity,
        },
        {
          stage: "FQC",
          title: "Final QC",
          description: "100% functional testing and aging tests.",
          icon: ShieldCheck,
        },
        {
          stage: "OQC",
          title: "Outgoing QC",
          description: "AQL 2.5 sampling before shipment.",
          icon: Truck,
        },
      ],
    },

    lab: {
      badge: "Reliability Lab",
      title: "Built to Last. Tested to Limit.",
      description:
        "Every product passes 20+ reliability tests. We simulate 3 years of usage in 2 weeks.",
      tests: [
        { label: "Drop Test (1.2m)" },
        { label: "Salt Spray (48h)" },
        { label: "Button Life (100k)" },
        { label: "Cord Bending (5000x)" },
        { label: "Temp Shock (-20~60°C)" },
        { label: "Waterproof (IPX)" },
      ],
      images: {
        main: "https://picsum.photos/400/500?random=901",
        secondary: "https://picsum.photos/400/240?random=902",
      },
      rmaRate: {
        value: "0.2%",
        label: "Average RMA Rate",
      },
    },

    certifications: [
      { label: "ISO 9001" },
      { label: "ISO 14001" },
      { label: "BSCI" },
      { label: "CE" },
      { label: "FCC" },
      { label: "RoHS" },
      { label: "TELEC" },
    ],

    cta: {
      title: "Ready to inspect our factory?",
      description: "We welcome global clients to visit our Shenzhen facility.",
      primaryButton: {
        label: "Schedule Visit",
        href: "/contact",
      },
      secondaryButton: {
        label: "Video Audit",
        href: "/contact",
      },
    },
  },

  /* de, fr, es → same structure, translated text only */

  de: {
    hero: {
      badge: "Unternehmensprofil",
      title: "Über Uns",
      description:
        "Gegründet auf den Prinzipien Innovation und Zuverlässigkeit hat sich EcoPetKit zu einem globalen Marktführer im Bereich Smart Pet IoT entwickelt. Wir kombinieren fortschrittliche Technik mit vertikal integrierter Fertigung, um Marken weltweit zu stärken.",
    },

    rd: {
      title: "Technologisches Kompetenzzentrum",
      description:
        "Unser F&E-Zentrum besteht aus Experten führender Technologieunternehmen mit Schwerpunkt auf Embedded Systems, Fluiddynamik und KI-basierter Bildverarbeitung. Wir investieren jährlich 15 % unseres Umsatzes in Forschung und Entwicklung.",
      stats: [
        { value: "50+", label: "Vollzeit-Ingenieure" },
        { value: "100+", label: "Patente (Gebrauchs- & Designmuster)" },
      ],
      features: [
        {
          title: "Embedded KI",
          description:
            "Edge-Computing zur Verhaltensanalyse von Haustieren ohne Cloud-Latenz.",
          icon: Cpu,
        },
        {
          title: "Konnektivität",
          description:
            "Dual-Band-WLAN + BLE 5.0 für schnelle und stabile Kopplung.",
          icon: Wifi,
        },
        {
          title: "Sicherheitslogik",
          description:
            "Redundante Sicherheitssensoren zur Vermeidung von Blockaden oder Einklemmen.",
          icon: ShieldCheck,
        },
        {
          title: "Cloud-Daten",
          description:
            "DSGVO-konforme Server (AWS/Azure) für maximalen Datenschutz.",
          icon: Database,
        },
      ],
    },

    factoryHero: {
      badge: "Fertigungskompetenz",
      title: "Intelligente Fertigungsbasis",
      subtitle:
        "Eine hochmoderne 20.000 m² große Produktionsstätte für Smart-Pet-IoT. Von Spritzguss über SMT bis zur Endmontage.",
      backgroundImage: "https://picsum.photos/1920/1080?grayscale&blur=2",
    },

    factoryStats: [
      { value: "20.000", label: "Quadratmeter" },
      { value: "12", label: "Produktionslinien" },
      { value: "300.000", label: "Monatliche Kapazität" },
      { value: "50+", label: "F&E-Ingenieure" },
    ],

    workshops: [
      {
        id: "mold",
        title: "Präzisions-Formenzentrum",
        description:
          "Interne CNC-Bearbeitung mit 0,005 mm Präzision für schnelles Prototyping.",
        image: "https://picsum.photos/800/600?random=801",
        icon: Settings,
        highlights: ["ISO 9001:2015 zertifiziert", "Echtzeit-MES-Daten"],
      },
      {
        id: "injection",
        title: "Spritzguss",
        description: "Über 50 automatisierte Maschinen von 80T bis 600T.",
        image: "https://picsum.photos/800/600?random=802",
        icon: Factory,
        highlights: ["Lebensmittelechtes ABS/PP", "Zweikomponenten-Spritzguss"],
      },
      {
        id: "smt",
        title: "SMT & Elektronik",
        description:
          "Staubfreie SMT-Werkstätten mit AOI-Tests und automatischem Löten.",
        image: "https://picsum.photos/800/600?random=803",
        icon: Activity,
        highlights: ["Samsung/Yamaha Linien", "100 % Leiterplattentest"],
      },
      {
        id: "assembly",
        title: "Intelligente Montagelinien",
        description: "Lean-Montage mit digitalen SOPs und Alterungstests.",
        image: "https://picsum.photos/800/600?random=804",
        icon: Factory,
        highlights: ["100 % Funktionstest", "Visuelle Endkontrolle"],
      },
    ],

    qualityControl: {
      title: "Umfassendes Qualitätsmanagement",
      description:
        "Qualität wird nicht geprüft, sondern aufgebaut. Unser 4-stufiges QC-System hält die Fehlerquote unter 0,3 %.",
      steps: [
        {
          stage: "IQC",
          title: "Wareneingangskontrolle",
          description:
            "Prüfung aller Rohmaterialien auf Spezifikation und Konformität.",
          icon: Settings,
        },
        {
          stage: "IPQC",
          title: "Prozesskontrolle",
          description: "Stündliche Kontrollen und automatisierte AOI-Tests.",
          icon: Activity,
        },
        {
          stage: "FQC",
          title: "Endkontrolle",
          description: "100 % Funktionstests und Alterungstests.",
          icon: ShieldCheck,
        },
        {
          stage: "OQC",
          title: "Ausgangskontrolle",
          description: "Stichprobenprüfung nach AQL-2.5-Standard.",
          icon: Truck,
        },
      ],
    },

    lab: {
      badge: "Zuverlässigkeitslabor",
      title: "Gebaut für Langlebigkeit. Getestet bis zum Limit.",
      description:
        "Jedes Produkt durchläuft über 20 Zuverlässigkeitstests. 3 Jahre Nutzung simuliert in 2 Wochen.",
      tests: [
        { label: "Falltest (1,2 m)" },
        { label: "Salzsprühnebel (48h)" },
        { label: "Tastendrucktest (100k)" },
        { label: "Kabelbiegetest (5000x)" },
        { label: "Temperaturschock (-20~60°C)" },
        { label: "Wasserdichtigkeit (IPX)" },
      ],
      images: {
        main: "https://picsum.photos/400/500?random=901",
        secondary: "https://picsum.photos/400/240?random=902",
      },
      rmaRate: {
        value: "0,2 %",
        label: "Durchschnittliche RMA-Quote",
      },
    },

    certifications: [
      { label: "ISO 9001" },
      { label: "ISO 14001" },
      { label: "BSCI" },
      { label: "CE" },
      { label: "FCC" },
      { label: "RoHS" },
      { label: "TELEC" },
    ],

    cta: {
      title: "Möchten Sie unsere Fabrik besichtigen?",
      description:
        "Wir begrüßen internationale Kunden in unserer Produktionsstätte in Shenzhen.",
      primaryButton: {
        label: "Besuch vereinbaren",
        href: "/contact",
      },
      secondaryButton: {
        label: "Video-Audit",
        href: "/contact",
      },
    },
  },

  fr: {
    hero: {
      badge: "Profil de l’Entreprise",
      title: "À Propos de Nous",
      description:
        "Fondée sur l’innovation et la fiabilité, EcoPetKit est devenue un leader mondial des solutions Smart Pet IoT. Nous combinons ingénierie avancée et fabrication intégrée pour accompagner les marques à l’échelle mondiale.",
    },

    rd: {
      title: "Centre d’Ingénierie Avancée",
      description:
        "Notre centre R&D regroupe des experts issus de grandes entreprises technologiques, spécialisés en systèmes embarqués, dynamique des fluides et vision par IA. 15 % de notre chiffre d’affaires est investi en R&D.",
      stats: [
        { value: "50+", label: "Ingénieurs à temps plein" },
        { value: "100+", label: "Brevets (utilité & design)" },
      ],
      features: [
        {
          title: "IA Embarquée",
          description:
            "Reconnaissance du comportement animal en local sans latence cloud.",
          icon: Cpu,
        },
        {
          title: "Connectivité",
          description: "Wi-Fi double bande + BLE 5.0 pour un appairage fluide.",
          icon: Wifi,
        },
        {
          title: "Logique de Sécurité",
          description:
            "Capteurs redondants pour prévenir tout blocage ou pincement.",
          icon: ShieldCheck,
        },
        {
          title: "Données Cloud",
          description: "Serveurs conformes au RGPD (AWS/Azure).",
          icon: Database,
        },
      ],
    },

    factoryHero: {
      badge: "Capacité de Fabrication",
      title: "Base de Fabrication Intelligente",
      subtitle:
        "Une usine moderne de 20 000 m² dédiée à la production Smart Pet IoT.",
      backgroundImage: "https://picsum.photos/1920/1080?grayscale&blur=2",
    },

    factoryStats: [
      { value: "20 000", label: "Mètres Carrés" },
      { value: "12", label: "Lignes de Production" },
      { value: "300 000", label: "Capacité Mensuelle" },
      { value: "50+", label: "Ingénieurs R&D" },
    ],

    workshops: [
      {
        id: "mold",
        title: "Centre de Moules de Précision",
        description: "Usinage CNC interne avec une précision de 0,005 mm.",
        image: "https://picsum.photos/800/600?random=801",
        icon: Settings,
        highlights: ["Processus certifié ISO 9001", "Suivi MES en temps réel"],
      },
      {
        id: "injection",
        title: "Moulage par Injection",
        description: "Plus de 50 machines automatisées de 80T à 600T.",
        image: "https://picsum.photos/800/600?random=802",
        icon: Factory,
        highlights: [
          "Plastiques de qualité alimentaire",
          "Injection bi-matière",
        ],
      },
      {
        id: "smt",
        title: "SMT & Électronique",
        description: "Ateliers SMT sans poussière avec tests AOI.",
        image: "https://picsum.photos/800/600?random=803",
        icon: Activity,
        highlights: ["Lignes Samsung/Yamaha", "Test PCB à 100 %"],
      },
      {
        id: "assembly",
        title: "Lignes d’Assemblage Intelligentes",
        description:
          "Assemblage lean avec SOP numériques et tests de vieillissement.",
        image: "https://picsum.photos/800/600?random=804",
        icon: Factory,
        highlights: ["Test fonctionnel intégral", "Inspection visuelle finale"],
      },
    ],

    qualityControl: {
      title: "Gestion Totale de la Qualité",
      description:
        "La qualité est intégrée dès la conception. Notre protocole QC en 4 étapes maintient un taux de défaut inférieur à 0,3 %.",
      steps: [
        {
          stage: "IQC",
          title: "Contrôle Réception",
          description: "Vérification des matières premières et composants.",
          icon: Settings,
        },
        {
          stage: "IPQC",
          title: "Contrôle en Cours de Process",
          description: "Inspections horaires et tests AOI automatisés.",
          icon: Activity,
        },
        {
          stage: "FQC",
          title: "Contrôle Final",
          description: "Tests fonctionnels complets et vieillissement.",
          icon: ShieldCheck,
        },
        {
          stage: "OQC",
          title: "Contrôle Sortant",
          description: "Échantillonnage avant expédition selon AQL 2.5.",
          icon: Truck,
        },
      ],
    },

    lab: {
      badge: "Laboratoire de Fiabilité",
      title: "Conçu pour Durer. Testé à l’Extrême.",
      description:
        "Chaque produit subit plus de 20 tests de fiabilité avant production.",
      tests: [
        { label: "Test de chute (1,2 m)" },
        { label: "Brouillard salin (48h)" },
        { label: "Durée de vie bouton (100k)" },
        { label: "Flexion câble (5000x)" },
        { label: "Choc thermique (-20~60°C)" },
        { label: "Étanchéité (IPX)" },
      ],
      images: {
        main: "https://picsum.photos/400/500?random=901",
        secondary: "https://picsum.photos/400/240?random=902",
      },
      rmaRate: {
        value: "0,2 %",
        label: "Taux moyen de RMA",
      },
    },

    certifications: [
      { label: "ISO 9001" },
      { label: "ISO 14001" },
      { label: "BSCI" },
      { label: "CE" },
      { label: "FCC" },
      { label: "RoHS" },
      { label: "TELEC" },
    ],

    cta: {
      title: "Prêt à visiter notre usine ?",
      description:
        "Nous accueillons des clients du monde entier dans notre site de Shenzhen.",
      primaryButton: {
        label: "Planifier une Visite",
        href: "/contact",
      },
      secondaryButton: {
        label: "Audit Vidéo",
        href: "/contact",
      },
    },
  },

  es: {
    hero: {
      badge: "Perfil de la Empresa",
      title: "Sobre Nosotros",
      description:
        "Fundada sobre la innovación y la fiabilidad, EcoPetKit se ha convertido en un líder global en Smart Pet IoT. Combinamos ingeniería avanzada con fabricación integrada para impulsar marcas en todo el mundo.",
    },

    rd: {
      title: "Centro de Ingeniería Avanzada",
      description:
        "Nuestro centro de I+D está formado por expertos en sistemas embebidos, dinámica de fluidos y visión por IA. Invertimos el 15 % de nuestros ingresos anuales en investigación y desarrollo.",
      stats: [
        { value: "50+", label: "Ingenieros a Tiempo Completo" },
        { value: "100+", label: "Patentes (Utilidad y Diseño)" },
      ],
      features: [
        {
          title: "IA Integrada",
          description:
            "Reconocimiento de comportamiento animal en el dispositivo, sin latencia en la nube.",
          icon: Cpu,
        },
        {
          title: "Conectividad",
          description:
            "Wi-Fi de doble banda + BLE 5.0 para una experiencia fluida.",
          icon: Wifi,
        },
        {
          title: "Lógica de Seguridad",
          description:
            "Sensores redundantes para evitar bloqueos o atrapamientos.",
          icon: ShieldCheck,
        },
        {
          title: "Datos en la Nube",
          description: "Servidores compatibles con GDPR (AWS/Azure).",
          icon: Database,
        },
      ],
    },

    factoryHero: {
      badge: "Capacidad de Manufactura",
      title: "Base de Manufactura Inteligente",
      subtitle:
        "Instalación de 20.000 m² dedicada a la producción Smart Pet IoT.",
      backgroundImage: "https://picsum.photos/1920/1080?grayscale&blur=2",
    },

    factoryStats: [
      { value: "20.000", label: "Metros Cuadrados" },
      { value: "12", label: "Líneas de Producción" },
      { value: "300.000", label: "Capacidad Mensual" },
      { value: "50+", label: "Ingenieros de I+D" },
    ],

    workshops: [
      {
        id: "mold",
        title: "Centro de Moldes de Precisión",
        description: "Mecanizado CNC interno con precisión de 0,005 mm.",
        image: "https://picsum.photos/800/600?random=801",
        icon: Settings,
        highlights: [
          "Proceso certificado ISO 9001",
          "Seguimiento MES en tiempo real",
        ],
      },
      {
        id: "injection",
        title: "Moldeo por Inyección",
        description: "Más de 50 máquinas automatizadas de 80T a 600T.",
        image: "https://picsum.photos/800/600?random=802",
        icon: Factory,
        highlights: [
          "Plásticos grado alimenticio",
          "Inyección de doble disparo",
        ],
      },
      {
        id: "smt",
        title: "SMT y Electrónica",
        description: "Talleres SMT libres de polvo con pruebas AOI.",
        image: "https://picsum.photos/800/600?random=803",
        icon: Activity,
        highlights: ["Líneas Samsung/Yamaha", "Pruebas PCB al 100 %"],
      },
      {
        id: "assembly",
        title: "Líneas de Ensamblaje Inteligentes",
        description:
          "Ensamblaje lean con SOP digitales y pruebas de envejecimiento.",
        image: "https://picsum.photos/800/600?random=804",
        icon: Factory,
        highlights: [
          "Pruebas funcionales completas",
          "Inspección visual final",
        ],
      },
    ],

    qualityControl: {
      title: "Gestión Total de Calidad",
      description:
        "La calidad se construye, no se inspecciona. Nuestro sistema QC de 4 etapas mantiene defectos por debajo del 0,3 %.",
      steps: [
        {
          stage: "IQC",
          title: "Control de Entrada",
          description: "Verificación de materiales y componentes.",
          icon: Settings,
        },
        {
          stage: "IPQC",
          title: "Control en Proceso",
          description: "Inspecciones horarias y pruebas AOI automatizadas.",
          icon: Activity,
        },
        {
          stage: "FQC",
          title: "Control Final",
          description: "Pruebas funcionales completas y envejecimiento.",
          icon: ShieldCheck,
        },
        {
          stage: "OQC",
          title: "Control de Salida",
          description: "Muestreo previo al envío según AQL 2.5.",
          icon: Truck,
        },
      ],
    },

    lab: {
      badge: "Laboratorio de Fiabilidad",
      title: "Diseñado para Durar. Probado al Límite.",
      description: "Cada producto supera más de 20 pruebas de fiabilidad.",
      tests: [
        { label: "Prueba de Caída (1,2 m)" },
        { label: "Niebla Salina (48h)" },
        { label: "Vida del Botón (100k)" },
        { label: "Flexión de Cable (5000x)" },
        { label: "Choque Térmico (-20~60°C)" },
        { label: "Impermeabilidad (IPX)" },
      ],
      images: {
        main: "https://picsum.photos/400/500?random=901",
        secondary: "https://picsum.photos/400/240?random=902",
      },
      rmaRate: {
        value: "0,2 %",
        label: "Tasa Promedio de RMA",
      },
    },

    certifications: [
      { label: "ISO 9001" },
      { label: "ISO 14001" },
      { label: "BSCI" },
      { label: "CE" },
      { label: "FCC" },
      { label: "RoHS" },
      { label: "TELEC" },
    ],

    cta: {
      title: "¿Listo para visitar nuestra fábrica?",
      description:
        "Damos la bienvenida a clientes globales en nuestras instalaciones de Shenzhen.",
      primaryButton: {
        label: "Programar Visita",
        href: "/contact",
      },
      secondaryButton: {
        label: "Auditoría por Video",
        href: "/contact",
      },
    },
  },
};
