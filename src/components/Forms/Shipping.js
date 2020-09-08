import React from "react";

const Shipping = ({ setSelectedTab }) => {
  return (
    <div className="tab-form">
      <div className="title">Shipping Information</div>
      <div className="location">
        <div className="box address">
          <div className="address-name">
            Block G, Flat 5 Ramoth Estate, Oluoyole Ring Road, Ibadan Oyo State.
            <br /> Tel: 0801 4433 591
          </div>
          <div className="edit">Change</div>
        </div>
        <div className="box map"></div>
      </div>

      <div className="title">Shipping Method</div>
      <form onSubmit={(e) => e.preventDefault()} className="radio-form">
        <div className="box">
          <div className="radio">
            <div className="radio-input">
              <input value="standard" type="radio" name="shipping" />
              <label htmlFor="standard">Standard Delivery</label>
            </div>
            <div className="radio-cost">Free</div>
          </div>

          <div className="desc">
            Estimated 14-20 Day Shipping (Duties and taxes may be due upon
            delivery)
          </div>
        </div>
        <div className="box">
          <div className="radio">
            <div className="radio-input">
              <input value="fast" type="radio" name="shipping" />
              <label htmlFor="fast">Fast Delivery</label>
            </div>
            <div className="radio-cost">8000 NGN</div>
          </div>
          <div className="desc">
            Estimated 2-5 Days Shipping (Duties and taxes may be due upon
            delivery)
          </div>
        </div>
      </form>
      <div className="panels">
        <div onClick={() => setSelectedTab("customer")} className="return">
          <span>&#8592;</span> Back to Customer Info
        </div>

        <button onClick={() => setSelectedTab("payment")}>To Payment</button>
      </div>
    </div>
  );
};

export default Shipping;
