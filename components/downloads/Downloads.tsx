"use client";

import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { useLanguage } from "@/app/providers/LanguageProvider";
import { DOWNLOADS_CONTENT } from "@/constants/constants";
import { FileText, Download, FileCode, BookOpen } from "lucide-react";

export default function Downloads() {
  const { language } = useLanguage();
  const data = DOWNLOADS_CONTENT[language];

  const getIcon = (type: string) => {
    switch (type) {
      case "Catalog":
        return <BookOpen className="text-accent" size={24} />;
      case "Software":
        return <FileCode className="text-purple-500" size={24} />;
      default:
        return <FileText className="text-slate-500" size={24} />;
    }
  };

  return (
    <div className="pt-20">
      <Section background="gray">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4">{data.banner.title}</h1>
          <p className="text-slate-600">{data.banner.description}</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          {data.items.map((item, idx) => (
            <div
              key={item.id}
              className={`flex items-center justify-between p-6 ${
                idx !== data.items.length - 1 ? "border-b border-slate-100" : ""
              } hover:bg-slate-50 transition-colors`}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                  {getIcon(item.type)}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                    <span className="bg-slate-200 px-2 py-0.5 rounded text-slate-700">
                      {item.type}
                    </span>
                    <span>{item.size}</span>
                    <span>• {item.date}</span>
                  </div>
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Download size={16} />
                <span className="hidden md:inline">Download</span>
              </Button>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
