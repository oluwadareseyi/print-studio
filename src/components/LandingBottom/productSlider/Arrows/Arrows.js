import React from "react";
import "./Arrows.scss";

const Arrows = ({ direction, onClick }) => {
  return (
    <div className="slider-arrow">
      <div onClick={onClick} className={`arrow arrow-${direction}`}>
        <img
          src={require(`../../../../assets/images/${direction}-arrow.svg`)}
          alt=""
        />
      </div>
    </div>
  );
};

export default Arrows;
