import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const headingFont = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BrandsByNiksa | Strategia, design i content",
  description:
    "Portfolio marki osobistej łączącej branding, social media strategy i content creation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${headingFont.variable} ${bodyFont.variable} font-body`}>
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
