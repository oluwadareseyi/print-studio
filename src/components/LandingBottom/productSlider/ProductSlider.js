import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductContent from "./ProductContent";
import ProductImage from "../../../assets/images/Grid1.png";
import Grid1 from "../../../assets/images/Grid1.png";
import Grid2 from "../../../assets/images/Grid2.png";
import Grid3 from "../../../assets/images/Grid3.png";
import Grid4 from "../../../assets/images/Grid4.png";
import Grid5 from "../../../assets/images/Grid5.png";
import "./Arrows/Arrows";
import "./ProductSlider.scss";
import Arrows from "./Arrows/Arrows";

const products = [
  { src: Grid1 },
  { src: Grid4 },
  { src: Grid3 },
  { src: Grid2 },
  { src: Grid5 },
  { src: Grid4 },
  { src: Grid3 },
  { src: Grid1 },
  { src: Grid2 },
  { src: Grid4 },
  { src: Grid2 },
  { src: Grid3 },
];

const ProductSlider = () => {
  const settings = {
    className: "center",
    // centerMode: true,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 3,
    slidesPerRow: 1,
    nextArrow: <Arrows direction="right" />,
    prevArrow: <Arrows direction="left" />,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <div className="topic">Our Products</div>
      <div className="look">
        <div className="title">
          In the meantime, take a look <br /> at our{" "}
          <span>print projects.</span>
        </div>
        <div>
          <button>View All Projects</button>
        </div>
      </div>
      <div className="filter">
        <div className="filter__item selected">All Categories</div>
        <div className="filter__item">Recent</div>
        <div className="filter__item">Business Cards</div>
        <div className="filter__item">Postcards</div>
        <div className="filter__item">Brochures</div>
        <div className="filter__item">Flyers</div>
      </div>
      <div className="product-slider">
        <Slider {...settings}>
          {products.map((item, i) => (
            <ProductContent product={item.src} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductSlider;
