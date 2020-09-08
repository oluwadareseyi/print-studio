import React from "react";
import classes from "./SideDrawer.module.scss";
import Backdrop from "../UI/Backdrop/Backdrop";
import { Link } from "react-router-dom";
const sideDrawer = (props) => {
  let showClass = [classes.SideDrawer, classes.Close];

  if (props.show) {
    showClass[1] = classes.Open;
  }

  return (
    <React.Fragment>
      <Backdrop hide={props.hide} show={props.show} />
      <div className={showClass.join(" ")}>
        <Link to="/" onClick={props.clicked}>
          <div className={classes.Logo}>PrintStudio</div>
        </Link>

        <hr className={classes.hr} />
        <nav className={classes.Nav}>
          <Link to="/login" onClick={props.clicked}>
            <div className={classes.NavItems}>Login</div>
          </Link>

          <Link to="/create" onClick={props.clicked}>
            <div className={classes.NavItems}>Sign up</div>
          </Link>

          <Link to="/checkout" onClick={props.clicked}>
            <div className={classes.NavItems}>Cart</div>
          </Link>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default sideDrawer;
