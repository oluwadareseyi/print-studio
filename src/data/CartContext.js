import React, { createContext, useReducer } from "react";
export const CartContext = createContext();

const actionTypes = {
  add: "add",
  remove: "remove",
};

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

const reducer = (state = initialState, action) => {
  if (action.type === actionTypes.add) {
    const { cart, quantity } = action.payload;
    const isProduct = state.some((arr) => arr.id === cart.id);
    let newCart = [];

    if (isProduct) {
      const cartCopy = state;
      newCart = cartCopy.map((cartItem) => {
        return cartItem.id === cart.id
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem;
      });
    } else {
      newCart = [{ ...cart, quantity }, ...state];
    }
    localStorage.setItem("cart", JSON.stringify(newCart));
    return newCart;
  }

  return state;
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, initialState);
  const addCart = (cart, quantity) => {
    dispatch({
      type: actionTypes.add,
      payload: { cart, quantity },
    });
  };

  const value = {
    cart,
    addCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
