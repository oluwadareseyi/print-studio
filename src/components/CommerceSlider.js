import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactComponent as Arrow } from "../assets/images/shop-arrow.svg";
import shopData from "../data/shopdata.json";
import ShopArrow from "./ShopArrow";
import { Link } from "react-router-dom";

const CommerceSlider = () => {
  const settings = {
    infinite: true,
    className: "slider",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 3,
    slidesPerRow: 1,
    nextArrow: <ShopArrow direction="right" />,
    prevArrow: <ShopArrow direction="left" />,

    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
        },
      },
    ],
  };
  return (
    <section className="commerce-slider">
      <div className="tabs">
        <div className="tab active">All</div>
        <div className="tab">Hoodies</div>
        <div className="tab">T-Shirts</div>
        <div className="tab">Shoes</div>
        <div className="tab">Custom Mugs</div>
        <div className="tab">Notepads</div>
        <div className="tab">Custom Pens</div>
      </div>

      <div className="commerce-container">
        <Slider {...settings}>
          {shopData.map((product) => (
            <div key={product.id} className="box-container">
              <div
                style={{
                  backgroundImage: `url(${product.image})`,
                }}
                className="top"
              ></div>
              <div className="bottom">
                <div className="top-content">
                  <div className="title">{product.title}</div>
                  <div className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur eaque dolor cupiditate? Sunt, exercitationem. Sequi,
                    voluptatem?
                  </div>
                </div>

                <hr />
                <div className="bottom-content">
                  <div className="cost">$500</div>
                  <div className="rating-con">
                    <div className="rate-title"></div>
                    <div className="ratings">
                      <div className="rating-box">
                        <div className="rating" style={{ width: "90%" }} />
                      </div>
                    </div>
                  </div>
                  <button>
                    <Link
                      to={{
                        pathname: `/product/${product.id}`,
                        state: { product },
                      }}
                      key={product.id}
                    >
                      <span> View Details</span> <Arrow />
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CommerceSlider;
