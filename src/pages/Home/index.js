// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Swiper modules from "swiper/modules"

import { Navigation, Pagination } from "swiper/modules";
import hero1 from './hero1.jpg';
import hero2 from './hero2.jpg';
import hero3 from './hero3.jpg';

const Home = () => {
  return (
    <>
    
    <Swiper
  navigation={true}
  pagination={{ clickable: true }}
  modules={[Navigation, Pagination]}
  className="mySwiper"
>
  <SwiperSlide><img src={hero1} alt="slider1"/></SwiperSlide>
  <SwiperSlide><img src={hero2} alt="slider1"/></SwiperSlide>
  <SwiperSlide><img src={hero3} alt="slider1"/></SwiperSlide>

</Swiper>

      <div className="shop-section">
        <div className="box1 box">
          <div className="box-content">
            <h2>Up to 75% off | Wall arts, painting, decor & more...</h2>
            <div className="box1-image"></div>
            <p>See more</p>
          </div>
        </div>

        <div className="box1 box">
          <div className="box-content">
            <h2>Up to 60% off | Car, bike parts & accessories</h2>
            <div className="box2-image"></div>
            <p>See more</p>
          </div>
        </div>

        <div className="box1 box">
          <div className="box-content">
            <h2>Customers’ Most-Loved products</h2>
            <div className="box3-image"></div>
            <p>See more</p>
          </div>
        </div>

        <div className="box1 box">
          <div className="box-content">
            <h2>Starting ₹99 | Start your fitness journey</h2>
            <div className="box4-image"></div>
            <p>See more</p>
          </div>
        </div>

        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

        <div className="box1 box">
          <div className="box-content">
            <h2>Customers’ Most-Loved Fashion for you</h2>
            <div className="box5-image"></div>
            <p>See more</p>
          </div>
        </div>

        <div className="box1 box">
          <div className="box-content">
            <h2>Combo packs | Under ₹799 | Amazon Brands & more</h2>
            <div className="box6-image"></div>
            <p>See more</p>
          </div>
        </div>

        <div className="box1 box">
          <div className="box-content">
            <h2>Appliances for your home | Up to 55% off</h2>
            <div className="box7-image"></div>
            <p>See more</p>
          </div>
        </div>

        <div className="box1 box">
          <div className="box-content">
            <h2>Discover Fashion Trends</h2>
            <div className="box8-image"></div>
            <p>See more</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
