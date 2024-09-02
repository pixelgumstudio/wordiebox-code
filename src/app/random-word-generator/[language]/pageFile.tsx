/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import BackButton from '@/components/back-button';
import UpArrow from "/public/arrow-up.png";
import DownArrow from "/public/down.png";
import CopyButton from '@/components/copy-content';
import LanguagesList from '@/components/LanguageList';
import Layout from '@/components/layout';
import axios from "axios";
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Word_Counter from '/word-counter.png';
import getEnglishWords from "@/lib/englisgWords";

interface Word {
  Word: string;
  Meaning?: string;
  Language?: string;
}


const PageFile: FC = () => {
  const [number, setNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [words, setWords] = useState<Word[]>([]);
  const [copySuccess, setCopySuccess] = useState<boolean>(false);
  const [showButton, setShowButton] = useState<boolean>(false);
  const pathname = usePathname();
  
  const pageName = pathname.split('/')[2]?.replace(/-/g, " ") || "english";

  useEffect(() => {
    localStorage.setItem('language', pageName);
  }, [pageName]);

  const incrementNumber = () => setNumber(prevNumber => Math.min(prevNumber + 1, 10));
  const decrementNumber = () => setNumber(prevNumber => Math.max(prevNumber - 1, 1));

  useEffect(() => {
    if (copySuccess) {
      const timer = setTimeout(() => setCopySuccess(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copySuccess]);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setNumber(parseInt(e.target.value, 10));
  };

  const generateWords = async () => {
    setLoading(true);
    try {
      let wordsData;

      
      if (pageName === "english") {
        const response = await axios.get<Word[]>(`/api/english?number=${number}`);
        wordsData = response.data;
      } else {
        const response = await axios.get<Word[]>(`/api/words?country=${pageName}&number=${number}`);
        wordsData = response.data;
      }

      setWords(wordsData);
      setShowButton(true);
    } catch (error) {
      console.error("Error fetching words:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout title={`Random ${pageName} Words Generator`}>
      <div className="w-full laptop:max-w-[947px] px-4 tablet:px-6 laptop:px-0 desktop:px-0 mx-auto">
        <div className="flex justify-center items-center text-[#1C1C1C] text-20 tablet:text-24 font-normal whitespace-nowrap text-center">
          Generate
          <div className="flex justify-between items-center px-3 py-2 mx-2 outline-none h-9 w-[72px] bg-transparent border-[#1C1C1C] border shadow-darkbox text-center">
            <select
              name="number"
              value={number}
              onChange={handleChange}
              className="outline-none w-8 bg-transparent text-left appearance-none"
            >
              {[...Array(10)].map((_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
            <div className="flex flex-col gap-1 items-center mx-auto w-[20px] z-20">
              <button
                onClick={incrementNumber}
                className="rounded-lg transition"
              >
                <Image src={UpArrow} width={12} height={12} alt="Up Arrow" />
              </button>
              <button
                onClick={decrementNumber}
                className="rounded-lg transition"
              >
                <Image
                  src={DownArrow}
                  width={12}
                  height={12}
                  alt="Down Arrow"
                />
              </button>
            </div>
          </div>
          random words
        </div>

        <p
          className="p-2 w-full max-w-[360px] cursor-pointer text-center font-medium mx-auto mt-10 h-fit bg-[#FFCC00] border-[#1C1C1C] border shadow-darkbox"
          onClick={generateWords}
        >
          Generate {number > 1 ? "Words" : "Word"} {loading && "..."}
        </p>

        <div className="flex flex-wrap justify-center w-fit mx-auto gap-5 mt-12">
          {Array.isArray(words) &&
            words.length > 0 &&
            words.map((word, index) => (
              <div
                key={index}
                className="text-center w-fit max-w-[360px] inline-block text-black border-[#1C1C1C] bg-[#DFC3FF] border shadow-transparent p-3 tablet:p-4 text-14 capitalize font-normal hover:bg-[#e2c9ff]"
              >
                <h1 className="font-semibold text-20">{word.Word}</h1>
                {word.Meaning && <p>Meaning: {word.Meaning}</p>}
              </div>
            ))}
        </div>

        {showButton && (
          <div className="w-full text-center mt-6 tablet:mt-8">
            <CopyButton
              textToCopy={words
                .map((word) =>
                  word.Meaning ? `${word.Word} - ${word.Meaning}` : word.Word
                ) // Add meaning if it exists, otherwise just the word
                .join(", ")} // Join them with comma and space
              text={`Copy ${number > 1 ? "Words" : "Word"}`}
            />
          </div>
        )}


        <div className="mt-[100px] flex flex-col gap-[10px] text-black border border-[#1C1C1C] bg-[#FFFFFF] shadow-darkbox p-4 tablet:p-6 w-full mx-auto my-6">
          <p className="text-16 tablet:text-20 text-left font-semibold">
            What is a random word generator?
          </p>
          <p className="text-14 tablet:text-16 text-left">
            Our word generator is a tool designed to produce random words. It
            has many uses across different areas. For writers, it is a great way
            to find new ideas and break through creative blocks with unexpected
            words. In the area of education, it can be used to improve
            vocabulary lessons and language learning activities.
          </p>
          <p className="text-14 tablet:text-16 text-left">
            To generate a word, simply type in the number of words you’d like to
            see and click on “generate words”.
          </p>
        </div>
        <LanguagesList
          pageType="random-word-generator"
          pageName="words in other languages"
        />
      </div>
    </Layout>
  );
};

export default PageFile;


