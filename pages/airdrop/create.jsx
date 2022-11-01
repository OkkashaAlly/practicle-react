import { useState } from "react";

import { LaunchpadForm, } from "../../components/";

// ==========================
// CREATE PAGE COMPONENT ====
// ==========================
const create = () => {
  const [page, setPage] = useState(1);

  

  // ================
  // RETURN =========
  return (
    <div>
      {/* form  */}
      
      <LaunchpadForm page={page} setPage={setPage} />
    </div>
  );
};

// EXPORT ===========
export default create;
