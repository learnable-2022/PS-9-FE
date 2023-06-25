import React from "react";
import styles from "./home.module.scss";
import { Fragment } from "react";
import logo from "./images/Group 2.png";
import GridViewIcon from "@mui/icons-material/GridView";
import WalletIcon from "@mui/icons-material/Wallet";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import SettingsIcon from "@mui/icons-material/Settings";
import ReactDOM from "react-dom";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Switch,
  useLocation,
} from "react-router-dom";
import AddEmployee from "./components/addEmployee";
import WalletDetails from "./components/walletDetails";
import { Link } from "react-router-dom";
import EmployerDetails from "./components/employerDetails";
import Analytics from "./components/analytics";
import Dashboard from "./components/dashboardButton";
import { useState, useEffect } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import NavBar from "./components/navBar";

import classNames from "classnames";
export default function Home() {
  const location = useLocation();
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isBuggarClicked, setIsBuggarClicked] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked);
  };

  const handleDataFromGrandchild = (data) => {
    setIsBuggarClicked(!isBuggarClicked);
  };

  return (
    <Fragment>
      {/* <Router> */}
      <div
        className={` ${styles.parent}  ${
          isButtonClicked ? styles.highlight : ""
        }   ${isBuggarClicked ? styles.special_class : ""}`}
      >
        <div className={` ${styles.sidebar} `}>
          <div className={styles.logo}>
            <img src={logo} />
          </div>

          {/* OTHER SIDE BAR  NAV COMPONENTS */}
          <div
            className={classNames(styles.dashboard, {
              [styles.active]: location.pathname === "/home/home/dashboard",
            })}
          >
            <Link to="home/dashboard" className={styles.link}>
              <GridViewIcon className={styles.dash} />
            </Link>{" "}
            <Link to="home/dashboard" className={styles.link}>
              <h2>Dashboard</h2>
            </Link>
          </div>

          <div
            className={classNames(styles.wallet, {
              [styles.active]: location.pathname === "/home/home/wallet",
            })}
          >
            <Link className={styles.link} to="home/wallet">
              <WalletIcon className={styles.icon} />
            </Link>
            <Link className={styles.link} to="home/wallet">
              <h2> Wallet Details</h2>
            </Link>
          </div>
          <div
            className={classNames(styles.employee, {
              [styles.active]:
                location.pathname === "/home/home/employerdetails",
            })}
          >
            <Link className={styles.link} to="home/employerdetails">
              <Diversity3Icon className={styles.icon} />
            </Link>
            <Link className={styles.link} to="home/employerdetails">
              <h2> Employee Info</h2>
            </Link>
          </div>
          <div
            className={classNames(styles.add, {
              [styles.active]: location.pathname === "/home/home/addemployee",
            })}
          >
            <Link className={styles.link} to="home/addemployee">
              <BorderColorIcon className={styles.icon} />
            </Link>
            <Link className={styles.link} to="home/addemployee">
              <h2> Add Employee</h2>
            </Link>
          </div>
          <div
            className={classNames(styles.analytics, {
              [styles.active]: location.pathname === "/home/home/analytics",
            })}
          >
            <Link className={styles.link} to="/analytics">
              <SettingsIcon className={styles.icon} />
            </Link>{" "}
            <Link className={styles.link} to="home/analytics">
              <h2> Settings</h2>
            </Link>
          </div>
          <div className={styles.logout}>
            <h2>Logout</h2>
          </div>
        </div>

        <div className={styles.renderComponent}>
          <Routes>
            <Route
              path="home/dashboard"
              element={<Dashboard onDataReceived={handleDataFromGrandchild} />}
            />
            <Route
              path="home/wallet"
              element={
                <WalletDetails onDataReceived={handleDataFromGrandchild} />
              }
            />

            <Route
              path="home/employerdetails/"
              element={
                <EmployerDetails onDataReceived={handleDataFromGrandchild} />
              }
            />
            <Route
              path="home/addemployee"
              element={
                <AddEmployee onDataReceived={handleDataFromGrandchild} />
              }
            />
            <Route
              path="home/analytics"
              element={<Analytics onDataReceived={handleDataFromGrandchild} />}
            />
          </Routes>
        </div>
      </div>
      {/* </Router> */}
    </Fragment>
  );
}
