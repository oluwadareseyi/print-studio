import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Cart } from "../assets/images/cart.svg";
import { CartContext } from "../data/CartContext";

const Navigation = () => {
  const { cart } = useContext(CartContext);

  return (
    <header className="shop-header">
      <div className="logo">
        <Link to="/">PRINTSTUDIO</Link>
      </div>
      <nav className="nav-items">
        <div className="nav-item">Features</div>
        <div className="nav-item">Pricing</div>
        <div className="nav-item">Contact Us</div>
      </nav>
      <div className="right">
        <div
          className={`svg-con ${cart.length ? "cart-active" : "cart-inactive"}`}
        >
          <Link to="/checkout">
            <Cart />
          </Link>
        </div>
        <Link to="/create">
          <button>Sign Up</button>
        </Link>
      </div>
    </header>
  );
};

export default Navigation;
