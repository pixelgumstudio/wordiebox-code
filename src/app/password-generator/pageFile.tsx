/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { FC } from "react";

import ErrorBoundary from "@/functions/ErrorBoundary";
import Layout from "@/components/layout";
import PasswordGenerator from "./PasswordGenerator";

const PageFile: FC = () => {
  return (
    // <ErrorBoundary>
    <Layout title="Password Generator">
      <div className="w-full laptop:max-w-[947px] px-4 tablet:px-6 laptop:px-0 desktop:px-0 mx-auto">
        <PasswordGenerator />
        <div className="mt-[100px] flex flex-col gap-[10px] text-black border border-[#1C1C1C] bg-[#FFFFFF] shadow-darkbox p-4 tablet:p-6 w-full mx-auto my-6">
          <p className="text-16 tablet:text-20 text-left font-semibold">
            How Does the Random Password Generator Work?
          </p>
          <p className="text-14 tablet:text-16 text-left">
            A unique, complex password is your first line of defense against hackers. But what defines a strong password, and why is it more effective?
          </p>
          <p className="text-14 tablet:text-16 text-left">
            To you, your passwords are the keys to your accounts. To hackers and other bad actors, your passwords are a gateway to your digital life, including your sensitive personal information, money, and undisclosed business data. Even the hack of “unimportant” information could cause your other accounts or private life to be compromised.
          </p>
          <p className="text-14 tablet:text-16 text-left">
            Hackers exploit cybersecurity weaknesses through social engineering, machine learning, and processing power. Typical weaknesses include:
          </p>
          <p className="text-14 tablet:text-16 text-left">
            Any type of personal data, like your street address, anniversaries, or pets’ names, can be used against you. Hackers find this information through channels like social media, open sources, and more.
          </p>
          <p className="text-16 tablet:text-20 text-left font-semibold">
            Tips for Creating a Strong Password
          </p>
          <p className="text-14 tablet:text-16 text-left">
            A strong password is a unique, random password stored in a safe place. However, it isn’t easy to memorize completely random passwords. Password managers like LastPass – with their built-in customizable password generator and encrypted vaults – solve all these problems for you.
          </p>
          <p className="text-14 tablet:text-16 text-left">
            A unique password is your first line of defense against hackers. It would take a hacker approximately 34,000 years to hack a unique 12-character password – and without that credential, the likelihood of a hacker breaching your account is near zero.
          </p>
          <p className="text-14 tablet:text-16 text-left">
            Creating a strong password is easy with the following tips:
          </p>
          <ul className="pl-4 list-disc">
            <li className="text-14 tablet:text-16 text-left">Make sure your passwords are at least 12 characters long and contain letters, numbers, and special characters.</li>
            <li className="text-14 tablet:text-16 text-left">When you create a password on your own, use random characters, but don't follow easy-to-recognize patterns – e.g. “qwerty” or “123456.”</li>
            <li className="text-14 tablet:text-16 text-left">Avoid using similar passwords that change only a single word or character.</li>
            <li className="text-14 tablet:text-16 text-left">Don’t use any personally identifiable information in your passwords – e.g. date of birth, year of marriage, name of the street you live on, name of your pet.</li>
            <li className="text-14 tablet:text-16 text-left">When in doubt, use the LastPass <span className="underline">password generator</span> to create random, unique, strong passwords.</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
};

export default PageFile;