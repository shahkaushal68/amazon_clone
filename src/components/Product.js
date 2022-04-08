import React, { useContext } from "react";
import "../styles/product.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import { stateContext } from "../context/StateProvider";

const Products = ({ id, title, image, price, rating }) => {
  const { dispatch } = useContext(stateContext);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {[...Array(rating)].map((_, i) => (
            <StarRateIcon key={i} className="rating_icon" />
          ))}
        </div>
      </div>

      <img src={image} alt="" />
      <div className="btn">
        <button onClick={addToBasket}>Add to Basket</button>
      </div>
    </div>
  );
};

export default Products;
