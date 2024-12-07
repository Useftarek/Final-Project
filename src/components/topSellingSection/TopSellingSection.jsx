import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function TopSellingSection() {
  return (
    <section className="top_selling py px">
      <h2 className="title">NEW SELLING</h2>
      <Swiper
        modules={[Navigation, Pagination , Autoplay]}
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
            <img
              src="https://s3-alpha-sig.figma.com/img/e01f/5d3c/d9029bd465a4c7158689ab1619693014?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AZOgA5JruUkk0HdorBGLP0rStF9RVDgNKBLql0SpZNhC9wOsZMA7~MmcgX2ot1FdECT7ijlYHZHltcczvqpJ8-kMidsrTCb4CHN5iYPxTVF7qidHKOw3uTJOdAm4dvS0wPHx2z~vkin7I5frSj8oIH5gYLnF5Fq1OozQHX6RMZo3R3kN7A5O8pev2T7TuYO~liRs5vwH8a8hMgfDf09RdZrqC1a~9oM5zlh5VsagZJmDCCHV1fA8B7lA~AIO5GS9bXm~9YlcQwFVD7MSd0aQHvAM5jfgFYgk7m0hpSZujw4MYiw33m2U-SuOa~3UKg1lM-vo4zDDOIcB89R1Sjq8-g__"
              alt="T-shirt with Tape Details"
            />
            <p className="product-name">VERTICAL STRIPED SHIRT</p>
            <div className="rating">
              <span>⭐️⭐️⭐️⭐️⭐️</span> <span>5/5</span>
            </div>
            <p className="price">
              <span className="discounted">$212</span> <span className="original">$232</span>{' '}
              <span className="discount">-20%</span>
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="product">
            <img
              src="https://s3-alpha-sig.figma.com/img/5723/4b01/d5fcac5632cf6823570ca2d1d53d7d73?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JAYef0qyhr4LFb6yh45WWTz7HCGR1rLruzvbeoPcV7Jzwyl54PYrDbxTMMwlQwcoUZl4esKLF4ejVOqx0NdGcMvTzcCoEVjhOh5VRWnIXu9OUhbXFXPK1alqsj-2KKC3xqrbCJRgRCU3uhgBebzCPgETpBQghvZ7qswIi3TpvAoqKzzEa~34kf9q~nXmyu2t2mFQzetos17-S-uWOnjHxJ9CvECOs8hY~vV3UnrsZ1juSzL1VgEcVook8C3ujy~0gLzsSxcBO5~6BsukaIei5o2t3lHmYNGWcOS7TKtyCfo9nGTLHK9T1lRHJn7pFjvVoUzDD~fD6aMQgfsRYMc5RA__"
              alt="COURAGE GRAPHIC T-SHIRT"
            />
            <p className="product-name">COURAGE GRAPHIC T-SHIRT</p>
            <div className="rating">
              <span>⭐️⭐️⭐️⭐️</span> <span>4/5</span>
            </div>
            <p className="price">$145</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="product">
            <img
              src="https://s3-alpha-sig.figma.com/img/8951/5d71/4a66d9ca1401101dee4cc689f8bb5ad2?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h0CA~BxE31aUTiOzAvWUWmooggYkJ-zY5prhGehwg7TgASdQ8qBC1C6lwUqns8PmX~hgu8wcSO~5CKCkkt7ZiUgcow-Nlq2LC-rSu1rmhSgPLh5BWFh4R4Rq~qQIK4iv3afCXfpzBE1-Tvwu6CGVK2O5zyDgynkoKWzn-Ka16G20VTg~JwT67lwMPpn04H7xIcrTfsYgH0SGDfogckRN6GK63nsQqSWj2VpXv9UnmvGoAAyPzwtn6SHjHp4P3zSYOVLTIdBCxVSRpCfIezL4XmtqmMKU3RdITL4EguWF3WVwx-Zp01YbEyJtXoSIOCH-IkT4Txo9bueERXGjZ2aVzw__"
              alt="COURAGE GRAPHIC T-SHIRT"
            />
            <p className="product-name">COURAGE GRAPHIC T-SHIRT</p>
            <div className="rating">
              <span>⭐️⭐️⭐️⭐️</span> <span>4/5</span>
            </div>
            <p className="price">$80</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="product">
            <img
              src="https://s3-alpha-sig.figma.com/img/f180/c768/08e2ff8a46be56aa933f031aed3abe75?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aD961IyY5fO8AJQapgmLzJfEZuAOYFHv35E7gWzhHKF8-Qsqg1yixwuL~UJvhLoZd06BUjE-qOKiBnOWb4bdxJJGvtJFP-B7311wv52cp3Vs64~pwaeL4WfFH1kwd0YwgKZzvbx5w9f07RzlSawpfgeR0YpfUtQdEYXQMFZlxhPDNyMfjIdD4QZmqCjjFM-5FyBgF8z4lXB1Ykw0ZECOXH73gSJuwhMzI2e7qUWLIGKnDvlpHAqIzNS8QJKI6xAhUazxNldceOsf2abEHodqEFaeA5USwmjngZevsIIJk-DOFe9raDhg62rkvKB3JX~3gfCS136fMGs5FiEzQMVAXw__"
              alt="COURAGE GRAPHIC T-SHIRT"
            />
            <p className="product-name">COURAGE GRAPHIC T-SHIRT</p>
            <div className="rating">
              <span>⭐️⭐️⭐️⭐️</span> <span>4/5</span>
            </div>
            <p className="price">$210</p>
          </div>
        </SwiperSlide>


      </Swiper>
      <button className="view-all">View All</button>
    </section>
  );
}
