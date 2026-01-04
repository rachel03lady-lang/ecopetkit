"use client";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";
import { CaseStudyItem } from "@/types/services";

type CaseStudyProps = {
  data: CaseStudyItem;
};

export default function CaseStudy({ data }: CaseStudyProps) {
  const router = useRouter();
  console.log("case Study steps:", data);
  return (
    <Section background="dark">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <span className="text-accent font-bold tracking-widest uppercase">
            {data.label}
          </span>
          <h2 className="text-4xl font-bold">{data.title}</h2>
          <div className="space-y-4 text-slate-300">
            {(data.caseStudySteps || []).map((item, idx) => (
              <p key={idx}>
                <strong className="text-white">{item.stepLabel}:</strong>{" "}
                {item.stepInformation}
              </p>
            ))}
          </div>
          <Button
            variant="white"
            onClick={() => router.push(data.ctaLink || "")}
          >
            {data.ctaLabel}
          </Button>
        </div>
        <div className="flex-1 w-full h-96 bg-slate-800 rounded-2xl overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center text-slate-600 font-mono">
            [{data.imagePlaceholderTitle}]
            <br />
            {data.imagePlaceholderSubtitle}
          </div>
          <img
            src={data.image.node.sourceUrl}
            alt={data.image.node.altText}
            title={data.image.node.title}
            className="w-full h-full object-cover opacity-50 mix-blend-overlay"
          />
        </div>
      </div>
    </Section>
  );
}
