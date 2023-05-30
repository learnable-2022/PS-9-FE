import React from "react";
import { Fragment } from "react";
import styles from "./walletDetails.module.scss";
import NavBar from "./navBar";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";

export default function WalletDetails() {
  const title = "WALLET DETAILS";

  return (
    <Fragment>
      <NavBar name={title} />
      {/* HELLO SECTION */}
      <div className={styles.intro}>
        <h2>Wallet Address: </h2>
        <div className={styles.wallet_details}>
          <p> hgfgdshegeyhhrthrthrhrh</p>
          <BorderColorIcon className={styles.icon} />
          <ContentCopyIcon
            className={styles.icon}
            // onClick={() => {
            //   navigator.clipboard.writeText(this.state.text);
            // }}
          />
        </div>
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
        <button className={styles.btn}>
          <p>
            {" "}
            DEPOSIT <SystemUpdateAltIcon className={styles.deposit_icon} />
          </p>
        </button>
        <button className={styles.btn}>
          <p>
            WITHDRAW <SystemUpdateAltIcon className={styles.upload_icon} />
          </p>
        </button>
      </div>

      {/* PAYMENT HISTORY */}

      <h2 className={styles.payment_title}>Wallet History</h2>
      <div className={styles.list_container}>
        <div className={styles.list_details}>
          <h3>DATE</h3>

          <h3>TRANSACTIONS</h3>
          <h3>USDT</h3>
          <h3>AMOUNT ($)</h3>
        </div>
      </div>
    </Fragment>
  );
}
