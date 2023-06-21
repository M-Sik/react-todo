import React from "react";
import Styles from "./FilterHeader.module.css";
import { useDarkMode } from "../../context/DarkModeContext";

type Props = {
  onUpdateFilter: (filterVal: "all" | "completed" | "active") => void;
};

export default function FilterHeader({ onUpdateFilter }: Props) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const handleUpdate = (filter: "all" | "completed" | "active") => {
    console.log(filter);
    onUpdateFilter(filter);
  };

  return (
    <header className={Styles["header"]}>
      <button onClick={() => toggleDarkMode()} className={Styles["filter-btn"]}>
        {darkMode ? "다크모드 적용중" : "라이트모드 적용중"}
      </button>
      <button
        onClick={() => handleUpdate("all")}
        className={Styles["filter-btn"]}
      >
        all
      </button>
      <button
        onClick={() => handleUpdate("active")}
        className={Styles["filter-btn"]}
      >
        active
      </button>
      <button
        onClick={() => handleUpdate("completed")}
        className={Styles["filter-btn"]}
      >
        completed
      </button>
    </header>
  );
}
