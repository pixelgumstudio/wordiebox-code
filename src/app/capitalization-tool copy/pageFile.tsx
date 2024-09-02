/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import Layout from "@/components/layout";
import CopyButton from "@/components/copy-content";

const textTransformations = {
  uppercase: (text: string) => text.toUpperCase(),
  lowercase: (text: string) => text.toLowerCase(),
  toggle: (text: string) => {
    return text.split('').map(char => {
      if (char.match(/[a-z]/)) {
        return char.toUpperCase();
      } else if (char.match(/[A-Z]/)) {
        return char.toLowerCase();
      } else {
        return char;
      }
    }).join('');
  },
  sentence: (text: string) => {
    return text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
  },
  firstLetter: (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  },
  title: (text: string) => {
    return text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
};

const PageFile = () => {
  const [text, setText] = useState<string>("");
  const [transformedText, setTransformedText] = useState<string>("");
  const [transformType, setTransformType] = useState<string>("title");

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    setText(newText);
    setTransformedText(applyTransformation(newText, transformType));
  };

  useEffect(()=>{
    console.log(text, transformType)
    setTransformedText(applyTransformation(text, transformType));
  },[transformType])



  const applyTransformation = (text: string, type: string): string => {
    const transformation = textTransformations[type as keyof typeof textTransformations];
    return transformation ? transformation(text) : text;
  };

  return (
    <Layout title="Capitalize My Title">
    <div className="w-full laptop:max-w-[947px] mx-auto">
      <div className="w-full max-w-[558px] mx-auto flex flex-col gap-8 justify-between">
        <textarea
            value={transformedText}
            onChange={handleTextChange}
            placeholder="Type your text here"
            rows={10}
            className={`px-5 py-5  mt-2 outline-none text-16  h-fit w-full bg-white !text-[#1C1C1C] border-[#1C1C1C] border shadow-darkbox`}
          />

          <div className="flex mt-2 text-14 font-semibold h-fit w-fit mx-auto bg-white !text-[#1C1C1C] border-[#1C1C1C] border shadow-darkbox">
          <p className={`${transformType === "title" && 'bg-[#DFC3FF]'} cursor-pointer px-2 py-[6px] hover:bg-[#DFC3FF]`} onClick={()=>setTransformType('title')}>Title Case</p>
          <p className={`${transformType === "sentence" && 'bg-[#DFC3FF]'} cursor-pointer px-2 py-[6px] hover:bg-[#DFC3FF]`} onClick={()=>setTransformType('sentence')}>Sentence case</p>
          <p className={`${transformType === "uppercase" && 'bg-[#DFC3FF]'} cursor-pointer px-2 py-[6px] hover:bg-[#DFC3FF]`} onClick={()=>setTransformType('uppercase')}>UPPERCASE</p>
          <p className={`${transformType === "lowercase" && 'bg-[#DFC3FF]'} cursor-pointer px-2 py-[6px] hover:bg-[#DFC3FF]`} onClick={()=>setTransformType('lowercase')}>lowercase</p>
          <p className={`${transformType === "firstLetter" && 'bg-[#DFC3FF]'} cursor-pointer px-2 py-[6px] hover:bg-[#DFC3FF]`} onClick={()=>setTransformType('firstLetter')}>First Letter</p>
          <p className={`${transformType === "toggle" && 'bg-[#DFC3FF]'} cursor-pointer px-2 py-[6px] hover:bg-[#DFC3FF]`} onClick={()=>setTransformType('toggle')}>tOgGlE</p>
          </div>
          <CopyButton textToCopy={transformedText} size="full" />
        </div>
      </div>
      <div className="w-full laptop:max-w-[947px] mx-auto mt-20 laptop:mt-25">
        <div className="flex flex-col gap-[10px] text-black border border-[#1C1C1C] bg-[#FFFFFF] shadow-darkbox p-4 tablet:p-6 w-full mx-auto my-6">
          <p className="text-16 tablet:text-20 text-left font-semibold">
            How to Use Our Cursive Text Generator
          </p>
          <p className="text-14 tablet:text-16 text-left mb-4">
            Using our cursive text generator is really easy. Just enter regular
            text in the first text box (Input) and see the cursive text in the
            left box. Then tap or click “Copy” to get the text. You can select
            other styles by clicking on the buttons under the “Output” textbox.
          </p>

          <p className="text-16 tablet:text-20 text-left font-semibold">
            What Is Cursive Text?
          </p>
          <p className="text-14 tablet:text-16 text-left">
            Cursive text is any handwriting or penmanship where the letters or
            characters are joined together in a flowing manner. While designed
            to speed up the writing process because it is faster than writing
            block letters, cursive has been on the decline over the last few
            decades, especially with the introduction of computer keyboards
            which speed up writing significantly.
          </p>
          <p className="text-14 tablet:text-16 text-left mb-4">
            There has however been a recent increase in interest in cursive
            since it is still used for artistic purposes such as in calligraphy
            and graphic design.
          </p>

          <p className="text-16 tablet:text-20 text-left font-semibold">
            How Does This Tool Create Cursive Text?
          </p>
          <p className="text-14 tablet:text-16 text-left">
            We can generate cursive text that you can copy and paste thanks
            to Unicode.  They are unique character codes that a computer is able
            to understand and look cool to human eyes. They can even be copy and
            pasted to social media platforms and text messages so you can share
            with your friends. Feel free to play around with cursive text
            generator above to come up with fun text you can send to your
            friends! Create cursive letters that you can copy and paste into
            your favorite social media channels.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PageFile;
