import React, { useState, useEffect, useContext } from "react";
import Navigation from "../components/Navigation";
import { useParams, Link } from "react-router-dom";
import products from "../data/shopdata.json";
import { motion } from "framer-motion";
import { CartContext } from "../data/CartContext";

const ProductDetail = () => {
  const { addCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({});
  const [cartText, setCartText] = useState("Add to Cart");

  const addToCart = (cartData, quantity) => {
    addCart(cartData, quantity);
    setCartText("Added!");
  };

  const params = useParams();

  useEffect(() => {
    const productData = products.filter(({ id }) => id === params.id);
    setProduct(productData[0]);
  }, [params]);

  const increaseQty = () => {
    if (quantity === 1) return;
    setQuantity((state) => state - 1);
  };

  const decreaseQty = () => {
    if (quantity === 10) return;
    setQuantity((state) => state + 1);
  };
  return (
    <motion.div exit className="product_container">
      <nav>
        <Navigation />
      </nav>
      <section className="product-detail">
        <div className="left content">
          <div
            className="box"
            style={{
              backgroundImage: `url(${product.image})`,
            }}
          ></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
        <div
          className="middle content"
          style={{ backgroundImage: `url(${product.image})` }}
        ></div>
        <div className="right content">
          <Link to="/shop" className="back">
            Back to shop
          </Link>
          <div className="product-name">{product.title}</div>
          <div className="ratings">
            <div className="rating-box">
              <div className="rating" style={{ width: "90%" }} />
            </div>
          </div>
          <div className="product-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            pnon aliquam nisl non eget tincidunt. Nunc pretium in magna l.
            Consequat semper faucibus feugiat est tincidunt consequat nisi,
            vestibulum. Sagittis posuere auctor duis vitae urna, feugiat vitae
            varius pretium.
          </div>
          <div className="product-tags">Tags: Nike, T-shirt</div>
          <div className="product-panel">
            <div className="left-panel">
              <div className="title">Quantity</div>
              <div onClick={increaseQty} className="minus">
                -
              </div>
              <div className="quantity">{quantity}</div>
              <div onClick={decreaseQty} className="plus">
                +
              </div>
            </div>

            <div className="right-panel">Price: ${500 * quantity}.00</div>
          </div>
          <div className="product-actions">
            <button onClick={() => addToCart(product, quantity)}>
              {cartText}
            </button>
            <button>Wishlist</button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProductDetail;
