import React from "react";
import { Fragment } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import styles from "./navBar.module.scss";
import FeedbackIcon from "@mui/icons-material/Feedback";

export default function NavBar(props) {
  return (
    <Fragment>
      <div className={styles.nave}>
        <h2>{props.name}</h2>
        <img className={styles.img} />
        <h4>company name</h4>
        <NotificationsIcon className={styles.bell} />
        <FeedbackIcon className={styles.noti} />
      </div>
    </Fragment>
  );
}
