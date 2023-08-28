import styles from "../../styles/tipcalc.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const tipOptions = [12, 15, 20, 25, 30];

export default function Tipcalc() {
  // Amount of the Bill
  const [billAmount, setBillAmount] = useState(0);
  // Tip Amount
  const [tipAmount, setTipAmount] = useState(0);
  // Custom Tip Amount
  const [useCustomTip, setUseCustomTip] = useState(false);
  const [customTip, setCustomTip] = useState(0);
  // Number of People
  const [peopleAmount, setPeopleAmount] = useState(1);
  // Tip amount per person
  const [personTip, setPersonTip] = useState("0.00");
  // Total amount per person
  const [personTotal, setPersonTotal] = useState("0.00");

  // Function to change Bill amount
  const handleBillChange = (event) => {
    const newBillAmount = parseFloat(event.target.value);

    if (!isNaN(newBillAmount)) {
      setBillAmount(newBillAmount);
    } else {
      setBillAmount(0);
    }
  };

  // Function to handle the Tip amount
  const handleTipChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    if (parseFloat(id)) {
      setTipAmount(value);
      setUseCustomTip(false);
      setCustomTip("");
      const listOfRadios = document.getElementsByName("tipOptions");

      for (let radio of listOfRadios) {
        radio.checked = false;

        if (radio.id === id) {
          radio.checked = true;
        }
      }
    }

    if (id == "custom") {
      setCustomTip(value);
    }
  };

  // Function to handle change of people
  const handlePeopleChange = (e) => {
    setPeopleAmount(e.target.value);
  };

  // Function to handle reseting form
  const handleReset = () => {
    setBillAmount(0);
    setTipAmount(0);
    setUseCustomTip(false);
    setCustomTip("");
    setPeopleAmount(1);
    setPersonTip("0.00");
    setPersonTotal("0.00");
    const listOfRadios = document.getElementsByName("tipOptions");

    for (let radio of listOfRadios) {
      radio.checked = false;
    }
  };

  // Function to handle change in form to compute outputs
  useEffect(() => {
    if (!peopleAmount) {
      return;
    }

    // If standard tip amounts used this will run
    if (!useCustomTip) {
      const percentTipSt = tipAmount / 100;
      const totalTip = billAmount * percentTipSt;
      const tipPerPerson = totalTip / peopleAmount;
      const totalPerPerson = (billAmount + totalTip) / peopleAmount;

      const roundedValues = {
        tip: Math.floor(tipPerPerson * 100) / 100,
        total: Math.ceil(totalPerPerson * 100) / 100,
      };

      setPersonTip(roundedValues.tip.toFixed(2));
      setPersonTotal(roundedValues.total.toFixed(2));
      return;
    }

    // If custom tip amount used this will run
    if (useCustomTip) {
      console.log(`Tip custom`);

      const percentTipCu = customTip / 100;
      const totalTip = billAmount * percentTipCu;
      const tipPerPerson = totalTip / peopleAmount;
      const totalPerPerson = (billAmount + totalTip) / peopleAmount;

      const roundedValues = {
        tip: Math.floor(tipPerPerson * 100) / 100,
        total: Math.ceil(totalPerPerson * 100) / 100,
      };

      setPersonTip(roundedValues.tip.toFixed(2));
      setPersonTotal(roundedValues.total.toFixed(2));
      return;
    }
  }, [billAmount, tipAmount, useCustomTip, customTip, peopleAmount]);

  return (
    <div className={styles.webpage}>
      <div className={styles.container}>
        <Image
          src="/tipcalc/logo.svg"
          alt="SPLITTER Logo"
          width="75"
          height="50"
        />
        <div className={styles.tipbox}>
          <form className={styles.inputbox}>
            {/* Input for bill amount */}
            <div className={styles.billcontainer}>
              <label htmlFor="bill">Bill</label>
              <span className={styles.billrelative}>
                <Image
                  src="/tipcalc/icon-dollar.svg"
                  alt="Dollar Sign"
                  width="10"
                  height="16"
                  className={styles.dollarsign}
                />
                <input
                  type="number"
                  id="bill"
                  name="bill"
                  min="0"
                  step="0.01"
                  value={billAmount}
                  onChange={handleBillChange}
                  onClick={() => {
                    if (billAmount == 0) {
                      setBillAmount("");
                    }
                  }}
                  className={styles.billinput}
                />
              </span>
            </div>

            <br />

            {/* Input for tip amount */}
            <div>
              <p>Select Tip %</p>
              <div className={styles.tipgrid}>
                {tipOptions.map((tip) => {
                  return (
                    <div key={tip}>
                      <input
                        type="radio"
                        name="tipOptions"
                        value={tip}
                        id={tip}
                        className={styles.tipbutton}
                        onClick={handleTipChange}
                      />
                      <label htmlFor={tip} className={styles.tiplabel}>
                        {tip}%
                      </label>
                    </div>
                  );
                })}
                <div>
                  <input
                    type="number"
                    key="custom"
                    name="tipOptions"
                    value={customTip}
                    id="custom"
                    className={
                      useCustomTip ? styles.tipbutton : styles.tipbuttonhidden
                    }
                    onChange={handleTipChange}
                  />
                  <label
                    htmlFor="custom"
                    key="custom1"
                    className={
                      useCustomTip ? styles.hiddentiplabel : styles.tiplabel
                    }
                    onClick={() => {
                      setUseCustomTip(true);
                      const listOfRadios =
                        document.getElementsByName("tipOptions");

                      for (let radio of listOfRadios) {
                        radio.checked = false;
                      }
                    }}
                  >
                    Custom
                  </label>
                </div>
              </div>
            </div>

            <br />

            {/* Input for amount of people */}
            <div className={styles.peoplecontainer}>
              <label htmlFor="people">Number of People</label>
              <span className={styles.peoplerelative}>
                <Image
                  src="/tipcalc/icon-person.svg"
                  alt="Person Sign"
                  width="12"
                  height="16"
                  className={styles.peoplesign}
                />
                <input
                  type="number"
                  id="people"
                  name="people"
                  step="1"
                  value={peopleAmount}
                  onChange={handlePeopleChange}
                  className={styles.peopleinput}
                  onClick={() => {
                    setPeopleAmount("");
                  }}
                />
              </span>
            </div>
          </form>

          <div className={styles.outputbox}>
            <div className={styles.outputamounts}>
              <span className={styles.left}>
                <p>Tip Amount</p> <p className={styles.lightgrey}>/ person</p>
              </span>
              <p className={styles.right}>${personTip}</p>
              <span className={styles.left}>
                <p>Total</p> <p className={styles.lightgrey}>/ person</p>
              </span>
              <p className={styles.right}>${personTotal}</p>
            </div>

            <button className={styles.resetbutton} onClick={handleReset}>
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
