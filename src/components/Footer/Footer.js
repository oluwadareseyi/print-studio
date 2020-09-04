import React from "react";

const Footer = ({ footerRef }) => {
  return (
    <footer ref={footerRef} className="footer">
      <div className="footer__top">
        <div className="logo">PrintStudio</div>
        <div className="right">
          <div className="details">
            <p className="address">
              Block G, Flat 5 <br /> Ramoth Estate, Oluoyole <br /> Ring Road,
              Ibadan <br /> Oyo State.
            </p>
            <p className="schedule">Monday - Saturday : 8AM -5PM</p>
          </div>

          <div className="contact">
            <p>Tel: 0801 443 3591</p>
            <p>Email: Hello@printstudio.com</p>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="copyright">
          Copyright 2020 Printstudio Group. All Rights Reserved
        </div>
        <div className="icons"></div>
      </div>
    </footer>
  );
};

export default Footer;
