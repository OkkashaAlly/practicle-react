import React from "react";
import SearchList from "../../components/SearchList";

import { CommonContent } from "../index";

const list = () => {
  return (
    <div>
      <CommonContent title={"Current Presales"} />

      {/* search  */}
      {/* <div className="flex mt-4 gap-3">
        <div className="flex-1">
          <input type="text" className="w-full" />
        </div>

        <div className="flex gap-2">
          <select>
            <option value="apple">Apple</option>
          </select>
          <select>
            <option value="apple">Apple</option>
          </select>
        </div>
      </div> */}

      <SearchList />
    </div>
  );
};

export default list;
