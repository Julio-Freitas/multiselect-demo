import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
export const Navbar = () => {
  return (
    <nav className={styles["navMenu"]}>
      <Link to="/">Home</Link>
      <Link to="/produtos">Produto</Link>
      <div className={styles["dot"]}></div>
    </nav>
  );
};
