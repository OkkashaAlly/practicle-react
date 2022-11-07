import { useState } from "react";
import Modal from "react-modal";

// =========================
// HOME PAGE COMPONENT =====
// =========================
const Home = () => {
  const [ModalIsOpen, setModalIsOpen] = useState(false);

  Modal.setAppElement("#root");

  return (
    <div
      id="root"
      className="flex flex-col p-4 gap-14 justify-center min-h-screen w-screen items-center"
    >
      <h1 className="text-4xl font-bold">Practicle React</h1>

      <div className="">
        <p className="font-semibold text-center mb-6">Notifications</p>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 rounded p-3"
            onClick={_ => setModalIsOpen(true)}
          >
            Open modal
          </button>

          <Modal
            isOpen={ModalIsOpen}
            onRequestClose={_ => setModalIsOpen(false)}
            contentLabel="Example Modal"
            style={{ content: { border: "3px solid red" } }}
          >
            <h1 className="text-3xl">Modal title</h1>
            <p>modal body</p>
            <button
              className="bg-blue-500 rounded p-3"
              onClick={_ => setModalIsOpen(false)}
            >
              close
            </button>
          </Modal>
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
