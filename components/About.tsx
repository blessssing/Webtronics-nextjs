import React from "react";
import Image from "next/image";
import styles from "../styles/About.module.scss";

const About = () => {
  return (
    <section className={styles["section-about"]}>
      <div className={styles["star-1"]}></div>
      <div className={styles["star-2"]}></div>
      <div className={styles["star-3"]}></div>
      <div className={styles["star-4"]}></div>
      <h2 id="about">About Us</h2>

      <div className={styles["container-mentors"]}>
        <div className={styles["wrapper-mentors"]}>
          <h3>Mentors</h3>
          <div className={styles["mentors"]}>
            <div className={styles["wrapper-card"]}>
              <div className={styles["card"]}>
                <div className={styles["image-block"]}>
                  <Image
                    src="/Wade Warren.png"
                    width={300}
                    height={300}
                    alt="Wade Warren"
                  />
                </div>
                <h4 className={styles["title"]}>Wade Warren</h4>
                <p className={styles["description"]}>
                  Front-end engineers work closely with designers
                </p>
              </div>
            </div>
            <div className={styles["wrapper-card"]}>
              <div className={styles["card"]}>
                <div className={styles["image-block"]}>
                  <Image
                    src="/Kristin Watson.png"
                    width={300}
                    height={300}
                    alt="Kristin Watson"
                  />
                </div>
                <h4 className={styles["title"]}>Kristin Watson</h4>
                <p className={styles["description"]}>
                  Front-end engineers work closely with designers
                </p>
              </div>
            </div>
            <div className={styles["wrapper-card"]}>
              <div className={styles["card"]}>
                <div className={styles["image-block"]}>
                  <Image
                    src="/Robert Fox.png"
                    width={300}
                    height={300}
                    alt="Robert Fox"
                  />
                </div>
                <h4 className={styles["title"]}>Robert Fox</h4>
                <p className={styles["description"]}>
                  Front-end engineers work closely with designers
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["about-engineers"]}>
          <p className={styles["p1"]}>
            Front-end engineers work closely with designers to make websites
            beautiful, functional, and fast. This Career Path will teach you not
            only the necessary languages and technologies, but how to think like
            a front-end engineer, too.
          </p>
          <div className={styles["star-8"]}></div>
        </div>
      </div>
    </section>
  );
};

export default About;
