import { useIdleTimer } from "react-idle-timer";

// =========================
// HOME PAGE COMPONENT =====
// =========================
const Home = () => {
  const onIdle = () => {
    console.log("User is  idle");
  };

  // const { isIdle } = useIdleTimer({ onIdle, timeout: 3000 });
  useIdleTimer({ onIdle, timeout: 3000 });

  return (
    <div
      id="root"
      className="flex flex-col p-4 gap-14 justify-center min-h-screen w-screen items-center"
    >
      <h1 className="text-4xl font-bold">Practicle React</h1>

      <div className="">
        <p className="font-semibold text-center mb-6">Idle timer (timeout)</p>
        {/* <div className="">{isIdle ? "User is idle" : "User is active"}</div> */}
      </div>
    </div>
  );
};
// =======================
// EXTENDED COMPONENTS ===
const CustomNotification = () => <p>Something went wrong</p>;

// EXPORT =========
export default Home;
