import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import styles from "../styles/Index.module.css";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>My Cool App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="title">Welcome to My App</h1>
        <Header />
        <img src="/static/images/firebase.png" alt="" />
      </main>
    </div>
  );
}
