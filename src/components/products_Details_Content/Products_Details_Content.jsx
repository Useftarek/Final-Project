import React from 'react'
import Products_Color from '../products_details_colors/Products_Color'
import Product_d_Size from '../product_details_size/Product_d_Size'
import Products_D_AddCart from '../product_details_Addcart/Products_D_AddCart'


export default function Products_Details_Content() {
  return (
    <div className='products_details_container'>
        <div className='products_details_content'>
            <h2>ONE LIFE GRAPHIC T-SHIRT</h2>
            <div className="rating">
              <span>⭐️⭐️⭐️⭐️</span> <span>4/5</span>
            </div>

            <p className="price">
              <span className="discounted">$260</span> <span className="original">$300</span> <span className="discount">-40%</span>
            </p>
            
            <p className='description'>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
            
        </div>
        <hr />
        <Products_Color />
        <hr />
        <Product_d_Size />
        <hr />
        <Products_D_AddCart />
    </div>
  )
}
