import React, { useEffect, useState } from "react";
import axios from "axios";
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(20); // نسبة الخصم
  const [deliveryFee, setDeliveryFee] = useState(15);

  useEffect(() => {
    const fetchCartItems = async () => {

      const response = await axios.get("https://jsonplaceholder.typicode.com/photos?_limit=3");
      const fakeItems = response.data.map((item, index) => ({
        id: item.id,
        title: index === 0 ? "Gradient Graphic T-shirt" : index === 1 ? "Checkered Shirt" : "Skinny Fit Jeans",
        price: index === 0 ? 145 : index === 1 ? 180 : 240,
        size: index === 0 ? "Large" : index === 1 ? "Medium" : "Large",
        color: index === 0 ? "White" : index === 1 ? "Red" : "Blue",
        image: item.thumbnailUrl,
        quantity: 1,
      }));
      setCartItems(fakeItems);
    };

    fetchCartItems();
  }, []);

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setSubtotal(total);
  }, [cartItems]);

  const updateQuantity = (id, action) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: action === "increase" ? item.quantity + 1 : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const deleteItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const total = subtotal - (subtotal * discount) / 100 + deliveryFee;

  return (
    <div className="cart-container">
      <div className="cart-items">
        <h1>Your Cart</h1>
        {cartItems.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="item-info">
              <h2>{item.title}</h2>
              <p>Size: {item.size}</p>
              <p>Color: {item.color}</p>
              <strong>${item.price}</strong>
            </div>
            <div className="item-actions">
              <button onClick={() => updateQuantity(item.id, "decrease")}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, "increase")}>+</button>
              <button className="delete" onClick={() => deleteItem(item.id)}>
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>


      <div className="order-summary">
        <h2>Order Summary</h2>
        <p>
          Subtotal: <span>${subtotal}</span>
        </p>
        <p className="discount">
          Discount (-{discount}%): <span>-${(subtotal * discount) / 100}</span>
        </p>
        <p>
          Delivery Fee: <span>${deliveryFee}</span>
        </p>
        <p className="total">
          Total: <span>${total.toFixed(2)}</span>
        </p>
        <div className="promo-code">
          <input type="text" placeholder="Add promo code" />
          <button>Apply</button>
        </div>
        <button className="checkout">Go to Checkout →</button>
      </div>
    </div>
  );
};

export default Cart;
