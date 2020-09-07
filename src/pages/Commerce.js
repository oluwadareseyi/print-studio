import React from "react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import CommerceSlider from "../components/CommerceSlider";
import Footer from "../components/Footer/Footer";

const Commerce = () => {
  return (
    <motion.div className="commerce_page max-width" exit>
      <Navigation />
      <section className="shop__hero">
        <div className="main">
          The Best <br />{" "}
          <span>
            custom <br /> items
          </span>
        </div>
        <div className="sub">
          Find your perfect merch <br /> that will fit for any occasion.
        </div>
        <div className="hero-image"></div>
      </section>
      <CommerceSlider />

      <section className="newsletter">
        <div className="left"></div>
        <div className="right">
          <div className="topic">Subscribe to our newsletter</div>
          <div className="title">
            Be The First To Know <br /> About Our New Collections.
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="row">
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
              />
              <button>Submit</button>
            </div>
          </form>
        </div>
      </section>

      <section className="promo">
        <div className="title">Collection Sales</div>
        <div className="boxes">
          <div className="box box-1">
            50% off for women's <br /> summer t-shirts
          </div>
          <div className="box box-2">
            50% off for men's <br /> summer hoodies
          </div>
        </div>
      </section>
      <Footer />
    </motion.div>
  );
};

export default Commerce;
