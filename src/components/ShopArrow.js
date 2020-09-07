import React from "react";

const ShopArrow = ({ direction, onClick }) => {
  return (
    <div className="shop-arrow">
      <div onClick={onClick} className={`arrow arrow-${direction}`}>
        <i className={`fas fa-chevron-${direction}`}></i>
      </div>
    </div>
  );
};

export default ShopArrow;
