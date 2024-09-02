/* eslint-disable react/no-unescaped-entities */
"use client";
import CopyButton from "@/components/copy-content";
import Layout from "@/components/layout";
import React, { useState } from "react";

function PageFile() {
  const [text, setText] = useState<string>("");
  const [strikethroughText, setStrikethroughText] = useState<string>("");

  const convertToStrikethrough = (text: string): string => {
    return text.split('').map(char => char + '\u0336').join('');
  };
  const convert = (event: { target: { value: any } }) => {
    const newText = event.target.value;
    setText(newText);
    setStrikethroughText(convertToStrikethrough(newText));
  };

  return (
    <Layout title="Strikethrough Text Generator">
      <div className="w-full laptop:max-w-[947px] mx-auto">
        <div className="w-full max-w-[558px] mx-auto flex flex-col gap-8 justify-between">
          <div className="">
            <p
              className={`w-fit text-black border-[#1C1C1C] bg-[#FFD2C2] border shadow-darkbox py-2 px-2 text-16 font-medium`}
            >
              Input
            </p>
            <textarea
              name="message"
              rows={10}
              cols={50}
              placeholder={`Start typing your  or paste text`}
              value={text}
              onChange={convert}
              className={`px-5 py-5  mt-2 outline-none text-16  h-fit w-full bg-white !text-[#1C1C1C] border-[#1C1C1C] border shadow-darkbox`}
            />
          </div>
          <div className="">
            <div className="flex justify-between w-full items-center">
              <p
                className={`w-fit text-black border-[#1C1C1C] bg-[#FFD2C2] border shadow-darkbox py-2 px-2 text-16 font-medium`}
              >
                Output
              </p>
              <CopyButton textToCopy={strikethroughText} text="Copy Strikethrough Text" />
            </div>
            <textarea
              disabled
              name="translate"
              rows={10}
              cols={50}
              placeholder={`Start typing your  or paste text`}
              value={strikethroughText}
              className={`px-5 py-5  mt-2 outline-none text-16 h-fit w-full bg-white !text-[#1C1C1C] border-[#1C1C1C] border shadow-darkbox`}
            />
          </div>
        </div>
      </div>
      <div className="w-full laptop:max-w-[947px] mx-auto mt-20 laptop:mt-25">
        <div className="flex flex-col gap-[10px] text-black border border-[#1C1C1C] bg-[#FFFFFF] shadow-darkbox p-4 tablet:p-6 w-full mx-auto my-6">
          <p className="text-16 tablet:text-20 text-left font-semibold">
          What Is Strikethrough Text?
          </p>
          <p className="text-14 tablet:text-16 text-left mb-4">
          Strikethrough text, also known as crossed out text, is one type of fun text that along with italic text, bold text, underlined text, and other obscure characters that can be generated from Unicode.  They are unique character codes that a computer is able to understand and look cool to human eyes. They can even be copy and pasted to social media platforms such as Facebook, Instagram, and Twitter so you can share with your friends. Feel free to play around with strikethrough text generator above to come up with fun text you can send to your friends!
          </p>

          <p className="text-16 tablet:text-20 text-left font-semibold">
          How to Strikethrough Text in Word
          </p>
          <p className="text-14 tablet:text-16 text-left">
          It’s easy to strikethrough text in Microsoft Word. Just follow these simple instructions.
          </p>
          <ol className="pl-4 list-decimal">
            <li className="text-14 tablet:text-16 text-left">Highlight the text that you want to strikethrough in Word</li>
            <li className="text-14 tablet:text-16 text-left">Click the button that has a strikethrough “ab” or press Alt + H + 4 at the same time</li>
            <li className="text-14 tablet:text-16 text-left">See your strikethrough text </li>
          </ol>
         
        </div>
      </div>
    </Layout>
  );
}

export default PageFile;
