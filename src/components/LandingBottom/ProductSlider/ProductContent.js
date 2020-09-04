/** @jsx jsx */
// import React from "react";
import { css, jsx } from "@emotion/core";

// import "./ProductSlider.scss";

const ProductContent = ({ product }) => {
  return (
    <div
      className="product-content"
      css={css`
        background-image: url("${product}");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      `}
    />
  );
};

export default ProductContent;
