import React, { useState } from 'react'

export default function Products_Color() {
    const [activeColor, setActiveColor] = useState("clr1");

    const handleColorClick = (color) => {
        setActiveColor(color); 
      };
  return (
    <div className="products_colors">
      <p>Select Color</p>
      <div className="colors_div">
        <div className={`color clr1 ${activeColor === "clr1" ? "active" : ""}`} onClick={() => handleColorClick("clr1")}>
          {activeColor === "clr1" && <span className="check-mark">✔</span>}
        </div>
        <div className={`color clr2 ${activeColor === "clr2" ? "active" : ""}`}onClick={() => handleColorClick("clr2")}>
          {activeColor === "clr2" && <span className="check-mark">✔</span>}
        </div>

        <div className={`color clr3 ${activeColor === "clr3" ? "active" : ""}`} onClick={() => handleColorClick("clr3")}>
          {activeColor === "clr3" && <span className="check-mark">✔</span>}
        </div>
        
      </div>
    </div>
  )
}