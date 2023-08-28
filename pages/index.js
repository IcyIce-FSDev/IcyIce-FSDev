import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import styles from "../components/layout.module.css";
import { useState } from "react";

export default function Home() {
  const [websites, setWebsites] = useState([
    // {
    //   name: "",
    //   descr: "",
    //   link: "",
    // },
    // {
    //   name: "Where in the World?",
    //   descr: "This was a frontend Mentor challenge",
    //   link: "/world",
    // },
    {
      name: "Overwatch Team Pages",
      descr:
        " This is an website I made for people on an overwatch team to know when next meet is",
      link: "/overwatch",
    },
    {
      name: "Tip Calculator",
      descr:
        "This was a free challenge found on frontendmentor.io, the goal was to design a tip calculator",
      link: "/tipcalc",
    },
    {
      name: "Advice Generator",
      descr: `This was a free challenge found on frontendmentor.io, the goal was
      to design a website that fetchs from an API an random piece of
      advice`,
      link: "/advice",
    },
  ]);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={styles.aboutme}>
          Hi, I'm a FullStack Software Developer and avid outdoor enthusiast.
          I've been coding for over a year and half. If you want to reach out
          please use the link(s) below
        </p>
        <br />

        <ul>
          <li>
            <Link
              href={"https://www.linkedin.com/in/icyice-fsdev/"}
              target="_blank"
            >
              Linkdin
            </Link>
          </li>
        </ul>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <div className={styles.container}>
          <h1 className={styles.header}>List of Projects</h1>
          <br />
          <div className={styles.cardContainer}>
            {websites.map((website) => {
              return (
                <div className={styles.projCard} key={website.name}>
                  <h3>{website.name}</h3>
                  <br />
                  <p>{website.descr}</p>
                  <br />
                  <Link href={website.link} target="_blank">
                    Website
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
