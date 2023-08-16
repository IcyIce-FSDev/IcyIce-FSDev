import Layout from "../../../components/layoutOverwatch";
import moment from "moment";
import { useEffect, useState } from "react";

const useCountdown = (setDate) => {
  // Convert setDate to UTC timestamp in milliseconds
  const targetTimestamp = setDate.getTime();

  // Time is in seconds
  const time = Math.max(0, Math.floor((targetTimestamp - Date.now()) / 1000));

  const format = (number) => {
    return number < 10 ? "0" + number : number.toString();
  };

  return {
    days: format(Math.floor(time / (3600 * 24))),
    hours: format(Math.floor((time / 3600) % 24)),
    minutes: format(Math.floor((time / 60) % 60)),
    seconds: format(time % 60),
    totals: time,
  };
};

function getNextFriday10PM() {
  const now = new Date();
  const currentDay = now.getUTCDay(); // Get the current day in UTC
  const daysUntilFriday = (5 - currentDay + 7) % 7; // Calculate days until the next Friday
  const nextFriday = new Date(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate() + daysUntilFriday
  );

  // Set the time to 10:00 PM in UTC
  nextFriday.setUTCHours(22, 0, 0, 0);

  return nextFriday;
}

function getNextSunday11PM() {
  const now = new Date();
  const currentDay = now.getUTCDay(); // Get the current day in UTC
  const daysUntilSunday = (7 - currentDay + 7) % 7; // Calculate days until the next Sunday
  const nextSunday = new Date(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate() + daysUntilSunday
  );

  // Set the time to 11:00 PM in UTC
  nextSunday.setUTCHours(23, 0, 0, 0);

  return nextSunday;
}

export default function Meet() {
  const [nextSundayMeet, setNextSundayMeet] = useState({
    days: "Loading...",
    hours: "Loading...",
    minutes: "Loading...",
    seconds: "Loading...",
    totals: "Loading...",
  });
  const [nextFridayMeet, setNextFridayMeet] = useState({
    days: "Loading...",
    hours: "Loading...",
    minutes: "Loading...",
    seconds: "Loading...",
    totals: "Loading...",
  });

  const [sunday, setSunday] = useState(getNextSunday11PM());
  const [friday, setFriday] = useState(getNextFriday10PM());

  useEffect(() => {
    const timer = setInterval(() => {
      const sundayTime = useCountdown(sunday);
      const fridayTime = useCountdown(friday);

      setNextSundayMeet(sundayTime);
      setNextFridayMeet(fridayTime);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      <div>
        <h3>Next Meet Time</h3>
        <br />
        <p>
          Current times we are meeting are{" "}
          {`${moment(friday).format("dddd hh:mm a")}`} and{" "}
          {`${moment(sunday).format("dddd hh:mm a")}`}
        </p>
        <br />
        <h1>Next Friday Meet in</h1>
        <br />
        <div>Days: {nextFridayMeet.days}</div>
        <div>Hours: {nextFridayMeet.hours}</div>
        <div>Minutes: {nextFridayMeet.minutes}</div>
        <div>Seconds: {nextFridayMeet.seconds}</div>
        <br />
        <h1>Next Sunday Meet in</h1>
        <br />
        <div>Days: {nextSundayMeet.days}</div>
        <div>Hours: {nextSundayMeet.hours}</div>
        <div>Minutes: {nextSundayMeet.minutes}</div>
        <div>Seconds: {nextSundayMeet.seconds}</div>
      </div>
    </Layout>
  );
}
