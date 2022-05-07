import React from "react";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <navbar className={styles.container}>
      <ul className={styles.list}>
        <li>
          <h3 className={styles.title}>
            <span style={{ color: "#22C55E" }}>Uretken</span>
            <span style={{ color: "#000814" }}>Shop</span>
          </h3>
        </li>
        <li>
          <span className={styles.signIn}>Giriş Yap</span>
          <button className={styles.signUp}>Üye Ol</button>
        </li>
      </ul>
    </navbar>
  );
};

export default NavBar;
