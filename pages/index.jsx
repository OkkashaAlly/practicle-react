import { RiHomeWifiLine } from "react-icons/ri";

// =========================
// HOME PAGE COMPONENT =====
// =========================
const Home = () => {
  return (
    <div className="flex flex-col p-4 justify-center min-h-screen w-screen items-center">
      <h1 className="text-4xl font-bold">Practicle React</h1>

      <div className="">
        <p className="font-semibold">Icons</p>
        <div className="flex">
          {/* <RiHomeWifiLine color="#999" size="30px" /> */}
          {/* <RiHomeWifiLine color="red" size="30rem" /> */}
          <RiHomeWifiLine className="h-14 w-14 text-green-500" />
        </div>
      </div>
    </div>
  );
};
// =======================
// EXTENDED COMPONENTS ===

// EXPORT =========
export default Home;
