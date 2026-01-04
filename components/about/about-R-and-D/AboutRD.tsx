
"use client";
import { Cpu, Wifi, ShieldCheck, Database, LucideIcon } from "lucide-react";
import { Section } from "@/components/Section";


// 1. Create a map to link strings to components
const ICON_MAP: Record<string, LucideIcon> = {
  Cpu: Cpu,
  Wifi: Wifi,
  ShieldCheck: ShieldCheck,
  Database: Database,
  // Add other icons here if your CMS has more options
};

type RDProps = {
  data?: {
    title?: string | null;
    subtitle?: string | null;
    items?: { label?: string; value?: string }[] | null;
    // Update type to reflect that icon is a string (or array of strings)
    features?:
      | { title?: string; description?: string; icon?: string | string[] }[]
      | null;
  } | null;
};

export default function AboutRD({data}:RDProps)
{

if (!data) return null;
console.log("about data=>", data);
const { title, subtitle, items, features } = data;

return (
  <Section>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        <p className="text-slate-600 mb-4 leading-relaxed">{subtitle}</p>
        <ul className="space-y-4 mt-8">
          {items?.map((item) => (
            <li className="flex items-center" key={item.label}>
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mr-4">
                <span className="font-bold text-slate-900">{item.value}</span>
              </div>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {features?.map((item, idx) => {
          const iconKey = Array.isArray(item.icon) ? item.icon[0] : item.icon;

          // 3. Find the matching component, fallback to Cpu if not found
          const IconComponent =
            iconKey && ICON_MAP[iconKey] ? ICON_MAP[iconKey] : Cpu;
          return (
            <div className="bg-slate-50 p-6 rounded-xl" key={idx}>
              <IconComponent className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </Section>
);
}