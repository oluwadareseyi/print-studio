/** @jsx jsx */
import React, { useRef, useEffect, useState } from "react";
import { css, jsx } from "@emotion/core";
import "./ProductSlider.scss";
import ProductGrid from "./ProductGrid";

import Grid1 from "../../../assets/images/Grid1.png";

const products = [
  { img: 1, link: Grid1 },
  { img: 2, link: Grid1 },
  { img: 3, link: Grid1 },
  { img: 4, link: Grid1 },
  { img: 5, link: Grid1 },
  { img: 6, link: Grid1 },
  { img: 7, link: Grid1 },
  { img: 8, link: Grid1 },
  { img: 9, link: Grid1 },
];

const getWidth = () =>
  window.innerWidth > 700 ? window.innerWidth - 300 : window.innerWidth - 120;

const ProductSlider = () => {
  const resizeRef = useRef();

  const [width, setWidth] = useState(getWidth());

  useEffect(() => {
    resizeRef.current = handleResize;
  });

  let gridParent = useRef(null);
  useEffect(() => {
    // const parent = gridParent;
    const parentWidth = gridParent.offsetWidth;
    const resize = () => {
      resizeRef.current();
    };
    const onResize = window.addEventListener("resize", resize);

    const childInView = Array.from(gridParent.children).filter((el) => {
      return el.offsetLeft > parentWidth - el.offsetWidth + 102;
    }).length;

    console.log(parentWidth);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const handleResize = () => {
    // gridParent.offsetWidth < 961 &&
    setWidth(getWidth());
    console.log(width);
  };

  return (
    <div
      css={css`
        position: relative;
        margin: 0 auto;
        width: ${width}px;
        overflow: hidden;
        padding: 100px 0;
      `}
      // className="product-slider"
    >
      <div className="grid-content">
        <div ref={(e) => (gridParent = e)} className="grid">
          {/* <ProductGrid products={products} /> */}
          {products.map((p) => (
            <div
              className="box"
              key={p.img}
              style={{
                background: `url(${p.link}) no-repeat`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
            //   <img src={p.link} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
