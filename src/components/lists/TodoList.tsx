import React, { useState } from "react";
import TodoAddForm from "../forms/TodoAddForm";

export type Todo = {
  id: string;
  text: string;
  status: string;
};

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "123", text: "장보기", status: "active" },
    { id: "124", text: "공부하기", status: "active" },
  ]);

  const handleAddTodo = (todo: Todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  return (
    <section>
      <ul>
        {todos.map(({ id, text, status }) => (
          <li key={id}>{text}</li>
        ))}
      </ul>
      <TodoAddForm handleAddTodo={handleAddTodo} />
    </section>
  );
}
