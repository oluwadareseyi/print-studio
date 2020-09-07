import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Cart } from "../assets/images/cart.svg";

const Navigation = () => {
  return (
    <header className="shop-header">
      <div className="logo">PRINTSTUDIO</div>
      <nav className="nav-items">
        <div className="nav-item">Features</div>
        <div className="nav-item">Pricing</div>
        <div className="nav-item">Contact Us</div>
      </nav>
      <div className="right">
        <div className="svg-con cart-active">
          <Cart />
        </div>
        <Link to="/create">
          <button>Sign Up</button>
        </Link>
      </div>
    </header>
  );
};

export default Navigation;
