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
import { useEffect, useState } from "react";
import axios from "axios";
import { Key } from "@mui/icons-material";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TablePagination,
} from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import FullScreenDialog from "./Edith";
export default function EmployerDetails({ onDataReceived }) {
  const [dataa, setData] = useState([]);
  const [showComponent, setShowComponent] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    axios
      .get("https://payroll-team9.onrender.com/api/v1/employees")
      .then((response) => {
        setData(response.data);
      })

      .catch((error) => {
        console.log(error);
      });

    console.log(dataa);
  }, []);
  const numRow = dataa.length;

  const yyy = (id) => {
    console.log(id);
    setSelectedId(id);
  };

  return (
    <Fragment>
      <NavBar onDataReceived={onDataReceived} />
      {/* DETAILS FUNCTIONS */}
      <div className={styles.details_functions}>
        <h4>Total Employees: {numRow}</h4>

        <button className={styles.button1}>
          <Link className={styles.link} to="/home/home/addEmployee">
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
        <div className={styles.title_div}>
          <TableContainer component={Paper} sx={{ maxHeight: "350px" }}>
            <Table aria-label="Simple Table" stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell align="center">Salary</TableCell>
                  <TableCell>Action</TableCell>
                  <TableCell>Deducted</TableCell>
                  <TableCell>Bonus</TableCell>
                  <TableCell>Earned</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataa.map((row) => (
                  <TableRow key={row._id} className={styles.row}>
                    <TableCell>
                      {row.firstName} {row.lastName}
                    </TableCell>
                    <TableCell>{row.jobRole}</TableCell>
                    <TableCell>{row.salary}</TableCell>
                    <TableCell>
                      <button onClick={(event) => yyy(row._id)}>
                        <FullScreenDialog selectedId={selectedId} />
                      </button>
                    </TableCell>
                    <TableCell align="center">{row.deducted}</TableCell>
                    <TableCell align="center">{row.bonus}</TableCell>
                    <TableCell align="center">{row.salary}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

      <button className={styles.pay_btn}>PAYOUT</button>
      <Routes>
        <Route path="/addEmployee" element={<AddEmployee />} />
      </Routes>
    </Fragment>
  );
}
