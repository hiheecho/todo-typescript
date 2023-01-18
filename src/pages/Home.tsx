import React, { useState } from "react";
import Header from "../components/Header";
import TodolistContainer from "../components/TodolistContainer";
import { v4 as uuidv4 } from "uuid";
import InputTodo from "../components/InputTodo";

export interface TodoContent {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
}

function Home(): React.ReactElement {
  const initialState = [
    {
      id: uuidv4(),
      title: "카페가기",
      content: "아메리카노 사오기",
      isDone: true,
    },
    {
      id: uuidv4(),
      title: "공부하기",
      content: "타입스크립트 공부하기",
      isDone: false,
    },
    {
      id: uuidv4(),
      title: "복습하기",
      content: "리액트 복습하기",
      isDone: false,
    },
  ];
  const [todos, setTodos] = useState<TodoContent[]>(initialState);

  return (
    <div>
      <Header />
      <InputTodo setTodos={setTodos} />
      <TodolistContainer todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default Home;
