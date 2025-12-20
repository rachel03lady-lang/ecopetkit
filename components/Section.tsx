import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "gray" | "dark";
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = "",
  id,
  background = "white",
}) => {
  const bgStyles = {
    white: "bg-white text-slate-900",
    gray: "bg-slate-50 text-slate-900",
    dark: "bg-slate-900 text-white",
  };

  return (
    <section
      id={id}
      className={`py-20 md:py-32 ${bgStyles[background]} ${className}`}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {children}
      </div>
    </section>
  );
};
