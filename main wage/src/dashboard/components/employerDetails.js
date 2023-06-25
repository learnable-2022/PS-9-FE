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
import { useStore } from "./useStore";
import { BeatLoader } from "react-spinners";

// NA HERE COMPKNENT START

export default function EmployerDetails({ onDataReceived, data, updateData }) {
  const [dataa, setData] = useState([]);
  const [showComponent, setShowComponent] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [numRow, setNumRow] = useState(0);
  const { userWallet, userEmployees, userId } = useStore();
  localStorage.setItem("userId", userId);

  const user = localStorage.getItem("userId");
  const [refresh, setRefresh] = useState(false);
  const [refreshId, setRefreshId] = useState(0);

  useEffect(() => {
    axios
      .get(`https://payroll-team9.onrender.com/api/v1/employees/user/${user}`)
      .then((response) => {
        setData(response.data.data.employees);
        setNumRow(response.data.data.employees.length); // Update numRow with the length of dataa
        console.log(response.data.data.employees[0]);
        console.log(response.data.data.employees.length);
        console.log(dataa.data.employees);
      })

      .catch((error) => {
        console.log(error);
      });
  }, [refresh]);

  const yyy = (id) => {
    console.log(id);
    setSelectedId(id);
  };

  const handleRefresh = () => {
    setRefresh((prevState) => !prevState);
    console.log("refresh", refresh);
  };
  const title = "EMPLOYEE INFO";
  return (
    <Fragment>
      <NavBar onDataReceived={onDataReceived} name={title} />

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
          {dataa.length > 0 ? (
            <TableContainer
              component={Paper}
              sx={{ maxHeight: "350px", zIndex: -1 }}
            >
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
                      <TableCell>${row.salary}</TableCell>
                      <TableCell>
                        <span
                          onClick={(event) => yyy(row._id)}
                          className={styles.edit_employee}
                        >
                          <FullScreenDialog
                            selectedId={selectedId}
                            sx={{ backgroundColor: "none" }}
                            onDialogAction={handleRefresh}
                          />
                        </span>
                      </TableCell>
                      <TableCell align="center">${row.deducted}</TableCell>
                      <TableCell align="center">${row.bonus}</TableCell>
                      <TableCell align="center">${row.salary}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <div className={styles.payout}>
              <BeatLoader color="#8440ba" />
              <p> No Employee Addded </p>
            </div>
          )}
        </div>
      </div>

      <div className={styles.payout}>
        <button className={styles.pay_btn}>PAYOUT</button>
      </div>
      <Routes>
        <Route path="/addEmployee" element={<AddEmployee />} />
      </Routes>
    </Fragment>
  );
}
