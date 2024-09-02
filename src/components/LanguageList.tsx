// components/LanguagesList.tsx
import Link from 'next/link';
import React from 'react';
import { createSlug } from './slug';

interface LanguagesData {
  [key: string]: string[];
}

interface LanguagesListProps {
  pageType: string;
  pageName: string;
}

const languagesData: LanguagesData = {
  A: ['Afrikaans', 'Albanian', 'Arabic', 'Armenian', 'Azeri'],
  B: ['Basque', 'Belarusian', 'Bulgarian', 'Bosnian'],
  C: ['Catalan', 'Chinese', 'Croatian', 'Czech'],
  D: ['Danish', 'Divehi', 'Dutch'],
  E: ['English', 'Esperanto', 'Estonian'],
  F: ['Farsi', 'Faroese', 'Finnish', 'French', 'Fyro Macedonia'],
  G: ['Georgian', 'German', 'Galician', 'Gujarati', 'Greek'],
  H: ['Hebrew', 'Hindi'],
  I: ['Icelandic', 'Indonesian', 'Italian'],
  J: ['Japanese'],
  K: ['Kazakh', 'Kannada', 'Korean', 'Konkani', 'Kyrgyz'],
  L: ['Lithuanian', 'Latvian'],
  M: ['Maori', 'Mongolian', 'Marathi', 'Malay', 'Maltese'],
  N: ['Norwegian', 'Northern Sothi'],
  P: ['Pashto', 'Polish', 'Portuguese', 'Punjabi'],
  Q: ['Quechua'],
  R: ['Romanian', 'Russian'],
  S: ['Sami', 'Sanskrit', 'Serbian', 'Spanish', 'Slovak', 'Slovenian', 'Swahili', 'Swedish', 'Syriac'],
  T: ['Tagalog', 'Tatar', 'Tamil', 'Telugu', 'Thai', 'Turkish', 'Tsonga', 'Tswana'],
  U: ['Ukrainian', 'Urdu', 'Uzbek'],
  V: ['Vietnamese'],
  W: ['Welsh'],
  X: ['Xhosa'],
  Z: ['Zulu']
};

const LanguagesList: React.FC<LanguagesListProps> = ({ pageType, pageName }) => {
  return (
    <div className="my-10 tablet:my-[50px] py-10 tablet:py-[50px] bg-white ">
      <div className='w-full laptop:max-w-[947px] mx-auto'>
      <h2 className="text-24 tablet:text-32 text-[#1c1c1c] font-bold text-left mb-8 capitalize">{pageName}</h2>
      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 desktop:grid-cols-6 gap-4 gap-y-10">
        {Object.keys(languagesData).map((letter) => (
          <div key={letter} className="relative">
            <h3 className="text-24 font-semibold mb-4 text-[#1c1c1c]">{letter}</h3>
            <ul className="list-none pl-0">
              {languagesData[letter].map((language, index) => (
                <li key={index} className="py-1 text-[#484848] text-16">
                  <Link href={`/${pageType}/${createSlug(language)}`}>
                    {language}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default LanguagesList;
