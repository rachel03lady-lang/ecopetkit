"use client";
import Link from "next/link";
import { Linkedin, Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/app/providers/LanguageProvider";
import Newsletter from "@/components/Newsletter";

// Custom Icon Component
const TikTokIcon = ({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export default function Footer() {
  const { ui } = useLanguage();

  // Safeguard: If no data yet, show nothing or skeleton
  if (!ui || !ui.footer) return null;

  const { footer } = ui;
  // console.log("Footer Data =>", footer);

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* BRAND COLUMN */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">{footer.footerBrandName}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {footer.footerBandDescription}
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent transition-colors"
                title="TikTok"
              >
                <TikTokIcon size={16} />
              </a>
            </div>
          </div>

          {/* PRODUCTS COLUMN */}
          <div>
            <h4 className="font-bold mb-6">{footer.footerProductTitle}</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              {/* Flatten the nested structure to render links */}
              {footer.footerProductsCategories
                ?.flatMap((cat: any) => cat.footerProduct)
                .map((prod: any, idx: number) => (
                  <li key={idx} className="hover:text-white cursor-pointer">
                    <Link href={prod.uri || "#"}>{prod.name}</Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* COMPANY COLUMN (FIXED MAPPING) */}
          <div>
            <h4 className="font-bold mb-6">{footer.footerCompanyTitle}</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              {/* FIX: Now mapping over the 'companyLinks' array from your new API response */}
              {footer.footerCompany?.companyLinks?.map(
                (link: any, idx: number) => (
                  <li key={idx} className="hover:text-white cursor-pointer">
                    <Link href={link.uri || "#"}>{link.title || "Link"}</Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* NEWSLETTER COLUMN */}
          <Newsletter footer={footer} />
          {/* <div>
            <h4 className="font-bold mb-6">{footer.footerNewsletter}</h4>
            <p className="text-slate-400 text-sm mb-4">
              {footer.footerNewsletterDescription}
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder={footer.footerNewsletterCtaPlaceholder}
                className="bg-slate-800 text-white px-4 py-2 rounded-l-md outline-none focus:ring-1 focus:ring-accent w-full text-sm"
              />
              <button className="bg-accent px-4 py-2 rounded-r-md font-medium text-sm hover:bg-sky-400 transition-colors">
                {footer.footerNewsletterCtaLabel}
              </button>
            </div>
          </div> */}
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-slate-800 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
          <p>
            © {new Date().getFullYear()} {footer.footerBrandName}. All rights
            reserved.
          </p>
          <ul className="flex gap-6 mt-4 md:mt-0">
            {/* You can add dynamic footer bottom links here later if needed */}
            <li>
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
