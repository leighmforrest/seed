import { useEffect, useState } from "react";
import { type Theme } from "@/types/theme";

import styles from "./styles.module.css";


const DarkModeToggle = () => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;

    if (saved === "light" || saved === "dark") {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);

    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };
  return (
    <button onClick={toggleTheme} aria-label="Toggle dark mode"
    className={styles.darkModeButton}
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
};

export default DarkModeToggle;
