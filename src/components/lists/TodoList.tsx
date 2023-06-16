import React, { useState } from "react";
import TodoAddForm from "../forms/TodoAddForm";

export type Todo = {
  text: string;
  status: string;
};

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { text: "장보기", status: "active" },
    { text: "공부하기", status: "active" },
  ]);

  const handleAddTodo = (todo: Todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  return (
    <section>
      <ul>
        {todos.map(({ text, status }, index) => (
          <li key={`${index}${text}`}>{text}</li>
        ))}
      </ul>
      <TodoAddForm handleAddTodo={handleAddTodo} />
    </section>
  );
}
