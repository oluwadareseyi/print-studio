import React, { useState, useContext, useEffect } from "react";
import Payment from "../components/Forms/Payment";
import Customer from "../components/Forms/Customer";
import Shipping from "../components/Forms/Shipping";
import Tabs from "../components/Tabs";
import { motion } from "framer-motion";
import { CartContext } from "../data/CartContext";
import Navigation from "../components/Navigation";

// const tabComponents = {
//   payment: <Payment />,
//   customer: <Customer />,
//   shipping: <Shipping />,
// };

const Checkout = () => {
  const [selectedTab, setSelectedTab] = useState("customer");
  const { cart } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let price = 0;
    cart &&
      cart.forEach((item) => {
        price = price + item.quantity * 500;
      });
    setTotal(price);
  }, [cart]);
  const tabComponents = {
    payment: <Payment selected={selectedTab} setSelectedTab={setSelectedTab} />,
    customer: (
      <Customer selected={selectedTab} setSelectedTab={setSelectedTab} />
    ),
    shipping: (
      <Shipping selected={selectedTab} setSelectedTab={setSelectedTab} />
    ),
  };

  return (
    <>
      <div className="checkout-nav">
        <Navigation />
      </div>
      <motion.div exit className="checkout__container">
        <div className="left">
          <div className="top">
            <Tabs selected={selectedTab} setSelectedTab={setSelectedTab} />
            <hr />
          </div>

          <div className="bottom">{tabComponents[selectedTab]}</div>
        </div>
        <div className="right">
          <div className="right__top">
            <div className="title">Shopping Cart</div>
            <div className="number">{cart.length}</div>
          </div>
          <hr />

          <div className="right__middle">
            {cart.length > 0 ? (
              <>
                {cart.map(({ title, image, quantity, id }) => (
                  <div key={id} className="cart-con">
                    <div
                      style={{ backgroundImage: `url(${image})` }}
                      className="cart-img"
                    ></div>
                    <div className="details">
                      <div className="summary">
                        {quantity} - {title}
                      </div>
                      <div className="price">{500 * quantity} NGN</div>
                    </div>
                  </div>
                ))}
                <hr />
                <div className="voucher">Have a voucher?</div>
                <hr />
                <div className="costing">
                  <div className="sub-total">
                    <div className="title">Subtotal</div>
                    <div className="amount">{total} NGN</div>
                  </div>
                  <div className="shipping">
                    <div className="title">Shipping</div>
                    <div className="amount">Free</div>
                  </div>
                </div>
                <hr />
                <div className="total">
                  <div className="title">Total</div>
                  <div className="amount">{total} NGN</div>
                </div>
              </>
            ) : (
              <div className="cart-empty">Nothing in cart</div>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Checkout;
