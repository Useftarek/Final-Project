import React, { useState } from "react";

const reviews = [
  {
    name: "Samantha D.",
    date: "August 14, 2023",
    comment:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable anyone who appreciates good design.who appreciates good design.who appreciates good design.who appreciates good design.",
    rating: 5,
  },
  {
    name: "Alex M.",
    date: "August 15, 2023",
    comment:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch anyone who appreciates good design who appreciates good design.who appreciates good design..",
    rating: 5,
  },
  {
    name: "Ethan R.",
    date: "August 16, 2023",
    comment:
      "This t-shirt is a must-have for anyone who appreciates good design anyone who appreciates good design.who appreciates good design. who appreciates good design.",
    rating: 4.5,
  },
  {
    name: "Olivia P.",
    date: "August 17, 2023",
    comment:
      "As a UI/UX enthusiast, I value simplicity and functionality anyone who appreciates good design. who appreciates good design. who appreciates good design.",
    rating: 5,
  },
  {
    name: "Liam K.",
    date: "August 18, 2023",
    comment:
      "This t-shirt is a fusion of comfort and creativity anyone who appreciates good design. who appreciates good design. who appreciates good design.",
    rating: 5,
  },
  {
    name: "Ava H.",
    date: "August 19, 2023",
    comment:
      "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy anyone who appreciates good design. who appreciates good design. who appreciates good design.",
    rating: 5,
  },
];

export default function ReviewSection() {
  const [activeTab, setActiveTab] = useState("reviews");
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
            <h2>ONE LIFE GRAPHIC T-SHIRT</h2>
            <p>
              This graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and breathable fabric, it offers superior comfort and
              style.
            </p>
          </div>
        )}

        {activeTab === "reviews" && (
          <>
            <div>
              <h3>All Reviews ({reviews.length})</h3>
            </div>
            <div className="reviews">
              {reviews.map((review, index) => (
                <div key={index} className="review-card">
                  <span className="rating">
                    {"⭐".repeat(Math.floor(review.rating))}
                  </span>
                  <h3>
                    {review.name} <span className="verified">✔️</span>{" "}
                  </h3>

                  <p className="comment">"{review.comment}"</p>
                  <p className="date">Posted on {review.date}</p>
                </div>
              ))}
              <div className="loading_more">
                <button>Load More Reviews</button>
              </div>
            </div>
          </>
        )}

        {activeTab === "faqs" && (
          <div className="faqs">
            <h3>Frequently Asked Questions</h3>
            <p>Q: What is the fabric composition?</p>
            <p>A: The t-shirt is made of 100% cotton.</p>
            <p>Q: How should I wash this t-shirt?</p>
            <p>
              A: For best results, machine wash in cold water and tumble dry on
              low.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
