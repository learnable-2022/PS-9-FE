import logo from "./logo.svg";
import "./App.css";
import Home from "./dashboard/home";
import { Fragment } from "react";
import Sign from "./signIn/Sign";

function App() {
  return (
    <Fragment>
      <Sign />
      {/* <Home /> */}
    </Fragment>
  );
}

export default App;
