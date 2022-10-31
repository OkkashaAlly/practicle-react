import { useState } from "react";

import LaunchpadForm from "../../components/LaunchpadForm";
import FormSteps from "../../components/shared/FormSteps";

const create = () => {
  const [page, setPage] = useState(1);

  const step2 = {
    title: "DeFi Launchpad Info",
    sub: "Enter the launchpad information that you want to raise , that should be enter all details about your presale",
  };

  return (
    <div>
      {/* form  */}
      <FormSteps step2={step2} active={page} />
      <LaunchpadForm page={page} setPage={setPage} />
    </div>
  );
};

export default create;
