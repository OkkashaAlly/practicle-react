import { useState } from "react";

import { FairlaunchForm, FormSteps } from "../../components/";

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

// ===============================
// FAIR LAUNCH PAGE COMPONENT ====
// ===============================
const fairlaunch = () => {
  const [page, setPage] = useState(1);

  const step2 = {
    title: "DeFi Launchpad Info",
    sub: "Enter the launchpad information that you want to raise , that should be enter all details about your presale",
  };

  return (
    <div>
      {/* form  */}
      <FormSteps step2={step2} active={page} />
      <FairlaunchForm page={page} setPage={setPage} />
    </div>
  );
};

// EXPORT ===========
export default fairlaunch;
