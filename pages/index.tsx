import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="flex sol-h-screen items-center justify-center py-2">
      <Head>
        <title>Solana HH</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center w-full px-20 text-center">
        <h1 className="text-6xl font-bold w-3/4 mb-8">
          Connecting <strong className="solana-gradient">Metaverse</strong> to
          real world commerce.
        </h1>
        <div className="flex justify-center space-x-4">
          <Link href="/create">
            <button className="w-full relative inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white transition-all duration-200 bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
              Create
            </button>
          </Link>
          <Link href="/explore">
            <button className="flex content-center items-center justify-center text-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 w-full">
              Explore
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
