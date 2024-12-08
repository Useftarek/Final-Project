import { useContext } from "react";
import { getAllProducts } from "../../api/FetchAPI";
import { CartContext } from "../../context/CartContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const ClothingItems = () => {
  const { data, isLoading, isError } = getAllProducts();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/ProductDetailsPage/${id}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error while fetching products.</div>;
  }
  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success("The product was added successfully");
  };

  return (
    <div className="clothing-items py">
      {data?.data?.map((product) => (
        <div className="clothing-item" key={product.id}>
          <img
            src={product.image}
            alt={product.name}
            onClick={() => handleNavigate(product.id)}
          />
          <h3>{product.name}</h3>
          <span>{product.rating}</span>
          <div className="price">
            <span className="discounted">${product.discount}</span>
            <span className="original">${product.price}</span>
            <span className="discount">{product.sale}</span>
          </div>
          <button onClick={() => handleAddToCart(product)} className="button">
            {" "}
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ClothingItems;
