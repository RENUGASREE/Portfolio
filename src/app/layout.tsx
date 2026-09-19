import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Renuga Sree S | AI & Data Science Graduate",
  description: "Artificial Intelligence and Data Science graduate experienced in Python, SQL, Machine Learning, AI, and full-stack development, building data-driven applications.",
  keywords: ["AI Engineer", "Data Scientist", "Full-Stack Developer", "Python", "Machine Learning", "Renuga Sree S", "Data Analytics"],
  authors: [{ name: "Renuga Sree S" }],
  openGraph: {
    title: "Renuga Sree S | AI & Data Science Graduate",
    description: "Artificial Intelligence and Data Science graduate experienced in Python, SQL, Machine Learning, AI, and full-stack development.",
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
