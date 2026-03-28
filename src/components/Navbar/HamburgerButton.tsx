import styles from "./styles.module.css";

interface HamburgerButtonProps {
  onHamburgerClick: () => void;
  open: boolean;
}

const HamburgerButton = ({ onHamburgerClick, open }: HamburgerButtonProps) => {
  return (
    <button
      onClick={onHamburgerClick}
      className={`${styles.hamburger} ${open && styles.openHamburger}`}
    >
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
    </button>
  );
};

export default HamburgerButton;
