import React from "react";
import { Link } from "react-router-dom";
import Upload from "./Upload/Upload";
import Testimonial from "./Testimonial/Testimonial";
import Footer from "../Footer/Footer";
import ProductSlider from "./ProductSlider/ProductSlider";

const LandingBottom = ({ productRef, footerRef }) => {
  return (
    <div>
      <Upload />

      <ProductSlider productRef={productRef} />

      {/* Progress and clients */}
      <div className="progress-con">
        <div className="content">
          <div className="left">
            <div className="topic">Our Progress</div>
            <div className="title">
              Successful partnership with great <span>brands</span>
            </div>
            <div className="sub">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor
              <span>
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et
              </span>
            </div>
            <div className="stats">
              <div className="years">
                <div className="number">10+</div>
                <div className="text">Years Of Operation</div>
              </div>

              <div className="years">
                <div className="number">120+</div>
                <div className="text">Successful Projects</div>
              </div>

              <div className="years">
                <div className="number">98+</div>
                <div className="text">Happy Clients</div>
              </div>
            </div>
            <button>Know More</button>
          </div>
          <img
            src={require("../../assets/images/progress.jpg")}
            className="right"
            alt="progress"
          />
        </div>

        <div className="clients-con">
          <div className="clients">
            <div className="brand coke"></div>
            <div className="brand henny"></div>
            <div className="brand airtel"></div>
            <div className="brand mtn"></div>
          </div>
        </div>
      </div>

      {/* Testimonial Slider */}
      <Testimonial />

      {/* Get started container */}
      <div className="started-con">
        <div className="title">Start Printing With Us Today</div>
        <div className="sub">
          Sign up and become one of the millions of people <br /> around the
          world using PrintStudio.
        </div>
        <Link to="/create">
          <button className="button">Get Started - It's Free</button>
        </Link>
      </div>

      {/* Footer */}
      <Footer footerRef={footerRef} />
    </div>
  );
};

export default LandingBottom;
