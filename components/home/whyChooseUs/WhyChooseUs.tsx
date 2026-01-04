"use client";
import { Section } from "@/components/Section";
import {
  Shield,
  Truck,
  Award,
  Zap,
  Star,
  Heart,
  Globe,
  PackageCheck,
  Smartphone,
  Cpu,
} from "lucide-react";

interface Card {
  icon: string | string[]; // FIX: Allow array because WPGraphQL often returns select fields as arrays
  title: string;
  info: string;
}

interface WhyChooseUsData {
  title: string;
  subtitle: string;
  cards: Card[];
}

interface Props {
  data: WhyChooseUsData;
}

// Helper to map string to Icon component
const getIcon = (iconName: string | string[]) => {
  // FIX: Extract string if it comes as an array ["Cpu"]
  const nameRaw = Array.isArray(iconName) ? iconName[0] : iconName;

  const name = nameRaw?.toLowerCase() || "shield"; // Default fallback

  switch (name) {
    case "shield":
      return Shield;
    case "truck":
      return Truck;
    case "award":
      return Award;
    case "zap":
      return Zap;
    case "star":
      return Star;
    case "heart":
      return Heart;
    case "globe":
      return Globe;
    case "packagecheck":
      return PackageCheck;
    case "smartphone":
      return Smartphone;
    case "cpu":
      return Cpu;
    default:
      return Shield;
  }
};

export default function WhyChooseUs({ data }: Props) {
  if (!data) return null;

  return (
    <Section>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">{data.title}</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">{data.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.cards?.map((value, idx) => {
          const IconComponent = getIcon(value.icon);
          return (
            <div
              key={idx}
              className="p-8 border border-slate-100 rounded-2xl hover:shadow-xl transition-all duration-300 bg-white group hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-900 transition-colors">
                <IconComponent className="w-8 h-8 text-slate-900 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {value.info}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
