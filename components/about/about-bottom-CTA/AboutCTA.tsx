"use client";
import { Button } from "@/components/Button";
import { ABOUT_CONTENT } from "@/constants/about";
import { useLanguage } from "@/app/providers/LanguageProvider";
import { useRouter } from "next/navigation";

export default function AboutCTA()
{
    const router = useRouter();
const {language} = useLanguage();
const { primaryButton, title, description, secondaryButton } =
  ABOUT_CONTENT[language].cta;

return (
  <div className="bg-slate-900 py-20 text-center px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{title}</h2>
    <p className="text-slate-400 max-w-2xl mx-auto mb-8 text-lg">
      {description}
    </p>
    <div className="flex justify-center gap-4">
      <Button
        variant="white"
        size="lg"
        onClick={() => router.push(primaryButton.href)}
      >
        {primaryButton.label}
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="text-white border-white hover:bg-white/10"
        onClick={() => router.push(secondaryButton.href)}
      >
        {secondaryButton.label}
      </Button>
    </div>
  </div>
);
}