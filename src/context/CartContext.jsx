import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
        return [...prevItems];
      } else {
        setCartCount((prevCount) => prevCount + 1);
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== id);
      const removedItem = prevItems.find((item) => item.id === id);
      if (removedItem) {
        setCartCount((prevCount) =>
          Math.max(prevCount - removedItem.quantity, 0)
        );
      }
      return updatedItems;
    });
  };

  const updateQuantity = (id, action) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) => {
        if (item.id === id) {
          if (action === "increase") {
            return { ...item, quantity: item.quantity + 1 };
          } else if (action === "decrease" && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      });

      const newCartCount = updatedItems.reduce(
        (acc, item) => acc + item.quantity,
        0
      );

      setCartCount(newCartCount);

      return updatedItems;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
