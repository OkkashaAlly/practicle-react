import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";

import {
  RiHome3Line,
  RiRocketLine,
  RiShieldKeyholeLine,
  RiCheckboxBlankCircleFill,
  RiTelegramLine,
  RiTwitterLine,
  RiFacebookBoxLine,
} from "react-icons/ri";

// import { SiBinance as Binance } from "react-icons/si";

const SideBar = ({
  sidebarOpen,
  setSidebarOpen,
  mobileMenu,
  setMobileMenu,
}) => {
  const navLinks = [
    {
      single: true,
      pathname: "/",
      text: "Home",
      icon: () => {
        return <RiHome3Line className="text-pink h-7 w-7" />;
      },
    },

    {
      single: false,
      text: "launchpad",
      icon: () => {
        return <RiRocketLine className="text-pink h-7 w-7" />;
      },
      dropdowns: [
        {
          pathname: "/launchpad/list",
          text: "launchpad list",
        },
        {
          pathname: "/launchpad/create",
          text: "create launchpad",
        },
        {
          pathname: "/launchpad/fairlaunch",
          text: "create Fair lunch",
        },
        {
          pathname: "/launchpad/dutch-auction",
          text: "create dutch auction",
        },
        {
          pathname: "/launchpad/subscription-pool",
          text: "create subscription",
        },
        {
          pathname: "/launchpad/token",
          text: "create token",
        },
      ],
    },
    {
      single: false,
      text: "private sale",
      icon: () => {
        return <RiShieldKeyholeLine className="text-pink h-7 w-7" />;
      },
      dropdowns: [
        {
          pathname: "/private-list",
          text: "private list",
        },
        {
          pathname: "/private-sale",
          text: "private sale",
        },
      ],
    },
    {
      single: true,
      pathname: "/Telegram",
      text: "Telegram",
      icon: () => {
        return <RiTelegramLine className="text-pink h-7 w-7" />;
      },
    },
    {
      single: true,
      pathname: "/Twitter",
      text: "Twitter",
      icon: () => {
        return <RiTwitterLine className="text-pink h-7 w-7" />;
      },
    },
    {
      single: true,
      pathname: "/Facebook",
      text: "Facebook",
      icon: () => {
        return <RiFacebookBoxLine className="text-pink h-7 w-7" />;
      },
    },
  ];
  //   {
  //     pathname: "/",
  //     text: "Home",
  //     icon: () => {
  //       return <RiHome3Line className="text-pink h-7 w-7" />;
  //     },
  //   },
  //   {
  //     pathname: "/launchpad",
  //     text: "launchpad",
  //     icon: () => {
  //       return <RiRocketLine className="text-pink h-7 w-7" />;
  //     },
  //   },
  //   {
  //     pathname: "/private-sale",
  //     text: "Private sale",
  //     icon: () => {
  //       return <RiShieldKeyholeLine className="text-pink h-7 w-7" />;
  //     },
  //   },
  // ];

  return (
    <>
      <aside
        className={`min-h-screen ${
          sidebarOpen ? "w-52" : "w-18"
        } border-r border-neutral-600  animation-300 hidden md:block`}
      >
        <nav className="">
          {navLinks.map((link, i) => (
            <NavItem
              key={i}
              item={link}
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
              setMobileMenu={setMobileMenu}
            />
          ))}
        </nav>
      </aside>

      <MobileNav
        navLinks={navLinks}
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
    </>
  );
};

///////////////////////
// EXTENDED COMPONENTS
const NavItem = ({ item, sidebarOpen, setMobileMenu }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const router = useRouter();

  return item.single ? (
    <>
      {" "}
      {(item.active = router.pathname === item.pathname ? true : false)}
      <Link href={item.pathname}>
        <div
          onClick={_ => {
            setMobileMenu(false);
            setDropdownOpen(false);
          }}
          className={`p-3 px-4  cursor-pointer ${
            item.active && "bg-rose-900 text-rose-200"
          } hover:bg-neutral-700 text-neutral-300  flex items-center gap-3`}
        >
          <span className="h-8 w-8 p-2 bg-rose-100 rounded-full flex items-center justify-center">
            {item.icon()}
          </span>
          <span className={`${!sidebarOpen && "hidden"} capitalize`}>
            {item.text}
          </span>
        </div>
      </Link>
    </>
  ) : (
    <>
      {" "}
      {item.dropdowns.map(
        drop => (drop.active = router.pathname === drop.pathname ? true : false)
      )}
      <div
        className={`p-3 px-4  cursor-pointer ${
          router.pathname.includes(item.text) && "bg-rose-900 text-rose-200"
        } hover:bg-neutral-700 text-neutral-300 `}
        onClick={_ => {
          setDropdownOpen(!dropdownOpen);
        }}
      >
        <div className="flex items-center gap-3 ">
          <span className="h-8 w-8 p-2 bg-rose-100 rounded-full flex items-center justify-center">
            {item.icon()}
          </span>
          <span className={`${!sidebarOpen && "hidden"} capitalize`}>
            {item.text}
          </span>
        </div>
      </div>
      <div className="relative">
        {!sidebarOpen && dropdownOpen ? (
          <div
            className={`${
              !dropdownOpen && "hidden"
            } absolute -top-6 left-14 bg-neutral-800 duration-300 w-52 mb-4`}
          >
            {item.dropdowns.map((drop, i) => (
              <Link href={drop.pathname} key={i}>
                <div
                  onClick={_ => setDropdownOpen(false)}
                  className={`capitalize flex items-center py-2 ${
                    drop.active
                      ? "text-neutral-100 underline"
                      : "text-neutral-400 "
                  } hover:text-neutral-100 ml-4`}
                >
                  <RiCheckboxBlankCircleFill className="mr-2 h-2 w-2" />
                  {drop.text}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className={`${!dropdownOpen && "hidden"}   bg-neutral-800 mb-4`}>
            {item.dropdowns.map((drop, i) => (
              <Link href={drop.pathname} key={i}>
                <div
                  onClick={_ => {
                    setMobileMenu(false);
                  }}
                  className={`capitalize flex items-center py-2 ${
                    drop.active
                      ? "text-neutral-100 underline"
                      : "text-neutral-400 "
                  } hover:text-neutral-100 ml-4`}
                >
                  <RiCheckboxBlankCircleFill className="mr-2 h-2 w-2" />
                  {drop.text}
                </div>
              </Link>
            ))}
          </div>
        )}{" "}
      </div>
    </>
  );
};

const MobileNav = ({
  navLinks,
  mobileMenu,
  setMobileMenu,
  sidebarOpen,
  setSidebarOpen,
}) => {
  return (
    <aside
      className={`absolute top-0 ${
        mobileMenu ? "left-0" : "-left-[70%]"
      } text-white bg-neutral-500 bg-opacity-60 backdrop-blur-xl backdrop-filter bg-clip-padding z-20 w-[70%] min-h-screen h-full duration-300`}
    >
      <nav className="">
        {navLinks.map((link, i) => (
          <NavItem
            key={i}
            item={link}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            setMobileMenu={setMobileMenu}
          />
        ))}
      </nav>
    </aside>
  );
};

const Network = ({ network }) => (
  <button className="bg-ban rounded-full px-2 py-1 flex flex-row justify-end items-center space-x-2">
    <span className="text-greey p-1">{network.icon}</span>
    <span className="w-full h-full flex flex-col items-end -space-y-1 text-greey">
      <p className="uppercase">{network.name}</p>
    </span>
  </button>
);

export default SideBar;
