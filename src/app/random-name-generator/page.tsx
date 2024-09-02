import { Metadata } from 'next';
import PageFile from './[language]/pageFile';

export async function generateMetadata({ params }: { params: { language: string } }): Promise<Metadata> {
  const { language } = params;

  const capitalizedLang = (language || "").replace(/-/g, " "); 
  const languages = capitalizedLang.charAt(0).toUpperCase() + capitalizedLang.slice(1);
  const lang = languages === ''? 'English' : languages

  return {
    title: `${lang} Name Generator - Wordiebox.com`,
    description: `The free online ${lang} name generator tool allows you to generate a name and its meaning in the ${lang}`,
    icons: {
      icon: 'https://wordiebox.com/icon.png',  // This sets the favicon for this specific page
    },
    openGraph: {
      type: "website",
      siteName: "Wordiebox",
      title: `${lang} Name Generator - Wordiebox.com`,
      description: `The free online ${lang} name generator tool allows you to generate a name and its meaning in the ${lang}`,
      url: `https://wordiebox.com/random-name-generator/${lang}`,
      images: [{
        url: 'https://wordiebox.com/seo-card.png',
      }],
    },
    twitter: {
      card: "summary_large_image",
      site: `https://wordiebox.com/random-name-generator/${lang}`,
      title: `${lang} Name Generator - Wordiebox.com`,
      description: `The free online ${lang} name generator tool allows you to generate a name and its meaning in the ${lang}`,
      images: [{
        url: 'https://wordiebox.com/seo-card.png',
      }],
    },
  };
}

const NameGenerator = ({ params }: { params: { language: string } }) => {
  return <PageFile />;
};

export default NameGenerator;
