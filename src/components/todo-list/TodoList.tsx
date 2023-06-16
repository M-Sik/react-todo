import { link } from "fs";
import React, { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: "123", text: "장보기", status: "active" },
    { id: "124", text: "공부하기", status: "active" },
  ]);

  return (
    <section>
      <ul>
        {todos.map(({ id, text, status }) => (
          <li key={id}>{text}</li>
        ))}
      </ul>
    </section>
  );
}
