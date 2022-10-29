import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

// ================================
// FORMIK CONTAINER COMPONENT =====
// ================================
const LaunchpadForm = () => {
  const feeOptions = [
    {
      key: "5%",
      value: "5%",
    },
    {
      key: "2%",
      value: "2%",
    },
  ];

  const currencyOptions = [
    {
      key: "BNB",
      value: "bnb",
    },
    {
      key: "BUSD",
      value: "busd",
    },
    {
      key: "USDT",
      value: "usdt",
    },
    {
      key: "USDC",
      value: "usdc",
    },
  ];

  const initialValues = {
    tokenAddress: "",
    tokenCurrency: "bnb",
    feeOptions: "5%",
  };
  const validationSchema = Yup.object({
    tokenAddress: Yup.string().required("Required"),
    tokenCurrency: Yup.string().required("Required"),
    feeOptions: Yup.string().required("Required"),
  });

  const handleSubmit = (values, submitProps) => {
    console.log("Form values: ", values);
    submitProps.setSubmitting(false);
    submitProps.resetForm();
  };

  /////////////////
  // RETURN =======
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {formik => (
        <Form className="p-4 bg-neutral-800 rounded-md flex flex-col gap-4">
          {/* Input  */}
          <FormikControl
            control={"input"}
            label={"Token Address"}
            type={"text"}
            name={"tokenAddress"}
            placeholder={"Ex: 0x000..."}
          />

          <InputNote note={"Pool creation fee: 1 BNB"} />

          {/* Radio  */}
          <FormikControl
            control={"radio"}
            label={"Currency"}
            name={"tokenCurrency"}
            options={currencyOptions}
          />

          <InputNote
            note={`Users will pay with ${formik.values.tokenCurrency} for your token`}
          />

          <FormikControl
            control={"radio"}
            label={"Fee Options"}
            name={"feeOptions"}
            options={feeOptions}
            dynamicRadio
            dynamicText={" raised only"}
          />

          <button
            className="w-40 font-bold py-3 px-4 bg-[#b13564] hover:bg-[#89244a] text-neutral-300 rounded-full capitalize text-lg"
            type="submit"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

const InputNote = ({ note }) => (
  <div className="-mt-3">
    <span className="text-blue-500 text-sm">{note}</span>
  </div>
);

// EXPORT ====================
export default LaunchpadForm;
