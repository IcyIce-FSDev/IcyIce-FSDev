import { useState, useEffect } from "react";
import Map from "../../components/map";
import Styles from "../../styles/iptracker.module.css";
import Image from "next/image";
import axios from "axios";

export default function IpTracker() {
  const [ipAddress, setIpAddress] = useState("192.212.174.101");
  const [gotIp, setGotIp] = useState(false);
  const [trackedInfo, setTrackedInfo] = useState({
    location: {
      city: "Loading...",
      region: "Loading...",
      zip: "Loading...",
      timezone: "Loading...",
    },
    isp: {
      ip: false,
      isp: "Loading...",
    },
  });

  function handleIpInput(e) {
    setIpAddress(e.target.value);
  }

  async function getTrackedInfo() {
    const apiKey = "at_tReNxMub9AXvtKPU5KevUECiP1zuX";
    const fetchURL = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`;
    const response = await fetch(fetchURL);
    const info = await response.json();

    const builtInfo = {
      location: {
        city: info.location.city,
        region: info.location.region,
        zip: info.location.postalCode,
        timezone: info.location.timezone,
        lat: info.location.lat,
        lng: info.location.lng,
      },
      isp: {
        ip: info.ip,
        isp: info.isp,
      },
    };
    return builtInfo;
  }

  useEffect(() => {
    async function fetchIPAddress() {
      try {
        const response = await axios.get("https://api.ipify.org?format=json");
        setIpAddress(response.data.ip);

        setGotIp(true);
      } catch (error) {
        console.error("Error fetching IP address:", error);
      }
    }

    if (!gotIp) {
      fetchIPAddress();
    }
  }, []);

  useEffect(() => {
    if (gotIp) {
      async function getData() {
        try {
          const apiKey = "at_tReNxMub9AXvtKPU5KevUECiP1zuX";
          const fetchURL = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`;
          const response = await fetch(fetchURL);
          const info = await response.json();
          const builtInfo = {
            location: {
              city: info.location.city,
              region: info.location.region,
              zip: info.location.postalCode,
              timezone: info.location.timezone,
              lat: info.location.lat,
              lng: info.location.lng,
            },
            isp: {
              ip: info.ip,
              isp: info.isp,
            },
          };
          setTrackedInfo(builtInfo);
        } catch (error) {
          console.error("Error fetching information:", error);
        }
      }

      getData();
    }
  }, [gotIp]);

  return (
    <div className={Styles.website}>
      <div className={Styles.container}>
        {/* Top portion */}
        <div className={Styles.header}>
          <p className={Styles.title}>IP Address Tracker</p>
          <div className={Styles.inputBox}>
            <input
              type="text"
              value={ipAddress}
              onChange={handleIpInput}
              className={Styles.input}
            />
            <button className={Styles.arrowContainer} onClick={getTrackedInfo}>
              <Image
                src="iptracker/icon-arrow.svg"
                alt="icon-arrow"
                width="11"
                height="14"
              />
            </button>
          </div>
        </div>

        {/* Info portion */}
        <div className={Styles.results}>
          <div className={`${Styles.card}`}>
            <div className={Styles.rightBorder} />
            <p className={Styles.cardTitle}>IP ADDRESS</p>
            <p className={Styles.cardResult}>{trackedInfo.isp.ip}</p>
          </div>

          <div className={`${Styles.card}`}>
            <div className={Styles.rightBorder} />
            <p className={Styles.cardTitle}>LOCATION</p>
            <p className={Styles.cardResult}>
              {trackedInfo.location.city}, {trackedInfo.location.region}{" "}
              {trackedInfo.location.zip}
            </p>
          </div>

          <div className={`${Styles.card}`}>
            <div className={Styles.rightBorder} />
            <p className={Styles.cardTitle}>TIMEZONE</p>
            <p className={Styles.cardResult}>
              UTC {trackedInfo.location.timezone}
            </p>
          </div>

          <div className={`${Styles.card}`}>
            <p className={Styles.cardTitle}>ISP</p>
            <p className={Styles.cardResult}>{trackedInfo.isp.isp}</p>
          </div>
        </div>

        {/* Map portion */}
        <div className={Styles.map}>
          <Map trackedInfo={trackedInfo} gotIp={gotIp} />
        </div>
      </div>
    </div>
  );
}
