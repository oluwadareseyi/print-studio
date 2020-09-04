import React from "react";

const Testimonial = () => {
  return (
    <div className="testimonial-con">
      <div className="topic">Our Testimonials</div>
      <div className="title">
        What our <br /> customers say
      </div>

      {/* the testimonials container */}
      <div className="testimonials">
        {/* one testimonial box */}
        <div className="testimonial-box">
          <div className="profile">
            <img
              src={require("../../../assets/images/profile-2.png")}
              alt="profile"
            />
          </div>
          <div className="content">
            <div className="quote">"</div>
            <div className="comment">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et
            </div>
            <div className="content__bottom">
              <div className="ratings">
                <div className="rating-box">
                  <div className="rating" style={{ width: "90%" }} />
                </div>

                <div className="desc">4 Star Rating</div>
              </div>
              <div className="name">-Sarah Fox</div>
            </div>
          </div>
        </div>

        <div className="testimonial-box second">
          <div className="profile">
            <img
              src={require("../../../assets/images/profile-1.png")}
              alt="profile"
            />
          </div>
          <div className="content">
            <div className="quote">"</div>
            <div className="comment">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et
            </div>
            <div className="content__bottom">
              <div className="ratings">
                <div className="rating-box">
                  <div className="rating" style={{ width: "92%" }} />
                </div>
                <div className="desc">4 Star Rating</div>
              </div>
              <div className="name">-Sarah Fox</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
