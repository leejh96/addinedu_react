import React from "react";
import item from "./todoitem.module.css";

function TodoItem() {
  return (
    <li className={item.item}>
      <input type="checkbox" className={item["item-check"]} />
      <div className={item["item-text"]}>할일 todo</div>
      <button type="button" className={item["item-del"]}>
        <img src="add_button.svg" alt="" className={item["item-image"]} />
      </button>
    </li>
  );
}

export default TodoItem;
