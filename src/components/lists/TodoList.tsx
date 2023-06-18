import React, { ChangeEvent, useState } from "react";
import TodoAddForm from "../forms/TodoAddForm";
import Styles from "./TodoList.module.css";

export type Todo = {
  text: string;
  status: "all" | "completed" | "active";
};

type Props = {
  filter: "all" | "completed" | "active";
};

const filterd = (todos: Todo[], filter: "all" | "completed" | "active") => {
  if (filter === "all") return todos;
  return todos.filter((todo) => todo.status === filter);
};

export default function TodoList({ filter }: Props) {
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
    <section className={Styles["container"]}>
      <ul className={Styles["wrap-todo-items"]}>
        {filterd(todos, filter).map(({ text, status }) => (
          <li key={`${text}`} className={Styles["todo-item"]}>
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
