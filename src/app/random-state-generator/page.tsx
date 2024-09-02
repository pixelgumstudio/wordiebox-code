import { Metadata } from "next";
import PageFile from "./pageFile";


export const metadata: Metadata = {
    title: "Random State Generator",
    description:
      "Get a random state from the USA or pick a random state from any country you choose",
      icons: {
        icon: 'https://wordiebox.com/icon.png',  // This sets the favicon for this specific page
      },
       openGraph: {
        type: "website",
        siteName: "Wordiebox",
      title: "Random State Generator | Wordiebox",
      description:
        "Get a random state from the USA or pick a random state from any country you choose (Australia, Canada, Brazil, Germany, Argentina, India, Malaysia, Nigeria, Venezula, United states of america). Our random state generator can pick a US state for you randomly.",
      url: "https://wordiebox.com/random-state-generator",
      images: [{
        url: 'https://wordiebox.com/seo-card.png',
      }],
    },
    twitter: {
      card: "summary_large_image",
      site: "https://wordiebox.com/random-state-generator",
      title: "Random State Generator | Wordiebox",
      description:
        "Get a random state from the USA or pick a random state from any country you choose (Australia, Canada, Brazil, Germany, Argentina, India, Malaysia, Nigeria, Venezula, United states of america). Our random state generator can pick a US state for you randomly.",
        images: [{
          url: 'https://wordiebox.com/seo-card.png',
        }],
    },
  };

  const RandomWord = () => {

    return <PageFile />
    };
    
    export default RandomWord;