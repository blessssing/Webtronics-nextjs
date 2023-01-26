import React from "react";
import Image from "next/image";
import styles from "../styles/Gallery.module.scss";

const Gallery = () => {
  return (
    <section className={styles["section-gallery"]}>
      <h2 id="gallery">Gallery</h2>
      <div className={styles["container"]}>
        <div className={styles["star-21"]}></div>
        <div className={styles["star-20"]}></div>
        <div className={styles["star-18"]}></div>
        <div className={styles["first-col"]}>
          <p className={styles["p1"]}>
            By the end of this course, you will be able to develop and publish
            your very own Google Chrome extension! In this course we will focus
            on coding exercises and projects.
          </p>
          <div className={styles["block-image"]}>
            <Image
              src="/developer 4.png"
              width={500}
              height={500}
              alt="developer 4"
            />
          </div>
        </div>
        <div className={styles["wrapper-images"]}>
          <div className={styles["big-photo"]}>
            <Image
              src="/developer 1.png"
              width={500}
              height={500}
              alt="developer 1"
            />
          </div>
          <div className={styles["small-photo-1"]}>
            <Image
              src="/developer 2.png"
              width={500}
              height={500}
              alt="developer 2"
            />
          </div>
          <div className={styles["small-photo-2"]}>
            <Image
              src="/developer 3.png"
              width={500}
              height={500}
              alt="developer 3"
            />
          </div>
          <div className={styles["description"]}>
            <p className={styles["p1"]}>
              If you would like to learn web development and get a job in the
              tech industry, you are going to LOVE this course! Learn HTML, CSS,
              JavaScript, Bootstrap and more with over 15 hours of HD video
              tutorials! This course was designed to be extremely beginner
              friendly. We will begin with the very basics of HTML and build a
              simple web page.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
