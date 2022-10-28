// React
import { useState, useEffect } from "react";

// Next
import Image from "next/image";
import { useRouter } from "next/router";

// Redux
import { toggleNav } from "@/app/slice/ui";
import { useSelector, useDispatch } from "react-redux";
import { connect, disconnect } from "@/app/utils/connect";
import { updateData } from "@/app/slice/blockchainSlice";

// Icons
import { TbMenu2 as Toggle } from "react-icons/tb";
import { VscChromeClose as Close } from "react-icons/vsc";

// Components
import Button from "@/components/common/button";
import Disclaimer from "@/components/modules/disclaimer";

const Navbar = () => {
  const router = useRouter();
  const [theme, setTheme] = useState("white");
  const [btnTheme, setBtnTheme] = useState("green");

  const { toggle, disclaimer } = useSelector((state) => state.ui);

  //** Setting Nav Theme */
  useEffect(() => {
    router.pathname === "/" && setTheme("white");
    router.pathname === "/uta" || router.pathname === "/404"
      ? setTheme("green")
      : setTheme("white");
    router.pathname === "/gta" && setTheme("purple");
    router.pathname === "/selector" && setTheme("teel");
    //
  }, [router.pathname]);

  //** Setting Nav Button Theme */
  useEffect(() => {
    theme === "white" || router.pathname === "/gta"
      ? setBtnTheme("green")
      : setBtnTheme("white");
  }, [theme]);

  return (
    <>
      {toggle ? <Disclaimer /> : false}
      <nav className={`w-full p-6 bg-${theme}`}>
        <WideScreens btnTheme={btnTheme} />
        <MobileMenu btnTheme={btnTheme} />
      </nav>
    </>
  );
};

const WideScreens = ({ btnTheme }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { account } = useSelector((state) => state.blockchain);

  const connectWeb3 = () => {
    if (account) {
      // console.log(account)
      disconnect().then((data) => dispatch(updateData(data)));
    } else {
      // console.log(account)
      connect().then((data) => dispatch(updateData(data)));
    }
  };

  return (
    <span className="hidden md:flex flex-row space-x-4 align-top justify-between">
      {/* // Left */}
      <span className="flex flex-row space-x-24 justify-between">
        {/* Brand */}
        <button
          className="-mt-3 xl:-mt-8"
          onClick={() => {
            router.push("/");
          }}
        >
          <span>
            <Image
              src={"/icon/brand-logo.svg"}
              width={120}
              height={60}
              fill={"responsive"}
              alt={"Hiddenforms brand logo"}
            />
          </span>
        </button>
        {/* -- Menu -- */}
        <span>
          <Menu />
        </span>
      </span>

      {/* // Right */}
      <span className="inline-block">
        <SocialMenu />
      </span>

      <span className="flex flex-row items-start justify-end space-x-10">
        {/* Connect button */}
        {/* <span>
          {router.pathname !== "/" && (
            <Button
              text={"Mint Now"}
              isMenu={true}
              style={{ solid: btnTheme }}
              action={() => {
                router.push("/");
              }}
              type={"button"}
            />
          )}
        </span> */}
        <span>
          <Button
            text={account ? <Address address={account} /> : "Connect to Wallet"}
            isMenu={true}
            style={{
              solid: account ? null : btnTheme,
              outline: account && btnTheme,
            }}
            action={connectWeb3}
            type={"button"}
          />
        </span>
      </span>

      {/* // */}
    </span>
  );
};

const Address = ({ address }) => {
  const truncate = (input, len) =>
    input.length > len
      ? `${input.substring(0, len)}...${input.slice(-len + 1, input.len)}`
      : input;

  return (
    <span className="flex flex-row items-center justify-center space-x-2">
      <span className="bg-black w-[20px] h-[20px] rounded-full flex"></span>
      <p className="text-sm text-black neutra-book">{truncate(address, 5)}</p>
    </span>
  );
};

