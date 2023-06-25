import React from "react";
import { Fragment } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import styles from "./navBar.module.scss";
import FeedbackIcon from "@mui/icons-material/Feedback";
import MenuIcon from "@mui/icons-material/Menu";
import inno from "../images/inno.webp";
import { useStore } from "./useStore";
import useEffect from "react";

export default function NavBar({ onDataReceived, name }) {
  const { company } = useStore();
  localStorage.setItem("company", company);

  const com = localStorage.getItem("company");
  const handleClick = () => {
    const data = "Special";
    onDataReceived(data);
  };

  return (
    <Fragment>
      <div className={styles.nave}>
        <div className={styles.text}>
          <MenuIcon className={styles.menu} onClick={handleClick}></MenuIcon>
          <h2>{name}</h2>
        </div>

        <div className={styles.icons}>
          <img className={styles.img} src={inno} />
          <h4>{com}</h4>
          <NotificationsIcon className={styles.bell} />
          <FeedbackIcon className={styles.noti} />
        </div>
      </div>
    </Fragment>
  );
}
