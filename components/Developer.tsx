import React from "react";
import styles from "../styles/Developer.module.scss";
import Button from "./Button";

const Developer: React.FC = () => {
  return (
    <main className={styles["main-container"]}>
      <div className={styles["wrapper-main"]}>
        <div className={styles["front-end"]}>
          <h1 id="careers">Front-End</h1>
        </div>
        <div className={styles["wrapper-p"]}>
          <p className={styles["p"]}>
            Make UIs and websites beautiful, functional, and fast. Cover all the
            topics that expensive bootcamps teach (and more).
          </p>
        </div>
        <div className={styles["wrapper-button"]}>
          <Button>Start my career change</Button>
        </div>
        <div className={styles["wrapper-developer"]}>
          <h1>Developer</h1>
        </div>
      </div>
      <div className={styles["wrapper-courses"]}>
        <h3>Courses</h3>
      </div>
    </main>
  );
};

export default Developer;
