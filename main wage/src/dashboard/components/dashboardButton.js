import React from "react";
import { Fragment, useState, useEffect } from "react";
import styles from "./dashboardButton.module.scss";
import NavBar from "./navBar";
import axios from "axios";
import { useStore } from "./useStore";

export default function Dashboard({ onDataReceived }) {
  const title = "DASHBOARD";
  const { userWallet, userEmployees } = useStore();
  localStorage.setItem("userWallet", userWallet);
  localStorage.setItem("userEmployees", userEmployees);

  const employeesNo = localStorage.getItem("userEmployees");
  const walletNo = localStorage.getItem("userWallet");
  const [count, setCount] = useState(28);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const currentHour = currentDate.getHours();

      if (currentHour === 23) {
        setCount((prevCount) => {
          if (prevCount === 0) {
            return 28; // Reset to 28 when count reaches zero
          }
          return prevCount - 1; // Decrement count by 1
        });
      }
    }, 3600000); // 1 hour in milliseconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Fragment>
      <NavBar name={title} onDataReceived={onDataReceived} />
      {/* HELLO SECTION */}
      <div className={styles.intro}>
        <h2>Hello, </h2>
        <p>Here is your transaction overview</p>
      </div>

      {/* BALLANCE SUMMARY SECTION */}

      <div className={styles.balance_container}>
        <div className={styles.balance_item}>
          <p>Boook Balance:</p>
          <h2>$0</h2>
        </div>
        <div className={styles.balance_item}>
          <p>Total Spent:</p>
          <h2>$0</h2>
        </div>
        <div className={styles.balance_item}>
          <p>Total Employees:</p>
          <h2>{employeesNo}</h2>
        </div>
      </div>
      {/* 
     WALLET ADRESS INFO SECTIPON */}

      <div className={styles.wallet_info}>
        <p>
          Wallet Address: <span className={styles.adre}> {walletNo}</span>
        </p>
        <p>
          <span className={styles.numb}>{count} Days till next payment</span>
        </p>
      </div>

      {/* PAYMENT HISTORY */}

      <h2 className={styles.payment_title}>Payment History</h2>
      <div className={styles.list_container}>
        <div className={styles.list_details}>
          <h3>Employee Name</h3>
          <h3>Wallet Address</h3>
          <h3>Salary</h3>
          <h3>Paid</h3>
        </div>
      </div>
    </Fragment>
  );
}
