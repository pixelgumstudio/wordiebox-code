/* eslint-disable react/no-unescaped-entities */
"use client"
import CopyButton from '@/components/copy-content';
import React, { useState } from 'react'
import { translateToMorse } from './morse';
import MorseList from './MorseList';
import Layout from '@/components/layout';



function PageFile() {
  
  const [text, setText] = useState<string>('');
  const [morse, setMorse] = useState<string>('');


  

  
  const translate = (event: { target: { value: any; }; }) => {
    const newText = event.target.value;
    setText(newText);
    setMorse(translateToMorse(newText));
  };

    return (
      <Layout title='Morse Code Translator'>
      
      <div className='w-full laptop:max-w-[947px] mx-auto'>
        <div className='w-full max-w-[558px] mx-auto flex flex-col gap-8 justify-between'>
          <div className=''>
          <p className={`w-fit text-black border-[#1C1C1C] bg-[#FFD2C2] border shadow-darkbox py-2 px-2 text-16 font-medium`}>Input</p>
          <textarea name="message" rows={10} cols={50} placeholder={`Start typing your  or paste text`} value={text} onChange={translate} className={`px-5 py-5  mt-2 outline-none text-16  h-fit w-full bg-white !text-[#1C1C1C] border-[#1C1C1C] border shadow-darkbox`}  />
        </div>
        <div className=''>
          <div className='flex justify-between w-full items-center'>
            <p className={`w-fit text-black border-[#1C1C1C] bg-[#FFD2C2] border shadow-darkbox py-2 px-2 text-16 font-medium`}>Output</p>
        <CopyButton textToCopy={morse} text='Copy Morse Code' />          </div>
        <textarea disabled name="translate" rows={10} cols={50} placeholder={`Start typing your  or paste text`} value={morse} className={`px-5 py-5  mt-2 outline-none text-16 h-fit w-full bg-white !text-[#1C1C1C] border-[#1C1C1C] border shadow-darkbox`}  />
        </div>
            
        </div>
        </div>
        <MorseList pageType='character'/>
        <div className='w-full laptop:max-w-[947px] mx-auto'>
         <div className="flex flex-col gap-[10px] text-black border border-[#1C1C1C] bg-[#FFFFFF] shadow-darkbox p-4 tablet:p-6 w-full mx-auto my-6">
          <p className="text-16 tablet:text-20 text-left font-semibold">How to translate Morse to text:</p>
          <ul className='list-disc pl-4'>
            <li className="text-14 tablet:text-16 text-left">Enter Morse dashes or dots into the input box using period (.) and minus sign (-)</li>
            <li className="text-14 tablet:text-16 text-left">Morse letters must be separated by 1 space</li>
            <li className="text-14 tablet:text-16 text-left">Morse words must be separated by 3 or more spaces</li>
            <li className="text-14 tablet:text-16 text-left">You can use / to separate Morse words. There must be at least 1 space before and after each separator used</li>
          </ul>
          <p className="text-16 tablet:text-20 text-left font-semibold">How to translate text to Morse code:</p>
          <ul className='list-disc pl-4'> 
            <li className="text-14 tablet:text-16 text-left">Enter text into input box</li>
            <li className="text-14 tablet:text-16 text-left">Characters that cannot be translated into Morse will be ignored</li>
            <li className="text-14 tablet:text-16 text-left">If both Morse and text is entered, the converter will assume Morse mode</li>
          </ul>

          <p className="text-16 tablet:text-20 text-left font-semibold mb-4">WHAT IS MORSE?</p>
          <p className="text-14 tablet:text-16 text-left mb-4">Morse code is a method of communicating with a series of sounds or lights that can be understood only by someone who knows the code.</p>
          <p className="text-14 tablet:text-16 text-left mb-4">Each Morse symbol represents either a letter or number and is represented by a unique sequence of dots and dashes. The duration of a dash is three times the duration of a dot.</p>
          <p className="text-14 tablet:text-16 text-left mb-4">Samuel F.B. Morse invented a code that was used to send messages over electric telegraphs in the 1830s. The SOS distress signal — three dots, three dashes, three dots — proved to be a simple way to communicate in an emergency.</p>
          <p className="text-14 tablet:text-16 text-left mb-4">With the invention of the telephone (and, later, two-way radios and cellphones), Morse is nowadays used mostly just for fun by amateur radio operators. Certain amateur radio bands are still reserved for Morse code use.</p>
        </div>
      </div>
   </Layout>
      )
}

export default PageFile