const MobileMenu = ({ btnTheme }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { nav } = useSelector((state) => state.ui);

  return (
    <span className="w-full h-full flex md:hidden">
      {/* // Left */}
      <span
        className={`relative z-40 w-screen h-full flex flex-row justify-between items-start`}
      >
        {/* Brand */}
        <button
          className="-mt-5"
          onClick={() => {
            dispatch(toggleNav({ toggle: false }));
            router.push("/");
          }}
        >
          <span>
            <Image
              src={"/icon/brand-logo.svg"}
              width={120}
              height={60}
              fill={"responsive"}
              alt={"Hiddenforms brand logo"}
            />
          </span>
        </button>
        <button
          className="-mt-2 -mr-4 flex flex-row justify-end items-end text-black duration-300"
          onClick={() => {
            dispatch(toggleNav({ toggle: 0 }));
          }}
        >
          {nav ? <Close size={36} /> : <Toggle size={36} />}
        </button>
      </span>
      <Mobile active={nav ? true : false} btnTheme={btnTheme} />
    </span>
  );
};

const Mobile = ({ active, btnTheme }) => {
  const dispatch = useDispatch();
  const { account } = useSelector((state) => state.blockchain);

  const connectWeb3 = () => {
    if (account) {
      // console.log(account)
      disconnect().then((data) => dispatch(updateData(data)));
    } else {
      // console.log(account)
      connect().then((data) => dispatch(updateData(data)));
    }
  };

  return (
    <span
      className={`z-[1] w-screen h-screen bg-white top-0 left-0 ${
        active ? "absolute" : "hidden"
      } flex flex-col items-center justify-center space-y-5`}
    >
      <Menu mobile={true} />
      <SocialMenu mobile={true} />
      {/* Connect button */}
      {/* <span>
        {router.pathname !== "/" && (
          <Button
            text={"Mint Now"}
            isMenu={true}
            style={{ solid: btnTheme }}
            action={() => {
              router.push("/");
            }}
            type={"button"}
          />
        )}
      </span> */}
      <span>
        <Button
          text={account ? <Address address={account} /> : "Connect to Wallet"}
          isMenu={true}
          style={{
            solid: account ? null : btnTheme,
            outline: account && btnTheme,
          }}
          action={connectWeb3}
          type={"button"}
        />
      </span>
    </span>
  );
};

const SocialMenu = ({ mobile }) => {
  return (
    <div
      className={`flex ${
        mobile ? "flex-col space-y-5" : "flex-row space-x-6"
      }  align-top justify-center`}
    >
      {SocialList.map((social, index) => {
        return (
          <MenuBtn
            key={index}
            url={social.url}
            text={social.name}
            mobile={mobile}
          />
        );
      })}
    </div>
  );
};

const Menu = ({ mobile }) => {
  return (
    <div
      className={`flex flex-col ${
        mobile ? "space-y-5 items-center" : "-space-y-2 items-start"
      } `}
    >
      {MenuList.map((menu, index) => {
        return <MenuBtn key={index} url={menu.url} text={menu.name} mobile />;
      })}
    </div>
  );
};

export const MenuBtn = ({ url, text, mobile }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <button
      className={`focus:outline-none bg-transparent border-none`}
      onClick={() => {
        dispatch(toggleNav({ toggle: false }));
        router.push(url);
      }}
    >
      <span
        className={`${
          mobile ? "text-lg neutra-book" : "text-base neutra-demi"
        } font-bold`}
      >
        {text}
      </span>
    </button>
  );
};

const SocialList = [
  {
    url: "/404",
    name: "Discord",
  },
  {
    url: "https://twitter.com/HddenForms",
    name: "Twitter",
  },
];

const MenuList = [
  {
    url: "/404",
    name: "DAO",
  },
  {
    url: "http://hddenformswebsite.metodika.com.mx/whitemap.php",
    name: "Whitemap",
  },
  {
    url: "http://hddenformswebsite.metodika.com.mx/entombment-object2.php",
    name: "Collection",
  },
  {
    url: "http://hddenformswebsite.metodika.com.mx/about.php",
    name: "About",
  },
  {
    url: "http://hddenformswebsite.metodika.com.mx/faq.php",
    name: "FAQ",
  },
];

export default Navbar;
