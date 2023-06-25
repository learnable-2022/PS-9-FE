import React from "react";
import "./SignIn.css";
import logo from "../image/logo.webp";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../../App";

const SignIn = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
    <section className="signIn">
      <img src={logo} alt="logo" className="logo" />
      <div className="signIn-form">
        <label htmlFor="name">An Automated Payroll System</label>

        <a href="https://ddd1signup.netlify.app/" className="signIn-btn">
          CREATE AN ACCOUNT
        </a>

        <button className="signIn-btn" id="name" onClick={navigateToLogin}>
          SIGN IN
        </button>
      </div>
    </section>
  );
};

export default SignIn;
