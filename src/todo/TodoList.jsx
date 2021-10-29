import React from "react";
import item from "./todoitem.module.css";

function TodoItem({ todo, removeTodo }) {
  return (
    <li className={item.item}>
      <input type="checkbox" className={item["item-check"]} />
      <div className={item["item-text"]}>{todo.todo}</div>
      <button type="button" className={item["item-del"]} onClick={() => removeTodo(todo.id)}>
        <img src="add_button.svg" alt="" className={item["item-image"]} />
      </button>
    </li>
  );
}

function TodoList({ array, removeTodo }) {
  return (
    <section className="section">
      <ul className="todo-list">
        {
          array.map((todo) => {
            return <TodoItem todo={todo} key={todo.id} removeTodo={removeTodo}/>
          })
        }
      </ul>
    </section>
  );
}

export default TodoList;
