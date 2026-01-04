"use client";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";

// Define the shape of the Tier data coming from WP
type TierItem = {
  tierLabel: string;
  title: string;
  isPopular?: boolean;
  features: { feature: string }[]; // Note: WP returns array of objects {feature: "text"}
  moq: string;
  ctaLabel?: string;
  ctaLink?: string;
};

type CustomizationTierProps = {
  data: TierItem[];
  title?: string;
};

export default function CustomizationTier({
  data,
  title,
}: CustomizationTierProps) {
  const router = useRouter();

  if (!data) return null;

  return (
    <Section>
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">
          {title || "Customization Tiers"}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((item, idx) => {
          const { ctaLink, ctaLabel } = item;
          return (
            <div
              className={
                item.isPopular
                  ? "border-2 border-slate-900 rounded-2xl p-8 shadow-xl relative transform md:-translate-y-4 bg-white"
                  : "border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              }
              key={idx}
            >
              <div className="text-accent font-bold mb-2">{item.tierLabel}</div>
              <h3 className="text-2xl font-bold mb-6">{item.title}</h3>

              <ul className="space-y-3 mb-8">
                {/* Handle WP Repeater Structure for Features */}
                {item.features?.map((f_item, f_idx) => (
                  <li className="flex items-center" key={f_idx}>
                    <span className="w-2 h-2 bg-slate-900 rounded-full mr-3"></span>
                    {/* Check if feature is string or object (WP returns object {feature: "..."}) */}
                    {typeof f_item === "string" ? f_item : f_item.feature}
                  </li>
                ))}
              </ul>

              <p className="text-sm text-slate-500 mb-6">{item.moq}</p>

              {ctaLink && ctaLabel && (
                <Button className="w-full" onClick={() => router.push(ctaLink)}>
                  {ctaLabel}
                </Button>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
