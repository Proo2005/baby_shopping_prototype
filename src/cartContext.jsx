import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(1); // default quantity 1

  const increment = () => setCartCount(prev => prev + 1);
  const decrement = () => setCartCount(prev => (prev > 1 ? prev - 1 : 1));
  const resetCart = () => setCartCount(0);

  return (
    <CartContext.Provider value={{ cartCount, setCartCount, increment, decrement, resetCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
