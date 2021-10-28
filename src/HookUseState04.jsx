import React, { useState } from "react";

function HookUseState04() {
  const [InputObject, setInputObject] = useState({
    carname: "",
    color: "",
  });
  const { carname, color } = InputObject;
  const onChangeValue = (e) => {
    const { name, value } = e.target;

    setInputObject({
      ...InputObject,
      // 단순 키값으로 갖는게 아닌 변수 값을 키값으로 주고싶을 때 []를 사용
      [name]: value,
    });
  };
  const onClickReset = (e) => {
    setInputObject({
      carname: "",
      color: "",
    });
  };
  return (
    <>
      <input
        type="text"
        name="carname"
        onChange={onChangeValue}
        value={carname}
      />
      <input type="text" name="color" onChange={onChangeValue} value={color} />
      <button type="button" onClick={onClickReset}>
        reset
      </button>
      <div>
        <span>자동차 이름(색) : </span>
        <span>
          {carname}({color})
        </span>
      </div>
    </>
  );
}

export default HookUseState04;
