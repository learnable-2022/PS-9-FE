import SignIn from "./component/SignIn";

import { Routes, Route } from "react-router-dom";
import Login from "./component/Login";

import Home from "../dashboard/home";

function Sign() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<SignIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="home/*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default Sign;
