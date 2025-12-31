import type { Metadata } from "next";
import { Arapey, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next"
const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
  adjustFontFallback: true,

});

const arapey = Arapey({
  variable: "--font-arapey",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  preload: false,
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
        className={`${inter.variable} ${arapey.variable} antialiased`}
      >
        <Analytics/>
        <Header />
        {children}
        <Toaster position="bottom-center" />
        <Footer />
      </body>
    </html>
  );
}
