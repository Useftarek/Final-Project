import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../../api/FetchAPI';

export default function Product_Images() {
  const [selectedImage, setSelectedImage] = useState();
  const { id } = useParams();
  const { data, isLoading, isError } = getSingleProduct(id);

  const ProductsData = data?.data;

  useEffect(() => {
    if (ProductsData) {
      setSelectedImage(ProductsData.image);
    }
  }, [ProductsData]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading product data</div>;

  return (
    <div className="product-images py">
      <div className="thumbnails">
        {ProductsData?.image && (
          <img
            src={ProductsData.image}
            alt="Thumbnail 1"
            onClick={() => setSelectedImage(ProductsData.image)}
            className={selectedImage === ProductsData.image ? "active" : ""}
          />
        )}

        {ProductsData?.themb2 && (
          <img
            src={ProductsData.themb2}
            alt="Thumbnail 2"
            onClick={() => setSelectedImage(ProductsData.themb2)}
            className={selectedImage === ProductsData.themb2 ? "active" : ""}
          />
        )}

        {ProductsData?.themb3 && (
          <img
            src={ProductsData.themb3}
            alt="Thumbnail 3"
            onClick={() => setSelectedImage(ProductsData.themb3)}
            className={selectedImage === ProductsData.themb3 ? "active" : ""}
          />
        )}
      </div>

      <div className="main-image-container">
        {selectedImage && (
          <img src={selectedImage} alt="Selected Product" className="main-image" />
        )}
      </div>
    </div>
  )
}
