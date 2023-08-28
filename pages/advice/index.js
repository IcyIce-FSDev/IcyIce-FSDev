import Image from "next/image";
import styles from "../../styles/advice.module.css";
import { useRef, useState, useEffect } from "react";

export default function Advice() {
  // Sets states for window size
  const [windowSize, setWindowSize] = useState([
    typeof window !== "undefined" ? window.innerWidth : 0,
    typeof window !== "undefined" ? window.innerHeight : 0,
  ]);
  const [divImage, setDivImage] = useState(
    "/advice/pattern-divider-desktop.svg"
  );
  const [divWidth, setDivWidth] = useState(520);
  // Handles resizing of window
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    getQuote();

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleWindowResize);

      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    }
  }, []);
  // Handles the resizing and setting of divider img
  useEffect(() => {
    const desktopDiv = "/advice/pattern-divider-desktop.svg";
    const mobileDiv = "/advice/pattern-divider-mobile.svg";

    if (windowSize[0] >= 600) {
      setDivWidth(520);
      setDivImage(desktopDiv);
    }

    if (windowSize[0] <= 599) {
      setDivWidth(320);
      setDivImage(mobileDiv);
    }
  }, [windowSize]);

  // States for quote
  const [quoteId, setQuoteId] = useState(0);
  const [quote, setQuote] = useState(``);

  async function getQuote() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const randomQuote = await response.json();

    setQuoteId(randomQuote.slip.id);
    setQuote(`${randomQuote.slip.advice}`);
  }

  return (
    <div className={styles.webpage}>
      <div className={styles.quotebox}>
        <p className={styles.quotenum}>ADVICE #{quoteId}</p>
        <p className={styles.quote}>"{quote}"</p>
        <Image
          src={divImage}
          alt="Divider Img"
          width={divWidth}
          height="16"
          className={styles.div}
          priority={true}
        />
      </div>
      <button className={styles.button} onClick={getQuote}>
        <Image
          src="advice/icon-dice.svg"
          width="24"
          height="24"
          alt="Dice Icon"
        />
      </button>
    </div>
  );
}
