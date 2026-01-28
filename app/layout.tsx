import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/app/providers/LanguageProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  // FIX: Add metadataBase here. This fixes OpenGraph image issues.
  metadataBase: new URL("https://ecopetkit.com"),

  title: {
    default: "EcoPetKit", // Default title if a page doesn't define one
    template: "%s | EcoPetKit", // Template for sub-pages (e.g. "About | EcoPetKit")
  },
  description:
    "We offer solutions on pet care and offer luxury products of pet care. ",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <LanguageProvider>
          <Header />
          {children}
          {/* <Footer /> */}
        </LanguageProvider>
      </body>
    </html>
  );
}
