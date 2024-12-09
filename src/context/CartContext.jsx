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
        setCartCount((prevCount) => prevCount + 1); // استخدام القيمة السابقة
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
          Math.max(prevCount - removedItem.quantity, 0) // منع السالب
        );
      }
      return updatedItems;
    });
  };
  

  const updateQuantity = (id, action) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          if (action === "increase") {
            item.quantity += 1;
            setCartCount((prevCount) => prevCount + 1); // استخدام القيمة السابقة
          } else if (action === "decrease" && item.quantity > 1) {
            item.quantity -= 1;
            setCartCount((prevCount) =>
              Math.max(prevCount - 1, 0) // منع السالب
            );
          }
        }
        return item;
      });
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
