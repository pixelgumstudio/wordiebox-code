import { Metadata } from "next";
import PageFile from "./pageFile";


export const metadata: Metadata = {
    title: "Capitalize My Title",
    description:
      "Convert your text to capital letters automatically. Our tool can convert your text to Title Case, sentence case, UPPERCASE and lowercase",
      icons: {
        icon: 'https://wordiebox.com/icon.png',  // This sets the favicon for this specific page
      },
       openGraph: {
        type: "website",
        siteName: "Wordiebox",
      title: "Title Capitalization Tool - Capitalize My Title - Title Case Tool |  Wordiebox",
      description:
        "Make title capitalization easy. Automatically capitalise & convert case of text to Title Case, sentence case, UPPERCASE, lowercase, and more.",
      url: "https://wordiebox.com/capitalization-tool",
      images: [{
        url: 'https://wordiebox.com/seo-card.png',
      }],
    },
    twitter: {
      card: "summary_large_image",
      site: "https://wordiebox.com/capitalization-tool",
      title: "Title Capitalization Tool - Capitalize My Title - Title Case Tool |  Wordiebox",
      description:
        "Make title capitalization easy. Automatically capitalise & convert case of text to Title Case, sentence case, UPPERCASE, lowercase, and more.",
        images: [{
          url: 'https://wordiebox.com/seo-card.png',
        }],
    },
  };

  const Capitalize = () => {

    return <PageFile />
    };
    
    export default Capitalize;