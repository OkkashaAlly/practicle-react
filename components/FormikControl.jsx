import { Input, Textarea, Select, RadioButtons } from "./";
import DatePicker from "./shared/DatePicker";

// console.log(<DatePicker />);
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

    case "date":
      return <DatePicker {...rest} />;
      

    case "checkbox":
      break;

    default:
      return null;
  }
};

// EXPORT ====================
export default FormikControl;
