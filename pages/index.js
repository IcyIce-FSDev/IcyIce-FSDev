import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import styles from "../components/layout.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I'm Robert. I'm a FullStack Software Developer and avid outdoor
          enthusiast. I've been coding for over a year and half. If you want to
          reach out please use the link(s) below
        </p>
        <br />

        <Link
          href={"https://www.linkedin.com/in/icyice-fsdev/"}
          target="_blank"
        >
          Linkdin
        </Link>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <div className={styles.container}>
          <h1 className={styles.header}>List of Projects</h1>
          {/* <br />
          <div>
            <h3>Where in the world?</h3>
            <p>This was a frontend Mentor challenge</p>
            <Link href="/world" target="_blank">
              Website
            </Link>
          </div> */}
          <br />
          <div>
            <h3>Overwatch Team Pages</h3>
            <p>
              This is an website I made for people on an overwatch team to know
              when next meet is
            </p>
            <br />
            <Link href="/overwatch" target="_blank">
              Website
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
