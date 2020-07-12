import React from "react";
import "./DrawerToggle.scss";
const drawerToggle = (props) => {
  return (
    <div
      className={`${
        props.location.pathname === "/" ? "drawerwhite" : ""
      } DrawerToggle`}
      onClick={props.toggle}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default drawerToggle;
