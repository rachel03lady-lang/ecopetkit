"use client";
import { Section } from "@/components/Section";
import {
  Activity,
  Hammer,
  Syringe,
  CircuitBoard,
  Cog,
  type LucideIcon,
} from "lucide-react";

// 1. Define the Map (Adjust icons to match your needs)
const WORKSHOP_ICONS: Record<string, LucideIcon> = {
  mold: Hammer, // Matches "mold" from API
  injection: Syringe, // Matches "injection" from API
  smt: CircuitBoard, // Matches "smt" from API
  assembly: Cog, // Matches "assembly" from API
  // Add a fallback if needed
  default: Activity,
};
type ProductionWorkshopProps = {
  data?: {
    title?: string | null;
    description?: string | null;
    image?: { node?: any } | null;
    icon_key?: string | null;
    highlights?: { highlight: string }[] | null;
  }[] | null;
};

type ProductionWorkshopHeaderProps = {
  headerData?: {
    badge?: string | null;
    title?: string | null;
    description?: string | null;
  } | null;
};

export default function ProductionWorkshop({ data,headerData}: ProductionWorkshopProps & ProductionWorkshopHeaderProps) {
  if (!data) return null;
  
  console.log("Workshop =>", data);
  return (
    <Section className="pb-0">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <span className="text-accent font-bold tracking-widest uppercase text-sm">
          {headerData?.badge}
        </span>
        <h2 className="text-4xl font-bold mt-2 mb-4">{headerData?.title}</h2>
        <p className="text-slate-500">{headerData?.description}</p>
      </div>

      <div className="space-y-24">
        {data?.map((workshop, idx) => {
          // 2. Logic to find the correct icon
          // Handle if it's an array ["mold"] or just a string "mold"
          const keyRaw = workshop.icon_key;
          const key = Array.isArray(keyRaw) ? keyRaw[0] : keyRaw;

          // Lookup component, fallback to Activity if not found
          const IconComponent =
            key && WORKSHOP_ICONS[key]
              ? WORKSHOP_ICONS[key]
              : WORKSHOP_ICONS.default;

          return (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
                  <img
                    src={workshop.image?.node?.sourceUrl}
                    alt={workshop.image?.node?.altText}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <span className="text-white font-bold flex items-center gap-2">
                      <Activity size={20} className="text-accent" /> Live
                      Monitoring Active
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900 mb-6">
                  <IconComponent size={28} />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-slate-900">
                  {workshop.title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  {workshop.description}
                </p>
                <ul className="space-y-3">
                  {workshop.highlights?.map((item) => (
                    <li
                      className="flex items-center text-slate-700 text-sm font-medium"
                      key={item.highlight}
                    >
                      <div className="w-2 h-2 rounded-full bg-accent mr-3"></div>
                      {item.highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
