import React from "react";
import Button from "../components/shared/Button";

const me = () => {
  return (
    <div className="bg-tan rounded-lg p-6 px-8">
      <div className="mb-4">
        <p>
          Connected as:{" "}
          <span className="font-semibold">
            0x87488094CD0F9332f2f80d2e0Bd2af1B3971a35d
          </span>
        </p>
        <p className="text-pink text-lg">0.001322 BNB</p>
      </div>

      <div className="">
        <Button action={_ => {}} styles='secondary' text={'logout'} />
      </div>
    </div>
  );
};

export default me;
