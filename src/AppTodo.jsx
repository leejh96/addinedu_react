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

  const todoArray = [
    {
      id: 1,
      todo: '설거지 하기'
    },
    {
      id: 2,
      todo: '빨래 하기'
    },
    {
      id: 3,
      todo: '공부 하기'
    },
  ];
  
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
