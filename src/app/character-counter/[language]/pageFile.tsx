/* eslint-disable react/no-unescaped-entities */
"use client"
import LanguagesList from '@/components/LanguageList';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Layout from '@/components/layout';



function PageFile() {
  
  const [pageName, setPageName] =  useState<string>('')
  const [text, setText] = useState<string>('');
  const [charCount, setCharCount] = useState(0);
  const [paragraphCount, setParagraphCount] = useState(0);

  const pathname = usePathname();

  useEffect(() => {
    if(pathname.split('/')[2] === undefined){
      const pageName = "english";
      setPageName(pageName)
      localStorage.setItem('language', pageName);
    }else{
        const language = pathname.split('/')[2];
        const pageName = language.replace(/-/g, " ");
    setPageName(pageName)
    localStorage.setItem('language', pageName);
    }
  
  }, [pathname]);
  
  const count = (event: { target: { value: any; }; }) => {
    const newText = event.target.value;
    setText(newText);
    setCharCount(newText.length);

    const paragraphs = newText.split('\n');
    setParagraphCount(paragraphs.length);
  };


    return (
           <Layout title={`Free online ${(pageName)} Character Counter`}>
      <div className='w-full laptop:max-w-[947px] mx-auto'>
        <div className='flex flex-col tablet:flex-row gap-3 justify-between items-center'>
        <textarea name="message" rows={10} cols={50} placeholder={`Start typing your ${pageName} or paste text`} value={text} onChange={count} className={`px-5 py-5  mt-2 outline-none h-fit w-full bg-white !text-[#1C1C1C] border-[#1C1C1C] border shadow-darkbox`}  />
       <div className='flex tablet:flex-col gap-2 text-center'>
       <p className="w-[125px] tablet:w-[145px] text-black border-[#1C1C1C] bg-[#FFC4DF] border shadow-darkbox p-3 text-20 tablet:text-32 capitalize font-bold">{charCount} <span className="block font-normal text-20 text-center">Characters</span></p>
       <p className="w-[125px] tablet:w-[145px] text-black border-[#1C1C1C] bg-[#FFC4DF] border shadow-darkbox p-3 text-20 tablet:text-32 capitalize font-bold">{paragraphCount} <span className="block font-normal text-20 text-center">Lines</span></p>
       </div>
        </div>
        </div>
        <LanguagesList pageType='character-counter' pageName='character counter in other languages'/>
        <div className='w-full laptop:max-w-[947px] mx-auto'>
         <div className="flex flex-col gap-[10px] text-black border border-[#1C1C1C] bg-[#FFFFFF] shadow-darkbox p-4 tablet:p-6 w-full mx-auto my-6">
          <p className="text-16 tablet:text-20 text-left font-semibold">What is a character counter?</p>
          <p className="text-14 tablet:text-16 text-left">Character Counter is a straightforward, free online tool designed for counting characters and words in your text efficiently. Unlike Word Counter, which provides detailed writing analysis, Character Counter focuses on delivering essential information: character and word counts, at lightning speed. Whether you're copying and pasting text or typing directly into the tool, it quickly displays these counts, making it ideal for adhering to character limits across various platforms such as Twitter, SMS, Facebook, and others. This simplicity ensures users can stay within specified limits, whether for social media updates, reviews, or academic assignments.</p>
          <p className="text-14 tablet:text-16 text-left">For students, adhering to character limits is important for homework assignments and college applications. Similarly, job seekers benefit from accurately fitting resume details within a single page. Writers, especially those working in print media, find the tool invaluable for optimizing content length to fit limited space in magazines and newspapers. By understanding and managing character and word counts, writers can effectively convey their message without exceeding allotted space or falling short of required minimums.</p>
          <p className="text-14 tablet:text-16 text-left">Additionally, Character Counter supports non-English languages like Japanese, Korean, and Chinese, where character count plays an important role. Whether you're crafting a tweet, composing a resume, or submitting an essay in any language, Character Counter ensures that you can monitor and adjust your text to meet specific character requirements accurately and efficiently.</p>
        </div>
      </div>
      </Layout>
      )
}

export default PageFile