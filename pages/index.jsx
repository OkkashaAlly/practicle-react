// import ReactPlayer from "react-player/youtube";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

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

      <div className="text-center">
        <p>React Video player </p>
        <div className="">
          <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
        </div>
      </div>
    </div>
  );
};
// =======================
// EXTENDED COMPONENTS ===

// EXPORT =========
export default Home;
