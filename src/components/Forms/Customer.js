import React from "react";
import { Link } from "react-router-dom";

const Customer = ({ setSelectedTab }) => {
  return (
    <div className="tab-form">
      <div className="title">Customer Information.</div>
      <form className="customer-form" onSubmit={(e) => e.preventDefault()}>
        <div className="input-row">
          <div className="side">
            <label htmlFor="first-name">First Name</label>
            <input type="text" name="first-name" id="first-name" />
          </div>

          <div className="side">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" name="last-name" id="last-name" />
          </div>
        </div>

        <div className="input-con">
          <label htmlFor="address">Address</label>
          <input type="text" name="address" id="address" />
        </div>

        <div className="input-row">
          <div className="side">
            <label htmlFor="countries">Country</label>
            <select name="countries" id="countries">
              <option value="">Please Select</option>
              <option value="GHA">Ghana</option>
              <option value="NGA">Nigeria</option>
              <option value="KEN">Kenya</option>
              <option value="USA">United States</option>
            </select>
          </div>

          <div className="side">
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="city" />
          </div>
        </div>

        <div className="input-row">
          <div className="side">
            <label htmlFor="postal">Postal Code</label>
            <div className="side-btn">
              <input type="number" name="postal" id="postal" />
              <button>Find</button>
            </div>
          </div>

          <div className="side">
            <label htmlFor="phone">Phone</label>
            <input inputMode="tel" type="tel" name="phone" id="phone" />
          </div>
        </div>
      </form>

      <div className="panels">
        <div className="return">
          <Link to="/shop">
            <span>&#8592;</span> Return to Shop
          </Link>
        </div>

        <button onClick={() => setSelectedTab("shipping")}>
          Continue to Shipping
        </button>
      </div>
    </div>
  );
};

export default Customer;
