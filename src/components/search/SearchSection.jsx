import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import SearchResult from "./SearchResult";
import { getAllProducts } from "../../api/FetchAPI";

export default function SearchSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { data, isLoading, isError } = getAllProducts();
  const ProductsData = data?.data || [];
  console.log("All Products: ", ProductsData);

  useEffect(() => {
    if (ProductsData.length) {
      setProducts(ProductsData);
    }
  }, [ProductsData]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredProducts([]);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
      console.log("Filtered Products: ", filtered);
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products]);

  return (
    <div className="search">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <CiSearch />
      </div>
      {searchTerm && (
        <div className="search_input_result">
          <SearchResult results={filteredProducts} />
        </div>
      )}
    </div>
  );
}
