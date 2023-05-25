import React from "react";
import NavBar from "./navBar";
import { Fragment } from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./employerDetails.module.scss";
import { Link } from "react-router-dom";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Switch,
} from "react-router-dom";
import AddEmployee from "./addEmployee";

export default function EmployerDetails() {
  return (
    <Fragment>
      <NavBar />
      {/* DETAILS FUNCTIONS */}
      <div className={styles.details_functions}>
        <h4>Total Employees: 0</h4>

        <button className={styles.button1}>
          <Link className={styles.link} to="/addEmployee">
            ADD
          </Link>
        </button>
        <input type="text" />
        <span className={styles.search_container}>
          <SearchIcon className={styles.search_icon} />
        </span>
      </div>

      {/* EMPLOYEE LIST */}
      <div className={styles.list_container}>
        <div className={styles.list_details}>
          <h3>S/N</h3>
          <h3>First Name</h3>
          <h3>Last Name</h3>
          <h3>Role</h3>
          <h3>Earned</h3>
        </div>
      </div>

      <Routes>
        <Route path="/addEmployee" element={<AddEmployee />} />
      </Routes>
    </Fragment>
  );
}
