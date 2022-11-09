import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";

// =========================
// HOME PAGE COMPONENT =====
// =========================
const Home = () => {
  return (
    <div
      id="root"
      className="flex flex-col p-4 gap-14 justify-center min-h-screen w-screen items-center"
    >
      <h1 className="text-4xl font-bold">Practicle React</h1>

      <div className="">
        <p className="font-semibold text-center mb-6">Tooltip</p>
        <div className="flex justify-center">
          <Tooltip title="I am the tooltip from react-tippy" >
            <p className="bg-blue-500 rounded p-3">Hover to see what i have</p>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
// =======================
// EXTENDED COMPONENTS ===
const CustomNotification = () => <p>Something went wrong</p>;

// EXPORT =========
export default Home;
