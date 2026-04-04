import type { HamburgerButtonProps } from "@/types";

import styles from "./styles.module.css";


const HamburgerButton = ({ onHamburgerClick, open }: HamburgerButtonProps) => {
  return (
    <button
      onClick={onHamburgerClick}
      className={`${styles.hamburger} ${open && styles.openHamburger}`}
      aria-label="Hamburger menu toggle"
      aria-controls="menu"
      aria-expanded={open ? "true" : "false"}
      data-testid="hamburgerButton"
    >
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
    </button>
  );
};

export default HamburgerButton;
