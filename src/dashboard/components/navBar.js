import React from "react";
import { Fragment } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import styles from "./navBar.module.scss";
import FeedbackIcon from "@mui/icons-material/Feedback";
import MenuIcon from "@mui/icons-material/Menu";
import inno from "../images/inno.webp";

export default function NavBar({ onDataReceived }) {
  const handleClick = () => {
    const data = "Special";
    onDataReceived(data);
  };

  return (
    <Fragment>
      <div className={styles.nave}>
        <div className={styles.text}>
          <MenuIcon className={styles.menu} onClick={handleClick}></MenuIcon>
          <h2>Dashboard</h2>
        </div>

        <div className={styles.icons}>
          <img className={styles.img} src={inno} />
          <h4>company name</h4>
          <NotificationsIcon className={styles.bell} />
          <FeedbackIcon className={styles.noti} />
        </div>
      </div>
    </Fragment>
  );
}
