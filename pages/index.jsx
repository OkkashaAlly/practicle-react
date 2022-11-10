import { useState } from "react";
import { SketchPicker } from "react-color";

// =========================
// HOME PAGE COMPONENT =====
// =========================

const Home = () => {
  const [colorSelected, setColorSelected] = useState("#fff");
  const [showColorPicker, setShowColorPicker] = useState(false);

  return (
    <div
      id="root"
      className="flex flex-col p-4 gap-14 justify-center min-h-screen w-screen items-center"
    >
      <h1 className="text-4xl font-bold">Practicle React</h1>

      <div className="text-center">
        <p>Color picker - you picked {colorSelected}</p>
        <div className="">
          <button
            onClick={_ => setShowColorPicker(!showColorPicker)}
            className="bg-blue-500 p-2 rounded"
          >
            Pick a color
          </button>
        </div>
        {showColorPicker && (
          <SketchPicker
            color={colorSelected}
            onChange={updatedColor => setColorSelected(updatedColor.hex)}
          />
        )}
      </div>
    </div>
  );
};
// =======================
// EXTENDED COMPONENTS ===
const CustomNotification = () => <p>Something went wrong</p>;

// EXPORT =========
export default Home;
