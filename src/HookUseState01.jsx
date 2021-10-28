import React, { useState } from "react";

function HookUseState01() {
  const [number, setNumber] = useState(0);
  const add = () => {
    setNumber(number + 1);
  };
  const sub = () => {
    setNumber(number - 1);
  };
  return (
    <>
      <div>{number}</div>
      <button type="button" onClick={add}>
        +
      </button>
      <button type="button" onClick={sub}>
        -
      </button>
    </>
  );
}

export default HookUseState01;
