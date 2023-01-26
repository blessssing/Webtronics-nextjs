import React from "react";
import styles from "../styles/Steps.module.scss";

const Steps = () => {
  return (
    <section className={styles["section-steps"]}>
      <div className={styles["star-15"]}></div>
      <div className={styles["star-14"]}></div>
      <div className={styles["star-13"]}></div>
      <div className={styles["star-12"]}></div>
      <div className={styles["star-16"]}></div>
      <h2 id="steps">Steps</h2>
      <div className={styles["steps-wrapper"]}>
        <div className={styles["card-step"]}>
          <div className={styles["circle-odd"]} role="for-pseudoelement"></div>
          <h4 className={styles["sub-title"]}>Step 1</h4>
          <h3 className={styles["title"]}>Introduction to Front-End</h3>
          <p className={styles["description"]}>
            Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non
            semper quis.
          </p>
        </div>
        <div className={styles["card-step"]}>
          <div className={styles["circle-even"]} role="for-pseudoelement"></div>
          <h4 className={styles["sub-title"]}>Step 2</h4>
          <h3 className={styles["title"]}>Overview of Development</h3>
          <p className={styles["description"]}>
            Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non
            semper quis.
          </p>
        </div>
        <div className={styles["card-step"]}>
          <div className={styles["circle-odd"]} role="for-pseudoelement"></div>
          <h4 className={styles["sub-title"]}>Step 3</h4>
          <h3 className={styles["title"]}>Introduction to Back-End</h3>
          <p className={styles["description"]}>
            Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non
            semper quis.
          </p>
        </div>
        <div className={styles["card-step"]}>
          <div className={styles["circle-even"]} role="for-pseudoelement"></div>
          <h4 className={styles["sub-title"]}>Step 4</h4>
          <h3 className={styles["title"]}>Overview of Front-End</h3>
          <p className={styles["description"]}>
            Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non
            semper quis.
          </p>
        </div>
        <div className={styles["card-step"]}>
          <div className={styles["circle-odd"]} role="for-pseudoelement"></div>
          <h4 className={styles["sub-title"]}>Step 5</h4>
          <h3 className={styles["title"]}>Introduction to Design</h3>
          <p className={styles["description"]}>
            Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non
            semper quis.
          </p>
        </div>
        <div className={styles["card-step"]}>
          <div className={styles["circle-even"]} role="for-pseudoelement"></div>
          <h4 className={styles["sub-title"]}>Step 6</h4>
          <h3 className={styles["title"]}>Overview of Back-End</h3>
          <p className={styles["description"]}>
            Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non
            semper quis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Steps;
