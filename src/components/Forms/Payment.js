import React from "react";

const Payment = ({ setSelectedTab }) => {
  return (
    <div className="tab-form">
      <div className="title">Payment Selection</div>
      <div className="payment-options">
        <div className="credit-cars">
          <form onSubmit={(e) => e.preventDefault()} className="radio-form">
            <div className="box">
              <div className="radio">
                <div className="radio-input">
                  <input value="creditCard" type="radio" name="payment" />
                  <label htmlFor="creditCard">Credit Card</label>
                </div>
                {/* <div className="radio-cost">Free</div> */}
              </div>

              <div className="desc">
                Safe money transfer using your bank account. Visa, Maestro,
                Discover, American Express.
              </div>
            </div>
            <div className="box">
              <div className="radio">
                <div className="radio-input">
                  <input value="payPal" type="radio" name="payment" />
                  <label htmlFor="payPal">PayPal</label>
                </div>
                {/* <div className="radio-cost">8000 NGN</div> */}
              </div>
              <div className="desc">
                You will be redirected to PayPal website to complete your
                purchase securely.
              </div>
            </div>
          </form>
        </div>
        <div className="pay-pal"></div>
      </div>
      <div className="panels">
        <div onClick={() => setSelectedTab("shipping")} className="return">
          <span>&#8592;</span> Back to Shipping Info
        </div>

        <button>Complete Order</button>
      </div>
    </div>
  );
};

export default Payment;
