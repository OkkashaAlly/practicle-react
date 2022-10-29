import { useState } from "react";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormikControl from "./FormikControl";
import InputNote from "./shared/InputNote";

// ================================
// FORMIK CONTAINER COMPONENT =====
// ================================
const TokenForm = () => {
  const tokenTypeOptions = [
    {
      key: "Standard Token",
      value: "standard",
    },
    {
      key: "Liquidity Generator Token",
      value: "liquidity",
    },
    {
      key: "Baby Token",
      value: "baby",
    },
    {
      key: "Buyback Baby Token",
      value: "buyback",
    },
  ];

  const [tokenTypeSelected, setTokenTypeSelected] = useState("standard");

  const handleSubmit = (values, submitProps) => {
    console.log("Form values: ", values);
    submitProps.setSubmitting(false);
    submitProps.resetForm();
  };

  /////////////////
  // RETURN =======
  // switch ("bb") {
  //   case "liquidity":
  //     return <LiquidityControls handleSubmit={handleSubmit} />;

  //   default:
  //     return <StandardControls handleSubmit={handleSubmit} />;
  // }

  return (
    <div className="p-4 bg-neutral-800 rounded-md ">
      {/* selector  */}
      <div className="flex flex-col mb-4">
        <label htmlFor="" className={"capitalize mb-1"}>
          Token Type
        </label>
        <select
          className="p-2 bg-neutral-700 border border-neutral-300 rounded focus:outline-rose-500"
          name=""
          onChange={e => {
            setTokenTypeSelected(e.target.value);
          }}
        >
          {tokenTypeOptions.map(opt => (
            <option key={opt.value} value={opt.value}>
              {opt.key}
            </option>
          ))}
        </select>
      </div>

      <InputNote note={"0.2 BNB"} />

      {/* Form  */}
      <Forms type={tokenTypeSelected} handleSubmit={handleSubmit} />
    </div>
  );
};

//////////////////////
// EXTENDED COMPONENTS

const Forms = ({ type, handleSubmit }) => {
  switch (type) {
    case "liquidity":
      return <LiquidityControls handleSubmit={handleSubmit} />;

    default:
      return <StandardControls handleSubmit={handleSubmit} />;
  }
};

const StandardControls = ({ handleSubmit }) => {
  const initialValues = {
    tokenName: "",
    tokenSymbol: "",
    tokenDecimals: "",
    tokenTotalSupply: "",
  };

  const validationSchema = Yup.object({
    tokenName: Yup.string().required("Token name cannot be empty"),
    tokenSymbol: Yup.string().required("Required"),
    tokenTotalSupply: Yup.string().required("Required"),
    tokenDecimals: Yup.string().required("Required"),
  });

  /////////////////
  // RETURN =======
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {formik => (
        <Form className="mt-4 flex flex-col gap-4">
          <CommonControls />

          {/* Input  */}
          <FormikControl
            control={"input"}
            label={"Token Decimals"}
            type={"number"}
            name={"tokenDecimals"}
            placeholder={"Ex: 18"}
          />

          <button
            className="w-40 font-bold py-3 px-4 bg-[#b13564] hover:bg-[#89244a] text-neutral-300 rounded-full capitalize text-lg"
            type="submit"
          >
            create
          </button>
        </Form>
      )}
    </Formik>
  );
};

const LiquidityControls = ({ handleSubmit }) => {
  const routerOptions = [
    {
      key: "Select Router Exchange",
      value: "",
    },
    {
      key: "Pancakeswap",
      value: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
    },
    {
      key: "ApeSwap",
      value: "0xcF0feBd3f17CEf5b47b0cD257aCf6025c5BFf3b7",
    },
    {
      key: "MDex",
      value: "0xf400087A4c94c52C6540A325CB702DE3ee7CB37f",
    },
    {
      key: "BiSwap",
      value: "0x3a6d8cA21D1CF76F653A67577FA0D27453350dD8",
    },
    {
      key: "KnightSwap",
      value: "0x05E61E0cDcD2170a76F9568a110CEe3AFdD6c46f",
    },
  ];

  const initialValues = {
    tokenName: "",
    tokenSymbol: "",
    tokenTotalSupply: "",
    router: "",
    feeGenerateYield: "",
    feeGenerateLiquidity: "",
    charityAddress: "",
    charityPercent: "",
  };

  const validationSchema = Yup.object({
    tokenName: Yup.string().required("Token name cannot be empty"),
    tokenSymbol: Yup.string().required("Required"),
    tokenTotalSupply: Yup.string().required("Required"),
    router: Yup.string().required("Required"),
    feeGenerateYield: Yup.string().required("Required"),
    feeGenerateLiquidity: Yup.string().required("Required"),
  });

  /////////////////
  // RETURN =======
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {formik => (
        <Form className="mt-4 flex flex-col gap-4">
          <CommonControls />

          {/* Select  */}
          <FormikControl
            control={"select"}
            label={"Router"}
            name={"router"}
            options={routerOptions}
          />

          <div className="flex gap-3">
            {/* Input  */}
            <FormikControl
              control={"input"}
              label={"Transaction fee to generate yield (%)"}
              type={"number"}
              name={"feeGenerateYield"}
              placeholder={"Ex: 1"}
            />
            {/* Input  */}
            <FormikControl
              control={"input"}
              label={"Transaction fee to generate liquidity (%)"}
              type={"number"}
              name={"feeGenerateLiquidity"}
              placeholder={"Ex: 1"}
            />
          </div>
          
          <div className="flex gap-3">
            {/* Input  */}
            <FormikControl
              control={"input"}
              label={"Charity/Marketing address"}
              type={"text"}
              name={"charityAddress"}
              placeholder={"Ex: 0x000..."}
            />
            {/* Input  */}
            <FormikControl
              control={"input"}
              label={"Charity/Marketing percent (%)"}
              type={"text"}
              name={"charityPercent"}
              placeholder={"0 - 25"}
            />
          </div>

          <button
            className="w-40 font-bold py-3 px-4 bg-[#b13564] hover:bg-[#89244a] text-neutral-300 rounded-full capitalize text-lg"
            type="submit"
          >
            create
          </button>
        </Form>
      )}
    </Formik>
  );
};

const CommonControls = () => (
  <div className="flex gap-3">
    {/* Input  */}
    <FormikControl
      control={"input"}
      label={"Token Name"}
      type={"text"}
      name={"tokenName"}
      placeholder={"Ex: Kripte"}
    />
    {/* Input  */}
    <FormikControl
      control={"input"}
      label={"Token Symbol"}
      type={"text"}
      name={"tokenSymbol"}
      placeholder={"Ex: KPT"}
    />
    {/* Input  */}
    <FormikControl
      control={"input"}
      label={"Total supply"}
      type={"number"}
      name={"tokenTotalSupply"}
      placeholder={"Ex: 100,000,000"}
    />
  </div>
);

// EXPORT ====================
export default TokenForm;
