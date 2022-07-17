import Link from "next/link";

const Header = () => {
  return (
    <div className="px-20 py-6 flex justify-between bg-transparent">
      <Link href="/">
        <div className="flex items-center space-x-4 cursor-pointer">
          <img width={24} height={24} src="/solana-logo.svg" alt="logo" />
        </div>
      </Link>
    </div>
  );
};

export default Header;
