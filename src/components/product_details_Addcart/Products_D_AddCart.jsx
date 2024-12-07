import React, { useState } from 'react'

export default function Products_D_AddCart() {

  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
};

const decrease = () => {
  if (count > 0) {
      setCount(count - 1);
  }
};



  return (
    <div className='product_add_container'>
      <div className="Add_minues">
      <p><span className="minus" onClick={decrease}>-</span> {count} <span className="plus" onClick={increase}>+</span></p>
      </div>
      <button className='add_to_cart-btn'> Add To Cart</button>
    </div>
  )
}
