import { useContext } from "react";
import { getAllProducts } from "../../api/FetchAPI.Js";
import { CartContext } from "../../context/CartContext";
import toast from "react-hot-toast";
const ClothingItems = () => {
  const { data, isLoading, isError } = getAllProducts();
  const { addToCart } = useContext(CartContext);
  const { incrementCart } = useContext(CartContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error while fetching products.</div>;
  }
  const handleAddToCart = (product) => {
    addToCart(product);
    incrementCart();
    toast.success("Product added successfully!");
  };

  return (
    <div className="clothing-items py">
      {data?.data?.map((product) => (
        <div className="clothing-item" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <div className="price">
            <span className="discounted">${product.discount}</span>
            <span className="original">${product.price}</span>
            <span className="discount">{product.sale}</span>
          </div>
          <button onClick={() => handleAddToCart(product)} className="button"> Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ClothingItems;
