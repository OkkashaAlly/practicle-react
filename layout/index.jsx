import { useState } from "react";

import SideBar from "./SideBar";
import Header from "./Header";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="bg-ban w-full min-h-screen">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="w-full flex">
        <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex-1 min-h-screen text-neutral-300">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
