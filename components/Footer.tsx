import React from "react";
import styles from "../styles/Footer.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles["section-footer"]}>
      <section className={styles["section-footer-centered"]}>
        <div className={styles["wrapper-adress"]}>
          <div className={styles["box-logo"]}>
            <a className={styles["logo"]} href="#"></a>
          </div>
          <div className={styles["adress"]}>
            <div className={styles["p1"]}>
              Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815
            </div>
          </div>
        </div>
        <div className={styles["wrapper-navigation-col-1"]}>
          <h5 className={styles["title"]}>Company</h5>
          <div className={styles["box-link"]}>
            <a href="#about">About us</a>
          </div>
          <div className={styles["box-link"]}>
            <a href="#careers">Careers</a>
          </div>
          <div className={styles["box-link"]}>
            <a href="#questions">FAQs</a>
          </div>
        </div>
        <div className={styles["wrapper-navigation-col-2"]}>
          <div className={styles["box-link"]}>
            <a href="#gallery">Teams</a>
          </div>
          <div className={styles["box-link"]}>
            <a href="#contact">Contact Us</a>
          </div>
        </div>
        <div className={styles["wrapper-social-media"]}>
          <h5 className={styles["title"]}>Social media</h5>
          <div className={styles["wrapper-icons"]}>
            <a href="https://facebook.com">
              <Image
                className={`${styles["icon"]}}`}
                src="/icon-fb.svg"
                width={31}
                height={31}
                alt="icon-fb.svg"
              />
            </a>
            <a href="https://overwolf.com">
              <Image
                className={`${styles["icon"]}}`}
                src="/icon-overwolf.svg"
                width={31}
                height={31}
                alt="icon-overwolf.svg"
              />
            </a>
            <a href="https://twitter.com">
              <Image
                className={`${styles["icon"]}}`}
                src="/icon-tw.svg"
                width={31}
                height={31}
                alt="icon-tw.svg"
              />
            </a>
            <a href="https://instagram.com">
              <Image
                className={`${styles["icon"]}}`}
                src="/icon-instagram.svg"
                width={31}
                height={31}
                alt="icon-instagram.svg"
              />
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
