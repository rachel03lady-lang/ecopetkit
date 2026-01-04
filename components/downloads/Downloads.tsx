"use client";
import { formatFileSize } from "@/lib/formatSize";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { FileText, Download, FileCode, BookOpen } from "lucide-react";

interface generateDownloadProps {

  content:Record<string, any>
}

export default function Downloads({content}:generateDownloadProps) {
  console.log("Download:", content);

  // FIX 1: Handle the fact that 'type' is an array ["catalog"]
  const getIcon = (typeRaw: string | string[]) => {
    // specific fix: grab the first item if it's an array
    const type = Array.isArray(typeRaw) ? typeRaw[0] : typeRaw;

    switch (type) {
      case "catalog":
        return <BookOpen className="text-accent" size={24} />;
      case "software":
        return <FileCode className="text-purple-500" size={24} />;
      default:
        // Fallback for 'manual' or undefined
        return <FileText className="text-slate-500" size={24} />;
    }
  };

  return  (
    <div className="pt-20">
      <Section background="gray">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4">{content.heading}</h1>
          <p className="text-slate-600">{content.subheading}</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          {content.downloadBoxItems.map((item: any, idx: number) => {
             // Helper to get clean type string for display
             const displayType = Array.isArray(item.type) ? item.type[0] : item.type;

             return (
              <div
                key={idx}
                className={`flex items-center justify-between p-6 ${
                  idx !== content.downloadBoxItems.length - 1
                    ? "border-b border-slate-100"
                    : ""
                } hover:bg-slate-50 transition-colors`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                    {/* FIX 1: Pass the raw data, let function handle array */}
                    {getIcon(item.type)}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                    <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                      <span className="bg-slate-200 px-2 py-0.5 rounded text-slate-700 capitalize">
                        {displayType}
                      </span>
                      
                      <span>
                        {/* FIX 2: Read fileSize from 'node', not 'mediaDetails' */}
                        {item.file?.node?.fileSize
                          ? formatFileSize(item.file.node.fileSize)
                          : "Size unknown"}
                      </span>
                      
                      <span>• {item.publishedDate}</span>
                    </div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                  onClick={() => {
                    const url =
                      item.file?.node?.mediaItemUrl || item.file?.node?.sourceUrl;
                    if (url) window.open(url, "_blank");
                  }}
                >
                  <Download size={16} />
                  <span className="hidden md:inline">{item.ctaLabel}</span>
                </Button>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
