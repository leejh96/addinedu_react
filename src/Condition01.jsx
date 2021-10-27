import React from "react";
import Hello01 from "./Hello01";
import Hello02 from "./Hello02";

function Condition01(props) {
  let isLoggedin = false;

  if (isLoggedin) {
    return <Hello01 />;
  }
  return <Hello02 />;
}

export default Condition01;
