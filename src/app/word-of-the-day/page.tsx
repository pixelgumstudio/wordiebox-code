
import { Metadata } from "next";
import PageFile from "./pageFile";

export const metadata: Metadata = {
  
  title: 'Wordiebox - Word of the Day: Wordiebox | Merriam-Webster',
  description: 'Build your vocabulary: get a new word every day from Merriam-Webster dictionary. Learn the meaning, history, and fun facts.',
  icons: {
    icon: 'https://wordiebox.com/icon.png',  // This sets the favicon for this specific page
  },
  openGraph: {
    type: "website",
    siteName: "Wordiebox",
    title: 'Wordiebox - Word of the Day: Wordiebox | Merriam-Webster',
    description: 'Build your vocabulary: get a new word every day from Merriam-Webster dictionary. Learn the meaning, history, and fun facts.',
    url: 'https://wordiebox.com/word-of-the-day',
    images: [{
      url: 'https://wordiebox.com/seo-card.png',
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: 'https://wordiebox.com/word-of-the-day',
    title: 'Wordiebox - Word of the Day: Wordiebox | Merriam-Webster',
    description: 'Build your vocabulary: get a new word every day from Merriam-Webster dictionary. Learn the meaning, history, and fun facts.',
    images: [{
      url: 'https://wordiebox.com/seo-card.png',
    }],
  },
};


const DailyWord = () => {

return <PageFile />
};

export default DailyWord;