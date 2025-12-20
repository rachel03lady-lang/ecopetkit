import { NavItem } from "@/types/nav";
import { Language } from "@/types/types";

export const NAV_ITEMS: Record<Language, NavItem[]> = {
  en: [
    { id: "home", label: "Home", href: "/" },
    { id: "services", label: "OEM/ODM Services", href: "/services" },
    { id: "products", label: "Products", href: "/products" },
    {
      id: "about",
      label: "About",
      children: [
        { id: "technology", label: "About Us", href: "/about" },
        { id: "downloads", label: "Download Center", href: "/downloads" },
        { id: "fairs", label: "Trade Fairs", href: "/trade-fairs" },
        { id: "faq", label: "FAQ", href: "/faq" },
      ],
    },
    { id: "blog", label: "Blog", href: "/blog" },
    { id: "contact", label: "Contact Us", href: "/contact" },
  ],

  de: [
    { id: "home", label: "Startseite", href: "/" },
    { id: "services", label: "OEM/ODM Dienste", href: "/services" },
    { id: "products", label: "Produkte", href: "/products" },
    {
      id: "about",
      label: "Über uns",
      children: [
        { id: "technology", label: "Firmenprofil", href: "/about" },
        { id: "downloads", label: "Download-Center", href: "/downloads" },
        { id: "fairs", label: "Messen", href: "/fairs" },
        { id: "faq", label: "FAQ", href: "/faq" },
      ],
    },
    { id: "blog", label: "Blog", href: "/blog" },
    { id: "contact", label: "Kontakt", href: "/contact" },
  ],

  fr: [
    { id: "home", label: "Accueil", href: "/" },
    { id: "services", label: "Services OEM/ODM", href: "/services" },
    { id: "products", label: "Produits", href: "/products" },
    {
      id: "about",
      label: "À propos",
      children: [
        { id: "technology", label: "Qui sommes-nous", href: "/about" },
        {
          id: "downloads",
          label: "Centre de téléchargement",
          href: "/downloads",
        },
        { id: "fairs", label: "Salons", href: "/fairs" },
        { id: "faq", label: "FAQ", href: "/faq" },
      ],
    },
    { id: "blog", label: "Blog", href: "/blog" },
    { id: "contact", label: "Contact", href: "/contact" },
  ],

  es: [
    { id: "home", label: "Inicio", href: "/" },
    { id: "services", label: "Servicios OEM/ODM", href: "/services" },
    { id: "products", label: "Productos", href: "/products" },
    {
      id: "about",
      label: "Acerca de",
      children: [
        { id: "technology", label: "Sobre Nosotros", href: "/about" },
        { id: "downloads", label: "Descargas", href: "/downloads" },
        { id: "fairs", label: "Ferias", href: "/fairs" },
        { id: "faq", label: "FAQ", href: "/faq" },
      ],
    },
    { id: "blog", label: "Blog", href: "/blog" },
    { id: "contact", label: "Contacto", href: "/contact" },
  ],
};
