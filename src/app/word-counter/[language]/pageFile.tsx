/* eslint-disable react/no-unescaped-entities */
"use client"
import BackButton from '@/components/back-button'
import LanguagesList from '@/components/LanguageList';
import Layout from '@/components/layout';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'


function PageFile() {
  
  const [pageName, setPageName] =  useState<string | null>('')
  const [text, setText] = useState<string>('');
  const [wordCount, setWordCount] = useState(0);
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
    const trimmedText = newText.trim();

  // Check if the trimmed text is empty
  if (trimmedText === '') {
    return 0;
  }

  const words = trimmedText.split(/\s+/).filter((word: string | any[]) => word.length > 0);
    setWordCount(words.length);

    const paragraphs = newText.split('\n');
    setParagraphCount(paragraphs.length);
  };
  

  return (
    <Layout title={`Free online ${(pageName)} Word Counter`}>
    <div className='w-full laptop:max-w-[947px] mx-auto'>
    <div className='flex flex-col tablet:flex-row gap-3  justify-between items-center'>
    <textarea name="message" rows={10} cols={50} placeholder={`Start typing your ${pageName} or paste text`} value={text} onChange={count} className={`px-5 py-5  mt-2 outline-none h-fit w-full bg-white !text-[#1C1C1C] border-[#1C1C1C] border shadow-darkbox`}  />
   <div className='flex tablet:flex-col gap-2 text-center'>
   <p className="w-[125px] tablet:w-[145px] text-black border-[#1C1C1C] bg-[#FFC4DF] border shadow-darkbox p-3 text-20 tablet:text-32 capitalize font-bold">{wordCount} <span className="block font-normal text-20 text-center">Words</span></p>
   <p className="w-[125px] tablet:w-[145px] text-black border-[#1C1C1C] bg-[#FFC4DF] border shadow-darkbox p-3 text-20 tablet:text-32 capitalize font-bold">{paragraphCount} <span className="block font-normal text-20 text-center">Lines</span></p>
   </div>
    </div>
    </div>
    <LanguagesList pageType='word-counter' pageName='word counter in other languages'/>
    <div className='w-full laptop:max-w-[947px] mx-auto'>
     <div className=" flex flex-col gap-[10px] text-black border border-[#1C1C1C] bg-[#FFFFFF] shadow-darkbox p-4 tablet:p-6 w-full mx-auto my-6">
      <p className="text-16 tablet:text-20 text-left font-semibold">What is a word counter?</p>
      <p className="text-14 tablet:text-16 text-left">Our online editor not only counts words and characters, but also improves your word choice and writing style. Additionally, it can detect grammatical errors and plagiarism. To check word count, place your cursor into the text box above and start typing. The number of characters and words will increase or decrease as you type, delete, and edit. 
      You can also copy and paste text from a different program into the online editor above. The Auto-Save feature will ensure you don’t lose any changes while editing, even if you leave the site and come back later. Tip: Bookmark this page now.</p>
      <p className="text-14 tablet:text-16 text-left">Also, word counter displays the top ten keywords and their density in your article. This helps you identify frequently used keywords and their percentages, preventing overuse and ensuring effective keyword distribution in your writing.
      In the details overview, you can see the average speaking and reading time for your text. The reading level indicates the education level needed to understand the words you’re using.</p>
      <p className="text-14 tablet:text-16 text-left">Disclaimer: We strive to make our tools as accurate as possible, but we cannot guarantee their accuracy in all cases.</p>
    </div>
    </div>
  </Layout>
  )
}

export default PageFile