import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../api/FetchAPI";

export default function FilterMenu({ onFilterChange }) {
  const [price, setPrice] = useState(500);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [availableColors, setAvailableColors] = useState([]);
  const [availableSizes, setAvailableSizes] = useState([]);

  // جلب المنتجات من الـ API وتحليل الألوان والأحجام
  const { data } =  getAllProducts();
  useEffect(() => {
    const fetchData = async () => {
      
      const colorsSet = new Set();
      const sizesSet = new Set();
        
      data?.data?.forEach((product) => {
        if (product.color) colorsSet.add(product.color);
        if (product.size) sizesSet.add(product.size);
      });

      setAvailableColors([...colorsSet]);
      setAvailableSizes([...sizesSet]);
    };

    fetchData();
  }, []);

  const handlePriceChange = (e) => {
    const newPrice = Number(e.target.value);
    setPrice(newPrice);
    onFilterChange({ price: newPrice, color: selectedColor, size: selectedSize });
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    onFilterChange({ price, color, size: selectedSize });
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    onFilterChange({ price, color: selectedColor, size });
  };

  return (
    <div className="filter-menu open">
      <h3>التصفية</h3>

      {/* فلتر السعر */}
      <div className="filter-section">
        <h4>السعر</h4>
        <input
          type="range"
          min="50"
          max="500"
          value={price}
          onChange={handlePriceChange}
        />
        <div className="price-values">
          <span>50</span> <span>${price}</span>
        </div>
      </div>

      {/* فلتر اللون */}
      <div className="filter-section colors">
        <h4>الألوان</h4>
        <div className="color-options">
          {availableColors.map((color) => (
            <button
              key={color}
              style={{ backgroundColor: color }}
              className={selectedColor === color ? "selected" : ""}
              onClick={() => handleColorSelect(color)}
            />
          ))}
        </div>
      </div>

      {/* فلتر الحجم */}
      <div className="filter-section sizes">
        <h4>الأحجام</h4>
        {availableSizes.map((size) => (
          <button
            key={size}
            className={selectedSize === size ? "selected" : ""}
            onClick={() => handleSizeSelect(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
