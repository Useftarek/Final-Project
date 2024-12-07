import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


export default function OurHappy() {
  
  return (
    <section className="testimonials">
      <h2 className="title">OUR HAPPY CUSTOMERS</h2>
      
      <Swiper
        spaceBetween={15} 
        slidesPerView={1} 
        breakpoints={{
          768: { slidesPerView: 2 }, 
          1024: { slidesPerView: 3 } 
        }}
      >
        <SwiperSlide>
          <div className="testimonial">
            <div className="rating">⭐⭐⭐⭐⭐</div>
            <p className="name">Sarah M. <span className="verified">✔️</span></p>
            <p className="comment">Im blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece Ive bought has exceeded my expectations.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial">
            <div className="rating">⭐⭐⭐⭐⭐</div>
            <p className="name">Alex K. <span className="verified">✔️</span></p>
            <p className="comment">Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial">
            <div className="rating">⭐⭐⭐⭐⭐</div>
            <p className="name">James L. <span className="verified">✔️</span></p>
            <p className="comment">As someone whos always on the lookout for unique fashion pieces, Im thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial">
            <div className="rating">⭐⭐⭐⭐⭐</div>
            <p className="name">James L. <span className="verified">✔️</span></p>
            <p className="comment">As someone whos always on the lookout for unique fashion pieces, Im thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
