import { useRouter } from "next/router";
import { useState } from "react";

import {
  RiGlobalLine,
  RiHeartLine,
  RiHeartFill,
  RiNotification4Fill,
  RiNotification4Line,
} from "react-icons/ri";

import { ButtonIcon } from "../../components";

const Address = () => {
  const router = useRouter();
  const { address } = router.query;

  const [liked, setLiked] = useState(false);
  const [notify, setNotify] = useState(false);

  return (
    <div className="flex gap-5 flex-col md:flex-row pt-4">
      {/* left  */}
      <div className="md:w-[70%]  bg-tan  p-6 rounded-lg">
        {/* top  */}
        <div className="flex justify-between">
          {/* name & logo  */}
          <div className="flex gap-4">
            {/* logo  */}
            <div className="">
              <span className="block h-14 w-14 bg-neutral-400 rounded-full" />
            </div>

            <div className="">
              <p className="capitalize font-semibold text-2xl">
                ERC20Token Presale
              </p>

              {/* icons  */}
              <div className="flex gap-3 mt-2">
                <RiGlobalLine className="h-6 w-6 text-pink" />
              </div>
            </div>
          </div>

          {/* tags  */}
          <div className="flex gap-2 items-center">
            <div className="flex gap-1 items-center">
              <ButtonIcon
                icon1={<RiHeartFill className="h-4 w-4 text-rose-500" />}
                icon2={<RiHeartLine className="h-4 w-4 text-neutral-500" />}
                value={liked}
                action={_ => setLiked(!liked)}
              />

              <ButtonIcon
                icon1={
                  <RiNotification4Fill className="h-4 w-4 text-rose-500" />
                }
                icon2={
                  <RiNotification4Line className="h-4 w-4 text-neutral-500" />
                }
                value={notify}
                action={_ => setNotify(!notify)}
              />
            </div>

            <div className="">
              <span className="capitalize font-semibold text-yellow-600 p-1 rounded-full bg-neutral-50 text-sm">
                upcoming
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="md:w-[30%]  bg-tan p-3 rounded-lg">statues</div>
    </div>
  );
};

export default Address;
