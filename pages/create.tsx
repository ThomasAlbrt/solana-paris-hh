import type { NextPage } from "next";
import Head from "next/head";
import {
  WalletModalProvider,
  WalletMultiButton,
  WalletDisconnectButton,
} from "@solana/wallet-adapter-react-ui";

const Create: NextPage = () => {
  return (
    <div className="flex sol-h-screen items-center justify-center py-2">
      <Head>
        <title>Solana HH</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center w-full px-20 text-center">
        <h1 className="text-2xl font-semibold w-3/4 mb-10">
          Time to connect your favorite Solana wallet.
        </h1>
        <WalletModalProvider>
          <div className="flex space-x-6">
            <WalletMultiButton />
            <WalletDisconnectButton />
          </div>
        </WalletModalProvider>
      </main>
    </div>
  );
};

export default Create;
