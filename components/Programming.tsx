import React from "react";
import Image from "next/image";
import styles from "../styles/Programming.module.scss";

const Programming = () => {
  return (
    <section className={styles["section-programming-technologies"]}>
      <div className={styles["star-11"]}></div>
      <div className={styles["star-18"]}></div>
      <h2 id="programs" className={styles["title"]}>
        Programming
        <br />
        technologies
      </h2>
      <p className={styles["description"]}>
        By the end, you’ll have the portfolio and interview skills you need to
        start your new career.
      </p>

      <div className={styles["wrapper-logos"]}>
        <div className={styles["card-logo"]}>
          <div className={styles["block-image"]}>
            <Image src="/angular.png" width={300} height={300} alt="angular" />
          </div>
          <h4 className={styles["title"]}>Angular</h4>
        </div>
        <div className={styles["card-logo"]}>
          <div className={styles["block-image"]}>
            <Image src="/react.png" width={300} height={300} alt="react" />
          </div>
          <h4 className={styles["title"]}>React</h4>
        </div>
        <div className={styles["card-logo"]}>
          <div className={styles["block-image"]}>
            <Image src="/vue.png" width={300} height={300} alt="vue" />
          </div>
          <h4 className={styles["title"]}>Vue.js</h4>
        </div>
        <div className={styles["card-logo"]}>
          <div className={styles["block-image"]}>
            <Image src="/js 1.png" width={300} height={300} alt="js" />
          </div>
          <h4 className={styles["title"]}>Javascript</h4>
        </div>
      </div>
    </section>
  );
};

export default Programming;
