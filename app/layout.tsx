import type { Metadata } from "next";
import { DM_Serif_Text, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/ui/layout/header";
import Footer from "@/app/ui/layout/footer";
import { Toaster } from "sonner";
import ClarityProvider from "./ui/layout/clarity-provider";

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,

});

const dmtext = DM_Serif_Text({
  variable: "--font-dm-text",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Summer Breeze",
  description: "We design personal gardens that reflect your style. From modern concepts to traditional landscapes, we create outdoor spaces that perfectly complement your home and lifestyle.",
  keywords: [
    "garden design",
    "landscape architecture",
    "residential gardens",
    "modern landscaping",
    "outdoor design",
    "sustainable gardens",
    "backyard design",
    "Mediterranean gardens",
    "garden planning",
    "landscape design"
  ],
  authors: [{ name: "Camelia Strango" }],
  creator: "Camelia Strango",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${dmtext.variable} antialiased`}
      >

        <Header />
        <ClarityProvider />
        {children}
        <Toaster position="bottom-center" />
        <Footer />
      </body>
    </html>
  );
}
