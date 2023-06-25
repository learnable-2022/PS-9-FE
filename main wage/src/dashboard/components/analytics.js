import React from "react";
import NavBar from "./navBar";
import { Fragment } from "react";

export default function Analytics({ onDataReceived }) {
  return (
    <Fragment>
      <NavBar onDataReceived={onDataReceived} />
    </Fragment>
  );
}
