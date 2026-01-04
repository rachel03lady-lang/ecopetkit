
import { BottomCTA, Language } from "@/types/types";
import { Heading } from "lucide-react";

export const PRODUCT_BOTTOM_CTA: Record<Language, BottomCTA> = {
  en: {
    heading: "Ready to launch this product?",
    description:
      "Get a competitive quote within 24 hours. We support low MOQ for trial orders.",
    buttonLabel: "Inquire Now",
    buttonHref: "/contact",
  },
  de: {
    heading: "Bereit, dieses Produkt zu starten?",
    description:
      "Erhalten Sie innerhalb von 24 Stunden ein wettbewerbsfähiges Angebot.",
    buttonLabel: "Anfrage senden",
    buttonHref: "/contact",
  },
  fr: {
    heading: "Prêt à lancer ce produit ?",
    description: "Obtenez un devis compétitif sous 24 heures.",
    buttonLabel: "Demander un devis",
    buttonHref: "/contact",
  },
  es: {
    heading: "¿Listo para lanzar este producto?",
    description: "Obtenga una cotización competitiva en 24 horas.",
    buttonLabel: "Solicitar cotización",
    buttonHref: "/contact",
  },
};



allBlogsPage{
  en-us{ 
headers{
  tagline
  Heading
  subtitle
}
categoriesLabel
searchLabel
popularTagsLabel
recentPostLabel
newsletter{
title
description
emailPlaceholder
buttonLabel
}
  }
  es{ 
headers{
  tagline
  Heading
  subtitle
}
categoriesLabel
searchLabel
popularTagsLabel
recentPostLabel
newsletter{
title
description
emailPlaceholder
buttonLabel
}
  }
  de{ 
headers{
  tagline
  Heading
  subtitle
}
categoriesLabel
searchLabel
popularTagsLabel
recentPostLabel
newsletter{
title
description
emailPlaceholder
buttonLabel
}
  }
  fr{ 
headers{
  tagline
  Heading
  subtitle
}
categoriesLabel
searchLabel
popularTagsLabel
recentPostLabel
newsletter{
title
description
emailPlaceholder
buttonLabel
}
  }
}