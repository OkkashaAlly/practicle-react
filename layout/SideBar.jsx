import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";

import {
  RiHome3Line,
  RiRocketLine,
  RiShieldKeyholeLine,
  RiCheckboxBlankCircleFill,
} from "react-icons/ri";

import { SiBinance as Binance } from "react-icons/si";

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
          pathname: "/",
          text: "private list",
        },
        {
          pathname: "/",
          text: "private sale",
        },
      ],
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

  // console.log(router);
  return (
    <>
      <aside
        className={`min-h-screen ${
          sidebarOpen ? "w-52" : "w-20"
        } border-r border-neutral-600 p-4 animation-300 hidden md:block`}
      >
        <nav className="">
          {navLinks.map((link, i) => {
            // console.log(link.dropdowns);

            // link.active = router.pathname === link.pathname ? true : false;
            // link.active = router.pathname === link.dropdowns.pathname ? true : false;

            return (
              <NavItem
                key={i}
                item={link}
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                setMobileMenu={setMobileMenu}
              />
            );
          })}
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

  // item.dropdowns?.map((dropdown, i) => {
  //   item.active = router.pathname === item.pathname ? true : false;
  //   item.active = router.pathname === dropdown.pathname ? true : false;
  // item.active = router.pathname === item.pathname ? true : false;
  // });
  // console.log(router.pathname, dropdown.pathname);

  return item.single ? (
    <>
      {" "}
      {(item.active = router.pathname === item.pathname ? true : false)}
      <Link href={item.pathname}>
        <div
          onClick={_ => {
            setMobileMenu(false);
            setDropdownOpen(false);
            // setSidebarOpen(false);
          }}
          className={`p-2 my-2 cursor-pointer ${
            item.active && "bg-neutral-700"
          } hover:bg-neutral-700 text-neutral-300 rounded-lg flex items-center gap-3`}
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
        className={`p-2 my-2 cursor-pointer ${
          router.pathname.includes(item.text) && "bg-neutral-700"
        } hover:bg-neutral-700 text-neutral-300 rounded-lg `}
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
            } absolute -top-6 left-14 bg-neutral-800 rounded duration-300 w-52 mb-4`}
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
          <div
            className={`${
              !dropdownOpen && "hidden"
            } rounded  bg-neutral-800 mb-4`}
          >
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
      } text-white p-4 bg-neutral-500 bg-opacity-60 backdrop-blur-xl backdrop-filter bg-clip-padding z-20 w-[70%] min-h-screen h-full duration-300`}
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

      <div className="block md:hidden">
        <Network
          network={{ name: "bsc mainnet", icon: <Binance size={20} /> }}
        />
      </div>
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
