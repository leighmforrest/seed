import { NavLink } from "react-router-dom";

import DarkModeToggle from "./DarkModeToggle";

import styles from "./styles.module.css";

interface NavMenuProps {
  onLinkClick: () => void;
  open: boolean;
}

const NavMenu = ({ onLinkClick, open }: NavMenuProps) => {
  return (
    <div className={`${styles.menu} ${open ? styles.open : ""}`}>
      <ul>
        <li>
          <NavLink to="/" className={styles.menuLink} onClick={onLinkClick}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={styles.menuLink}
            onClick={onLinkClick}
          >
            About
          </NavLink>
        </li>
        <li>
          <DarkModeToggle />
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
