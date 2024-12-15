import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import toast from "react-hot-toast";

export default function Products_D_AddCart({ product }) {
  const [count, setCount] = useState(1);
  const { addToCart } = useContext(CartContext);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    const productToAdd = { ...product, quantity: count };
    addToCart(productToAdd);
    toast.success("Product Add Successfully ");
  };

  return (
    <div className="product_add_container">
      <div className="Add_minues">
        <p>
          <span className="minus" onClick={decrease}>
            -
          </span>{" "}
          {count}{" "}
          <span className="plus" onClick={increase}>
            +
          </span>
        </p>
      </div>
      <button className="add_to_cart-btn" onClick={handleAddToCart}>
        Add To Cart
      </button>
    </div>
  );
}
