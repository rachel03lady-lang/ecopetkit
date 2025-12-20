"use client";

import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/app/providers/LanguageProvider";
import { HOME_CTA_CONTENT } from "@/constants/constants";

export default function HomeCTA() {
  const router = useRouter();
  const { language } = useLanguage();

  const content = HOME_CTA_CONTENT[language];

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-24 text-center">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{content.title}</h2>

        <p className="text-xl text-slate-300 mb-10 leading-relaxed">
          {content.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="white"
            onClick={() => router.push(content.primaryAction.href)}
          >
            {content.primaryAction.label}
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white/10"
            onClick={() => router.push(content.secondaryAction.href)}
          >
            {content.secondaryAction.label}
          </Button>
        </div>
      </div>
    </div>
  );
}
