import React, { ChangeEvent, FormEvent, useState } from "react";

export default function TodoAddForm() {
  const [addText, setAddText] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(addText.replaceAll(" ", ""));
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
        onChange={handleChange}
      />
      <button disabled={disabledBtn()}>Add</button>
    </form>
  );
}
