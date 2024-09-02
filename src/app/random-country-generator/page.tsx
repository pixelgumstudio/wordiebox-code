import { Metadata } from "next";
import PageFile from "./pageFile";


export const metadata: Metadata = {
    title: "Random Country Generator",
    description:
      "Random Country will generate a new random country from the continent you have selected",
      icons: {
        icon: 'https://wordiebox.com/icon.png',  // This sets the favicon for this specific page
      },
       openGraph: {
        type: "website",
        siteName: "Wordiebox",
      title: "Random Country Generator | Wordiebox",
      description:
        "Random Country will generate a new random country, flag, map, area, population, and capital city. Learn about a new random country today!",
      url: "https://wordiebox.com/random-country-generator",
      images: [{
        url: 'https://wordiebox.com/seo-card.png',
      }],
    },
    twitter: {
      card: "summary_large_image",
      site: "https://wordiebox.com/random-country-generator",
      title: "Random Country Generator | Wordiebox",
      description:
        "Random Country will generate a new random country, flag, map, area, population, and capital city. Learn about a new random country today!",
        images: [{
          url: 'https://wordiebox.com/seo-card.png',
        }],
    },
  };

  const RandomWord = () => {

    return <PageFile />
    };
    
    export default RandomWord;