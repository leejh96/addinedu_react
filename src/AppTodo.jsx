import React, { useState, useRef, useMemo } from "react";
// import logo from "./logo.svg";
import "./AppTodo.css";
import TodoHeader from "./todo/TodoHeader";
import TodoContents from "./todo/TodoContents";
import TodoFooter from "./todo/TodoFooter";
import TodoList from "./todo/TodoList";
import TodoStatus from "./todo/TodoStatus";

const countArray = (todoArray) => {
  return(
    todoArray.filter((item) => !item.checked).length
  )
};

function AppTodo() {
  
  const [todoArray, setTodoArray] = useState([
    {
      id: 1,
      checked :false,
      todo: '설거지 하기',
      hide : false

    },
    {
      id: 2,
      checked :false,
      todo: '빨래 하기',
      hide : false
    },
    {
      id: 3,
      checked :false,
      todo: '공부 하기',
      hide : false
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
      checked : false,
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

  const updateCheck = (id) => {
    setTodoArray(
      todoArray.map((item) => item.id === id ? { ...item, checked : !item.checked } : item)
    )
  }

  const item = {
    showAll : () => {
      setTodoArray(
        todoArray.map(item => ({...item, hide : false}))
      )
    },

    showUnChecked : () => {
      setTodoArray(
        todoArray.map(item => item.checked === false ? {...item, hide : false} : { ...item, hide : true })
      )
    },

    showChecked : () => {
      setTodoArray(
        todoArray.map(item => item.checked === true ? {...item, hide : false} : { ...item, hide : true })
      )
    },

    removeChecked : () => {
      setTodoArray(todoArray.filter((todo) => {
        return todo.checked === false
      }))
    }
  }

  const count = useMemo(() => countArray(todoArray), [todoArray])
  
  return (
    <>
      <TodoHeader updateTodo={updateTodo} createTodo={createTodo} todo={todo}/>
      <TodoContents>
        <TodoList array={todoArray} removeTodo={removeTodo} updateCheck={updateCheck}/>
        <TodoStatus length={count} item={item}/>
      </TodoContents>
      <TodoFooter />
    </>
  );
}

export default AppTodo;
