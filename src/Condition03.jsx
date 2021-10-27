import React from "react";
import Props01 from "./Props01";
import Props02 from "./Props02";

function Condition03() {
  let isLoggedin = true;
  return (
    <>
      {isLoggedin ? (
        <Props01 name="lee" />
      ) : (
        <Props02 name="lee" address="Incheon" />
      )}
    </>
  );
}

export default Condition03;
