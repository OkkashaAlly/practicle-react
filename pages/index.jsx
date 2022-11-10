import { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

// =========================
// HOME PAGE COMPONENT =====
// =========================
const Home = () => {
  const [number, setNumber] = useState("");
  const [cvc, setCvc] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focus, setFocus] = useState("");

  return (
    <div
      id="root"
      className="flex flex-col p-4 gap-14 justify-center min-h-screen w-screen items-center"
    >
      <h1 className="text-4xl font-bold">Practicle React</h1>

      <div className="text-center">
        <p>React credit cards</p>
        <div className="">
          <Cards
            number={number}
            name={name}
            cvc={cvc}
            expiry={expiry}
            focused={focus}
          />
          <form>
            <Input
              type={"tel"}
              name={"number"}
              placeholder="phone number"
              value={number}
              action={e => setNumber(e.target.value)}
              focus={e => setFocus(e.target.name)}
            />
            <Input
              type={"text"}
              name={"name"}
              placeholder="enter name"
              value={name}
              action={e => setName(e.target.value)}
              focus={e => setFocus(e.target.name)}
            />
            <Input
              type={"number"}
              name={"cvc"}
              placeholder="enter cvc"
              value={cvc}
              action={e => setCvc(e.target.value)}
              focus={e => setFocus(e.target.name)}
            />
            <Input
              type={"number"}
              name={"expiry"}
              placeholder="enter expiry"
              value={expiry}
              action={e => setExpiry(e.target.value)}
              focus={e => setFocus(e.target.name)}
            />
          </form>
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
