import React, { useState } from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { CartContext } from "../../context/CartContext";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const handleApplyCoupon = () => {
    if (couponCode === "DISCOUNT20") {
      setDiscount(30);
      toast.success("Coupon applied successfully!");
    } else {
      alert("Invalid coupon");
      setDiscount(0);
    }
  };

  const handleRemove = (id) => {
    removeFromCart(id);
    toast.error("The product was removed successfully.");
  };

  const handleQuantityChange = (id, action) => {
    updateQuantity(id, action);
  };

  const calculateTotal = () => {
    const subtotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return subtotal - (subtotal * discount) / 100;
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div className="item" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="item-info">
                <h2>{item.name}</h2>
                <p>Size: {item.size}</p>
                <p>Color: {item.color}</p>

                <h6>Price: ${item.price * item.quantity}</h6>
              </div>

              <div className="quantity-controls">
              <button onClick={() => handleRemove(item.id)} className="delete"><MdDelete /></button>

                <div className="quantity-buttons">
                  <button onClick={() => updateQuantity(item.id, "decrease")}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, "increase")}>+</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="empty">The Cart Is Empty...</p>
        )}
      </div>

      <div className="order-summary">
        <h2>Order Summary</h2>
        <p>
          Subtotal: $
          {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}
        </p>
        <p  className="dis">Discount: {discount}%</p>
        <p>Total: ${calculateTotal().toFixed(2)}</p>
        <div className="promo-code">
          <input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            placeholder="Enter promo code"
          />
          <button onClick={handleApplyCoupon}>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
