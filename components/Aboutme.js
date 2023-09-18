import styles from "./Aboutme.module.css";
import Link from "next/link";

export default function Aboutme() {
  return (
    <section className={styles.headingMd}>
      <p className={styles.aboutme}>
        Hi, I am a FullStack Software Developer and avid outdoor enthusiast. I
        have been coding for over a year and half. If you want to reach out
        please use the link(s) below
        <br />
        <Link
          href={"https://www.linkedin.com/in/icyice-fsdev/"}
          target="_blank"
          style={{ color: "aliceblue" }}
        >
          Linkdin
        </Link>
      </p>
    </section>
  );
}
