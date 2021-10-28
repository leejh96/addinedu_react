import React from "react";
// import logo from "./logo.svg";
import "./AppTodo.css";
import TodoHeader from "./todo/TodoHeader";
import TodoContents from "./todo/TodoContents";
import TodoFooter from "./todo/TodoFooter";
import TodoList from "./todo/TodoList";
import TodoItem from "./todo/TodoItem";
import TodoStatus from "./todo/TodoStatus";
function AppTodo() {
  return (
    <>
      <TodoHeader />
      <TodoContents>
        <TodoList>
          <TodoItem />
        </TodoList>
        <TodoStatus />
      </TodoContents>
      <TodoFooter />
    </>
  );
}

export default AppTodo;
