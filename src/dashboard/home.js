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
import { useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import NavBar from "./components/navBar";

import classNames from "classnames";

export default function Home() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isBuggarClicked, setIsBuggarClicked] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked);
  };

  const handleDataFromGrandchild = (data) => {
    setIsBuggarClicked(!isBuggarClicked);
  };
  // ${styles.sidebar}  ${
  //               isBuggarClicked ? styles.special_class : ""
  //             }`
  return (
    <Fragment>
      <Router>
        <div
          className={` ${styles.parent}  ${
            isButtonClicked ? styles.highlight : ""
          }   ${isBuggarClicked ? styles.special_class : ""}`}
        >
          <div className={` ${styles.sidebar} `}>
            <div className={styles.logo}>
              <img src={logo} />
            </div>
            <div className={styles.shift}>
              <button onClick={handleButtonClick} className={styles.shiftNav}>
                <ArrowCircleLeftIcon className={styles.shiftNavIcon} />
              </button>
            </div>

            {/* OTHER SIDE BAR  NAV COMPONENTS */}
            <div className={styles.dashboard}>
              <Link to="/" className={styles.link}>
                <GridViewIcon className={styles.dash} />
              </Link>{" "}
              <Link to="/" className={styles.link}>
                <h2>Dashboard</h2>
              </Link>
            </div>
            <div className={styles.wallet}>
              <Link className={styles.link} to="/wallet">
                <WalletIcon className={styles.icon} />
              </Link>
              <Link className={styles.link} to="/wallet">
                <h2> Wallet Details</h2>
              </Link>
            </div>
            <div className={styles.employee}>
              <Link className={styles.link} to="/employerdetails">
                <Diversity3Icon className={styles.icon} />
              </Link>
              <Link className={styles.link} to="/employerdetails">
                <h2> Employee Details</h2>
              </Link>
            </div>
            <div className={styles.add}>
              <Link className={styles.link} to="/addemployee">
                <BorderColorIcon className={styles.add_icon} />
              </Link>{" "}
              <Link className={styles.link} to="/addemployee">
                <h2> Add/Remove Employee</h2>
              </Link>
            </div>
            <div className={styles.analytics}>
              <Link className={styles.link} to="/analytics">
                <SettingsIcon className={styles.analytics_icon} />
              </Link>{" "}
              <Link className={styles.link} to="/analytics">
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
                path="/"
                element={
                  <Dashboard onDataReceived={handleDataFromGrandchild} />
                }
              />
              <Route
                path="/wallet"
                element={
                  <WalletDetails onDataReceived={handleDataFromGrandchild} />
                }
              />
              <Route
                path="/employerdetails"
                element={
                  <EmployerDetails onDataReceived={handleDataFromGrandchild} />
                }
              />
              <Route
                path="/addemployee"
                element={
                  <AddEmployee onDataReceived={handleDataFromGrandchild} />
                }
              />
              <Route
                path="/analytics"
                element={
                  <Analytics onDataReceived={handleDataFromGrandchild} />
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    </Fragment>
  );
}
