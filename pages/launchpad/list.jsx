import { SearchList } from "../../components/";

import { CommonContent } from "../index";

const list = () => {
  return (
    <div>
      <CommonContent title={"Current Presales"} />

      <SearchList />
    </div>
  );
};

export default list;
