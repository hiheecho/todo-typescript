import React from "react";
import { TodoContent } from "../pages/Home";

import TodoList from "./TodoList";
type TodoProps = {
  todos: TodoContent;
  setTodos: any;
  isActive: boolean;
};

function TodolistContainer({ todos }: TodoProps, { setTodos }: any) {
  return (
    <div>
      <TodoList isActive={true} todos={todos} setTodos={setTodos} />
      <TodoList isActive={false} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default TodolistContainer;
