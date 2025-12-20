import type { Config } from "tailwindcss";

const config: Config = {
  darkMode:"class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./constants/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        primary: "#0f172a", // slate-900
        accent: "#0ea5e9", // sky-500
        secondary: "#64748b", // slate-500
      },
    },
  },
  plugins: [],
};

export default config;
