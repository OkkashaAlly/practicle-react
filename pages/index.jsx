import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// =========================
// HOME PAGE COMPONENT =====
// =========================
const Home = () => {
  const notify = () => {
    toast.success(<CustomNotification />, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 8000,
    });
    toast.info("Info notification", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: false,
    });
    toast.warning("Warning notification", {
      position: toast.POSITION.TOP_LEFT,
    });
    toast.error("Error notification", { position: toast.POSITION.TOP_LEFT });
  };

  return (
    <div className="flex flex-col p-4 gap-14 justify-center min-h-screen w-screen items-center">
      <h1 className="text-4xl font-bold">Practicle React</h1>

      <div className="">
        <p className="font-semibold text-center mb-6">Notifications</p>
        <div className="flex justify-center">
          <button className="bg-blue-500 rounded p-3" onClick={notify}>
            Nofity
          </button>
          <ToastContainer theme="dark" />
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
