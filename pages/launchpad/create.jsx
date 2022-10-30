import React from "react";
import LaunchpadForm from "../../components/LaunchpadForm";

const StepItem = ({ title, subtitle, number }) => (
  <div className="flex w-full">
    <div className="flex gap-2">
      <p className="h-6 w-6 flex items-center justify-center  bg-rose-400 text-slate-800 rounded-full">
        {number}
      </p>
      <div className="">
        <div className="flex-1 flex gap-3 items-center">
          <h6>{title}</h6>{" "}
          <span className="h-[0.5px]  block bg-neutral-300 flex-1" />
        </div>
        <p className="w-[80%] text-neutral-500">{subtitle}</p>
      </div>
    </div>
  </div>
);

const create = () => {
  return (
    <div>
      {/* steps  */}
      {/* <div className="flex mt-3 gap-4">
        <StepItem
          number={1}
          title={"Verify Token"}
          subtitle={"Enter the token address and verify"}
        />
        <StepItem
          number={1}
          title={"Subscription"}
          subtitle={
            "Enter the subscription pool information that you want to raise, that should be enter all details about your presale"
          }
        />
        <StepItem
          number={3}
          title={"Add Additional Info"}
          subtitle={"Let people know who you are"}
        />
        <StepItem
          number={4}
          title={"Finish"}
          subtitle={"Review your information"}
        />
      </div> */}

      {/* form  */}
      <LaunchpadForm />
    </div>
  );
};

export default create;
