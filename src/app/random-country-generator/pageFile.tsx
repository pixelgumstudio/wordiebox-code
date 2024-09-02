/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { FC, useEffect, useState } from "react";

import ErrorBoundary from "@/functions/ErrorBoundary";
import axios from "axios";
import Layout from "@/components/layout";
import Dropdown from "@/components/dropdown";
import { createSlug } from "@/components/slug";
import { continents } from "@/lib/countries";
import CopyButton from "@/components/copy-content";

interface ContinentsCountries {
  continent: string;
  countries: string[];
}

const PageFile: FC = () => {
  const [continents, setContinents] = useState<ContinentsCountries[]>([]);
  const [country, setCountry] = useState<string>("");


  useEffect(() => {
    const fetchContinents = async () => {
      try {
        const response = await axios.get<ContinentsCountries[]>("/api/continents");
        setContinents(response.data);
        console.log(response.data.map(c => c.continent))
      } catch (error) {
        console.error("Failed to fetch continents:", error);
      }
    };

    fetchContinents();
  }, []);

const continentsOption = [ 'Africa', 'Asia', 'Europe', 'North America', 'South America', 'Australia/Oceanic' ]

  const selected = (value: string) => {
    const continent =  value === "Select a Continent" ? "select" : value === "North America" ? "N. America" : value === "South America" ? "S. America" : value === "Australia/Oceanic" ? "Australia" : value

    if (continent) {
      const selectedContinentCountries =
      continents.find((c) => c.continent === continent)?.countries || [];
      if (selectedContinentCountries.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * selectedContinentCountries.length
        );
        setCountry(selectedContinentCountries[randomIndex]);
      } else if (continent === "select") {
        setCountry("Please select a continent");
              }
              else {
        setCountry("No country found for this continent.");

                  }
    } else {
      setCountry("");
    }
  };


  return (
    // <ErrorBoundary>
    <Layout title="Random Country Generator">
      <div className="w-full laptop:max-w-[947px] px-4 tablet:px-6 laptop:px-0 desktop:px-0 mx-auto">
        <Dropdown
          text="Generate a Random Continent"
          options={continentsOption}
          location={selected}
          title="Select a Continent"
          first="Select a Continent"
        />

        {country !== undefined && country !== "" && (
          <p
            className={`w-fit mt-8 text-[#1C1C1C] border-[#1C1C1C] bg-[#C2FFD9] border shadow-darkbox p-2 text-20 font-semibold mx-auto`}
          >
            {country}
          </p>
        )}
        {country.length > 0 &&
          <div className="w-full text-center mt-6 tablet:mt-8">
          <CopyButton textToCopy={country} text='Copy Country'/>
          </div>
}
        <div className="mt-[100px] flex flex-col gap-[10px] text-black border border-[#1C1C1C] bg-[#FFFFFF] shadow-darkbox p-4 tablet:p-6 w-full mx-auto my-6">
          <p className="text-16 tablet:text-20 text-left font-semibold">
            Using the random country generator
          </p>
          <p className="text-14 tablet:text-16 text-left">
            To pick a country at random, start by specifying which continent to
            use. By default, the picker will use all continents, but you can
            choose any single one of the major continents:
          </p>
          <ul className="pl-4 list-disc">
            <li className="text-14 tablet:text-16 text-left">Asia</li>
            <li className="text-14 tablet:text-16 text-left">Europe</li>
            <li className="text-14 tablet:text-16 text-left">North America</li>
            <li className="text-14 tablet:text-16 text-left">South America</li>
            <li className="text-14 tablet:text-16 text-left">Africa</li>
            <li className="text-14 tablet:text-16 text-left">Australia & Oceania</li>
          </ul>
          <p className="text-14 tablet:text-16 text-left">
            Our random country picker uses a random number generator to make
            sure each country from our database has an equal chance to be
            picked. It is equal to rolling a fair dice with hundreds of sides or
            spinning a wheel where each country is represented equally.
          </p>
          <p className="text-14 tablet:text-16 text-left">
            If you also want to include autonomous regions, and territories,
            check the "Include territories" checkbox. Finally, press the "pick a
            random country" button and our tool will return one country at
            random.
          </p>
          <p className="text-16 tablet:text-20 text-left font-semibold">
            How many countries are included?
          </p>
          <p className="text-14 tablet:text-16 text-left">
            The generator uses a database of 259 countries and territories, last
            actualized in early 2022. It includes 201 countries and 58
            territories and autonomous regions. The random country picker has an
            equal probability of selecting any of them, like a country wheel. It
            can be limited to countries-proper only unless you check the
            "Include territories" checkbox.
          </p>
          <p className="text-14 tablet:text-16 text-left">
            Does the country randomizer have all countries in the world? As a
            matter of fact, the definition of a "country", "autonomous region"
            etc. is not as straightforward as you might think, and to further
            complicate things, at any given time there are at least a dozen
            territories over which there are disputes. Therefore, it is
            difficult to say with certainty what an exhaustive list of countries
            should contain, but our list should be as close to one as is
            reasonable.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PageFile;
