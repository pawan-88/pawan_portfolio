import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageLoader } from "@/components/layout/page-loader";
import { GradientBackground } from "@/components/shared/gradient-background";
import { personalInfo } from "@/data/personal";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(personalInfo.siteUrl),
  title: {
    default: personalInfo.seo.title,
    template: `%s | ${personalInfo.name}`,
  },
  description: personalInfo.seo.description,
  keywords: [...personalInfo.seo.keywords],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: personalInfo.siteUrl,
    title: personalInfo.seo.title,
    description: personalInfo.seo.description,
    siteName: `${personalInfo.name} Portfolio`,
    images: [
      {
        url: personalInfo.profileImage,
        width: 800,
        height: 800,
        alt: `${personalInfo.name} profile photo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: personalInfo.seo.title,
    description: personalInfo.seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-violet-600 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <PageLoader />
        <GradientBackground />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
