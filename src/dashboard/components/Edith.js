import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

import { useState, useEffect } from "react";
import NavBar from "./navBar";
import { Fragment } from "react";

import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Switch,
} from "react-router-dom";
import { forwardRef } from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import styles from "./Edith.module.scss";
import BootstrapDialogTitle from "./popups/Delete";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// STUFFS START HERE
export default function FullScreenDialog({ selectedId }) {
  const [open, setOpen] = React.useState(false);
  const [dialogSelectedId, setDialogSelectedId] = useState(null);
  // IMAGE URL AND IMAGE STATE
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  // DIALOGO FUNCTIONS

  // USEEFFECT FOR IMAGE HANDLER

  // Rest of your component code...
  useEffect(() => {
    const newImageURLs = [];
    images.forEach((image) => newImageURLs.push(URL.createObjectURL(image)));
    setImageURLs(newImageURLs);
    if (selectedId !== dialogSelectedId) {
      setDialogSelectedId(selectedId);
      console.log(dialogSelectedId);
      console.log("received");

      const fetchData = axios
        .get(
          `https://payroll-team9.onrender.com/api/v1/employees/${selectedId}`
        )
        .then((response) => {
          // Handle successful response
          console.log("Response:", response.data);
          const data = response.data;
          setEmployeeData(data);
        })
        .catch((error) => {
          // Handle error
          console.error("Error:", error);
        });
    }
  }, [selectedId, dialogSelectedId, images]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event) => {
    setOpen(false);
  };

  //   FORM STUFSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS

  const history = useNavigate();

  // INPUT FIELD EVENTS ASSIGNMENT
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [job, setJob] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [walletAdress, setAdress] = useState("");
  const [salary, setSalary] = useState("");
  const [deduct, setDeduct] = useState("");
  const [bonus, setBonus] = useState("");
  const [employeeData, setEmployeeData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobRole: "",
    deducted: "",
    phone: "",
    wallet: "",
    salary: "",
    bonus: "",
  });

  // INPUT EVENT HANDLE FUNCTION

  function onImageChange(e) {
    setImages([...e.target.files]);
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleJobChange = (event) => {
    setJob(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleWalletAdressChange = (event) => {
    setAdress(event.target.value);
  };

  const handleSalaryChange = (event) => {
    setSalary(event.target.value);
  };

  const handleDeductChange = (event) => {
    setDeduct(event.target.value);
  };

  const handleBonusChange = (event) => {
    setBonus(event.target.value);
  };

  // a  Employee data object with the payload for the POST request
  const newData = {
    firstName: name,
    lastName: lastName,
    email: email,
    jobRole: job,
    deducted: deduct,
    phone: number,
    wallet: walletAdress,
    salary: salary,
    bonus: bonus,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmployeeData(newData);

    const accessToken = localStorage.getItem("accessToken");
    axios
      .put(
        `https://payroll-team9.onrender.com/api/v1/employees/${selectedId}`,
        employeeData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Include the access token in the Authorization header
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log("Response:", response);
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
  };
  // DYNAMIC NAVBAR TITLE
  const title = "ADD EMPLOYEE";

  // RETURN STATEMENT AND JSX CODE

  const data = "add employee";

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        className={styles.edit_container}
      >
        <BorderColorIcon className={styles.edit_btn} />
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Edith Employee
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Cancel
            </Button>
          </Toolbar>
        </AppBar>
        <div className={styles.form_container}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.employee_img}>
              <div
                className={styles.employee_img_container}
                onClick={() => document.querySelector(".teeth").click()}
              >
                <input
                  // className={styles.img_upload}
                  className="teeth"
                  type="file"
                  // multiple
                  // accept="image/*"
                  onChange={onImageChange}
                  hidden
                />
                <AddIcon className={styles.add_icon} />

                {imageURLs.map((imageSrc) => (
                  <img src={imageSrc} className={styles.profile_img} />
                ))}
              </div>
              <h3>Employee Profile</h3>
            </div>
            {/* 
                INFORMATION GRID */}

            <div className={styles.info_grid}>
              <label className={styles.label}>
                First Name:
                <input
                  type="text"
                  placeholder="First Name"
                  value={employeeData.firstName}
                  onChange={handleNameChange}
                />
              </label>

              <label className={styles.label}>
                Last Name:
                <input
                  type="text"
                  placeholder="Last Name"
                  value={employeeData.lastName}
                  onChange={handleLastNameChange}
                />
              </label>

              <label className={styles.label}>
                Job Role:
                <input
                  type="text"
                  placeholder="e.g Private Limited"
                  value={employeeData.jobRole}
                  onChange={handleJobChange}
                />
              </label>

              <label className={styles.label}>
                E-mail:
                <input
                  type="text"
                  placeholder="Email@gmail.com"
                  value={employeeData.email}
                  onChange={handleEmailChange}
                />
              </label>

              <label className={styles.label}>
                Mobile Number:
                <input
                  type="number"
                  placeholder="+234"
                  value={employeeData.phone}
                  onChange={handleNumberChange}
                />
              </label>

              <label className={styles.label}>
                Wallet Address:
                <input
                  type="number"
                  placeholder="Number"
                  value={employeeData.wallet}
                  onChange={handleWalletAdressChange}
                />
              </label>

              <label className={styles.label}>
                Salary:
                <input
                  type="number"
                  placeholder="$ 0"
                  value={employeeData.salary}
                  onChange={handleSalaryChange}
                />
              </label>

              <label className={styles.label}>
                Deduct:
                <input
                  type="number"
                  placeholder="$ 0"
                  value={employeeData.deducted}
                  onChange={handleDeductChange}
                />
              </label>

              <label className={styles.label}>
                Bonus:
                <input
                  type="number"
                  placeholder="$ 0"
                  value={employeeData.bonus}
                  onChange={handleBonusChange}
                />
              </label>
            </div>
            <div className={styles.button}>
              <BootstrapDialogTitle selectedId={selectedId} />

              <button type="submit" className={styles.button2}>
                Save
              </button>
            </div>
          </form>
        </div>
      </Dialog>
    </div>
  );
}
