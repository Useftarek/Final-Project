import React, { useState } from 'react';

const FilterMenu = ({ onFilterChange }) => {
  const [price, setPrice] = useState(200);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const handleApplyFilter = () => {
    onFilterChange('price', price);
    onFilterChange('color', selectedColor);
    onFilterChange('size', selectedSize);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handlePriceChange = (e) => {
    setPrice(Number(e.target.value));
  };

  return (
    <div className="filter-menu open">
      <h3>Filters</h3>

      <div className="filter-section">
        <h4>Price</h4>
        <input
          type="range"
          min="50"
          max="200"
          value={price}
          onChange={handlePriceChange}
        />
        <div className="price-values">
          <span>$50</span>
          <span>${price}</span>
        </div>
      </div>

      <div className="filter-section colors">
        <h4>Colors</h4>
        <div className="color-options">
          {['green', 'blue', 'yellow', 'orange', 'red', 'cyan', 'black', 'white', 'pink'].map((color) => (
            <button
              key={color}
              style={{ backgroundColor: color }}
              className={selectedColor === color ? 'selected' : ''}
              onClick={() => handleColorSelect(color)}
            />
          ))}
        </div>
      </div>

      <div className="filter-section sizes">
        <div><h4>Size</h4></div>
        {[ 'Small', 'Medium', 'Large', 'X-Large'].map((size) => (
          <button
            key={size}
            className={selectedSize === size ? 'selected' : ''}
            onClick={() => handleSizeSelect(size)}
          >
            {size}
          </button>
        ))}
      </div>

      {/* <div className="filter-section">
        <h4>Dress Style</h4>
        <ul>
          <li>Casual</li>
          <li>Formal</li>
          <li>Party</li>
          <li>Gym</li>
        </ul>
      </div> */}

      <button className="apply-filter-btn" onClick={handleApplyFilter}>
        Apply Filter
      </button>
    </div>
  );
};

export default FilterMenu;
