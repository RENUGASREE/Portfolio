import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://renugasree.github.io/Portfolio"),
  title: "Renuga Sree S | AI & Data Science Graduate",
  description: "Portfolio of Renuga Sree S, an Artificial Intelligence and Data Science graduate with experience in data analytics, machine learning, AI-based applications, Python, SQL, Power BI, and full-stack development.",
  keywords: [
    "Renuga Sree",
    "Data Science",
    "Data Analyst",
    "Artificial Intelligence",
    "Machine Learning",
    "Python",
    "SQL",
    "Power BI",
    "AI Portfolio",
    "Data Analytics",
    "Full-Stack Development"
  ],
  authors: [{ name: "Renuga Sree S" }],
  creator: "Renuga Sree S",
  openGraph: {
    title: "Renuga Sree S | AI & Data Science Graduate",
    description: "Portfolio of Renuga Sree S, an Artificial Intelligence and Data Science graduate with experience in data analytics, machine learning, AI-based applications, Python, SQL, Power BI, and full-stack development.",
    url: "https://renugasree.github.io/Portfolio/",
    siteName: "Renuga Sree S Portfolio",
    images: [
      {
        url: "/Portfolio/renuga-data-science-profile.png",
        width: 1200,
        height: 630,
        alt: "Renuga Sree S - AI & Data Science Graduate",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Renuga Sree S | AI & Data Science Graduate",
    description: "Portfolio of Renuga Sree S, an Artificial Intelligence and Data Science graduate with experience in data analytics, machine learning, AI-based applications, Python, SQL, Power BI, and full-stack development.",
    images: ["/Portfolio/renuga-data-science-profile.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
              try {
                var saved = localStorage.getItem('portfolio-theme');
                var pref = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
                var theme = saved || pref || 'dark';
                document.documentElement.setAttribute('data-theme', theme);
              } catch (e) {
                document.documentElement.setAttribute('data-theme', 'dark');
              }
            })();`,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased min-h-screen bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
