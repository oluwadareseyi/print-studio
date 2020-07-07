import React from "react";
import "./SignUp.scss";

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="left">
        <div className="logo">PrintStudio</div>
        <div className="title">
          Sign up and enjoy <br /> All Our Printing Services.
        </div>
        <img src={require("../../assets/images/signup.png")} alt="" />
      </div>
      <div className="right"></div>
    </div>
  );
};

export default SignUp;
