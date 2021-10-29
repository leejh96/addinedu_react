import React from "react";
import header from "./todoheader.module.css";
function TodoHeader({ createTodo, updateTodo, todo}) {
  return (
    <header className={header.header}>
      <div className={header.section}>
        <h1 className={header.logo}>TODO APP</h1>
        <div className={header.form}>
          <button type="button" className={header["form-btn"]} onClick={createTodo}>
            <img src="add_button.svg" alt="" className={header["form-image"]} />
          </button>
          <input
            type="text"
            className={header["form-text"]}
            placeholder="할 일을 입력하세요."
            name='todo'
            onChange={updateTodo}
            value={todo}
          />
        </div>
      </div>
    </header>
  );
}

export default TodoHeader;
