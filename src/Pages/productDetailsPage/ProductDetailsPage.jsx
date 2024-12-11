import React, { Fragment } from "react";
import Products_Details_Content from "../../components/products_Details_Content/Products_Details_Content";
import Product_Images from "../../components/Product_details_image/Product_Images";
import ReviewSection from "../../components/reviewsection/ReviewSection";
import AlsoLike from "../../components/alsolike/AlsoLike";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleProduct } from "../../api/FetchAPI";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const { data, isLoading, isError } = getSingleProduct(id);
  const ProductsData = data?.data;
  const navigate = useNavigate();
  console.log(ProductsData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error while fetching product details.</div>;
  }

  if (!id) {
    navigate("/");
    return null;
  }

  return (
    <Fragment>
      <div className="product_details_page">
        <Product_Images
          image={ProductsData.image}
          themb1={ProductsData.themb1}
          themb2={ProductsData.themb2}
          themb3={ProductsData.themb3}
        />
        <Products_Details_Content
          title={ProductsData.name}
          price={ProductsData.price}
          description={ProductsData.description}
          sale={ProductsData.sale}
          dicount={ProductsData.discount}
          rating={ProductsData.rating}
          color={ProductsData.color}
          size={ProductsData.size}
        />
      </div>
      <div>
        <ReviewSection />
        <hr />
        <AlsoLike />
      </div>
    </Fragment>
  );
}
