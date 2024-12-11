import React, { useState, useContext, useEffect } from "react";
import { getAllProducts } from "../../api/FetchAPI";
import { CartContext } from "../../context/CartContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import FilterMenu from "../Fliteration/FilterMenu";

export default function ClothingItems() {
  const { data, isLoading, isError } = getAllProducts();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    price: 500,
    color: "",
    size: "",
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const filteredProducts = data?.data?.filter((product) => {
    const meetsPriceCriteria = product.price <= filters.price;
    const meetsColorCriteria = !filters.color || product.color === filters.color;
    const meetsSizeCriteria = !filters.size || product.size === filters.size;

    return meetsPriceCriteria && meetsColorCriteria && meetsSizeCriteria;
  }) || [];

  const handleNavigate = (id) => {
    navigate(`/ProductDetailsPage/${id}`);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success("Product Add Succfuly");
  };

  if (isLoading) {
    return <div>Loaging....</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="product-container">
      <FilterMenu onFilterChange={handleFilterChange} />

      <div className="clothing-items py">
        {filteredProducts.map((product) => (
          <div className="clothing-item" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              onClick={() => handleNavigate(product.id)}
            />
            <h3>{product.name}</h3>
            <div className="price">
              <span className="discounted">${product.discount}</span>
              <span className="original">${product.price}</span>
            </div>
            <button onClick={() => handleAddToCart(product)} className="button">
              أضف للسلة
            </button>
          </div>
        ))}
        {filteredProducts.length === 0 && (
          <div className="no-products">There are no products matching the filters</div>
        )}
      </div>
    </div>
  );
}
