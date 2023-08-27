import Link from "next/link";
import styles from "./layoutOverwatch.module.css";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>OverWatch Team</title>
          <meta
            name="description"
            content="Overwatch Team for Ira_tate Community"
          />
        </Head>
        <header className={styles.header}>
          <h2>Overwatch Team Page</h2>
        </header>
        <nav className={styles.nav}>
          <Link href={"/overwatch"} className={styles.link}>
            Roster
          </Link>
          <Link href={"/overwatch/schedules"} className={styles.link}>
            Schedules
          </Link>
          <Link href={"/overwatch/meet"} className={styles.link}>
            Next Meet
          </Link>
        </nav>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          <p>Made and Coded by MonkayShrek</p>
        </footer>
      </div>
    </>
  );
}
