//selector

export const getBasketSubTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

// Reducer
const reducer = (state, action) => {
  //console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.payload
      );
      //console.log("index", index);
      let newBasketItem = [...state.basket];
      //console.log("newBasketItem", newBasketItem);
      if (index >= 0) {
        newBasketItem.splice(index, 1);
      } else {
        console.log(
          `can't remove product: (id:${action.payload}) it's not in basket`
        );
      }
      return {
        ...state,
        basket: newBasketItem,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
