import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = ({ label, name, ...rest }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className={"capitalize"}>
        {label}:
      </label>

      <Field className="p-3 border border-black" name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;

          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              showTimeSelect
              selected={value}
              onChange={val => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default DatePicker;