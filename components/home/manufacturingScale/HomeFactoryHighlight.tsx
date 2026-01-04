"use client";

import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";

interface ManufacturingData {
  label: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaUrl: string;
  productionInfo: {
    label: string;
    value: string;
  }[];
  image: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
}

interface Props {
  data: ManufacturingData;
}

export default function HomeFactoryHighlight({ data }: Props) {
  const router = useRouter();

  if (!data) return null;

  return (
    <div className="relative py-24 bg-slate-900 text-white overflow-hidden">
      {/* Background Image logic - using the image from WP or fallback */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('${
            data.image?.node?.sourceUrl ||
            "https://picsum.photos/1920/1080?grayscale&blur=2"
          }')`,
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">
              {data.label}
            </span>
            <h2 className="text-4xl font-bold mb-6">{data.title}</h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              {data.description}
            </p>
            <Button
              variant="white"
              onClick={() => router.push(data.ctaUrl || "/")}
            >
              {data.ctaLabel}
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {data.productionInfo?.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-accent font-bold uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
