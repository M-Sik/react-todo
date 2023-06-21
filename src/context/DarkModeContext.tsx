import { ReactNode, createContext, useContext, useState } from "react";

const DarkModeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

export function DarkModeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((mode) => !mode);
    updateDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider
      value={{ darkMode: darkMode, toggleDarkMode: toggleDarkMode }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}

function updateDarkMode(darkMode: boolean) {
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export const useDarkMode = () => useContext(DarkModeContext);
