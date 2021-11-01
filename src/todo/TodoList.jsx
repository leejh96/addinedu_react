import React from "react";
import item from "./todoitem.module.css";

function TodoItem({ todo, removeTodo, updateCheck }) {
  return (
    <li className={`${item.item} ${todo.hide ? item.hide : ''}`}>
      <input type="checkbox" className={item["item-check"]} onChange={() => updateCheck(todo.id)} checked={todo.checked} />
      <div className={item["item-text"]}>{todo.todo}</div>
      <button type="button" className={item["item-del"]} onClick={() => removeTodo(todo.id)}>
        <img src="add_button.svg" alt="" className={item["item-image"]} />
      </button>
    </li>
  );
}

function TodoList({ array, removeTodo, updateCheck }) {
  return (
    <section className="section">
      <ul className="todo-list">
        {
          array.map((todo) => {
            return <TodoItem todo={todo} key={todo.id} removeTodo={removeTodo} updateCheck={updateCheck}/>
          })
        }
      </ul>
    </section>
  );
}

export default TodoList;
