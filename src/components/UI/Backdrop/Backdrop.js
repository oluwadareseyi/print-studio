import React from "react";
import classes from "./Backdrop.module.scss";

const backdrop = ({ show, hide }) =>
  show ? <div className={classes.Backdrop} onClick={hide}></div> : null;

export default backdrop;
