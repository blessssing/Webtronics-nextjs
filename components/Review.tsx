import React, { useState } from "react";
import Image from "next/image";

import styles from "../styles/Review.module.scss";

const sliderImages = [
  ["man 1 big.png", "woman 1 small.png", "man 2 small.png"],
  ["woman 1 big.png", "man 2 small.png", "man 1 small.png"],
  ["man 2 big.png", "man 1 small.png", "woman 1 small.png"],
];

const descriptions = [
  [
    {
      title: "Best courses ever",
      info: `Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the "teacher" sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc.`,
    },
  ],
  [
    {
      title: "Amazing teaching",
      info: `The explanation is crazy it really doesn't have a structure to go from point A to point B. He starts to explain something then he change his mind and start with another thing an so on. If you try to learn pro active by doing the same thing with him all along you will get confused and start to loose interest.`,
    },
  ],
  [
    {
      title: "Simple and easy",
      info: `I am really enjoying the experience of learning a new skill I used to believe that web design was way too complicated for me to learn but so far in this course I have been keeping up and having fun.`,
    },
  ],
];

const Review = () => {
  const [images, setImage] = useState<number>(0);

  const prevImage = () => {
    setImage((prev): number => {
      if (images === 0) return (prev = sliderImages.length - 1);
      return (prev = prev - 1);
    });
  };

  const nextImage = () => {
    setImage((prev): number => {
      if (images === sliderImages.length - 1) return (prev = 0);
      return (prev = prev + 1);
    });
  };

  return (
    <section className={styles["section-review"]}>
      <h2 id="review">Review</h2>
      <div className={styles["container-review"]}>
        <div className={styles["star-24"]}></div>
        <div className={styles["wrapper-best-courses"]}>
          {descriptions[images].map(({ title, info }) => (
            <div key={title}>
              <h4>{title}</h4>
              <p className={styles["p1"]}>{info}</p>
            </div>
          ))}
        </div>
        <div className={styles["container-slider"]}>
          <div className={styles["wrapper-info"]}>
            <div className={styles["page-indicator"]}>
              <b>{images + 1}</b>&nbsp;/&nbsp;<sup>3</sup>
            </div>
            <div className={styles["wrapper-arrows"]}>
              <div
                className={`${styles["btn-arrow"]} ${styles["btn-left"]}`}
                onClick={prevImage}
              ></div>
              <div
                className={`${styles["btn-arrow"]} ${styles["btn-right"]}`}
                onClick={nextImage}
              ></div>
            </div>
          </div>
          <div className={styles["wrapper-slider"]}>
            {sliderImages[images].map((src) => (
              <div key={src} className={`${styles["photo"]}`}>
                <Image
                  src={`/${src}`}
                  width={500}
                  height={500}
                  alt={`${src}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
