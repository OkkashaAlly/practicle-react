import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormikControl from "./FormikControl";
import Button from "./shared/Button";
import InputNote from "./shared/InputNote";

// ================================
// FORMIK CONTAINER COMPONENT =====
// ================================
const LaunchpadForm = ({ page, setPage }) => {
  const initialValues = {
    tokenAddress: "",
    tokenCurrency: "bnb",
    feeOptions: "5%",
    listingOptions: "autoListing",
    hardcapTokens: "",
    softcapTokens: "",
    hardcapTokensPerUser: "",
    subscriptionRate: "",
    listingRate: "",
    whitelist: "disabled",
    router: "disabled",
    liquidityPercent: "",
    refundType: "refund",
    liquidityLockTime: "",
  };

  const validationSchema = Yup.object({
    tokenAddress: Yup.string().required("Required"),
    tokenCurrency: Yup.string().required("Required"),
    feeOptions: Yup.string().required("Required"),
    hardcapTokens: Yup.string().required("Required"),
    softcapTokens: Yup.string().required("Required"),
    hardcapTokensPerUser: Yup.string().required("Required"),
    subscriptionRate: Yup.string().required("Required"),
    listingRate: Yup.string().required("Required"),
    whitelist: Yup.string().required("Required"),
    router: Yup.string().required("Required"),
    liquidityPercent: Yup.string().required("Required"),
    refundType: Yup.string().required("Required"),
    liquidityLockTime: Yup.string().required("Required"),
  });

  const handleSubmit = (values, submitProps) => {
    console.log("Form values: ", values);
    submitProps.setSubmitting(false);
    submitProps.resetForm();
    setPage(1);
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
          {page === 1 && <Step1 formik={formik} />}
          {page === 2 && <Step2 formik={formik} />}

          {/* buttons  */}
          <div className="flex gap-3">
            {page > 1 && (
              <Button
                text={"previous"}
                action={_ => setPage(prev => prev - 1)}
                styles="secondary"
              />
            )}
            {page !== 4 && (
              <Button text={"next"} action={_ => setPage(prev => prev + 1)} />
            )}

            {/* submit  */}
            {page === 4 && (
              <div className="">
                <Button type="submit" text={"submit"} />
              </div>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

const Step2 = ({ formik }) => {
  const whitelistOptions = [
    {
      key: "Disabled",
      value: "disabled",
    },
    {
      key: "Enabled",
      value: "enabled",
    },
  ];

  const refundTypeOptions = [
    {
      key: "Refund",
      value: "refund",
    },
    {
      key: "Burn",
      value: "burn",
    },
  ];

  const routerOptions = [
    {
      key: "Select Router",
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

  return (
    <>
      {/* Input  */}
      <FormikControl
        control={"input"}
        label={"Hardcap Tokens"}
        type={"number"}
        name={"hardcapTokens"}
        placeholder={"Ex: 1000"}
      />

      {/* Input  */}
      <FormikControl
        control={"input"}
        label={"Softcap Tokens"}
        type={"number"}
        name={"softcapTokens"}
        placeholder={"Ex: 1000"}
      />

      {/* Input  */}
      <FormikControl
        control={"input"}
        label={"Hardcap Tokens per user"}
        type={"number"}
        name={"hardcapTokensPerUser"}
        placeholder={"Ex: 1000"}
      />

      {/* Radio  */}
      <FormikControl
        control={"radio"}
        label={"Whitelist"}
        name={"whitelist"}
        options={whitelistOptions}
      />

      {/* sub and list rate */}
      <div className="flex flex-col md:flex-row gap-3">
        {/* Input  */}
        <div className="flex-1">
          <FormikControl
            control={"input"}
            label={"Subscription rate"}
            type={"number"}
            name={"subscriptionRate"}
            placeholder={"Ex: 1000"}
          />

          <InputNote
            note={`If I spend 1 BNB how many tokens will I receive?`}
            styles={"mt-0"}
          />
        </div>

        {/* Input  */}
        <FormikControl
          control={"input"}
          label={"Listing rate"}
          type={"number"}
          name={"listingRate"}
          placeholder={"Ex: 1000"}
        />
      </div>

      {/* router and liquid */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1">
          {/* router  */}
          <FormikControl
            control={"select"}
            label={"Router"}
            name={"router"}
            options={routerOptions}
          />
        </div>

        <div className="flex-1">
          {/* Input  */}
          <FormikControl
            control={"input"}
            label={"Liquidity Percent (%)"}
            type={"number"}
            name={"liquidityPercent"}
            placeholder={"Ex: 70"}
          />

          <InputNote
            note={`Enter the percentage of raised funds that should be allocated to Liquidity on (Min 51%, Max 100%)`}
            styles={"mt-0"}
          />
        </div>
      </div>

      {/* refund and locktime */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1">
          {/* refund  */}
          <FormikControl
            control={"select"}
            label={"Refund"}
            name={"refundType"}
            options={refundTypeOptions}
          />
        </div>

        <div className="flex-1">
          {/* Input  */}
          <FormikControl
            control={"input"}
            label={"Liquidity Lock Time (minutes)"}
            type={"number"}
            name={"liquidityLockTime"}
            placeholder={"Ex: 20"}
          />
        </div>
      </div>
    </>
  );
};

const Step1 = ({ formik }) => {
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

  const listingOptions = [
    {
      key: "Auto Listing",
      value: "autoListing",
    },
    {
      key: "Manual Listing",
      value: "manualListing",
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

  return (
    <>
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

      <FormikControl
        control={"radio"}
        label={"Listing Options"}
        name={"listingOptions"}
        options={listingOptions}
      />
    </>
  );
};

// EXPORT ====================
export default LaunchpadForm;
