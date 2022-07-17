import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { CSSTransition } from "react-transition-group";
import Nft from "../components/Nft";

const Explore: NextPage = () => {
  const [phygital, setPhygital] = useState(false);
  const [metaverse, setMetaverse] = useState(false);

  const phygitals = [
    "Fashion",
    "Services",
    "Activities",
    "Tickets",
    "Beauty",
    "Music",
    "Photography",
  ];
  const metaverses = ["Virtual worlds", "Digital art", "Collectibles", "Games"];

  return (
    <div className="flex sol-h-screen py-16">
      <Head>
        <title>Solana HH</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full px-20">
        <div className="flex justify-between">
          <div className="w-1/2">
            <h1 className="text-2xl font-semibold mb-6">
              Explore Collections.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              faucibus massa dignissim tempus.
            </p>
          </div>
          <div>
            <button className="cursor-pointer flex items-center transform transition-all ease-in-out delay-200 font-bold border rounded-md px-4 py-2">
              Sort Items
              <svg
                className="h-4 w-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="flex space-x-8 mt-10">
          <div className="w-1/4">
            <button className="flex items-center font-semibold cursor-pointer">
              <svg
                className="h-5 w-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#A1A1AA"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
              Reset Filters
            </button>
            <hr className="mt-8" />
            <div className="py-6">
              <button
                className="flex justify-between items-center w-full font-semibold"
                onClick={() => setPhygital(!phygital)}
              >
                Phygital
                <img
                  src="/chevron.svg"
                  alt="logo-chevron"
                  className={
                    phygital
                      ? "rotate-180 transform transition-all ease-in-out"
                      : ""
                  }
                />
              </button>
              <CSSTransition
                in={phygital}
                timeout={200}
                classNames="transition"
                unmountOnExit
                exit={false}
              >
                <div className="flex flex-col mt-2">
                  {phygitals.map((phyg, i) => (
                    <div key={i} className="mt-2 flex items-center">
                      <input type="checkbox" className="mr-2 w-4 h-4" />
                      <span>{phyg}</span>
                    </div>
                  ))}
                </div>
              </CSSTransition>
            </div>
            <hr />
            <div className="py-6">
              <button
                className="flex justify-between items-center w-full font-semibold"
                onClick={() => setMetaverse(!metaverse)}
              >
                Metaverse native
                <img
                  src="/chevron.svg"
                  alt="logo-chevron"
                  className={
                    metaverse
                      ? "rotate-180 transform transition-all ease-in-out"
                      : ""
                  }
                />
              </button>
              <CSSTransition
                in={metaverse}
                timeout={200}
                classNames="transition"
                unmountOnExit
                exit={false}
              >
                <div className="flex flex-col mt-2">
                  {metaverses.map((phyg, i) => (
                    <div key={i} className="mt-2 flex items-center">
                      <input type="checkbox" className="mr-2 w-4 h-4" />
                      <span>{phyg}</span>
                    </div>
                  ))}
                </div>
              </CSSTransition>
            </div>
            <hr />
          </div>
          <div className="w-3/4 border border-zinc-300 rounded-md grid grid-cols-2 gap-4 p-8">
            <Nft name="NFT #01" />
            <Nft name="NFT #02" />
            <Nft name="NFT #03" />
            <Nft name="NFT #04" />
            <Nft name="NFT #05" />
            <Nft name="NFT #06" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Explore;
