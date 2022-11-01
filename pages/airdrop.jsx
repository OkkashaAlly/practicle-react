import { SearchList } from "../components";

import { CommonContent } from "./index";

const airdrops = () => {
  return (
    <div>
      <CommonContent title={"Current Airdrops"} />

      <SearchList />
    </div>
  );
};

export default airdrops;
