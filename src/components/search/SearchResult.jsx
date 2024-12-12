import React from "react";
import { useNavigate } from "react-router-dom";

export default function SearchResult({ results }) {
  const navigate = useNavigate();

  const goToProduct = (id) => {
    navigate(`/ProductDetailsPage/${id}`);
  };

  return (
    <div className="search_result_container">
      {results.length > 0 ? (
        results.map((ProductsData) => (
          <div
            key={ProductsData.id}
            className="search_result"
            onClick={() => goToProduct(ProductsData.id)}
            style={{ cursor: "pointer" }}
          >
            <div className="search_result_image">
              <img src={ProductsData.image} alt={ProductsData.name} />
            </div>
            <div className="search_result_title">
              <h4>{ProductsData.name}</h4>
            </div>
          </div>
        ))
      ) : (
        <div className="no-results">No Results Found</div>
      )}
    </div>
  );
}
