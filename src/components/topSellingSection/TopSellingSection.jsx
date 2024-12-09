import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { getAllProducts } from '../../api/FetchAPI.Js';
import { useNavigate } from 'react-router-dom';

export default function TopSellingSection() {
  const { data, isLoading, isError } = getAllProducts();
  const navigate = useNavigate();

  const goToPage = () => {
    navigate('/category')
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error while fetching products.</div>;
  }

  const firstThreeProducts = data?.data?.slice(4, 8) || [];

  return (
    <section className="new-arrivals py px">
      <h2 className="title">Top Selling</h2>
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
          1024: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
      >
        {firstThreeProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="product">
              <img src={product.image} alt={product.name} />
              <p className="product-name">{product.name}</p>
              <div className="rating">
                <span>{product.rating}</span> <span>5/5</span>
              </div>
              <p className="price">${product.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="view-all" onClick={goToPage}>View All</button>
    </section>
  );
}