import styles from "./Projects.module.css";
import Link from "next/link";

export default function Projects() {
  return (
    <section className={styles.container}>
      <h1 className={styles.header}>Projects</h1>
      <br />
      <div className={styles.cardContainer}>
        {listProject.map((website) => {
          return (
            <div className={styles.projCard} key={website.name}>
              <h3>{website.name}</h3>
              <br />
              <p>{website.descr}</p>
              <br />
              <Link href={website.link} target="_blank">
                {website.website}
              </Link>
              <br />
              {website.gitLink ? (
                <Link href={website.gitLink} target="_blank">
                  Github
                </Link>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

const listProject = [
  // Update each after project update
  // {
  //   name: "Overwatch Team Pages",
  //   descr:
  //     "A roster page for group of friends, also says when next group meet is",
  //   link: "",
  //   website: "Website",
  //   gitLink: "",
  // },
  {
    name: "Tip Calculator",
    descr:
      "This is a basic calculator that finds out how much to tip on a bill - Challenge by FrontEndMentor.io",
    link: "https://tip-calc-sandy.vercel.app",
    website: "Website",
    gitLink: "https://github.com/IcyIce-FSDev/Tip_calc",
  },
  {
    name: "Advice Generator",
    descr: `The goal was to design a website that fetchs a random piece of advice from a REST API - Challenge by FrontEndMentor.io`,
    link: "https://advice-gene.vercel.app",
    website: "Website",
    gitLink: "https://github.com/IcyIce-FSDev/advice_gene",
  },
  {
    name: "Ip Address Tracker",
    descr:
      "This website uses two separate APIs to allow you get location of an IP address - Challenge by FrontEndMentor.io",
    link: "https://tracker-loc.vercel.app",
    website: "Website",
    gitLink: "https://github.com/IcyIce-FSDev/tracker-loc",
  },
  {
    name: "Twitch Chat bot",
    descr:
      "This is a custom made bot that can fetch overwatch 2 stats and random pieces of advice",
    link: "https://github.com/IcyIce-FSDev/twitch_chat_bot",
    website: "Github",
    gitLink: false,
  },
];
