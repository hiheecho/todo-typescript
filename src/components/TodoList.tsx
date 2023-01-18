import React from "react";
import { TodoContent } from "../pages/Home";
import Todo from "./Todo";

function Todolist({ isActive, todos, setTodos }) {
  return (
    <div>
      <h3>{isActive === true ? "Working" : "Done"}</h3>
      <div>
        {todos
          .filter((todo: TodoContent) => todo.isDone === !isActive)
          .map((list: TodoContent) => {
            return (
              <Todo
                key={list.id}
                list={list}
                setTodos={setTodos}
                isActive={isActive}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Todolist;
