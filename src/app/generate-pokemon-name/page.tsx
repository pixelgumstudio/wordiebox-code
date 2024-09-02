import { Metadata } from "next";
import PageFile from "./pageFile";


export const metadata: Metadata = {
    title: "Pokemon name Generator",
    description:
      "Generate a pokemon name from our pokemon name generator.",
      icons: {
        icon: 'https://wordiebox.com/icon.png',  // This sets the favicon for this specific page
      },
       openGraph: {
        type: "website",
        siteName: "Wordiebox",
      title: "Pokemon Name Generator | Pokemon Nickname Generator |  Wordiebox",
      description:
        "Create random Pokemon name and Pokemon nickname from our Pokemon name generator and Pokemon nickname generator ",
      url: "https://wordiebox.com/generate-pokemon-name",
      images: [{
        url: 'https://wordiebox.com/seo-card.png',
      }],
    },
    twitter: {
      card: "summary_large_image",
      site: "https://wordiebox.com/generate-pokemon-name",
      title: "Pokemon Name Generator | Pokemon Nickname Generator |  Wordiebox",
      description:
        "Create random Pokemon name and Pokemon nickname from our Pokemon name generator and Pokemon nickname generator ",
        images: [{
          url: 'https://wordiebox.com/seo-card.png',
        }],
    },
  };

  const MorseCode = () => {

    return <PageFile />
    };
    
    export default MorseCode;