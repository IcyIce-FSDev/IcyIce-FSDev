import Aboutme from "../../components/Aboutme";
import Projects from "../../components/Projects";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Aboutme />
      <Projects />
    </main>
  );
}
