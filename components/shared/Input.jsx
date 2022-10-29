import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

const Input = ({ label, type, name, placeholder }) => {
  return (
    <div className="flex flex-1 flex-col">
      <label htmlFor={name} className={"capitalize mb-1"}>
        {label}:
      </label>
      <Field
        className="p-2 bg-neutral-700 border border-neutral-300 rounded focus:outline-rose-500"
        type={type}
        name={name}
        placeholder={placeholder}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;
