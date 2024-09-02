import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../sections/navbar";
import Footer from "../sections/footer";
import Head from "next/head";
import {GoogleAnalytics, GoogleTagManager} from "@next/third-parties/google"
// import useScrollToTop from "@/components/ScrollToTop";
const Bricolage = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Wordiebox - Word counter & Improve Grammar',
  description: 'A number of free word tools to help improve give insight to your writing.',
  icons: {
    icon: 'https://wordiebox.com/icon.png',  // This sets the favicon for this specific page
  },
  openGraph: {
    type: "website",
    url: "https://wordiebox.com",
    title: "Wordiebox - Word counter & Improve Grammar",
    description: "A number of free word tools to help improve give insight to your writing.",
    siteName: "Wordiebox",
    images: [{
      url: "https://wordiebox.com/seo-card.png",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://wordiebox.com",
    images: [{
      url: 'https://wordiebox.com/seo-card.png',
    }],
    title: "Wordiebox - Word counter & Improve Grammar",
    description: "A number of free word tools to help improve give insight to your writing."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // useScrollToTop();
  return (
    <html lang="en">
      <body className={`w-full flex flex-col justify-between min-h-[100vh] h-full mx-auto mt-[60px] bg-[#ffffff] ${Bricolage.className}`}>
        {/* <ScrollToTop /> */}
        <Navbar />
        {children}
        <Footer />
        <GoogleTagManager gtmId="GTM-K8ST54XF" />
        <GoogleAnalytics gaId="G-P8TXFVSRPZ" />
      </body>
    </html>
  );
}

