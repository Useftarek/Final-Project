import React, { useState } from "react";
import { getSingleProduct } from "../../api/FetchAPI";
import { useNavigate, useParams } from "react-router-dom";


export default function ReviewSection() {

  const { id } = useParams();
  const { data, isLoading, isError } = getSingleProduct(id);
  const ProductsData = data?.data;
  // const navigate = useNavigate();
  console.log(ProductsData);

  const [activeTab, setActiveTab] = useState("review");

  return (
    <div className="review-section py">

      <div className="tabs">
        <button
          onClick={() => setActiveTab("details")}
          className={activeTab === "details" ? "active" : ""}
        >
          Product Details
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={activeTab === "reviews" ? "active" : ""}
        >
          Rating & Reviews
        </button>
        <button
          onClick={() => setActiveTab("faqs")}
          className={activeTab === "faqs" ? "active" : ""}
        >
          FAQs
        </button>
      </div>

      <div className="content">
        {activeTab === "details" && (
          <div className="details">
            <h2>{ProductsData.name}</h2>
            <p>{ProductsData.description || "Loading description..."}</p>
            <p>Price: ${ProductsData.price || "Loading..."}</p>
          </div>
        )}

        {activeTab === "reviews" && (
          <>
            <h3>Product Reviews</h3>
            {isLoading && <p>Loading reviews...</p>}
            {isError && <p>Error loading product details</p>}
            <div className="reviews">
              {product?.reviews?.length > 0 ? (
                product.reviews.map((review, index) => (
                  <div key={index} className="review-card">
                    <span className="rating">{review.rating || "⭐"}</span>
                    <h3>
                      {review.name} <span className="verified">✔️</span>
                    </h3>
                    <p className="comment">"{review.comment}"</p>
                    <p className="date">Posted on {review.date}</p>
                  </div>
                ))
              ) : (
                <p>No reviews found.</p>
              )}
            </div>
          </>
        )}

        {activeTab === "faqs" && (
          <div className="faqs">
            <h3>Frequently Asked Questions</h3>
            <p>Q: What is the fabric composition?</p>
            <p>A: 100% Cotton</p>
          </div>
        )}
      </div>
    </div>
  );
}
