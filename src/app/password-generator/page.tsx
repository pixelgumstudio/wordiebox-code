import { Metadata } from "next";
import PageFile from "./pageFile";


export const metadata: Metadata = {
    title: "Password generator",
    description:
      "Create a secure password using our password generator tool",
      icons: {
        icon: 'https://wordiebox.com/icon.png',  // This sets the favicon for this specific page
      },
       openGraph: {
        type: "website",
        siteName: "Wordiebox",
      title: "Password Generator | Wordiebox",
      description:
        "Create a secure password using our generator tool. Help prevent a security threat by getting a strong password today on wordiebox",
      url: "https://wordiebox.com/password-generator",
      images: [{
        url: 'https://wordiebox.com/seo-card.png',
      }],
    },
    twitter: {
      card: "summary_large_image",
      site: "https://wordiebox.com/password-generator",
      title: "Password Generator | Wordiebox",
      description:
        "Create a secure password using our generator tool. Help prevent a security threat by getting a strong password today on wordiebox",
        images: [{
          url: 'https://wordiebox.com/seo-card.png',
        }],
    },
  };

  const RandomWord = () => {

    return <PageFile />
    };
    
    export default RandomWord;