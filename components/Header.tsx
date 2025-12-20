// app/components/Header.tsx
"use client";
import React, { useEffect, useState, useRef, useMemo } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  Search,
  Globe,
  ChevronDown,
  PawPrint,
  Menu,
  X,
  MessageCircle,
  Mail,
} from "lucide-react";
import { NAV_ITEMS } from "@/constants/nav";
import { useLanguage } from "@/app/providers/LanguageProvider"; // your provider path
import { Button } from "@/components/Button";

type NavItemType = {
  id: string;
  label: string;
  children?: { id: string; label: string }[];
};

export default function Header() {
  // const { language, setLanguage, t } = useLanguage();
  // const [scrolled, setScrolled] = useState(false);
  // const [currentPage, setCurrentPage] = useState("home");
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  // const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  // const [globalSearchQuery, setGlobalSearchQuery] = useState("");
  // const closeTimerRef = useRef<number | null>(null);

  // map id -> path. Keep this single source of truth so Link href is always a string.
  const idToPath = (id: string) => {
    switch (id) {
      case "home":
        return "/";
      case "services":
        return "/services";
      case "products":
        return "/products";
      case "technology":
        return "/about";
      case "downloads":
        return "/downloads";
      case "fairs":
        return "/trade-fairs";
      case "faq":
        return "/faq";
      case "blog":
        return "/blog";
      case "contact":
        return "/contact";
      default:
        return "#";
    }
  };


  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [globalSearchQuery, setGlobalSearchQuery] = useState("");
  const closeTimerRef = useRef<number | null>(null);

  const pathname = usePathname(); // real current path (string | null)
  const router = useRouter(); // for programmatic navigation

  // helper: map route pathname to your page id
  const mapPathToId = (path: string | null) => {
    if (!path || path === "/") return "home";
    if (path.startsWith("/products")) return "products";
    if (path.startsWith("/services")) return "services";
    if (path.startsWith("/about") || path.startsWith("/technology"))
      return "technology";
    if (path.startsWith("/downloads")) return "downloads";
    if (path.startsWith("/trade-fairs")) return "fairs";
    if (path.startsWith("/faq")) return "faq";
    if (path.startsWith("/blog")) return "blog";
    if (path.startsWith("/contact")) return "contact";
    return "home";
  };


 useEffect(() => {
   const id = mapPathToId(pathname);
   setCurrentPage(id);
 }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // delay helpers so moving cursor into dropdown doesn't close it immediately
  const scheduleClose = (delay = 120) => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(
      () => setActiveDropdown(null),
      delay
    );
  };
  const cancelScheduledClose = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const navItems = NAV_ITEMS[language] as NavItemType[];

  const LANG_LABELS: Record<string, string> = {
    en: "English",
    de: "Deutsch",
    fr: "Français",
    es: "Español",
  };

  return (
    // <header
    //   className={`fixed w-full z-50 transition-all duration-300 ${
    //     scrolled || currentPage !== "home"
    //       ? "bg-white shadow-md py-4"
    //       : "bg-transparent py-6"
    //   }`}
    // >
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || pathname !== "/"
          ? "bg-white shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* NEW LOGO - route-aware */}
        <div
          className="text-2xl font-bold tracking-tighter cursor-pointer flex items-center gap-2 flex-shrink-0"
          onClick={() => router.push("/")}
        >
          <div
            className={`w-8 h-8 rounded-full ${
              scrolled || pathname !== "/" ? "bg-slate-900" : "bg-white"
            } flex items-center justify-center`}
          >
            <PawPrint
              size={18}
              className={
                scrolled || pathname !== "/" ? "text-white" : "text-slate-900"
              }
            />
          </div>
          <span
            className={
              scrolled || pathname !== "/" ? "text-slate-900" : "text-white"
            }
          >
            ECOPETKIT
          </span>
        </div>

        {/* logo */}
        {/* <div
          className="text-2xl font-bold tracking-tighter cursor-pointer flex items-center gap-2 flex-shrink-0"
          onClick={() => setCurrentPage("home")}
        >
          <div
            className={`w-8 h-8 rounded-full ${
              scrolled || currentPage !== "home" ? "bg-slate-900" : "bg-white"
            } flex items-center justify-center`}
          >
            <PawPrint
              size={18}
              className={
                scrolled || currentPage !== "home"
                  ? "text-white"
                  : "text-slate-900"
              }
            />
          </div>
          <span
            className={
              scrolled || currentPage !== "home"
                ? "text-slate-900"
                : "text-white"
            }
          >
            ECOPETKIT
          </span>
        </div> */}

        {/* <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setCurrentPage("home")}
        >
          <div
            className={`w-8 h-8 rounded-full ${
              scrolled || currentPage !== "home" ? "bg-primary" : "bg-white"
            } flex items-center justify-center`}
          >
            <PawPrint
              size={18}
              className={
                scrolled || currentPage !== "home"
                  ? "text-white"
                  : "text-primary"
              }
            />
          </div>
          <span
            className={
              scrolled || currentPage !== "home"
                ? "text-slate-900"
                : "text-white"
            }
          >
            ECOPETKIT
          </span>
          
        </div> */}

        {/* search center (desktop only) */}
        <div className="hidden lg:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder={t("common.searchPlaceholder")}
              className={`w-full py-2 pl-10 pr-4 rounded-full text-sm outline-none transition-all ${
                scrolled || pathname !== "/"
                  ? "bg-slate-100 text-primary focus:bg-white focus:ring-2 focus:ring-slate-900"
                  : "bg-white/10 text-white placeholder-white/70 border border-white/20 focus:bg-white/20 focus:border-white"
              }`}
              // className={`w-full py-2 pl-10 pr-4 rounded-full text-sm outline-none transition-all ${
              //   scrolled || currentPage !== "home"
              //     ? "bg-slate-100 text-primary focus:bg-white focus:ring-2 focus:ring-slate-900"
              //     : "bg-white/10 text-white placeholder-white/70 border border-white/20 focus:bg-white/20 focus:border-white"
              // }`}
              value={globalSearchQuery}
              onChange={(e) => setGlobalSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setCurrentPage("products");
                  setIsMenuOpen(false);
                }
              }}
            />
            <Search
              className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${
                scrolled || currentPage !== "home"
                  ? "text-slate-400"
                  : "text-white/70"
              }`}
            />
          </div>
        </div>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive =
              currentPage === item.id ||
              (item.children &&
                item.children.some((c) => c.id === currentPage));
            // const textClass = isActive
            //   ? "text-accent"
            //   : scrolled || currentPage !== "home"
            //   ? "text-secondary"
            //   : "text-white/80";
            const textClass = isActive
              ? "text-accent"
              : scrolled || pathname !== "/"
              ? "text-secondary"
              : "text-white/80";

            return (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => {
                  cancelScheduledClose();
                  if (item.children) setActiveDropdown(item.id);
                }}
                onMouseLeave={() => scheduleClose()}
              >
                {/* If parent has no real page, show button. If it should navigate, Link to path. */}
                {item.children ? (
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.id ? null : item.id
                      )
                    }
                    className={`flex items-center gap-1 text-sm font-medium ${textClass}`}
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === item.id}
                  >
                    {item.label}
                    <ChevronDown size={14} />
                  </button>
                ) : (
                  <Link
                    href={idToPath(item.id)}
                    className={`text-sm font-medium ${textClass}`}
                    onClick={() => setCurrentPage(item.id)}
                  >
                    {item.label}
                  </Link>
                )}

                {/* dropdown */}
                {item.children && activeDropdown === item.id && (
                  <div
                    onMouseEnter={() => cancelScheduledClose()}
                    onMouseLeave={() => scheduleClose()}
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-slate-100 overflow-hidden py-2"
                  >
                    {item.children.map((child) => {
                      const href = idToPath(child.id);
                      return (
                        <Link
                          key={child.id}
                          href={href}
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-accent"
                          onClick={() => {
                            setCurrentPage(child.id);
                            setActiveDropdown(null);
                          }}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          {/* language */}
          <div className="relative">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              // className={`flex items-center gap-1 text-sm ${
              //   scrolled || currentPage !== "home"
              //     ? "text-secondary"
              //     : "text-white/90"
              // }`}
              className={`flex items-center gap-1 text-sm ${
                scrolled || pathname !== "/"
                  ? "text-secondary"
                  : "text-white/90"
              }`}
            >
              <Globe size={16} />
              <span className="uppercase">{language}</span>
              <ChevronDown size={14} />
            </button>

            {isLangMenuOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl py-2 w-32 border border-slate-100 overflow-hidden text-primary">
                {Object.keys(LANG_LABELS).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang as any);
                      setIsLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 flex items-center justify-between ${
                      language === lang ? "text-accent font-bold" : ""
                    }`}
                  >
                    {LANG_LABELS[lang]}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Button
            size="sm"
            variant={scrolled || currentPage !== "home" ? "primary" : "white"}
            onClick={() => setCurrentPage("contact")}
          >
            {t("nav.getQuote")}
          </Button>
        </nav>

        {/* mobile toggle */}
        <button
          // className={`md:hidden ${
          //   scrolled || currentPage !== "home" ? "text-primary" : "text-white"
          // }`}
          className={`md:hidden ${
            scrolled || pathname !== "/" ? "text-primary" : "text-white"
          }`}
          onClick={() => setIsMenuOpen((s) => !s)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-6 px-6 border-t border-slate-100">
          <div className="relative w-full mb-3">
            <input
              type="text"
              placeholder={t("common.searchPlaceholder")}
              className="w-full py-2 pl-10 pr-4 rounded-full text-sm outline-none bg-slate-100 text-primary"
              value={globalSearchQuery}
              onChange={(e) => setGlobalSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setCurrentPage("products");
                  setIsMenuOpen(false);
                }
              }}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          </div>

          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <div key={item.id}>
                {item.children ? (
                  <>
                    <button
                      className="flex items-center justify-between w-full text-left text-lg font-medium py-2 text-secondary"
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.id ? null : item.id
                        )
                      }
                    >
                      {item.label}
                      <ChevronDown
                        className={`transition-transform ${
                          activeDropdown === item.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === item.id && (
                      <div className="pl-4 space-y-2 mb-2 border-l-2 border-slate-100 ml-2">
                        {item.children!.map((child) => (
                          <button
                            key={child.id}
                            className={`block w-full text-left py-1 text-base ${
                              currentPage === child.id
                                ? "text-accent"
                                : "text-slate-500"
                            }`}
                            onClick={() => {
                              setCurrentPage(child.id);
                              setIsMenuOpen(false);
                            }}
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    className={`text-left text-lg font-medium py-2 w-full ${
                      currentPage === item.id ? "text-accent" : "text-secondary"
                    }`}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}

            <div className="flex gap-3 mt-3">
              {Object.keys(LANG_LABELS).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang as any)}
                  className={`px-3 py-1 rounded-md text-sm ${
                    language === lang
                      ? "bg-primary text-white"
                      : "bg-slate-100 text-secondary"
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            <Button
              className="w-full mt-4"
              onClick={() => {
                setCurrentPage("contact");
                setIsMenuOpen(false);
              }}
            >
              {t("nav.getQuote")}
            </Button>
          </div>
        </div>
      )}

      {/* floating sidebar (WhatsApp/email) */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-4">
        <a
          href="https://wa.me/8618620380623"
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform relative group"
        >
          <MessageCircle size={22} />
          <span className="absolute right-full mr-3 bg-white text-primary px-3 py-1 rounded shadow-md text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
            WhatsApp Us
          </span>
        </a>
        <a
          href="mailto:rachel@ecopetkit.com"
          className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform relative group"
        >
          <Mail size={20} />
          <span className="absolute right-full mr-3 bg-white text-primary px-3 py-1 rounded shadow-md text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
            Email Us
          </span>
        </a>
      </div>
    </header>
  );
}
