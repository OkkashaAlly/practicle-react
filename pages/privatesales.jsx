import { SearchList } from "../components";

import { CommonContent } from "./index";

const privatesales = () => {
  return (
    <div>
      <CommonContent title={"Current Private Sales"} />

      <SearchList />
    </div>
  );
};

export default privatesales;
