import React, { useState } from "react";

export default function Product_d_Size() {
  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="product_d_size_container">
      <p>Choose Size</p>
      <div className="sizes">
        {["Small", "Medium", "Large", "X-Large"].map((size) => (
          <div
            key={size}
            className={`size ${selectedSize === size ? "selected" : ""}`}
            onClick={() => handleSizeClick(size)}
          >
            <p>{size}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
