import { Metadata } from "next";
import PageFile from "./pageFile";


export const metadata: Metadata = {
    title: "Strikethrough Text Generator",
    description:
      "Enter text below and get a strikethrough text as response.",
      icons: {
        icon: 'https://wordiebox.com/icon.png',  // This sets the favicon for this specific page
      },
       openGraph: {
        type: "website",
        siteName: "Wordiebox",
      title: "Strikethrough Text |  Wordiebox",
      description:
        "Enter text below to strikethrough it or format it with other fun formats including bold text, cursive, and more!",
      url: "https://wordiebox.com/strikethrough-text-generator",
      images: [{
        url: 'https://wordiebox.com/seo-card.png',
      }],
    },
    twitter: {
      card: "summary_large_image",
      site: "https://wordiebox.com/strikethrough-text-generator",
      title: "Strikethrough Text |  Wordiebox",
      description:
        "Enter text below to strikethrough it or format it with other fun formats including bold text, cursive, and more!",
        images: [{
          url: 'https://wordiebox.com/seo-card.png',
        }],
    },
  };

  const MorseCode = () => {

    return <PageFile />
    };
    
    export default MorseCode;