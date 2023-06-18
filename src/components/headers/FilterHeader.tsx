import React from "react";
import Styles from "./FilterHeader.module.css";

type Props = {
  onUpdateFilter: (filterVal: "all" | "completed" | "active") => void;
};

export default function FilterHeader({ onUpdateFilter }: Props) {
  const handleUpdate = (filter: "all" | "completed" | "active") => {
    console.log(filter);
    onUpdateFilter(filter);
  };

  return (
    <header className={Styles["header"]}>
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
