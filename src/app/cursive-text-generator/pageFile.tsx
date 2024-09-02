/* eslint-disable react/no-unescaped-entities */
"use client"
import CopyButton from "@/components/copy-content";
import React, { useState } from 'react'
import { convertToCursive } from './cursive';
import Layout from '@/components/layout';



function PageFile() {
  
  const [text, setText] = useState<string>('');
  const [cursiveText, setCursiveText] = useState<string>('');


  

  
  const convert = (event: { target: { value: any; }; }) => {
    const newText = event.target.value;
    setText(newText);
    setCursiveText(convertToCursive(newText));
  };
  
    return (
      <Layout title='Cursive Text Generator'>
      <div className='w-full laptop:max-w-[947px] mx-auto'>
        <div className='w-full max-w-[558px] mx-auto flex flex-col gap-8 justify-between'>
          <div className=''>
          <p className={`w-fit text-black border-[#1C1C1C] bg-[#FFD2C2] border shadow-darkbox py-2 px-2 text-16 font-medium`}>Input</p>
          <textarea name="message" rows={10} cols={50} placeholder={`Start typing your  or paste text`} value={text} onChange={convert} className={`px-5 py-5  mt-2 outline-none text-16  h-fit w-full bg-white !text-[#1C1C1C] border-[#1C1C1C] border shadow-darkbox`}  />
        </div>
        <div className=''>
          <div className='flex justify-between w-full items-center'>
            <p className={`w-fit text-black border-[#1C1C1C] bg-[#FFD2C2] border shadow-darkbox py-2 px-2 text-16 font-medium`}>Output</p>
            <CopyButton text='Copy Cursive Code' textToCopy={cursiveText}/>
          </div>
        <textarea disabled name="translate" rows={10} cols={50} placeholder={`Start typing your  or paste text`} value={cursiveText} className={`px-5 py-5  mt-2 outline-none text-16 h-fit w-full bg-white !text-[#1C1C1C] border-[#1C1C1C] border shadow-darkbox`}  />
        </div>
            
        </div>
        </div>
        <div className='w-full laptop:max-w-[947px] mx-auto mt-20 laptop:mt-25'>
         <div className="flex flex-col gap-[10px] text-black border border-[#1C1C1C] bg-[#FFFFFF] shadow-darkbox p-4 tablet:p-6 w-full mx-auto my-6">
          <p className="text-16 tablet:text-20 text-left font-semibold">How to Use Our Cursive Text Generator</p>
          <p className="text-14 tablet:text-16 text-left mb-4">Using our cursive text generator is really easy. Just enter regular text in the first text box (Input) and see the cursive text in the left box. Then tap or click “Copy” to get the text. You can select other styles by clicking on the buttons under the “Output” textbox.</p>
        
          <p className="text-16 tablet:text-20 text-left font-semibold">What Is Cursive Text?</p>
          <p className="text-14 tablet:text-16 text-left">Cursive text is any handwriting or penmanship where the letters or characters are joined together in a flowing manner. While designed to speed up the writing process because it is faster than writing block letters, cursive has been on the decline over the last few decades, especially with the introduction of computer keyboards which speed up writing significantly.</p>
          <p className="text-14 tablet:text-16 text-left mb-4">There has however been a recent increase in interest in cursive since it is still used for artistic purposes such as in calligraphy and graphic design.</p>
        
          <p className="text-16 tablet:text-20 text-left font-semibold">How Does This Tool Create Cursive Text?</p>
          <p className="text-14 tablet:text-16 text-left">We can generate cursive text that you can copy and paste thanks to Unicode.  They are unique character codes that a computer is able to understand and look cool to human eyes. They can even be copy and pasted to social media platforms and text messages so you can share with your friends. Feel free to play around with cursive text generator above to come up with fun text you can send to your friends! Create cursive letters that you can copy and paste into your favorite social media channels.</p>
        
         </div>
      </div>
   </Layout>
      )
}

export default PageFile