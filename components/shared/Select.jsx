import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

const Select = ({ label, name, options }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className={"capitalize mb-1"}>
        {label}:
      </label>
      <Field
        as="select"
        className="p-2 bg-neutral-700 border border-neutral-300 rounded focus:outline-rose-500"
        name={name}
      >
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.key}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Select;
