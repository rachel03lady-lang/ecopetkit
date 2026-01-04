"use client";
import React, { useEffect, useState, useRef } from "react";
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
import { useLanguage } from "@/app/providers/LanguageProvider";
import { Button } from "@/components/Button";

export default function Header() {
  const { language, ui } = useLanguage();

  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [globalSearchQuery, setGlobalSearchQuery] = useState("");
  const closeTimerRef = useRef<number | null>(null);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  const LANG_LABELS: Record<string, string> = {
    "en-us": "English", // Mapped to folder name
    de: "Deutsch",
    fr: "Français",
    es: "Español",
  };

  // Safe fallback if UI data hasn't loaded yet
  const navItems = ui?.navigationMenu || [];

  // --- LANGUAGE SWITCHER LOGIC ---
  const handleLanguageSwitch = (newLangCode: string) => {
    // 1. Get current path segments (e.g., ['', 'en-us', 'about'])
    const segments = pathname.split("/").filter(Boolean);

    if (segments.length > 0) {
      // 2. Replace the first segment (lang) with the new one
      segments[0] = newLangCode;
      const newPath = `/${segments.join("/")}`;

      // 3. Navigate to new URL (Provider will detect change and fetch data)
      router.push(newPath);
    } else {
      // Fallback for homepage root
      router.push(`/${newLangCode}`);
    }

    setIsLangMenuOpen(false);
    setIsMenuOpen(false); // Close mobile menu if open
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || pathname !== "/"
          ? "bg-white shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
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
            {ui?.brandName || "ECOPETKIT"}
          </span>
        </div>

        {/* SEARCH (Desktop) */}
        <div className="hidden lg:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder={ui?.searchPlaceholder || "Search..."}
              className={`w-full py-2 pl-10 pr-4 rounded-full text-sm outline-none transition-all ${
                scrolled || pathname !== "/"
                  ? "bg-slate-100 text-primary focus:bg-white focus:ring-2 focus:ring-slate-900"
                  : "bg-white/10 text-white placeholder-white/70 border border-white/20 focus:bg-white/20 focus:border-white"
              }`}
              value={globalSearchQuery}
              onChange={(e) => setGlobalSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  router.push(`/${language}/products`);
                }
              }}
            />
            <Search
              className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${
                scrolled || pathname !== "/"
                  ? "text-slate-400"
                  : "text-white/70"
              }`}
            />
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item: any) => {
            const isActive =
              pathname === item.href?.uri ||
              (item.children &&
                item.children.some((c: any) => pathname === c.href?.uri));

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
                  if (item.hasChildren) setActiveDropdown(item.id);
                }}
                onMouseLeave={() => scheduleClose()}
              >
                {/* Parent Link or Button */}
                {item.hasChildren ? (
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
                    href={item.href?.uri || "#"}
                    className={`text-sm font-medium ${textClass}`}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {item.hasChildren &&
                  activeDropdown === item.id &&
                  item.children && (
                    <div
                      onMouseEnter={() => cancelScheduledClose()}
                      onMouseLeave={() => scheduleClose()}
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-slate-100 overflow-hidden py-2"
                    >
                      {item.children.map((child: any) => (
                        <Link
                          key={child.id}
                          href={child.href?.uri || "#"}
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-accent"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
              </div>
            );
          })}

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
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
                {Object.keys(LANG_LABELS).map((langKey) => (
                  <button
                    key={langKey}
                    onClick={() => handleLanguageSwitch(langKey)}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 flex items-center justify-between ${
                      language === langKey ? "text-accent font-bold" : ""
                    }`}
                  >
                    {LANG_LABELS[langKey]}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CTA Button */}
          {ui?.navigationCta && (
            <Button
              size="sm"
              variant={scrolled || pathname !== "/" ? "primary" : "white"}
              onClick={() => router.push(ui.navigationCta.ctaUrl || "/contact")}
            >
              {ui.navigationCta.ctaLabel || "Get Quote"}
            </Button>
          )}
        </nav>

        {/* MOBILE TOGGLE & MENU (Abbreviated for clarity - logic same as Desktop) */}
        <button
          className={`md:hidden ${
            scrolled || pathname !== "/" ? "text-primary" : "text-white"
          }`}
          onClick={() => setIsMenuOpen((s) => !s)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-6 px-6 border-t border-slate-100">
          {/* ... Search ... */}

          <div className="flex flex-col gap-3">
            {/* ... Nav Items ... */}

            {/* Mobile Lang Switcher */}
            <div className="flex gap-3 mt-3">
              {Object.keys(LANG_LABELS).map((langKey) => (
                <button
                  key={langKey}
                  onClick={() => handleLanguageSwitch(langKey)}
                  className={`px-3 py-1 rounded-md text-sm ${
                    language === langKey
                      ? "bg-primary text-white"
                      : "bg-slate-100 text-secondary"
                  }`}
                >
                  {langKey.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
