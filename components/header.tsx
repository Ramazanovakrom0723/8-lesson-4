import Link from "next/link";
import SignUp from "../app/sign-up/page"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import "./header.css"
import headerIcon from "../public/header-icon.png"
import Image from 'next/image';

const Index = () => {
  const links = [
    { path: "/marketplace", title: "Marketplace" },
    { path: "/rankings", title: "Rankings" },
    { path: "/wallet", title: "Connect a wallet" },
  ];

  return (
    <div className=" bg-zinc-800 text-gray-50">
      <header className="py-4 px-12   flex justify-between items-center">
      <div className="flex text-2xl gap-3">
      <Image src={headerIcon} alt="Header Icon"/>
        <h2>NFT Marketplace</h2>
      </div>
      <div className=" flex gap-10 items-center">
      {links.map((item, index) => (
        <Link href={item.path} key={index}>
          {item.title}
        </Link>
        ))}
        <button className="sign_up">
          <PersonOutlineIcon/>
        <SignUp/>
        </button>
      </div>
    </header>
    </div>

  );
};

export default Index;