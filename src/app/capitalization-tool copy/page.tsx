import { Metadata } from "next";
import PageFile from "./pageFile";


export const metadata: Metadata = {
    title: "Cursive text translator",
    description:
      "The cursive text translator converts normal text to cursive text.",
      icons: {
        icon: 'https://wordiebox.com/icon.png',  // This sets the favicon for this specific page
      },
       openGraph: {
        type: "website",
        siteName: "Wordiebox",
      title: "Cursive text translator |  Wordiebox",
      description:
        "Enter text below to convert it to cursive text or other text decoration formats including underlined, strikethrough, and italics!",
      url: "https://wordiebox.com/cursive-text-generator",
      images: [{
        url: 'https://wordiebox.com/seo-card.png',
      }],
    },
    twitter: {
      card: "summary_large_image",
      site: "https://wordiebox.com/cursive-text-generator",
      title: "Cursive text translator |  Wordiebox",
      description:
        "Enter text below to convert it to cursive text or other text decoration formats including underlined, strikethrough, and italics!",
        images: [{
          url: 'https://wordiebox.com/seo-card.png',
        }],
    },
  };

  const Capitalize = () => {

    return <PageFile />
    };
    
    export default Capitalize;