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
      {/* form  */}
      <LaunchpadForm />
    </div>
  );
};

export default create;
