import React from "react";
import { Fragment } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import styles from "./navBar.module.scss";
import FeedbackIcon from "@mui/icons-material/Feedback";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar({ onDataReceived }) {
  const handleClick = () => {
    const data = "Special";
    onDataReceived(data);
  };

  return (
    <Fragment>
      <div className={styles.nave}>
        <MenuIcon className={styles.menu} onClick={handleClick}></MenuIcon>
        <h2>Dashboard</h2>
        <img className={styles.img} />
        <h4>company name</h4>
        <NotificationsIcon className={styles.bell} />
        <FeedbackIcon className={styles.noti} />
      </div>
    </Fragment>
  );
}
