import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/portfolio";
import OrbBackground from "@/components/OrbBackground";
import MouseOrb from "@/components/MouseOrb";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// FOUC 방지: 렌더링 전에 테마를 동기적으로 적용하고 visibility 복원
const themeBlock = `(function(){var t=localStorage.getItem('theme');var d=t==='light'?'light':'dark';document.documentElement.setAttribute('data-theme',d);document.documentElement.style.visibility='visible';})();`;

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
  keywords: ["portfolio", "designer", "UI/UX", "branding", "visual design", "web design", "김경환"],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://hwani-portfolio.vercel.app",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.tagline,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
      data-theme="dark"
      suppressHydrationWarning
      style={{ visibility: "hidden" }}
    >
      <head>
        {/* FOUC 방지: 페인트 전에 테마를 동기적으로 적용하고 visibility 복원 */}
        <script dangerouslySetInnerHTML={{ __html: themeBlock }} />
      </head>
      <body className={`min-h-screen bg-background text-foreground`}>
        <OrbBackground />
        <MouseOrb />
        <a href="#main-content" className="skip-nav">
          본문으로 바로가기
        </a>
        {children}
      </body>
    </html>
  );
}