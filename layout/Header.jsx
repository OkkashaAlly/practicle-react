import { useState } from "react";

import { SiBinance as Binance } from "react-icons/si";
import { IoWalletOutline as Wallet } from "react-icons/io5";
import { RiMenuLine, RiMenuFoldLine } from "react-icons/ri";

// ===============================
// HEADER LAYOUT COMPONENTS ======
// ===============================
const Header = ({ sidebarOpen, setSidebarOpen, mobileMenu, setMobileMenu }) => (
  <header className="w-full bg-tan p-4 md:px-8">
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

////////////////////////////
// EXTENDED COMPONENTS /////
const Brand = () => (
  <h6 className="text-2xl font-bold text-white">Metarootz</h6>
);

const Account = () => {
  const availableNetworks = [
    {
      name: "bsc mainnet",
      icon: <Binance size={20} />,
    },
    {
      name: "bsc testnet",
      icon: <Binance size={20} />,
    },
  ];

  const [network, setNetwork] = useState({
    name: "bsc mainnet",
    icon: <Binance size={20} />,
  });

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="w-full flex flex-row justify-end items-center space-x-2">
        <div className="hidden md:block">
          <NetworkButton
            action={_ => setShowModal(true)}
            network={network}
            availableNetworks={availableNetworks}
          />
        </div>
        <Address
          address={"0x0efA...28CB"}
          balance={{ amount: "0.0006", currency: "BNB" }}
        />
      </div>

      <Modal show={showModal} handleClose={_ => setShowModal(false)}>
        <div className="flex gap-4">
          {availableNetworks.map((network, i) => (
            <NetworkItem
              key={i}
              network={network}
              setNetwork={setNetwork}
              setShowModal={setShowModal}
            />
          ))}
        </div>
      </Modal>
    </>
  );
};

const NetworkButton = ({ network, action }) => (
  <button
    onClick={action}
    className="bg-ban rounded-full px-2 py-1 flex flex-row justify-end items-center space-x-2"
  >
    <span className="text-greey p-1">{network.icon}</span>
    <span className="w-full h-full flex flex-col items-end -space-y-1 text-greey">
      <p className="uppercase">{network.name}</p>
    </span>
  </button>
);

const NetworkItem = ({ network, setNetwork, setShowModal }) => (
  <button
    onClick={_ => {
      setNetwork(network);
      setShowModal(false);
    }}
    className="p-4 flex-1 rounded-lg bg-neutral-800 flex flex-col items-center justify-center gap-2"
  >
    <span className="text-greey p-1">{network.icon}</span>
    <span className="uppercase">{network.name}</span>
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

const Modal = ({ handleClose, show, children }) => {
  return (
    <div
      className={`${
        show ? " block " : " hidden "
      } fixed top-0 left-0 w-full h-full text-neutral-100 bg-neutral-500 bg-opacity-60 backdrop-blur-lg backdrop-filter z-10`}
    >
      <section className="p-4 fixed top-[50%] -translate-x-[50%] left-[50%] -translate-y-[50%] md:w-[50%] bg-neutral-700 rounded-lg z-10">
        <div className="flex justify-between items-center mb-3">
          <p className="text-lg font-semibold">Choose a network</p>
          <button type="button" className="bg-rose-500 text-neutral-100 p-2 px-3 rounded-lg" onClick={handleClose}>
            Close
          </button>
        </div>
        {children}
      </section>
    </div>
  );
};

export default Header;
