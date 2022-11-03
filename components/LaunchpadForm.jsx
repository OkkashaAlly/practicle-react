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

import { FormikControl, Button, InputNote } from "./";

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
    presaleRate: "",
    minimumBuy: "",
    maximum: "",
    whitelist: "disabled",
    router: "disabled",
    liquidityPercent: "",
    refundType: "refund",
    listingRate: "",
    startDate: null,
    endDate: null,
    liquidityLockup: "",
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
    tokenAddress: Yup.string().required("Required"),
    tokenCurrency: Yup.string().required("Required"),
    feeOptions: Yup.string().required("Required"),
    hardcapTokens: Yup.string().required("Required"),
    softcapTokens: Yup.string().required("Required"),
    presaleRate: Yup.string().required("Required"),
    minimumBuy: Yup.string().required("Required"),
    maximum: Yup.string().required("Required"),
    whitelist: Yup.string().required("Required"),
    router: Yup.string().required("Required"),
    liquidityPercent: Yup.string().required("Required"),
    refundType: Yup.string().required("Required"),
    listingRate: Yup.string().required("Required"),
    liquidityLockup: Yup.string().required("Required"),
    startDate: Yup.date().required("Required").nullable(),
    endDate: Yup.date().required("Required").nullable(),
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

    alert("Successfully created fairlaunch launchpad");
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
  const startDate = JSON.parse(JSON.stringify(formValues[14][1]));
  const endDate = JSON.parse(JSON.stringify(formValues[15][1]));

  const part1 = formValues.slice(0, 14);
  const part2 = formValues.slice(16, -1);

  const newValues = [
    ...part1,
    ...part2,
    ["startdate", startDate],
    ["endDate", endDate],
  ];

  // console.log(formValues);

  return (
    <div className="">
      {newValues.map((value, i) => (
        <div
          key={i}
          className="flex gap-4 justify-between py-2 border-b-[0.2px] border-neutral-700"
        >
          <span className="capitalize">{value[0]}</span>
          <span className="text-pink break-all">{value[1]}</span>
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
        <div className="flex-1 flex flex-col gap-3">
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
      {/* Input  */}
      <FormikControl
        control={"input"}
        label={"Presale rate"}
        type={"number"}
        name={"presaleRate"}
        placeholder={"Ex: 0"}
      />

      <InputNote
        note={`If I spend 1 BNB how many tokens will I receive?`}
        styles={"mt-0"}
      />

      {/* Radio  */}
      <FormikControl
        control={"radio"}
        label={"Whitelist"}
        name={"whitelist"}
        options={whitelistOptions}
      />

      {/* soft & hard cap  */}
      <div className="flex flex-col md:flex-row gap-4">
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

      {/* min and max buy */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Input  */}
        <div className="flex-1 flex flex-col gap-3">
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

      {/* router and liquid */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          {/* router  */}
          <FormikControl
            control={"select"}
            label={"Router"}
            name={"router"}
            options={routerOptions}
          />
        </div>

        <div className="flex-1 flex flex-col gap-3">
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
      <div className="flex flex-col md:flex-row gap-4">
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
            label={"listing rate"}
            type={"number"}
            name={"listingRate"}
            placeholder={"Ex: 0"}
          />
        </div>
      </div>

      {/* Select start time & end time (UTC)* */}
      <div className="flex flex-col md:flex-row  gap-4">
        <div className="flex-1">
          <FormikControl
            control={"date"}
            label={"Start time (UTC)"}
            name={"startDate"}
          />
        </div>

        <div className="flex-1">
          <FormikControl
            control={"date"}
            label={"End time (UTC)"}
            name={"endDate"}
          />
        </div>
      </div>

      {/* locktime  */}
      <FormikControl
        control={"input"}
        label={"Liquidity lockup (minutes)"}
        type={"number"}
        name={"liquidityLockup"}
        placeholder={"Ex: 0"}
      />
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
