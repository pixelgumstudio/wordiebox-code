/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import Layout from "@/components/layout";
import Dropdown from "@/components/dropdown";
import CopyButton from "@/components/copy-content";

interface CountryState {
  country: string;
  states: string[];
}

const PageFile: FC = () => {
  const [countries, setCountries] = useState<CountryState[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [randomState, setRandomState] = useState<string>("");

  
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get<CountryState[]>("/api/countries");
        setCountries(response.data);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);

    if (country) {
      const selectedCountryStates =
        countries.find((c) => c.country === country)?.states || [];
      if (selectedCountryStates.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * selectedCountryStates.length
        );
        setRandomState(selectedCountryStates[randomIndex]);
      } else if (country === "Select a Country") {
        setRandomState("Please select a country");
      } else {
        setRandomState("No states found for this country.");
      }
    } else {
      setRandomState("");
    }
  };

  return (
    <Layout title="Random State Generator">
      <div className="w-full laptop:max-w-[947px] px-4 tablet:px-6 laptop:px-0 desktop:px-0 mx-auto">
        <Dropdown
          options={countries.map((c) => c.country)}
          location={handleCountryChange}
          title="Select a Country"
          first="Select a Country"
        />

        {randomState && (
          <p
            className={`w-fit mt-8 text-[#1C1C1C] border-[#1C1C1C] bg-[#C2FFD9] border shadow-darkbox p-2 text-20 font-semibold mx-auto`}
          >
            {randomState}
          </p>
        )}
        {randomState.length > 0 && (
          <div className="w-full text-center mt-6 tablet:mt-8">
            <CopyButton textToCopy={randomState} text="Copy State" />
          </div>
        )}
        <div className="mt-[100px] flex flex-col gap-[10px] text-black border border-[#1C1C1C] bg-[#FFFFFF] shadow-darkbox p-4 tablet:p-6 w-full mx-auto my-6">
          <p className="text-16 tablet:text-20 text-left font-semibold">
            Using the random state generator
          </p>
          <p className="text-14 tablet:text-16 text-left">
            To pick a state at random, start by specifying which country to use.
            By default, the picker will use all 50 US states, excluding
            territories and special districts such as the Federal District of
            Columbia. You can check the "include territories" checkbox and the
            generator will also randomize all inhabited territories part of the
            specified country.
          </p>
          <p className="text-14 tablet:text-16 text-left">
            Our random state picker uses a random number generator to make sure
            each state from our database has an equal chance to be picked. It is
            equal to <span className="underline">rolling a fair dice</span> with
            several dozen sides or spinning a wheel where each state is
            represented by an equally-sized sector.
          </p>
          <p className="text-14 tablet:text-16 text-left">
            States in the following federal countries, typically federal
            republics, are currently supported, with the number of states in
            brackets:
          </p>
          <ul className="pl-4 list-disc">
            <li className="text-14 tablet:text-16 text-left">
              the United States of America (50)
            </li>
            <li className="text-14 tablet:text-16 text-left">Argentina (24)</li>
            <li className="text-14 tablet:text-16 text-left">Australia (6)</li>
            <li className="text-14 tablet:text-16 text-left">Brazil (27)</li>
            <li className="text-14 tablet:text-16 text-left">Canada (10)</li>
            <li className="text-14 tablet:text-16 text-left">Germany (16)</li>
            <li className="text-14 tablet:text-16 text-left">India (31)</li>
            <li className="text-14 tablet:text-16 text-left">Malaysia (13)</li>
            <li className="text-14 tablet:text-16 text-left">Nigeria (36)</li>
            <li className="text-14 tablet:text-16 text-left">Venezuela (23)</li>
          </ul>
          <p className="text-16 tablet:text-20 text-left font-semibold">
            How many states are included?
          </p>
          <p className="text-14 tablet:text-16 text-left">
            The generator uses a database of 236 states in 10 countries, as well
            as a total of 15 territories. The list was last actualized in early
            2022. The random state picker has an equal probability of selecting
            any of them, like a state wheel.
          </p>
          <p className="text-14 tablet:text-16 text-left">
            The state randomizer uses only well-recognized and established
            federal states. We do not make any political claims by defining a
            state. Our goal is simply to provide an exhaustive list that any
            reasonable person would agree with. Disputed states or territories
            are typically not included.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PageFile;
