import React from 'react';

const ClothingItems = ({ items }) => {
  return (
    <div className="clothing-items py">
      {items.length === 0 ? (
        <p>Not Found</p>
      ) : (
        items.map((item) => (
          <div className="clothing-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <div className="rating">{"⭐".repeat(item.rating)}{"☆".repeat(5 - item.rating)}</div>
            <p className="price">
              <span className="discounted">{item.discount}</span> <span className="original">{item.price}</span> <span className="discount">{item.sale}</span>
            </p>
          </div >
        ))
      )}
    </div >
  );
};

export default ClothingItems;
