import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { CSSTransition } from "react-transition-group";
import Nft from "../components/Nft";
import Link from "next/link";

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
    <div className="flex sol-h-screen text-white">
      <Head>
        <title>Solana HH</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full px-10">
        <div className="flex space-x-8">
          <div className="w-1/4 py-11">
            <Link href="/">
              <img src="/logo.svg" alt="nyft logo" className="cursor-pointer" />
            </Link>
            <hr className="mt-8 opacity-30" />
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
          </div>
          <div className="w-3/4 border-l border-white border-opacity-30 py-11 pl-16 sol-h-screen">
            <h1 className="text-5xl font-semibold mb-16">
              Explore Collections.
            </h1>
            <div className="grid grid-cols-3 gap-4">
              <Nft name="NFT #01" />
              <Nft name="NFT #01" />
              <Nft name="NFT #01" />
              <Nft name="NFT #01" />
              <Nft name="NFT #01" />
              <Nft name="NFT #01" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Explore;
