import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/lists/TodoList";
import FilterHeader from "./components/headers/FilterHeader";

function App() {
  const [filter, setFilter] = useState<"all" | "completed" | "active">("all");

  const handleUpdateFilter = (filterVal: "all" | "completed" | "active") => {
    setFilter(filterVal);
  };

  return (
    <div>
      <FilterHeader onUpdateFilter={handleUpdateFilter} />
      <TodoList filter={filter} />
    </div>
  );
}

export default App;
