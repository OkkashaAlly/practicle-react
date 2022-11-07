import { IconContext } from "react-icons";
import { RiHomeWifiLine, RiAtFill } from "react-icons/ri";

// =========================
// HOME PAGE COMPONENT =====
// =========================
const Home = () => {
  const iconsStyle = {
    color: "blue",
    size: "5rem",
  };

  return (
    <IconContext.Provider value={iconsStyle}>
      <div className="flex flex-col p-4 gap-14 justify-center min-h-screen w-screen items-center">
        <h1 className="text-4xl font-bold">Practicle React</h1>

        <div className="">
          <p className="font-semibold text-center mb-6">Icons</p>
          <div className="flex">
            {/* <RiHomeWifiLine color="#999" size="30px" /> */}
            {/* <RiHomeWifiLine color="red" size="30rem" /> */}
            <RiHomeWifiLine color="green" />
            <RiAtFill />
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};
// =======================
// EXTENDED COMPONENTS ===

// EXPORT =========
export default Home;
