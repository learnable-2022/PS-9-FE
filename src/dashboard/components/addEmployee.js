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
import { useStore } from "./useStore";
import Spinner from "./popups/spinner";
import { BeatLoader } from "react-spinners";

export default function AddEmployee({ onDataReceived }) {
  const [isLoading, setIsLoading] = useState(false);
  const history = useNavigate();

  // IMAGE URL AND IMAGE STATE
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const { userWallet, userEmployees, userId } = useStore();
  localStorage.setItem("userId", userId);

  const user = localStorage.getItem("userId");

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

  const [warning, setWarning] = useState("");

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
    paid: "0",
    user: user,
  };

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    setEmployeeData(newData);
    console.log(employeeData);
    const accessToken = localStorage.getItem("accessToken");
    axios
      .post("https://payroll-team9.onrender.com/api/v1/employees/", newData, {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Include the access token in the Authorization header
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        console.log("Response:", response);
        setName("");
        setLastName("");
        setJob("");
        setEmail("");
        setNumber("");
        setAdress("");
        setSalary("");
        setDeduct("");
        setBonus("");
        window.alert("Employee added");
        setWarning("");
      })
      .catch(function (error) {
        console.error("Error:", error);
        console.error(error.response.data.message);
        setWarning(error.response.data.message);
      })
      .finally(() => {
        setIsLoading(false); // Update loading state when completed or errored
      });
  };
  // DYNAMIC NAVBAR TITLE
  const title = "ADD EMPLOYEE";

  // RETURN STATEMENT AND JSX CODE

  return (
    <Fragment>
      <NavBar name={title} onDataReceived={onDataReceived} />
      {/* ADD OR REMOVE FUNCTION */}

      {/* main form */}
      <p className={styles.warning}> {warning} </p>
      <div className={styles.form_container}>
        {isLoading ? (
          <div classname={styles.loadder}>
            <BeatLoader color="#8440ba" />
          </div>
        ) : (
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
                  placeholder="$ Amount"
                  value={salary}
                  onChange={handleSalaryChange}
                  type="number"
                />
              </label>

              <label className={styles.label}>
                Deduct
                <input
                  placeholder="$ 0"
                  value={deduct}
                  onChange={handleDeductChange}
                  type="number"
                />
              </label>

              <label className={styles.label}>
                Bonus
                <input
                  placeholder="$ 0"
                  value={bonus}
                  onChange={handleBonusChange}
                  type="number"
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
        )}
      </div>
    </Fragment>
  );
}
