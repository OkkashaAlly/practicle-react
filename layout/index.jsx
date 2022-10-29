import { Navbar, SideNav } from "@/components/common/nav";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <div className="bg-ban w-full min-h-screen">
      <Navbar />
      <div className="w-full flex">
        <SideBar />
        <div className="flex-1 bg-green-800 min-h-screen">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
