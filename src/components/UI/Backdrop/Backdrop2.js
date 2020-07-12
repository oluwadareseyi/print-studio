import React from "react";
import classes from "./Backdrop2.module.scss";

const backdrop2 = ({ show, children }) =>
  show ? <div className={classes.Backdrop}>{children}</div> : null;

export default backdrop2;
