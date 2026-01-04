"use client";

import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";

interface CTAData {
  title: string;
  description: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: {
    node: {
      mediaItemUrl: string;
    };
  };
}

interface Props {
  data: CTAData;
}

export default function HomeCTA({ data }: Props) {
  const router = useRouter();

  if (!data) return null;

  const pdfLink = data.secondaryCtaHref?.node?.mediaItemUrl || "#";

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-24 text-center">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{data.title}</h2>

        <p className="text-xl text-slate-300 mb-10 leading-relaxed">
          {data.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="white"
            onClick={() => router.push(data.primaryCtaHref)}
          >
            {data.primaryCtaLabel}
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white/10"
            onClick={() => window.open(pdfLink, "_blank")} // Assuming secondary is often a file download
          >
            {data.secondaryCtaLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
