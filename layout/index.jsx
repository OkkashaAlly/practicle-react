import { Navbar, SideNav } from "@/components/common/nav";

const Layout = ({ children }) => {
  return (
    <div className="bg-ban w-full h-screen">
      <Navbar />
      <span className="w-full flex flex-row justify-center items-center">
        <SideNav />
        <span>{children}</span>
      </span>
    </div>
  );
};

export default Layout;
