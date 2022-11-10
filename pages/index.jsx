import CountUp from "react-countup";

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
        <p className="font-semibold text-center mb-6">Count Up</p>
        <div className="">
          <h1>
            <CountUp end={1000} />
          </h1>
          <h1>
            <CountUp end={1000} duration={10} />
          </h1>
          <h1>
            <CountUp start={50} end={1000} duration={10} />
          </h1>
          <h1>
            <CountUp prefix="$" decimals={2} start={50} end={1000} />
          </h1>
          <h1>
            <CountUp suffix="USD" decimals={2} start={50} end={1000} />
          </h1>
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
