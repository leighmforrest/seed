import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import DarkModeToggle from "./DarkModeToggle";

import styles from "./styles.module.css";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const hamburgerClickHandler = () => {
    setOpen((prev) => !prev);
  };
  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.brand}>
          <Link to="/" className={styles.brandLink}>
            Seed Project
          </Link>
        </div>
        <div className={`${styles.menu} ${open ? styles.open : ""}`}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={styles.menuLink}
                onClick={() => setOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <DarkModeToggle />
            </li>
          </ul>
        </div>
        <button
          onClick={hamburgerClickHandler}
          className={`${styles.hamburger} ${open && styles.openHamburger}`}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
