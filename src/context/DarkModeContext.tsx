import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

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
  // 다크모드 컨텍스트 프로바이더 초기 마운트 시
  // 사용자의 브라우저 다크모드, 라이트모드 설정값을 가져와 셋팅
  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);

  return (
    <DarkModeContext.Provider
      value={{ darkMode: darkMode, toggleDarkMode: toggleDarkMode }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}
// 컨텍스트에서 컨트롤하는 다크모드 상태에 따라
// html 문서에 클래스를 추가 및 제거, 로컬스토리지에 다크모드 상태를 저장("dark", "light")
function updateDarkMode(darkMode: boolean) {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
}

export const useDarkMode = () => useContext(DarkModeContext);
