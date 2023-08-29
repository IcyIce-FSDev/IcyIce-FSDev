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
        "A roster page for group of friends, also says when next group meet is",
      link: "/overwatch",
    },
    {
      name: "Tip Calculator",
      descr:
        "This is a basic calculator that takes finds out how much to tip on a bill - Challenge by FrontEndMentor.io",
      link: "/tipcalc",
    },
    {
      name: "Advice Generator",
      descr: `The goal was to design a website that fetchs a random piece of advice from a REST API - Challenge by FrontEndMentor.io`,
      link: "/advice",
    },
    {
      name: "Ip Address Tracker",
      descr:
        "This website uses two separate APIs to allow you get location of an IP address - Challenge by FrontEndMentor.io",
      link: "/ip-tracker",
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
