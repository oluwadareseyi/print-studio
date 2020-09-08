import React from "react";

const Tabs = ({ selected, setSelectedTab }) => {
  return (
    <div className="tabs-con">
      <div
        className={`tab ${selected === "customer" ? "active" : ""}`}
        onClick={() => setSelectedTab("customer")}
      >
        01 Customer Info
      </div>
      <div
        className={`tab ${selected === "shipping" ? "active" : ""}`}
        onClick={() => setSelectedTab("shipping")}
      >
        02 Shipping Info
      </div>
      <div
        className={`tab ${selected === "payment" ? "active" : ""}`}
        onClick={() => setSelectedTab("payment")}
      >
        03 Payment Selection
      </div>
    </div>
  );
};

export default Tabs;
