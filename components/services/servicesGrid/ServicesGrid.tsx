"use client";
import { Section } from "@/components/Section";
import { ServiceCapability } from "@/types/services";
import { ICON_MAP } from "@/lib/iconMap";

type ServicesGridProps = {
  data: ServiceCapability[];
};

export default function ServicesGrid({ data }: ServicesGridProps) {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {data.map((item, idx) => {
          const Icon = ICON_MAP[item.iconKey];

          console.log("Icon =>", Icon);
          
          return (
            <div
              key={idx}
              className="flex flex-col items-start p-6 rounded-xl hover:bg-slate-50 transition-colors"
            >
              {Icon && (
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Icon size={24} />
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          );})}
      </div>
    </Section>
  );
}
