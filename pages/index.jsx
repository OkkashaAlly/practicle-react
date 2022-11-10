import { useState } from "react";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// =========================
// HOME PAGE COMPONENT =====
// =========================
const Home = () => {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <div
      id="root"
      className="flex flex-col p-4 gap-14 justify-center min-h-screen w-screen items-center"
    >
      <h1 className="text-4xl font-bold">Practicle React</h1>

      <div className="text-center">
        <p>React Datepicker</p>
        <div className="">
          <Datepicker
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            className="p-3 border border-green-500"
          />
        </div>
      </div>
    </div>
  );
};
// =======================
// EXTENDED COMPONENTS ===
const Input = ({ type, name, placeholder, value, action, focus }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={action}
    onFocus={focus}
    className="p-3 border border-green-500"
  />
);

// EXPORT =========
export default Home;
