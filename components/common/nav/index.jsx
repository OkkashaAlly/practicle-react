import { SiBinance as Binance } from "react-icons/si";
import { IoWalletOutline as Wallet } from "react-icons/io5";
import { useEffect, useState } from "react";

export const Navbar = () => {
  return (
    <nav className="w-full bg-tan py-4 px-8">
      <span className="w-full flex flex-row justify-between items-center">
        <Brand />
        <Account />
      </span>
    </nav>
  );
};

const Brand = () => {
  return <h6 className="text-2xl font-bold text-white">Metarootz</h6>;
};

const Account = () => {
  return (
    <span className="w-full flex flex-row justify-end items-center space-x-2">
      <Network network={{ name: "bsc mainnet", icon: <Binance size={20} /> }} />
      <Address
        address={"0x0efA...28CB"}
        balance={{ amount: "0.0006", currency: "BNB" }}
      />
    </span>
  );
};

const Network = ({ network }) => {
  return (
    <button className="bg-ban rounded-full px-2 py-1 flex flex-row justify-end items-center space-x-2">
      <span className="text-greey p-1">{network.icon}</span>
      <span className="w-full h-full flex flex-col items-end -space-y-1 text-greey">
        <p className="uppercase">{network.name}</p>
      </span>
    </button>
  );
};

const Address = ({ address, balance }) => {
  return (
    <button className="bg-ban rounded-full px-2 py-1 flex flex-row justify-end items-center space-x-2">
      <span className="w-full h-full flex flex-col items-end -space-y-1 text-greey">
        <small className="text-pink">{address}</small>
        <p>
          {balance.amount} {balance.currency}
        </p>
      </span>
      <span className="rounded-full border-[.8px] border-white text-greey p-1">
        <Wallet size={20} />
      </span>
    </button>
  );
};

export const SideNav = () => {
  return (
    <nav className="h-full w-40 px-2">
      <SideMenu />
    </nav>
  );
};

const SideMenu = ({ data }) => {
  const [array, setArray] = useState([{ link: "/", name: "no menu" }]);

  useEffect(() => {
    data ? setArray(data) : setArray(["no menu available"]);
  }, []);

  return (
    <span className="w-full flex flex-col space-x-2">
      {array.map((nav, index) => {
        return <SideMenuBtn key={index} {...nav} />;
      })}
    </span>
  );
};

const SideMenuBtn = ({ nav }) => {
  return (
    <button
      className="py-2 px-4 hover:bg-pink"
      onClick={() => {
        router.push(nav && nav.link);
      }}
    >
      {nav && nav.name}
    </button>
  );
};
