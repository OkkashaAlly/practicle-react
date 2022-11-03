import { Input, Textarea, Select, RadioButtons, DatePicker } from "./";

// ================================
// FORMIK CONTROL COMPONENT =======
// ================================
const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;

    case "textarea":
      return <Textarea {...rest} />;

    case "select":
      return <Select {...rest} />;

    case "radio":
      return <RadioButtons {...rest} />;

    case "checkbox":
      break;
    case "date":
      <DatePicker {...rest} />;
      break;

    default:
      return null;
  }
};

// EXPORT ====================
export default FormikControl;
