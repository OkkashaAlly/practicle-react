import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

const Textarea = ({ label, name, placeholder }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className={"capitalize"}>
        {label}:
      </label>
      <Field
        as="textarea"
        className="p-3 border border-black"
        name={name}
        placeholder={placeholder}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Textarea;
