import React, { createContext, useContext, useState, useEffect } from 'react';

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0); 
  const [wishlist, setWishlist] = useState([]);
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

  const addToWishlist = (productId) => {
    if (!wishlist.includes(productId)) {
      setWishlist([...wishlist, productId]);
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter((id) => id !== productId));
  };

  const isProductInWishlist = (productId) => wishlist.includes(productId);


  const contextValue = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    totalProducts,
    totalPrice, // Include totalPrice in the context

    wishlist, // Include wishlist in the context
    addToWishlist,
    removeFromWishlist,
    isProductInWishlist,
  };

  return (
    <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}
