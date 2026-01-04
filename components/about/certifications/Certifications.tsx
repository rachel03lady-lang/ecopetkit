"use client";
import { Award } from "lucide-react";

type Props = {
  data?: { label?: string | null }[] | null;
};

export default function Certifications({ data }: Props) {
  if (!data) return null;

  return (
    <div className="bg-slate-50 py-16 border-t border-slate-200 overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-8">
        <h3 className="text-lg font-bold text-slate-400 uppercase tracking-widest">
          Global Compliance & Certifications
        </h3>
      </div>
      <div className="flex justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 flex-wrap px-6">
        {data?.map((cert) => (
          <div
            key={cert.label}
            className="flex flex-col items-center group cursor-default"
          >
            <Award
              size={48}
              className="mb-2 text-slate-800 group-hover:text-accent transition-colors"
            />
            <span className="font-bold text-slate-900">{cert.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
