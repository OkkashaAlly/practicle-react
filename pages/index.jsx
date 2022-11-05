import { useState, useRef } from "react";
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

  const downloadCode = () => {
    const canvas = document.getElementById("qrcode");

    if (canvas) {
      const pngUrl = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      let downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = `qrcode.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  return (
    <div className="flex p-4 justify-center min-h-screen w-screen items-center bg-neutral-700">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 bg-white p-4 rounded-lg"
      >
        <h1 className="text-2xl font-semibold">QR Code Generator</h1>
        <p className="text-neutral-600">
          Please paste / enter a URL to create QR Code -- <span className="text-blackm font-semibold">and Download below</span>
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
        <div
          className={`${
            showQRCode && inputValue !== ""
              ? "h-fit opacity-100 flex"
              : "h-0 opacity-0 hidden"
          } flex items-center duration-300 flex-col`}
        >
          <p>Scan Now</p>
          <QRCode id="qrcode" value={inputValue} size={250} />
          <button
            className="p-3 bg-neutral-500 text-neutral-200 rounded mt-2"
            type="button"
            onClick={() => downloadCode()}
          >
            Download Code
          </button>
        </div>
      </form>
    </div>
  );
};
// =======================
// EXTENDED COMPONENTS ===

//
// EXPORT =========
export default Home;
