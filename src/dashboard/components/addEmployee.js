import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./navBar";
import { Fragment } from "react";
import styles from "./addEmployee.module.scss";
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

export default function AddEmployee({ onDataReceived }) {
  const history = useNavigate();

  // IMAGE URL AND IMAGE STATE
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

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

  // USEEFFECT FOR IMAGE HANDLER
  useEffect(() => {
    const newImageURLs = [];
    images.forEach((image) => newImageURLs.push(URL.createObjectURL(image)));
    setImageURLs(newImageURLs);
  }, [images]);

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
      .post(
        "https://payroll-team9.onrender.com/api/v1/employees/",
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
    <Fragment>
      <NavBar name={title} onDataReceived={onDataReceived} />
      {/* ADD OR REMOVE FUNCTION */}
      <div className={styles.addContainer}>
        <div className={styles.add_text}>
          <h3>Add Employee</h3>
        </div>
      </div>

      {/* main form */}

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
              First Name{" "}
              <input
                type="text"
                placeholder="First Name"
                value={name}
                onChange={handleNameChange}
              />
            </label>

            <label className={styles.label}>
              Last Name
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </label>

            <label className={styles.label}>
              Job Role{" "}
              <input
                type="text"
                placeholder="e.g Private Limited"
                value={job}
                onChange={handleJobChange}
              />
            </label>

            <label className={styles.label}>
              E-mail
              <input
                type="text"
                placeholder="Email@gmail.com"
                value={email}
                onChange={handleEmailChange}
              />
            </label>

            <label className={styles.label}>
              Mobile Number{" "}
              <input
                type="number"
                placeholder="+234"
                value={number}
                onChange={handleNumberChange}
              />
            </label>

            <label className={styles.label}>
              wallet Address
              <input
                type="text"
                placeholder="number"
                value={walletAdress}
                onChange={handleWalletAdressChange}
              />
            </label>

            <label className={styles.label}>
              Salary
              <input
                type="number"
                placeholder="$ Amount"
                value={salary}
                onChange={handleSalaryChange}
              />
            </label>

            <label className={styles.label}>
              Deduct
              <input
                type="number"
                placeholder="$ 0"
                value={deduct}
                onChange={handleDeductChange}
              />
            </label>

            <label className={styles.label}>
              Bonus
              <input
                type="number"
                placeholder="$ 0"
                value={bonus}
                onChange={handleBonusChange}
              />
            </label>
          </div>
          <div className={styles.button}>
            <button type="submit" className={styles.button1}>
              Save
            </button>
            <button type="submit" className={styles.button2}>
              Discard
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}
