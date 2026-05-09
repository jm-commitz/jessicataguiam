import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const liberationSerif = localFont({
  src: "../public/font/LiberationSerif-Bold.ttf",
  variable: "--font-heading",
});

const newsreader = Newsreader({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jessica Taguiam — Architectural Drafting & Design",
  description: "Portfolio of Jess — architectural drafting, spatial design, and technical plans.",
  openGraph: {
    title: "Jessica Taguiam — Architectural Drafting & Design",
    description: "Portfolio of Jess — architectural drafting, spatial design, and technical plans.",
    images: [
      {
        url: "/images/metatags/jessmeta.png",
        width: 1200,
        height: 630,
        alt: "JESS_WORKS",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jessica Taguiam — Architectural Drafting & Design",
    description: "Portfolio of Jess — architectural drafting, spatial design, and technical plans.",
    images: ["/images/metatags/jessmeta.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${liberationSerif.variable} ${newsreader.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.classList.add('dark');})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
