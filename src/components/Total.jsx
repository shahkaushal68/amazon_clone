import React, { useContext, useEffect, useState } from "react";
import { stateContext } from "../context/StateProvider";
import CurrencyFormat from "react-currency-format";
import { getBasketSubTotal } from "../context/Reducer";

const Total = () => {
  const [grandTotal, setGrandTotal] = useState();

  const {
    state: { basket },
  } = useContext(stateContext);

  function percentage(num, per) {
    return (num / 100) * per;
  }

  useEffect(() => {
    setGrandTotal(
      getBasketSubTotal(basket) + percentage(getBasketSubTotal(basket), 5) + 15
    );
  }, [basket]);

  return (
    <div className="totals">
      <div className="totals-item">
        <label>Subtotal ({basket ? basket.length : 0} items)</label>
        <div className="totals-value" id="cart-subtotal">
          {getBasketSubTotal(basket)}
        </div>
      </div>
      <div className="totals-item">
        <label>Tax (5%)</label>
        <div className="totals-value" id="cart-tax">
          {percentage(getBasketSubTotal(basket), 5)}
        </div>
      </div>
      <div className="totals-item">
        <label>Shipping</label>
        <div className="totals-value" id="cart-shipping">
          15.00
        </div>
      </div>
      <div className="totals-item totals-item-total">
        <label>Grand Total</label>
        <div className="totals-value" id="cart-total">
          <CurrencyFormat
            value={grandTotal}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            renderText={(value) => (
              <>
                <p>{value}</p>
                <p>
                  <small className="subtotal_gift">
                    <input type="checkbox" />
                    This order contains a gift
                  </small>
                </p>
              </>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Total;
