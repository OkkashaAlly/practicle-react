import { SiBinance as Binance } from "react-icons/si";
import { IoWalletOutline as Wallet } from "react-icons/io5";
import { RiMenuLine, RiMenuFoldLine } from "react-icons/ri";

// ===============================
// HEADER LAYOUT COMPONENTS ======
// ===============================
const Header = ({ sidebarOpen, setSidebarOpen, mobileMenu, setMobileMenu }) => {
  return (
    <header className="w-full bg-tan py-4 px-8">
      <div className="w-full flex flex-row justify-between items-center">
        <div className="items-center gap-3 hidden md:flex">
          {sidebarOpen ? (
            <RiMenuFoldLine
              onClick={_ => {
                setSidebarOpen(!sidebarOpen);
              }}
              className="h-7 w-7 cursor-pointer text-neutral-300"
            />
          ) : (
            <RiMenuLine
              onClick={_ => {
                setSidebarOpen(!sidebarOpen);
              }}
              className="h-7 w-7 cursor-pointer text-neutral-300"
            />
          )}
          <Brand />
        </div>

        {/* mobile */}
        <div className="flex items-center gap-3 md:hidden">
          {mobileMenu ? (
            <RiMenuFoldLine
              onClick={_ => {
                setMobileMenu(!mobileMenu);
              }}
              className="h-7 w-7 cursor-pointer text-neutral-300"
            />
          ) : (
            <RiMenuLine
              onClick={_ => {
                setMobileMenu(!mobileMenu);
              }}
              className="h-7 w-7 cursor-pointer text-neutral-300"
            />
          )}
          <Brand />
        </div>

        <Account />
      </div>
    </header>
  );
};

////////////////////////////
// EXTENDED COMPONENTS /////
const Brand = () => (
  <h6 className="text-2xl font-bold text-white">Metarootz</h6>
);

const Account = () => (
  <div className="w-full flex flex-row justify-end items-center space-x-2">
    <Network network={{ name: "bsc mainnet", icon: <Binance size={20} /> }} />
    <Address
      address={"0x0efA...28CB"}
      balance={{ amount: "0.0006", currency: "BNB" }}
    />
  </div>
);

const Network = ({ network }) => (
  <button className="bg-ban rounded-full px-2 py-1 flex flex-row justify-end items-center space-x-2">
    <span className="text-greey p-1">{network.icon}</span>
    <span className="w-full h-full flex flex-col items-end -space-y-1 text-greey">
      <p className="uppercase">{network.name}</p>
    </span>
  </button>
);

const Address = ({ address, balance }) => (
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

export default Header;
