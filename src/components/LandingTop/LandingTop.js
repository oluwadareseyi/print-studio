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
            <div className="nav-item">Our work</div>
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
            <img src={require("../../assets/images/hero.png")} alt="hero" />
          </div>
        </div>
      </div>

      <div className="about-con">
        <div className="about-con__left">
          <div className="topic">About Us</div>
          <div className="title">
            A brief history about our <span>printing house</span>
          </div>
          <div className="sub">
            <p>
              PrintStudio is the preferred online printer of business cards,
              postcards, brochures, and other printed materials launched by
              Abiodun Okunade.
            </p>
            <p>
              PrintStudio has risen from a ten-man operation set in an office to
              one of the largest online printing companies in the world. The
              secret to our success...
            </p>
          </div>
          <button className="about">About Us</button>
        </div>
        <div className="about-con__right">
          <img src={require("../../assets/images/about.jpg")} alt="about" />
        </div>
      </div>
    </>
  );
};

export default LandingTop;
