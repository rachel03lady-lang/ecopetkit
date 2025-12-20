"use client";
import { useLanguage } from "@/app/providers/LanguageProvider";
import { SERVICE_BANNER_CONTENT } from "@/constants/constants";


export default function ServiceBanner(){

    const { language} = useLanguage();
    const content = SERVICE_BANNER_CONTENT[language];
    return (
      <div className="bg-slate-50 py-20 text-center">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">
          {content.title}
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          {content.description}
        </p>
      </div>
    );
}

