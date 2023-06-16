import React from "react";
import { Fragment } from "react";
import styles from "./dashboardButton.module.scss";
import NavBar from "./navBar";

export default function Dashboard({ onDataReceived }) {
  const title = "DASHBOARD";

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
          <h2>$20,000</h2>
        </div>
        <div className={styles.balance_item}>
          <p>Total Spent:</p>
          <h2>$0</h2>
        </div>
        <div className={styles.balance_item}>
          <p>Total Employees:</p>
          <h2>0</h2>
        </div>
      </div>
      {/* 
     WALLET ADRESS INFO SECTIPON */}

      <div className={styles.wallet_info}>
        <p>
          Wallet Address: <span className={styles.adre}> hftshdfggffh</span>
        </p>
        <p>
          <span className={styles.numb}>28 Days till next payment</span>
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
