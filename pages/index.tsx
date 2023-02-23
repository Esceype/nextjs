import Heading from "@/components/Heading";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home () {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading tag="h1" text="Home" />
    </div>
  );
};
