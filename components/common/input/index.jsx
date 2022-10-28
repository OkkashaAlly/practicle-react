// React
import { useState, useEffect } from "react";

// Redux
import { getData } from "@/app/slice/inputs";
import { useDispatch, useSelector } from "react-redux";

// Icons
import { TbAlignCenter as Icon } from "react-icons/tb";

const Bid = ({ id, props, orMore }) => {
  const dispatch = useDispatch();
  const [style, setStyle] = useState({});

  const getValue = (e) => {
    const value = e.target.value;
    dispatch(getData({ id, value }));
  };

  //** Setting Styles */
  useEffect(() => {
    props.theme === "light"
      ? setStyle({ border: "black", bg: "white" })
      : props.theme === "dark"
      ? setStyle({ border: "green", bg: "transparent" })
      : props.theme === "green"
      ? setStyle({ border: "green", bg: "green" })
      : props.theme === "gray"
      ? setStyle({ border: "grey", bg: "grey" })
      : setStyle({ border: "green", bg: "transparent" });
  }, [props.theme]);

  var styling = `w-full bg-${style.bg} text-2xl p-2 text-slate-600 placeholder:text-2xl placeholder:text-slate-500 focus:outline-none`;

  return (
    <span
      className={`w-full border-2 border-${style.border} bg-${style.bg} flex flex-row justify-start items-center p-2`}
    >
      {props.icon && <Icon className="ml-2 text-slate-500" size={25} />}
      {props.textarea ? (
        <textarea
          className={`w-full neutra-book ${styling}`}
          placeholder={props.placeholder}
          style={{ resize: "none" }}
          onChange={getValue}
          cols="30"
          rows="6"
        ></textarea>
      ) : (
        <input
          className={`w-full reckless ${styling}`}
          placeholder={`${props.placeholder}  ${orMore ? "or more" : ""}`}
          onChange={getValue}
          type={props.type}
        />
      )}
    </span>
  );
};

export const Currentbid = ({ props }) => {
  return (
    <>
      <span className="flex flex-row justify-center items-end space-x-4 text-black">
        <h5 className="capitalize text-2xl neutra-demi font-light">
          current bid
        </h5>
        <Icon size={40} />
        <h5 className="reckless text-4xl text-black">{props.price}</h5>
      </span>
    </>
  );
};

export default Bid;
