import Link from "next/link";
import { useState } from "react";

import {
  RiHome3Line,
  RiRocketLine,
  RiShieldKeyholeLine,
  RiCheckboxBlankCircleFill,
} from "react-icons/ri";

const SideBar = () => {
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
          pathname: "/launchpad-create",
          text: "create launchpad",
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
          pathname: "/private",
          text: "private list",
        },
        {
          pathname: "/private",
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

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(true);

  return (
    <aside
      className={`min-h-screen ${
        sidebarOpen ? "w-52" : "w-20"
      } border-r border-neutral-600 p-4`}
    >
      <div className="">
        {navLinks.map((link, i) => (
          <NavItem
            key={i}
            item={link}
            sidebarOpen={sidebarOpen}
            setMobileMenu={setMobileMenu}
          />
        ))}
      </div>
    </aside>
  );
};

///////////////////////
// EXTENDED COMPONENTS
const NavItem = ({ item, sidebarOpen, setMobileMenu }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return item.single ? (
    <Link href={item.pathname}>
      <div
        onClick={_ => setMobileMenu(false)}
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
  ) : (
    <>
      <div
        className={`p-2 my-2 cursor-pointer ${
          item.active && "bg-neutral-700"
        } hover:bg-neutral-700 text-neutral-300 rounded-lg `}
        onClick={_ => setDropdownOpen(!dropdownOpen)}
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
      <div className={`${!dropdownOpen && "hidden"}  bg-neutral-800 mb-4`}>
        {item.dropdowns.map((drop, i) => (
          <Link href={drop.pathname}>
              <div
                key={i}
                className="capitalize flex items-center py-2 text-neutral-400 hover:text-neutral-100 ml-4"
              >
              <RiCheckboxBlankCircleFill className="mr-2 h-2 w-2" />
              {drop.text}
          </div>
            </Link>
        ))}
      </div>
    </>
  );
};

export default SideBar;
