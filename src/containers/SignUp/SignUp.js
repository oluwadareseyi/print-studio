import React from "react";
import "./SignUp.scss";
import { Link } from "react-router-dom";

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
      <div className="right">
        <div className="logo">PrintStudio</div>
        <div className="to-sign-in">
          Already a member? <Link to="">Sign in</Link>
        </div>
        <div className="main">
          <div className="title">Sign up to PrintStudio</div>

          <div className="options">
            <button className="google">
              <i className="fab fa-google"></i> <div>Sign up with Google</div>
            </button>

            <button className="social">
              <i className="fab fa-twitter"></i>
            </button>

            <button className="social">
              <i className="fab fa-facebook-square"></i>
            </button>
          </div>

          <div className="other">Or</div>

          {/* form */}

          <form
            onSubmit={(e) => e.preventDefault()}
            className="sign-form"
            action=""
          >
            <div className="names">
              <div>
                <label htmlFor="firstname">FirstName</label>
                <input
                  className="first-name"
                  type="text"
                  name="firstname"
                  id="firstname"
                />
              </div>

              <div>
                <label htmlFor="lastname">Surname</label>
                <input type="text" name="lastname" id="lastname" />
              </div>
            </div>
            <label htmlFor="email">Email Address</label>
            <input type="text" name="email" id="email" />

            <label htmlFor="password">Password</label>
            <input
              autoComplete="new-password"
              type="password"
              name="password"
              id="password"
            />

            <div className="terms">
              <input type="checkbox" id="terms" name="terms" value="terms" />
              <label className="terms-label" htmlFor="terms">
                Creating an account means you're okay with our{" "}
                <span>Terms of Service, Privacy Policy</span>, and our default{" "}
                <span>Notification Settings</span>
              </label>
            </div>

            <button type="submit">Get Started</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
