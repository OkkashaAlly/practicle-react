import { useState } from "react";

import SideBar from "./SideBar";
import Header from "./Header";

// ===============================
//  LAYOUT COMPONENTS ============
// ===============================
const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="bg-ban w-full min-h-screen">
      <Header
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
      />
      <div className="w-full flex relative">
        <SideBar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
        <div className="flex-1 min-h-screen text-neutral-300 p-4 md:p-8 lg:px-10">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
