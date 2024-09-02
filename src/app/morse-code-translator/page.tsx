import { Metadata } from "next";
import PageFile from "./pageFile";


export const metadata: Metadata = {
    title: "Free Online Morse Code Translator",
    description:
      "The morse code translator can translate text from ordinary text into morse code text.",
      icons: {
        icon: 'https://wordiebox.com/icon.png',  // This sets the favicon for this specific page
      },
       openGraph: {
        type: "website",
        siteName: "Wordiebox",
      title: "Morse code translator |  Wordiebox",
      description:
        "The morse code translator can translate text from ordinary text into morse code text. Every word in the morse code translator is encrypted for each letter ",
      url: "https://wordiebox.com/morse-code-translator",
      images: [{
        url: 'https://wordiebox.com/seo-card.png',
      }],
    },
    twitter: {
      card: "summary_large_image",
      site: "https://wordiebox.com/morse-code-translator",
      title: "Morse code translator |  Wordiebox",
      description:
        "The morse code translator can translate text from ordinary text into morse code text. Every word in the morse code translator is encrypted for each letter ",
        images: [{
          url: 'https://wordiebox.com/seo-card.png',
        }],
    },
  };

  const MorseCode = () => {

    return <PageFile />
    };
    
    export default MorseCode;