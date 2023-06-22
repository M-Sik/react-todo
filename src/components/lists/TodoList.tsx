import React, { ChangeEvent, useEffect, useState } from "react";
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
// 로컬스토리지에 todos의 값이 있다면 todos 리턴, 없다면 빈배열 리턴
function readTodosFromLocalStorage() {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}

export default function TodoList({ filter }: Props) {
  const [todos, setTodos] = useState<Todo[]>(() => readTodosFromLocalStorage());

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
  // 마운트시, todos변경시 로컬스토리지에 todos 키로 저장
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <section className={Styles["container"]}>
      <ul className={Styles["wrap-todo-items"]}>
        {filterd(todos, filter).map(({ text, status }) => (
          <li key={`${text}`} className={Styles["todo-item"]}>
            <input
              type="checkbox"
              id={`checkbox${text}`}
              checked={status === "completed"}
              onChange={(e) => handleChangeCheckBox(e, text)}
            />
            <label htmlFor={`checkbox${text}`}>{text}</label>
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
