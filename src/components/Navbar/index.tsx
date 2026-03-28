import { useState } from "react";
import { Link } from "react-router-dom";

import NavMenu from "./NavMenu";
import HamburgerButton from "./HamburgerButton";

import styles from "./styles.module.css";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  
  const hamburgerClickHandler = () => {
    setOpen((prev) => !prev);
  };

  const linkClickHandler = () => {
    setOpen(false);
  }

  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.brand} data-testid="brand">
          <Link to="/" className={styles.brandLink}>
            Seed Project
          </Link>
        </div>
        <NavMenu onLinkClick={linkClickHandler} open={open} />
        <HamburgerButton onHamburgerClick={hamburgerClickHandler} open={open} />
      </nav>
    </header>
  );
};

export default Navbar;
