import React, { useState, useRef } from "react";
// import logo from "./logo.svg";
import "./AppTodo.css";
import TodoHeader from "./todo/TodoHeader";
import TodoContents from "./todo/TodoContents";
import TodoFooter from "./todo/TodoFooter";
import TodoList from "./todo/TodoList";
import TodoStatus from "./todo/TodoStatus";

function AppTodo() {
  const [todoArray, setTodoArray] = useState([
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
  ])

  const [inputText, setInputText] = useState({
    todo : '',
  })

  const { todo } = inputText;

  const nextIndex = useRef(todoArray.length + 1);

  const updateTodo = (e) => {
    const {name, value} = e.target
    setInputText({
      ...inputText,
      [name] : value
    })
  }

  const createTodo = () => {
    const content = {
      id : nextIndex.current,
      todo,
    }

    setTodoArray([
      ...todoArray,
      content
    ])

    setInputText({
      todo : '',
    })
    nextIndex.current++;
  }

  const removeTodo = (id) => {
    setTodoArray(todoArray.filter((todo) => {
      return todo.id !== id
    }))
  }
  return (
    <>
      <TodoHeader updateTodo={updateTodo} createTodo={createTodo} todo={todo}/>
      <TodoContents>
        <TodoList array={todoArray} removeTodo={removeTodo}/>
        <TodoStatus length={todoArray.length}/>
      </TodoContents>
      <TodoFooter />
    </>
  );
}

export default AppTodo;
