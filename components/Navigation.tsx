import React from "react";
import styles from "../styles/Navigation.module.scss";

const Navigation: React.FC = () => {
  return (
    <header className={styles["wrapper-navigation"]}>
      <nav className={styles["nav"]}>
        <div className={styles["wrapper-logo"]}>
          <a className={styles["logo"]} href="#"></a>
        </div>
        <div>
          <a className={styles["nav-link"]} href="#about">
            About
          </a>
        </div>
        <div>
          <a className={styles["nav-link"]} href="#programs">
            Programs
          </a>
        </div>
        <div>
          <a className={styles["nav-link"]} href="#steps">
            Steps
          </a>
        </div>
        <div>
          <a className={styles["nav-link"]} href="#questions">
            Questions
          </a>
        </div>
        <div>
          <a className={styles["nav-link"]} href="#review">
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
