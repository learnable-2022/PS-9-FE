import SignIn from "./component/SignIn";

import { Routes, Route } from "react-router-dom";
import Login from "./component/Login";

import Home from "../dashboard/home";
import LandingPage from "./landingpage/LandingPage";
import { Fragment } from "react";

function Sign() {
  return (
    <Fragment>
      <Routes>
        <Route path="home/*" element={<Home />} />
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/getstarted" exact element={<SignIn />} />
        <Route path="/login" exact element={<Login />} />
      </Routes>
    </Fragment>
  );
}

export default Sign;
