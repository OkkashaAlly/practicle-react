import LaunchpadForm from "../../components/LaunchpadForm";
import FormSteps from "../../components/shared/FormSteps";

const create = () => {
  const step2 = {
    title: "DeFi Launchpad Info",
    sub: "Enter the launchpad information that you want to raise , that should be enter all details about your presale",
  };

  return (
    <div>
      {/* form  */}
      <FormSteps step2={step2} />
      <LaunchpadForm />
    </div>
  );
};

export default create;
