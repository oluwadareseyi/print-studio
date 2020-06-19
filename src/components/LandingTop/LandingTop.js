import React from "react";
import "./LandingTop.scss";

const LandingTop = () => {
  return (
    <>
      <div className="top-container">
        <header className="header">
          <div className="logo">PrintStudio</div>

          <div className="nav-items">
            <div className="nav-item">Home</div>
            <div className="nav-item">About us</div>
            <div className="nav-item">Services</div>
            <div className="nav-item">Our works</div>
            <div className="nav-item">Contact us</div>
          </div>

          <button className="btn-sign-up">Sign up</button>
        </header>
        <hr />

        <div className="hero">
          <div className="left">
            <div className="title">
              Let Us Handle All <br /> Your <span>Printing</span> Needs.
            </div>
            <div className="sub">
              PrintStudio is a print space located in Ibadan, Oyo state.
              PrintStudio is the preferred online printer.
            </div>
            <button className="start">Get Started</button>
          </div>

          <div className="right">
            <img src={require("../../assets/images/hero.png")} alt="" />
          </div>
        </div>
      </div>

      <div className="about-con"></div>
    </>
  );
};

export default LandingTop;
