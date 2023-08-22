import Layout from "../../../components/layoutOverwatch";
import moment from "moment";
import { useEffect, useState } from "react";

const useCountdown = (setDate) => {
  const date = new Date(setDate);
  // Convert setDate to UTC timestamp in seconds
  const targetTimestamp = Math.floor(date.getTime() / 1000);

  // Time is in seconds
  const time = Math.max(0, targetTimestamp - Math.floor(Date.now() / 1000));

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
  const utcNow = moment();
  const utcMoment = utcNow.utc();
  const daysUntilFriday = (5 - utcMoment.day() + 7) % 7;
  // Create a new moment object for the next Friday at 10:00 PM UTC
  const nextFridayUTC = utcMoment
    .clone()
    .add(daysUntilFriday, "days")
    .hour(22)
    .minute(0)
    .second(0);

  // Return the timestamp of the next Friday at 10:00 PM UTC

  return nextFridayUTC.format();
}

function getNextSunday11PM() {
  const utcNow = moment();
  const utcMoment = utcNow.utc();
  const daysUntilSunday = (7 - utcMoment.day() + 7) % 7;

  // Create a new moment object for the next Sunday at 11:00 PM UTC
  const nextSundayUTC = utcMoment
    .clone()
    .add(daysUntilSunday, "days")
    .hour(23) // 11:00 PM UTC
    .minute(0)
    .second(0);

  // Return the timestamp of the next Sunday at 11:00 PM UTC
  return nextSundayUTC.format();
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

  const [friday, setFriday] = useState(getNextFriday10PM());
  const [sunday, setSunday] = useState(getNextSunday11PM());

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
        <h1>Next {`${moment(friday).format("dddd")}`} Meet in</h1>
        <br />
        <div>Days: {nextFridayMeet.days}</div>
        <div>Hours: {nextFridayMeet.hours}</div>
        <div>Minutes: {nextFridayMeet.minutes}</div>
        <div>Seconds: {nextFridayMeet.seconds}</div>
        <br />
        <h1>Next {`${moment(sunday).format("dddd")}`} Meet in</h1>
        <br />
        <div>Days: {nextSundayMeet.days}</div>
        <div>Hours: {nextSundayMeet.hours}</div>
        <div>Minutes: {nextSundayMeet.minutes}</div>
        <div>Seconds: {nextSundayMeet.seconds}</div>
      </div>
    </Layout>
  );
}
