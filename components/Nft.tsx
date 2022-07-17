import Link from "next/link";

const Nft = ({ name }) => {
  return (
    <div className="rounded-md overflow-hidden border cursor-pointer">
      <div
        className="test h-[300px]"
        style={{
          background: `-webkit-linear-gradient(${
            Math.random() * 360
          }deg, rgb(171, 102, 255) 0%, rgb(20, 241, 149) 101.39%)`,
        }}
      />
      <div>
        <div className="flex justify-between p-4">
          <p className="font-semibold">{name}</p>
          <div className="flex flex-col">
            <span className="text-[#71717A]">Floor</span>
            <span>5 SOL</span>
          </div>
        </div>
        <hr />
        <div className="flex justify-between p-4">
          <div className="flex flex-col">
            <span className="text-[#71717A]">Stock</span>
            <span>347</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#71717A]">Bid</span>
            <span>6 SOL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nft;
