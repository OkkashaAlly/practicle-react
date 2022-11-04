import { useState } from "react";

// =========================
// HOME PAGE COMPONENT =====
// =========================
const Home = () => {
  const [inputValue, setInputValue] = useState("");

  console.log(inputValue);

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="flex px-4 justify-center h-screen w-screen items-center bg-neutral-700">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 bg-white p-4 rounded-lg"
      >
        <h1 className="text-2xl font-semibold">QR Code Generator</h1>
        <p className="text-neutral-600">
          Please paste / enter a URL to create QR Code
        </p>
        <input
          className="rounded p-2 border border-blue-500"
          type="text"
          placeholder="Enter a URL"
          onChange={e => setInputValue(e.target.value)}
        />
        <button type="submit" className="p-3 rounded bg-blue-500 text-white">
          Generate QR Code now
        </button>

        {/* QR Code */}
        <div className=""></div>
      </form>
    </div>
  );
};
// =======================
// EXTENDED COMPONENTS ===

//
// EXPORT =========
export default Home;
