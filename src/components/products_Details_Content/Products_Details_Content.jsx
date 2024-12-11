import React from "react";
import Products_Color from "../products_details_colors/Products_Color";
import Product_d_Size from "../product_details_size/Product_d_Size";
import Products_D_AddCart from "../product_details_Addcart/Products_D_AddCart";
import { getSingleProduct } from "../../api/FetchAPI";
import { useParams } from "react-router-dom";

export default function Products_Details_Content() {
  const { id } = useParams();
  const { data, isLoading, isError } = getSingleProduct(id);
  const ProductsData = data?.data;
  return (
    <div className="products_details_container">
      <div className="products_details_content">
        <h2>{ProductsData.name}</h2>
        <div className="rating">
          <span>{ProductsData.rating}</span>
        </div>

        <p className="price">
          <span className="discounted">${ProductsData.discount}</span>{" "}
          <span className="original">${ProductsData.price}</span>{" "}
          <span className="discount">{ProductsData.sale}</span>
        </p>

        <p className="description">{ProductsData.description}</p>
      </div>
      <hr />
      <Products_Color />
      <hr />
      <Product_d_Size />
      <hr />
      <Products_D_AddCart />
    </div>
  );
}
