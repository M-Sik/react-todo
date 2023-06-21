import { ReactNode, createContext, useContext, useState } from "react";

const DarkModeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

export function DarkModeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode);

  return (
    <DarkModeContext.Provider
      value={{ darkMode: darkMode, toggleDarkMode: toggleDarkMode }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}

export const useDarkMode = () => useContext(DarkModeContext);
