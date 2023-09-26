import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0); // New state for total price

  const updateTotalProducts = (updatedCart) => {
    setTotalProducts(updatedCart.length);
  };

  const updateTotalPrice = (updatedCart) => {
    const price = updatedCart.reduce((total, item) => total + item.price, 0);
    setTotalPrice(price.toFixed(2));
  };

  useEffect(() => {
    updateTotalProducts(cart);
    updateTotalPrice(cart);
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const contextValue = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    totalProducts,
    totalPrice, // Include totalPrice in the context
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
