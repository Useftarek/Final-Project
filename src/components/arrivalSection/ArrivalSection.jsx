import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function TopSellingSection() {
  return (
    <section className="new-arrivals py px">
      <h2 className="title">NEW ARRIVALS</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
          1200: { slidesPerView: 4 },
        }}
      >
        <SwiperSlide>
          <div className="product">
            <img src= "https://s3-alpha-sig.figma.com/img/b26f/ea69/ccfd8aa5825862cdb9604a4fb4930464?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ciejQeSBFzSx1N7DvYVVTkRotQMXwAxeV7I3Jh5vVFNjHuvOEdRnIGSLMfYwqniOoB7dnD2KtE8CES9ZkSp7Hc8YCSazD3IzadRETRZPvIaUWIDnjiuxDfMIGXGYq-j6NJUNRryo9XBe3u6OkFAdZyUwhzC0Jy6yhKbpg-6Lm-mTjbsBeWjopqJRm7YGAD97x3IyrL8CB8Fuf7KdQf57K6bxjJNRXzy9A7O6Glia8BGfsPAEAu5QrmWTN2WFssOJiKvusPyIfgwFF7NTW5gwucPPxkBbdA82wTz1oCUo3SpDbpvYq8f8GK8supXoBSXdG2CzWNbTRTtYbyztmg9JVQ__"/>
            <p className="product-name">T-SHIRT WITH TAPE DETAILS</p>
            <div className="rating">
              <span>⭐️⭐️⭐️⭐️⭐️</span> <span>5/5</span>
            </div>
            <p className="price">$120</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="product">
            <img
              src="https://s3-alpha-sig.figma.com/img/769b/9d60/ff941dde9bc0e54431b8d8fe3182f5e9?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SrMC5RrVR~epgNbFCRXtP7P0M4F1hoqZXKE6k4MnT0Ad96BZPNb~CnyJ2xc5VZgalv3sKmzlBV1CEzfP9zsP9bA14LDjFGHg0ST-Jsq2jIEu7WWeml2q-0VMwmkmBhQzR1x5mTweGFKKSZkY-GflgorBdMStsVu67mDFqV5TmhxVRDEIU5hH6HHe8akp3P0vKvg89JEyC6hI0GBxNsUNmLMCprsFGHAx3P7WUhiyfuZW8Cuwgpgug3wkxcuRbLfqGj1uBvIWdLmgD~d78N95NsfIhVfy3xM7zMgI5USo~y1rntm9~1z7YPVtCyGui7V5vwG-8q-aDpAWzlJ6LAJUZQ__"
              alt="COURAGE GRAPHIC T-SHIRT"
            />
            <p className="product-name">Skinny Fit Jeans</p>
            <div className="rating">
              <span>⭐️⭐️⭐️⭐️</span> <span>4/5</span>
            </div>
            <p className="price">
              <span className="discounted">$240</span> <span className="original">$260</span> <span className="discount">-20%</span>
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="product">
            <img
              src="https://s3-alpha-sig.figma.com/img/bbf4/11c2/5fc84f87eeac1062fbe47f49c192d4f2?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KhIZvpJI6F5D8Cswp6gaxJ0rWOIeLsayGG3SPEVRrfmLDGKATytWWKd07qxsTf0QPLlxRWuGWzw9eSvJAcaBrIcAwnOJzLCl8lYQZBCjWj5Gqzk3zr8c-k2go9aDYJxFK-z7pyg4q719j5kV-XU9U~cZB1lrZTdpCz8m1vzDNX5TETJSDXY0ij387DzrPPSKMPUoTKHta3I~MmHAPVcyIJKNCTi14YWwUsGndSmsLPyi7pADTBfAitGfL2PQNyMNAUjfyf-9DOmSTB2nGuDfBZrwgaXCevDSCUuIkVUXr6SwmNB1t5YAuBV4aOQBGQQB9egsrDfLIknlgrVALROiUA__"
              alt="COURAGE GRAPHIC T-SHIRT"
            />
            <p className="product-name">CHECKERED SHIRT</p>
            <div className="rating">
              <span>⭐️⭐️⭐️</span> <span>3/5</span>
            </div>
            <p className="price">$180</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="product">
            <img
              src="https://s3-alpha-sig.figma.com/img/3457/42c2/7cc557f42cf1d489f7cc811856b90e9f?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jSC~BFXCcvMXbIBDTYz0wPyLdbQ87NRvB0IzwnPlo18QG1YU4OUZZYm1qfJfeOdL0xn8rGRQuzPt1Cb7Xea9wEQJXlQjRfWStfwF7KgeoeTDyJHYX5~k19eYVObCCA-~id22x0~nGrZoySKSvbxzhyeT4zn0aGiBIbTTWc40dr7KhuW0Gdn8ab8x1piNO0-jDb9t8-~QU48REu8LnzQpsOgDWZeVqmH3WuEji5aC4D8RTLdJSHm5mOQPgt34SEWsYcCZBVH8RpV9GALxNYfBLBgx6vkFfbscShimMbLwxqpysP11Y-ExfMloMyuxuTu1OjtQBIPB93eNbRQZx3DI0A__"
              alt="COURAGE GRAPHIC T-SHIRT"
            />
            <p className="product-name">SLEEVE STRIPED T-SHIRT</p>
            <div className="rating">
              <span>⭐️⭐️⭐️⭐️⭐️</span> <span>5/5</span>
            </div>
            <p className="price">
              <span className="discounted">$130</span> <span className="original">$160</span> <span className="discount">-30%</span>
            </p>
          </div>
        </SwiperSlide>


      </Swiper>
      <button className="view-all">View All</button>
    </section>
  );
}
