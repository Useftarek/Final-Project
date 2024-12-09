import React from "react";
import Button from "../button/Button";
import { use } from "react";
import { useNavigate } from "react-router-dom";
import { getBanner } from "../../api/FetchAPI.Js";

export default function BannerSection() {
    const navigate = useNavigate();
    const {data , isLoading , isError} = getBanner();
    const goToShop = () => {
        navigate('/category')
    }

    if (isLoading) {
        return <p>Loading</p>
    }
    if(isError) {
        return <p>Error</p>
    }
  return (
    <section className="banner_section">
      <div className="content">
        <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Button title={"Shop Now"} goToShop={goToShop} />

        <div className="stats">
          <div>
            <h2>200+</h2>
            <p>International Brands</p>
          </div>
          <div>
            <h2>2,000+</h2>
            <p>High-Quality Products</p>
          </div>
          <div>
            <h2>30,000+</h2>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
      <div className="image"><img src={data?.data[0].image}/></div>
      <div className="brands">
        <span>VERSE</span>
        <span>ZARA</span>
        <span>GUCCI</span>
        <span>PRADA</span>
        <span>Calvin Klein</span>
      </div>
    </section>
  );
}
