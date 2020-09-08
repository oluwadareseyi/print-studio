import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LandingTop = ({ refs }) => {
  const aboutRef = useRef();
  const serviceRef = useRef();

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const transition = { duration: 2, ease: [0.43, 0.13, 0.23, 0.96] };

  return (
    <>
      <div className="top-container">
        <header className="header">
          <div className="logo">PrintStudio</div>

          <nav className="nav-items">
            <div className="nav-item">Home</div>
            <div onClick={() => scrollTo(aboutRef)} className="nav-item">
              About us
            </div>
            <div onClick={() => scrollTo(serviceRef)} className="nav-item">
              Services
            </div>
            <div onClick={() => scrollTo(refs.product)} className="nav-item">
              Our work
            </div>
            <div onClick={() => scrollTo(refs.footer)} className="nav-item">
              Contact us
            </div>
          </nav>
          <Link to="/shop">
            <button className="btn-sign-up">Shop Now</button>
          </Link>
        </header>
        <hr />

        <motion.div
          transition={transition}
          initial={{ y: 20, scale: 0.9 }}
          animate={{ y: 0, scale: 1 }}
          className="hero"
        >
          <div className="left">
            <div className="title">
              Let Us Handle All <br /> Your <span>Printing</span> Needs.
            </div>
            <div className="sub">
              PrintStudio is a print space located in Ibadan, Oyo state. <br />
              PrintStudio is the preferred online printer.
            </div>
            <Link to="/shop">
              <button className="start">Shop Now</button>
            </Link>
          </div>

          <div className="right">
            <img
              src="https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1599430264/Printstudio/hero_xn42pm-removebg-preview_elf6cq.png"
              alt="hero"
            />
          </div>
        </motion.div>
      </div>

      <div ref={aboutRef} className="about-con">
        <div className="about-con__left">
          <div className="topic">About Us</div>
          <div className="title">
            A brief history about our <span>printing house</span>
          </div>
          <div className="sub">
            <p>
              PrintStudio is the preferred online printer of business cards,
              postcards, brochures, and other printed materials launched by
              Abiodun Okunade.
            </p>
            <p>
              PrintStudio has risen from a ten-man operation set in an office to
              one of the largest online printing companies in the world. The
              secret to our success...
            </p>
          </div>
          <button className="about">About Us</button>
        </div>
        <div className="about-con__right">
          <img src={require("../../assets/images/about.jpg")} alt="about" />
        </div>
      </div>

      <div ref={serviceRef} className="services-con">
        <div className="upper">
          <div className="topic">Our Capabilities</div>
          <div className="head">
            <div className="title">
              Having attractive <br /> <span>services</span> has never been{" "}
              <span>easier.</span>
            </div>
            <div className="sub">
              PrintStudio is the preferred online printer of business cards,
              postcards, brochures, and other printed materials. We offer a
              variety of printing formats, each with their own customization
              options.
            </div>
          </div>

          <div className="title-2">
            Having attractive <span>services</span> has never been{" "}
            <span>easier.</span>
          </div>
        </div>

        <div className="services-con__box">
          <div className="service-group">
            <div className="service">
              <img
                src={require("../../assets/images/services-1.svg")}
                alt="services"
              />
              <div className="item">
                <div className="title">Projects</div>
                <div className="sub">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit, sed.
                </div>
              </div>
            </div>

            <div className="service">
              <img
                src={require("../../assets/images/scanner.svg")}
                alt="services"
              />
              <div className="item">
                <div className="title">Scanning</div>
                <div className="sub">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit, sed.
                </div>
              </div>
            </div>
          </div>

          <div className="service-group">
            <div className="service">
              <img
                src={require("../../assets/images/Xerox.svg")}
                alt="services"
              />
              <div className="item">
                <div className="title">Xerographic</div>
                <div className="sub">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit, sed.
                </div>
              </div>
            </div>

            <div className="service">
              <img
                src={require("../../assets/images/paper.svg")}
                alt="services"
              />
              <div className="item">
                <div className="title">Printing On Paper</div>
                <div className="sub">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit, sed.
                </div>
              </div>
            </div>
          </div>

          <div className="service-group">
            <div className="service">
              <img
                src={require("../../assets/images/3d-print.svg")}
                alt="services"
              />
              <div className="item">
                <div className="title">3D Printing</div>
                <div className="sub">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit, sed.
                </div>
              </div>
            </div>

            <div className="service">
              <img
                src={require("../../assets/images/mug.svg")}
                alt="services"
              />
              <div className="item">
                <div className="title">Printing On Gadgets</div>
                <div className="sub">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit, sed.
                </div>
              </div>
            </div>
          </div>

          <div className="more">
            <div className="text">
              And <span>14 more</span> services. Check them
            </div>
            <button className="button">All Services</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingTop;
