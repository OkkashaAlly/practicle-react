import { Formik, Form } from "formik";
import * as Yup from "yup";

import {
  RiImageAddLine,
  RiGlobalLine,
  RiGithubLine,
  RiTelegramLine,
  RiFacebookCircleLine,
  RiTwitterLine,
  RiInstagramLine,
  RiDiscordLine,
  RiRedditLine,
} from "react-icons/ri";

import FormikControl from "./FormikControl";
import { Button, InputNote } from "./";

// ================================
// FORMIK CONTAINER COMPONENT =====
// ================================
const PrivateSaleForm = ({ page, setPage }) => {
  const initialValues = {
    title: "",
    tokenCurrency: "bnb",
    hardcapTokens: "",
    softcapTokens: "",
    whitelist: "disabled",
    minimumBuy: "",
    maximumBuy: "",
    firstFundReleaseForProject: "",
    fundVestingPeriodEachCycle: "",
    fundReleaseEachCycle: "",
    hardcapTokensPerUser: "",
    subscriptionRate: "",
    listingRate: "",
    router: "disabled",
    liquidityPercent: "",
    refundType: "refund",
    liquidityLockTime: "",
    logoURL: "",
    website: "",
    github: "",
    telegram: "",
    facebook: "",
    twitter: "",
    instagram: "",
    discord: "",
    reddit: "",
    description: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Required"),
    tokenCurrency: Yup.string().required("Required"),
    hardcapTokens: Yup.string().required("Required"),
    softcapTokens: Yup.string().required("Required"),
    whitelist: Yup.string().required("Required"),
    minimumBuy: Yup.string().required("Required"),
    maximumBuy: Yup.string().required("Required"),
    firstFundReleaseForProject: Yup.string().required("Required"),
    fundVestingPeriodEachCycle: Yup.string().required("Required"),
    fundReleaseEachCycle: Yup.string().required("Required"),
    hardcapTokensPerUser: Yup.string().required("Required"),
    subscriptionRate: Yup.string().required("Required"),
    router: Yup.string().required("Required"),
    liquidityPercent: Yup.string().required("Required"),
    refundType: Yup.string().required("Required"),
    liquidityLockTime: Yup.string().required("Required"),
    logoURL: Yup.string().required("Required"),
    website: Yup.string().required("Required"),
    // github: Yup.string().required("Required"),
    // telegram: Yup.string().required("Required"),
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
          {page === 3 && <Step3 formik={formik} />}
          {page === 4 && <Step4 formik={formik} />}

          {/* buttons  */}
          <div
            className={`flex gap-3 justify-center ${
              !(formik.dirty && formik.isValid) ? "flex-col sm:flex-row " : ""
            }`}
          >
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
              <div className={`flex items-center `}>
                {console.log(formik)}
                {!(formik.dirty && formik.isValid) ? (
                  <span className="text-red-500 font-bold text-center">
                    Please fill in all required fields/inputs to SUBMIT
                  </span>
                ) : (
                  <Button type="submit" text={"submit"} />
                )}
              </div>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

const Step4 = ({ formik }) => {
  const formValues = Object.entries(formik.values);

  return (
    <div className="">
      {formValues.map((value, i) => (
        <div key={i} className="flex justify-between">
          <span className="capitalize">{value[0]}</span>
          <span className="text-pink">{value[1]}</span>
        </div>
      ))}
    </div>
  );
};

const Step3 = ({ formik }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4">
        {/* loge  */}
        <div className="flex-1">
          <FormikControl
            control={"input"}
            label={"Logo URL"}
            type={"text"}
            name={"logoURL"}
            icon={<RiImageAddLine className="h-5 w-5" />}
          />

          <InputNote
            note={`URL must end with a supported image extension png, jpg, jpeg or gif.`}
            styles={"mt-0"}
          />
        </div>

        <div className="flex-1">
          {/* website  */}
          <FormikControl
            control={"input"}
            label={"Website"}
            type={"text"}
            name={"website"}
            icon={<RiGlobalLine className="h-5 w-5" />}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Facebook  */}
        <div className="flex-1">
          <FormikControl
            control={"input"}
            label={"Facebook"}
            type={"text"}
            name={"facebook"}
            icon={<RiFacebookCircleLine className="h-5 w-5" />}
          />
        </div>

        <div className="flex-1">
          {/* Twitter  */}
          <FormikControl
            control={"input"}
            label={"Twitter"}
            type={"text"}
            name={"twitter"}
            icon={<RiTwitterLine className="h-5 w-5" />}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Github  */}
        <div className="flex-1">
          <FormikControl
            control={"input"}
            label={"Github"}
            type={"text"}
            name={"github"}
            icon={<RiGithubLine className="h-5 w-5" />}
          />
        </div>

        <div className="flex-1">
          {/* website  */}
          <FormikControl
            control={"input"}
            label={"Telegram"}
            type={"text"}
            name={"telegram"}
            icon={<RiTelegramLine className="h-5 w-5" />}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Instagram  */}
        <div className="flex-1">
          <FormikControl
            control={"input"}
            label={"Instagram"}
            type={"text"}
            name={"instagram"}
            icon={<RiInstagramLine className="h-5 w-5" />}
          />
        </div>

        <div className="flex-1">
          {/* discord  */}
          <FormikControl
            control={"input"}
            label={"Discord"}
            type={"text"}
            name={"discord"}
            icon={<RiDiscordLine className="h-5 w-5" />}
          />
        </div>
      </div>

      {/* reddit  */}
      <FormikControl
        control={"input"}
        label={"Reddit"}
        type={"text"}
        name={"reddit"}
        icon={<RiRedditLine className="h-5 w-5" />}
      />

      {/* Description  */}
      <FormikControl
        control={"textarea"}
        label={"Description"}
        type={"text"}
        name={"description"}
      />
    </>
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
      <div className="flex gap-4 flex-col md:flex-row">
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
      </div>

      {/* Radio  */}
      <FormikControl
        control={"radio"}
        label={"Whitelist"}
        name={"whitelist"}
        options={whitelistOptions}
      />

      {/* sub and list rate */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Input  */}
        <div className="flex-1">
          <FormikControl
            control={"input"}
            label={"Minimum buy"}
            type={"number"}
            name={"minimumBuy"}
            placeholder={"Ex: 0"}
          />
        </div>

        {/* Input  */}
        <FormikControl
          control={"input"}
          label={"Maximum buy"}
          type={"number"}
          name={"maximumBuy"}
          placeholder={"Ex: 0"}
        />
      </div>

      {/* First Fund Release For Project (%)  */}
      <FormikControl
        control={"input"}
        label={"First Fund Release For Project (%)"}
        type={"number"}
        name={"firstFundReleaseForProject"}
        placeholder={"Ex: 70%"}
      />

      {/* Fund Vesting Period Each Cycle (minutes) */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          {/* Input  */}
          <FormikControl
            control={"input"}
            label={"Fund Vesting Period Each Cycle (minutes"}
            type={"number"}
            name={"fundVestingPeriodEachCycle"}
            placeholder={"Enter minutes"}
          />
        </div>

        <div className="flex-1">
          {/* Input  */}
          <FormikControl
            control={"input"}
            label={"Fund Release Each Cycle (%)"}
            type={"number"}
            name={"fundReleaseEachCycle"}
            placeholder={"Ex: 20%"}
          />
        </div>
      </div>
    </>
  );
};

const Step1 = ({ formik }) => {
  const currencyOptions = [
    {
      key: "BNB",
      value: "BNB",
    },
  ];

  return (
    <>
      {/* Input  */}
      <FormikControl
        control={"input"}
        label={"Title"}
        type={"text"}
        name={"title"}
        placeholder={"Ex: This is my private sale"}
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
    </>
  );
};

// EXPORT ====================
export default PrivateSaleForm;
