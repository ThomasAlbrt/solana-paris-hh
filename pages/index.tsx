import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="flex sol-h-screen items-center justify-center">
      <Head>
        <title>Solana HH</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center w-full px-20 text-center">
        <h1 className="text-6xl font-bold w-3/4 mb-[65px] text-white font-archivo">
          Connecting Metaverse to real world commerce.
        </h1>
        <div className="flex justify-center space-x-4">
          <Link href="/create">
            <button className="bg-primary50 px-8 py-4 rounded-2xl font-semibold">
              Create
            </button>
          </Link>
          <Link href="/explore">
            <button className="px-8 py-4 rounded-2xl font-semibold text-primary50 border border-primary50">
              Explore
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
