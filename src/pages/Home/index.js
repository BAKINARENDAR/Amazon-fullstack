import { useContext, useEffect } from "react";
import "swiper/css"; // Swiper core styles
import "swiper/css/navigation"; // Navigation module styles
import "swiper/css/pagination"; // Pagination module styles
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { MyContext } from "../../App";
import hero1 from "./hero1.jpg";
import hero2 from "./hero2.jpg";
import hero3 from "./hero3.jpg";
import hero5 from "./hero5.jpg";
import hero6 from "./hero6.jpg";
import product from "./product.jpg";
const Home = () => {
  const context = useContext(MyContext);
  useEffect(() => {
    // Set header and footer visibility to true when we visit the homepage
    context.setshowheaderfooter(true);
  }, [context]);



  return (
    <>
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000, // Delay between slides (in ms)
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        modules={[Navigation, Autoplay]}
        className="bannerSwiper"
      >
        <SwiperSlide>
          <img src={hero1} alt="slider1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hero2} alt="slider1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hero3} alt="slider1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hero5} alt="slider1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hero6} alt="slider1" />
        </SwiperSlide>
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
          <h2>Customers’ Most-Loved products</h2>
            <div className="box4-image"></div>
            <p>See more</p>
          </div>
        </div>

        <div className="product-heading">
          <div className="p-heading">
            <p>Inspired by your browsing history</p>
          </div>
        </div>

        <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Autoplay]}
        className="productSwiper"
      >
      
          <SwiperSlide >
            <div className="product">
              <div className="product-content">
                <div className="product-image">
                  <img
                    src={product}
                    alt=""
                  />
                </div>
                <p></p>
              </div>
            </div>
          </SwiperSlide>
   
      </Swiper>
      

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
            <div className="box4-image"></div>
            <p>See more</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
