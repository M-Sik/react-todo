import React from "react";

type Props = {
  onUpdateFilter: (filterVal: "all" | "completed" | "active") => void;
};

export default function FilterHeader({ onUpdateFilter }: Props) {
  const handleUpdate = (filter: "all" | "completed" | "active") => {
    console.log(filter);
    onUpdateFilter(filter);
  };

  return (
    <header>
      <button onClick={() => handleUpdate("all")}>all</button>
      <button onClick={() => handleUpdate("active")}>active</button>
      <button onClick={() => handleUpdate("completed")}>completed</button>
    </header>
  );
}
