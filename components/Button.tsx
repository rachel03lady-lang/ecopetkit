import React from "react";
import Link from "next/link";

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "href"> {
  href?: string;
  variant?: "primary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-slate-900 text-white hover:bg-slate-800 hover:shadow-lg border border-transparent",
    outline:
      "bg-transparent text-slate-900 border border-slate-900 hover:bg-slate-50",
    white:
      "bg-white text-slate-900 hover:bg-slate-100 hover:shadow-lg border border-transparent",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  // Navigation case
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  // Action case
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
