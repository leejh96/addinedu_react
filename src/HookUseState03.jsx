import React, { useState } from "react";

function HookUseState03() {
  //리렌더링에 관련되지 않는 변수는 굳이 useState에 넣을 필요는 없다
  let state = "";
  const [input, setInput] = useState("");
  const onChangeState = (e) => {
    state = e.target.value;
  };
  const onClickBtn = () => {
    setInput(state);
  };
  return (
    <>
      <div>
        <input type="text" onChange={onChangeState} />
        <button type="button" onClick={onClickBtn}>
          print
        </button>
        <div>{input}</div>
      </div>
    </>
  );
}

export default HookUseState03;
