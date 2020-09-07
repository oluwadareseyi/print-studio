import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const transition = { duration: 2, ease: [0.43, 0.13, 0.23, 0.96] };

const Login = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: { ...transition, duration: 1 },
      }}
      exit={{ opacity: 0, transition: { ...transition, duration: 1 } }}
      className="login-container"
    >
      <div className="left">
        <Link to="/">
          <div className="logo">PrintStudio</div>
        </Link>
        <div className="title">
          Welcome back, <br /> Sign in and resume printing.
        </div>
        <img src={require("../assets/images/login.png")} alt="" />
      </div>
      <div className="right">
        <Link to="/">
          <div className="logo">PrintStudio</div>
        </Link>
        <div className="to-sign-in">
          New user? <Link to="/create">Sign up</Link>
        </div>
        <div className="main">
          <div className="title">Sign in to PrintStudio</div>

          <div className="options">
            <button className="google">
              <i className="fab fa-google"></i> <div>Sign in with Google</div>
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
            <label htmlFor="email">Email Address</label>
            <input type="text" name="email" id="email" />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />

            <div className="btn">
              <button type="submit">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
