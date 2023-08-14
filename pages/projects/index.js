import styles from "../../components/layout.module.css";
import Link from "next/link";

export default function ProjectsHome() {
  return (
    <div className={styles.container}>
      <div className={styles.backToHome}>
        <Link href="/">← Back to home</Link>
      </div>
      <h1 className={styles.header}>Projects</h1>
      <div>
        <h3>Where in the world?</h3>
        <p>This was a frontend Mentor challenge</p>
        <Link href="/projects/world" target="_blank">
          Website
        </Link>
        <br />
        <Link href="#">Github</Link>
      </div>
      <div>
        <h3>Overwatch Team Pages</h3>
        <p>
          This is an website I made for people on an overwatch team to know when
          next meet is
        </p>
        <Link href="/projects/overwatch" target="_blank">
          Website
        </Link>
        <br />
        <Link href="#">Github</Link>
      </div>
    </div>
  );
}
