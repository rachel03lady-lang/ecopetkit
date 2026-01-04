"use client";
import { Button } from "@/components/Button";
import { ABOUT_CONTENT } from "@/constants/about";
import { useLanguage } from "@/app/providers/LanguageProvider";
import { useRouter } from "next/navigation";

type CTAProps = {
  data?: {
    title?: string | null;
    description?: string | null;
    primaryButton?: { label?: string | null; href?: string | null } | null;
    secondaryButton?: { label?: string | null; href?: string | null } | null;
  } | null;
};


export default function AboutCTA({data}:CTAProps)
{
    const router = useRouter();

return (
  <div className="bg-slate-900 py-20 text-center px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{data?.title}</h2>
    <p className="text-slate-400 max-w-2xl mx-auto mb-8 text-lg">
      {data?.description}
    </p>
    <div className="flex justify-center gap-4">
      <Button
        variant="white"
        size="lg"
        onClick={() => router.push(data?.primaryButton?.href || "/contact")}
      >
        {data?.primaryButton?.label}
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="text-white border-white hover:bg-white/10"
        onClick={() => router.push(data?.secondaryButton?.href || "/contact")}
      >
        {data?.secondaryButton?.label}
      </Button>
    </div>
  </div>
);
}