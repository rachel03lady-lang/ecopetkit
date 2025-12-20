"use client";
import { Linkedin, Facebook, Instagram } from "lucide-react";
import { FOOTER_CONTENT } from "@/constants/constants";
import { useLanguage } from "@/app/providers/LanguageProvider";
import { useRouter } from "next/navigation";

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



export default function Footer(){
     const { language, t } = useLanguage();
     const router = useRouter();
     const footer = FOOTER_CONTENT[language];


    return (
      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">{footer.brand.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {footer.brand.description}
              </p>
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

            <div>
              <h4 className="font-bold mb-6">
                {footer.sections.products.title}
              </h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                {footer.sections.products.links.map((item) => (
                  <li
                    className="hover:text-white cursor-pointer"
                    onClick={() => router.push(item.href)}
                    key={item.label}
                  >
                    {item.label}
                  </li>
                ))}
                
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">
                {footer.sections.company.title}
              </h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                {footer.sections.company.links.map((item) => (
                  <li
                    className="hover:text-white cursor-pointer"
                    onClick={() => router.push(item.href)}
                    key={item.label}
                  >
                    {item.label}
                  </li>
                ))}
              
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">
                {footer.sections.newsletter.title}
              </h4>
              <p className="text-slate-400 text-sm mb-4">
                {footer.sections.newsletter.description}
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder={footer.sections.newsletter.emailPlaceholder}
                  className="bg-slate-800 text-white px-4 py-2 rounded-l-md outline-none focus:ring-1 focus:ring-accent w-full text-sm"
                />
                <button className="bg-accent px-4 py-2 rounded-r-md font-medium text-sm hover:bg-sky-400 transition-colors">
                  {footer.sections.newsletter.buttonLabel}
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
            <p>{footer.bottom.rights}</p>
            <ul className="flex gap-6 mt-4 md:mt-0">
              {footer.bottom.links.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    );
}