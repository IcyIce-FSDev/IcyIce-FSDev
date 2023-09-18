import Image from "next/image";
import styles from "./Header.module.css";

const name = "Robert";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        priority
        src="/profile.jpg"
        className={styles.borderCircle}
        height={144}
        width={144}
        alt=""
      />

      <h1 className={styles.heading2Xl}>{name}</h1>
    </header>
  );
}
