import React, { useContext } from "react";
import { stateContext } from "../context/StateProvider";
import "../styles/checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Total from "./Total";

const Checkout = () => {
  const {
    state: { basket },
  } = useContext(stateContext);
  //console.log("global", global);

  return (
    <>
      <h1>Shopping Cart</h1>

      <div className="shopping-cart">
        <div className="column-labels">
          <label className="product-checkout-image">Image</label>
          <label className="product-checkout-details">Product-checkout</label>
          <label className="product-checkout-price">Price</label>
          <label className="product-checkout-quantity">Quantity</label>
          <label className="product-checkout-removal">Remove</label>
          <label className="product-checkout-line-price">Total</label>
        </div>

        {basket.map((item, index) => (
          <CheckoutProduct item={item} index={index} key={index} />
        ))}

        <Total />

        <button className="checkout" disabled={basket.length === 0}>
          Checkout
        </button>
      </div>
    </>
  );
};

export default Checkout;
