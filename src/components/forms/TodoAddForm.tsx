import React, { ChangeEvent, FormEvent, useState } from "react";
import { Todo } from "../lists/TodoList";

type Props = {
  handleAddTodo: (todo: Todo) => void;
};

export default function TodoAddForm({ handleAddTodo }: Props) {
  const [addText, setAddText] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // console.log(addText.replaceAll(" ", ""));
    handleAddTodo({
      text: addText.replaceAll(" ", ""),
      status: "active",
    });

    setAddText("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddText(() => e.target.value);
  };

  const disabledBtn = () => {
    if (addText === "" || addText.replaceAll(" ", "") === "") return true;
    return false;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="AddTodo"
        placeholder="Add Todo"
        value={addText}
        onChange={handleChange}
      />
      <button disabled={disabledBtn()}>Add</button>
    </form>
  );
}
