import Link from "next/link";

interface Props {
  name: string;
}

const Nft: React.FC<Props> = ({ name }) => {
  return (
    <div className="rounded-2xl overflow-hidden cursor-pointer p-3 bg-[#343434]">
      <img src="/nft-picture.png" alt="nft-picture" />
      <div className="mt-3 flex items-center">
        <img src="/nft-logo.png" alt="nft-logo" width={60} height={60} />
        <div className="flex ml-2">
          <span className="uppercases font-bold mr-2">Meta Kongz Official</span>
          <img src="/coche.svg" alt="coche-logo" />
        </div>
      </div>
    </div>
  );
};

export default Nft;
