import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/lists/TodoList";
import FilterHeader from "./components/headers/FilterHeader";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  const [filter, setFilter] = useState<"all" | "completed" | "active">("all");

  const handleUpdateFilter = (filterVal: "all" | "completed" | "active") => {
    setFilter(filterVal);
  };

  return (
    <DarkModeProvider>
      <FilterHeader onUpdateFilter={handleUpdateFilter} />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}

export default App;
