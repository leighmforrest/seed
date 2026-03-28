import { useState } from "react";
import { type Theme } from "@/types/theme";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import styles from "./styles.module.css";

const getInitialTheme = (): Theme => {
  const saved = localStorage.getItem("theme");
  return saved === "dark" ? "dark" : "light";
};

const DarkModeToggle = () => {
  const initialTheme = getInitialTheme();
  document.documentElement.setAttribute("data-theme", initialTheme);

  const [theme, setTheme] = useState<Theme>(initialTheme);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);

    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className={styles.darkModeButton}
      data-testid="darkModeToggle"
    >
      {theme === "dark" ? (
        <MdDarkMode className={styles.darkModeIcon} data-testid="darkModeIcon" />
      ) : (
        <MdLightMode className={styles.darkModeIcon} data-testid="lightModeIcon" />
      )}
    </button>
  );
};

export default DarkModeToggle;
