import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Renuga Sree | AI/ML Engineer & Data Scientist",
  description: "AI/ML Engineer specializing in building intelligent systems, deploying scalable ML models, and full-stack engineering.",
  keywords: ["AI Engineer", "ML Engineer", "Data Scientist", "System Design", "Adaptive AI", "Renuga Sree"],
  authors: [{ name: "Renuga Sree" }],
  openGraph: {
    title: "Renuga Sree | AI/ML Engineer",
    description: "Building Intelligent Systems with AI, Data & Scalable Engineering",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
