"use client"
import React, { useEffect, useState } from "react";
import moment from "moment";
import ErrorBoundary from "../../functions/ErrorBoundary";
import BackButton from "../../components/back-button";
import Emails from "../../components/emails";
import axios from "@/lib/axios";
import { LoadingOverlay } from "@/components/loader";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Layout from "@/components/layout";



interface ApiResponse {
  message: string;
  word: string;
  meaning: string;
}

const PageFile = () => {
  const currentDate = moment();
  const [loading, setLoading] = useState<boolean>(false);
  const [word, setWord] = useState<ApiResponse>({
    message: '',
    word: '',
    meaning: '',
  })

  const getWord = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`words/word-of-the-day`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      });
      setWord(response.data); 
      setLoading(false);
      console.log(response.data); 
    } catch (error) {
      setLoading(false);
      console.error("Error fetching Word:", error);
      throw new Error("Failed to generate word");
    }
  };

  useEffect(()=>{
    getWord()
  },[])


  return (
    // <ErrorBoundary>
    <Layout title={`Word Of The Day`}>
      <div className="relative w-full min-h-[400px] laptop:max-w-[947px] px-4 tablet:px-6 laptop:px-8 desktop:px-0 mx-auto">
      {loading ? <LoadingOverlay/> :
       <>     
        <p className="text-[#1C1C1C] text-24 font-normal text-center">
          {currentDate.format("Do MMMM YYYY")}
        </p>
        <div className="text-black border border-[#1C1C1C] bg-[#FFF5C4] shadow-darkbox p-8 w-full my-6">
          <h2 className="text-48 tablet:text-[90px] tablet:leading-[inherit] font-bold text-center capitalize-first-letter">{word.word}</h2>
        </div>
        <p className="text-center font-semibold text-24 text-[#1C1C1C] mt-10">
          Meaning
        </p>
        <p className="px-4 w-[90%] max-w-[758px] mx-auto text-center mt-6 text-[24px] text-[#1C1C1C] capitalize-first-letter">{word.meaning}</p>
      <Emails />
      </>
}
      </div>
      </Layout>
    // </ErrorBoundary>
  );
};

export default PageFile;
