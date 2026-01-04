"use client";
import { Section } from "@/components/Section";

type Props = {
  data?: {
    title?: string | null;
    description?: string | null;
    steps?:
      | {
          title?: string | null;
          stage?: string | null;
          description?: string | null;
          icon?: string | null;
        }[] | null;
  } | null;
};

export default function QualityControl({ data }: Props) {
  if (!data) return null;

  return (
    <Section background="gray" className="mt-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">{data.title}</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">{data.description}</p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-slate-200 via-accent/50 to-slate-200 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
          {data.steps?.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-24 h-24 mx-auto bg-slate-50 rounded-full flex items-center justify-center border-4 border-white shadow-lg mb-6 group-hover:bg-slate-900 transition-colors">
                <span className="text-2xl font-black text-slate-300 group-hover:text-accent">
                  0{idx + 1}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                {item.title}
              </h3>
              <div className="text-xs font-bold text-accent uppercase tracking-wider mb-4">
                {item.stage}
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}