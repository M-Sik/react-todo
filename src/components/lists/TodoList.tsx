import React, { ChangeEvent, useState } from "react";
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

  const handleDelete = (text: string) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.text !== text));
  };

  const handleChangeCheckBox = (
    e: ChangeEvent<HTMLInputElement>,
    text: string
  ) => {
    const status = e.target.checked ? "completed" : "active";
    console.log(status);
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.text === text ? { ...prevTodo, status } : prevTodo
      )
    );
  };

  return (
    <section>
      <ul>
        {todos.map(({ text, status }, index) => (
          <li key={`${text}`}>
            <input
              type="checkbox"
              id="checkbox"
              checked={status === "completed"}
              onChange={(e) => handleChangeCheckBox(e, text)}
            />
            <label htmlFor="checkbox">{text}</label>
            <span>
              <button onClick={() => handleDelete(text)}>삭제</button>
            </span>
          </li>
        ))}
      </ul>
      <TodoAddForm handleAddTodo={handleAddTodo} />
    </section>
  );
}
