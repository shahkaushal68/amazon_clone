import React, { createContext, useReducer } from "react";
import reducer from "./Reducer";

export const stateContext = createContext();

const StateProvider = ({ children }) => {
  const intialState = {
    basket: [],
    user: null,
  };

  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <stateContext.Provider value={{ state, dispatch }}>
      {children}
    </stateContext.Provider>
  );
};

export default StateProvider;
