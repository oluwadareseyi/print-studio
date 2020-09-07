import React, { createContext, useReducer } from "react";

const actionTypes = {
  add: "add",
  remove: "remove",
};

const CartContext = createContext();

const reducer = (state, action) => {
  if (action.type === actionTypes.add) {
    return [action.payload, ...state];
  }

  return state;
};

const initialState = [];

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, initialState);
  const addCart = (cart) => {
    dispatch({
      type: actionTypes.add,
      payload: cart,
    });
  };

  const value = {
    cart,
    addCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
