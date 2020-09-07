import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const transition = { duration: 2, ease: [0.43, 0.13, 0.23, 0.96] };

const SignUp = () => {
  return (
    <motion.div
      exit={{ opacity: 0, transition: { ...transition, duration: 1 } }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: { ...transition, duration: 1, delay: 0.2 },
      }}
      className="signup-container"
    >
      <div className="left">
        <Link to="/">
          <div className="logo">PrintStudio</div>
        </Link>
        <div className="title">
          Sign up and enjoy <br /> All Our Printing Services.
        </div>
        <img src={require("../assets/images/signup.png")} alt="" />
      </div>
      <div className="right">
        <Link to="/">
          <div className="logo">PrintStudio</div>
        </Link>
        <div className="to-sign-in">
          Already a member? <Link to="/login">Sign in</Link>
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

            <div className="btn">
              <button type="submit">Get Started</button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default SignUp;
