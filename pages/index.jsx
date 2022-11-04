import { useState } from "react";
import { QRCode } from "react-qrcode-logo";

// =========================
// HOME PAGE COMPONENT =====
// =========================
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [showQRCode, setShowQRCode] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    if (inputValue === "") alert("Please enter a url");
    if (inputValue !== "") setShowQRCode(true);
  };

  const handleChange = e => {
    if (inputValue === "") setShowQRCode(false);
    setInputValue(e.target.value);
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
          placeholder="Eg: www.example.com"
          onChange={handleChange}
        />
        <button type="submit" className="p-3 rounded bg-blue-500 text-white">
          Generate QR Code now
        </button>

        {/* QR Code */}
        {showQRCode && inputValue !== "" && (
          <div className="flex items-center flex-col">
            <p>Scan Now</p>
            <QRCode value={inputValue} size={250} />
          </div>
        )}
      </form>
    </div>
  );
};
// =======================
// EXTENDED COMPONENTS ===

//
// EXPORT =========
export default Home;
