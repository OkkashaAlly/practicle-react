import { Navbar, SideNav } from "@/components/common/nav";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <div className="bg-ban w-full min-h-screen">
      <Navbar />
      <div className="w-full flex">
        <SideBar />
        <div className="flex-1 min-h-screen text-neutral-300">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
