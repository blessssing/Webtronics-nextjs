import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Questions.module.scss";

const items = [
  `Front-end engineers work closely with designers to make websites
beautiful, functional, and fast. This Career Path will teach you
not only the necessary languages and technologies, but how to
think like a front-end engineer, too.`,
  `Writing async logic with thunks can be somewhat tedious. Each thunk typically requires defining three different action types + matching action creators for "pending/fulfilled/rejected", plus the actual thunk action creator + thunk function. There's also the edge cases with error handling to deal with.`,
  `RTK Query is a powerful data fetching and caching tool. It is designed to simplify common cases for loading data in a web application, eliminating the need to hand-write data fetching & caching logic yourself.`,
  `Web applications normally need to fetch data from a server in order to display it. They also usually need to make updates to that data, send those updates to the server, and keep the cached data on the client in sync with the data on the server.`,
  `When you use Redux Toolkit, all the concepts that we've covered so far (actions, reducers, store setup, action creators, thunks, etc) still exist, but Redux Toolkit provides easier ways to write that code.`,
];

const Questions = () => {
  return (
    <section className={styles["section-questions"]}>
      <h2 id="questions">Frequently Asked Questions</h2>
      <div className={styles["container-questions"]}>
        <div className={styles["wrapper-questions"]}>
          <div className={styles["star-22"]}></div>
          <p className={styles["p1"]}>
            Do you have any kind of questions?
            <br /> We are here to help.
          </p>
          <div className={styles["block-image"]}></div>
        </div>
        <div className={styles["wrapper-price"]}>
          {items.map((info) => (
            <QuestionsItems key={info} info={info} />
          ))}
          <div className={styles["star-8"]}></div>
        </div>
      </div>
    </section>
  );
};

const QuestionsItems = ({ info }: any) => {
  const [details, setDetails] = useState<boolean>(false);

  return (
    <div className={styles["card-price"]}>
      <h4>What is the price?</h4>
      {details && <p className={styles["p1"]}>{info}</p>}
      <Image
        onClick={() => setDetails((prev) => !prev)}
        src={details ? "/icon-plus.svg" : "/icon-minus.svg"}
        className={styles["icon-toggle"]}
        width={120}
        height={120}
        alt={"icon-toggle"}
      />
    </div>
  );
};

export default Questions;
