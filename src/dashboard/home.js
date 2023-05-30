import React from "react";
import styles from "./home.module.scss";
import { Fragment } from "react";
import logo from "./images/Group 2.png";
import GridViewIcon from "@mui/icons-material/GridView";
import WalletIcon from "@mui/icons-material/Wallet";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import SettingsIcon from "@mui/icons-material/Settings";
import ReactDOM from "react-dom";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Switch,
} from "react-router-dom";
import AddEmployee from "./components/addEmployee";
import WalletDetails from "./components/walletDetails";
import { Link } from "react-router-dom";
import EmployerDetails from "./components/employerDetails";
import Analytics from "./components/analytics";
import Dashboard from "./components/dashboardButton";
import { useState } from "react";

import classNames from "classnames";

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveState = () => {
    setIsActive(!isActive);
  };

  const divClass = isActive ? "styles.active" : "";

  const completedClass = isActive ? "styles.active" : "";
  console.log(completedClass);
  return (
    <Fragment>
      <Router>
        <div className={styles.parent}>
          <div className={styles.sidebar}>
            <div className={styles.logo}>
              <img src={logo} />
            </div>
            {/* className={[styles.dashboard]} */}
            {/* OTHER SIDE BAR  NAV COMPONENTS */}
            <div
              className={`${styles.dashboard} ${completedClass}`}
              onClick={toggleActiveState}
            >
              <GridViewIcon className={styles.dash} />
              <Link to="/" className={styles.link}>
                <h2>Dashboard</h2>
              </Link>
            </div>
            <div
              className={`${styles.wallet} ${completedClass}`}
              onClick={toggleActiveState}
            >
              <WalletIcon className={styles.icon} />
              <Link className={styles.link} to="/wallet">
                <h2> Wallet Details</h2>
              </Link>
            </div>
            <div className={styles.employee}>
              <Diversity3Icon className={styles.icon} />

              <Link className={styles.link} to="/employerdetails">
                <h2> Employee Details</h2>
              </Link>
            </div>
            <div className={styles.add}>
              <BorderColorIcon className={styles.add_icon} />

              <Link className={styles.link} to="/addemployee">
                <h2> Add/Remove Employee</h2>
              </Link>
            </div>
            <div className={styles.analytics}>
              <SettingsIcon className={styles.analytics_icon} />

              <Link className={styles.link} to="/analytics">
                <h2> Settings</h2>
              </Link>
            </div>
            <div className={styles.logout}>
              <h2>Logout</h2>
            </div>
          </div>
          <div>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/wallet" element={<WalletDetails />} />
              <Route path="/employerdetails" element={<EmployerDetails />} />
              <Route path="/addemployee" element={<AddEmployee />} />
              <Route path="/analytics" element={<Analytics />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Fragment>
  );
}
