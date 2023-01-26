import Head from "next/head";
import React from "react";
import styles from "../styles/MainLayout.module.scss";

interface MainLayoutProps {
  children: React.ReactNode;
  title: string;
  keywords: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title,
  keywords,
}) => {
  return (
    <section className={styles["section-outer"]}>
      <section className={styles["section-inner"]}>
        <Head>
          <title>{title}</title>
          <meta
            name="description"
            content={`webtronics react developer ${keywords}`}
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>{children}</div>
      </section>
    </section>
  );
};

export default MainLayout;
