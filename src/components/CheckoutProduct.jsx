import React, { useContext } from "react";
import { stateContext } from "../context/StateProvider";

const CheckoutProduct = ({ item }) => {
  const { dispatch } = useContext(stateContext);

  const removeFromBasket = (id) => {
    console.log(id);
    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: id,
    });
  };

  return (
    <div className="product-checkout">
      <div className="product-checkout-image">
        <img src={item.image} alt="checkout_product" />
      </div>
      <div className="product-checkout-details">
        <div className="product-checkout-title">{item.title}</div>
      </div>
      <div className="product-checkout-price">{item.price}</div>
      <div className="product-checkout-quantity">
        <input type="number" min="1" />
      </div>
      <div className="product-checkout-removal">
        <button
          className="remove-product-checkout"
          onClick={() => removeFromBasket(item.id)}
        >
          Remove
        </button>
      </div>
      <div className="product-checkout-line-price">{item.price}</div>
    </div>
  );
};

export default CheckoutProduct;
