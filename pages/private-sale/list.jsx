import { SearchList } from "../../components";

import { CommonContent } from "../index";

const list = () => {
  return (
    <div>
      <CommonContent title={"Current Private Sales"} />

      <SearchList />
    </div>
  );
};

export default list;
