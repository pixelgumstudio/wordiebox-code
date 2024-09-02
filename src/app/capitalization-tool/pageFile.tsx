/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import Layout from "@/components/layout";
import CopyButton from "@/components/copy-content";

const textTransformations = {
  uppercase: (text: string) => text.toUpperCase(),
  lowercase: (text: string) => text.toLowerCase(),
  toggle: (text: string) => {
    return text
      .split("")
      .map((char) => {
        if (char.match(/[a-z]/)) {
          return char.toUpperCase();
        } else if (char.match(/[A-Z]/)) {
          return char.toLowerCase();
        } else {
          return char;
        }
      })
      .join("");
  },
  sentence: (text: string) => {
    return text
      .toLowerCase()
      .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
  },
  firstLetter: (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  },
  title: (text: string) => {
    return text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  },
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

  useEffect(() => {
    console.log(text, transformType);
    setTransformedText(applyTransformation(text, transformType));
  }, [transformType]);

  const applyTransformation = (text: string, type: string): string => {
    const transformation =
      textTransformations[type as keyof typeof textTransformations];
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
            <p
              className={`${
                transformType === "title" && "bg-[#DFC3FF]"
              } cursor-pointer px-2 py-[6px] hover:bg-[#DFC3FF]`}
              onClick={() => setTransformType("title")}
            >
              Title Case
            </p>
            <p
              className={`${
                transformType === "sentence" && "bg-[#DFC3FF]"
              } cursor-pointer px-2 py-[6px] hover:bg-[#DFC3FF]`}
              onClick={() => setTransformType("sentence")}
            >
              Sentence case
            </p>
            <p
              className={`${
                transformType === "uppercase" && "bg-[#DFC3FF]"
              } cursor-pointer px-2 py-[6px] hover:bg-[#DFC3FF]`}
              onClick={() => setTransformType("uppercase")}
            >
              UPPERCASE
            </p>
            <p
              className={`${
                transformType === "lowercase" && "bg-[#DFC3FF]"
              } cursor-pointer px-2 py-[6px] hover:bg-[#DFC3FF]`}
              onClick={() => setTransformType("lowercase")}
            >
              lowercase
            </p>
            <p
              className={`${
                transformType === "firstLetter" && "bg-[#DFC3FF]"
              } cursor-pointer px-2 py-[6px] hover:bg-[#DFC3FF]`}
              onClick={() => setTransformType("firstLetter")}
            >
              First Letter
            </p>
            <p
              className={`${
                transformType === "toggle" && "bg-[#DFC3FF]"
              } cursor-pointer px-2 py-[6px] hover:bg-[#DFC3FF]`}
              onClick={() => setTransformType("toggle")}
            >
              tOgGlE
            </p>
          </div>
          
          <CopyButton textToCopy={transformedText} size="full" />
        </div>
      </div>
      <div className="w-full laptop:max-w-[947px] mx-auto mt-20 laptop:mt-25">
        <div className="flex flex-col gap-[10px] text-black border border-[#1C1C1C] bg-[#FFFFFF] shadow-darkbox p-4 tablet:p-6 w-full mx-auto my-6">
          <p className="text-16 tablet:text-20 text-left font-semibold">
            What Is Capitalize My Title?
          </p>
          <p className="text-14 tablet:text-16 text-left mb-4">
            Capitalize My Title is an easy, smart title capitalization tool that
            uses title capitalization rules published by leading professional
            organizations to ensure your titles and headlines are capitalized
            correctly. We analyze your titles and headlines using a combination
            of logic and artificial intelligence (AI) / machine learning to
            determine which words in your heading should be capitalized.
          </p>

          <p className="text-16 tablet:text-20 text-left font-semibold">
            How to Use Capitalize My Title
          </p>
          <ol className="list-inside list-decimal">
            <li className="text-14 tablet:text-16 text-left">
              Select your title capitalization style above by clicking on a tab.
              If you have questions, read our{" "}
              <span className="underline">title capitalization rules</span>{" "}
              below.
            </li>
            <li className="text-14 tablet:text-16 text-left">
              Enter your title in the text box.
            </li>
            <li className="text-14 tablet:text-16 text-left">
              Watch your title convert case and be automatically capitalized!
            </li>
            <li className="text-14 tablet:text-16 text-left">
              If you want to, you can press “Enter” on your keyboard or click
              the Copy button next to the text box to copy the text to your
              clipboard.
            </li>
            <li className="text-14 tablet:text-16 text-left">
              Capitalize your next title.
            </li>
          </ol>

          <p className="text-16 tablet:text-20 text-left font-semibold">
            What to Capitalize in a Title
          </p>
          <p className="text-14 tablet:text-16 text-left">
            Understanding what to capitalize in a title is important to make
            sure that your titles and headlines look correct. If you’re confused
            about what words to capitalize in a title or headline, we recommend
            using our title capitalization tool above, but if you want specific
            capitalization rules, they are as follows.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PageFile;
