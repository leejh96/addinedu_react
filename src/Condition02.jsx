import React from "react";
import Hello01 from "./Hello01";
import Hello02 from "./Hello02";

function Condition02() {
  let isLoggedin = true;

  // true && value => value
  // false && value => null
  return (
    <>
      {isLoggedin && <Hello01 />}
      {!isLoggedin && <Hello02 />}
    </>
  );
}

export default Condition02;
