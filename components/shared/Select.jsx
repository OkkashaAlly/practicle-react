import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

const Select = ({ label, name, options }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className={"capitalize"}>
        {label}:
      </label>
      <Field as="select" className="p-3 border border-black" name={name}>
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
