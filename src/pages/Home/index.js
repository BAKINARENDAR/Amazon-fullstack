import Rating from "@mui/material/Rating";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
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
          slidesPerView={6}
          spaceBetween={10}
          navigation={true}
          slidesOffsetBefore={70}
          slidesOffsetAfter={70}
          pagination={{ clickable: true }}
          modules={[Navigation, Autoplay]}
          className="productSwiper"
        >
          <SwiperSlide>
         <Link to='/product/:id' >
            <div className="product">
              <div className="product-content">
                <div className="product-image"></div>
                <p>
                  Kuber Industries Design 6 Pieces PVC PVC 6 Piece Dining Table
                  Placemat Set,White, Standard
                </p>
                <div className="rating-container">
                  {" "}
                  <Rating
                    className="rating"
                    name="read-only"
                    value={5}
                    readOnly
                  />
                  <p>1390</p>
                </div>
                <div className="rating-views">
                  <h4>400+ viewed in past week</h4>
                </div>

                <div className="badge-container">
                  <div className="badge">
                    <span className="discount">78% off</span>
                    <span className="deal">Limited time deal</span>
                  </div>
                </div>
                <div className="info">
                  <span>₹183</span>
                  <p>
                    Get it by Sunday, January 5 FREE Delivery over ₹499.
                    Fulfilled by Amazon.
                  </p>
                </div>
              </div>
            </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            
            <div className="product">
              <div className="product-content">
                <div className="product-image"></div>
                <p>
                  Kuber Industries Design 6 Pieces PVC PVC 6 Piece Dining Table
                  Placemat Set,White, Standard
                </p>
                <div className="rating-container">
                  {" "}
                  <Rating
                    className="rating"
                    name="read-only"
                    value={5}
                    readOnly
                  />
                  <p>1390</p>
                </div>
                <h4>400+ viewed in past week</h4>
                <div className="badge-container">
                  <div className="badge">
                    <span className="discount">78% off</span>
                    <span className="deal">Limited time deal</span>
                  </div>
                </div>
                <div className="info">
                  <span>₹183</span>
                  <p>
                    Get it by Sunday, January 5 FREE Delivery over ₹499.
                    Fulfilled by Amazon.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="product">
              <div className="product-content">
                <div className="product-image"></div>
                <p>
                  Kuber Industries Design 6 Pieces PVC PVC 6 Piece Dining Table
                  Placemat Set,White, Standard
                </p>
                <div className="rating-container">
                  {" "}
                  <Rating
                    className="rating"
                    name="read-only"
                    value={5}
                    readOnly
                  />
                  <p>1390</p>
                </div>
                <h4>400+ viewed in past week</h4>
                <div className="badge-container">
                  <div className="badge">
                    <span className="discount">78% off</span>
                    <span className="deal">Limited time deal</span>
                  </div>
                </div>
                <div className="info">
                  <span>₹183</span>
                  <p>
                    Get it by Sunday, January 5 FREE Delivery over ₹499.
                    Fulfilled by Amazon.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="product">
              <div className="product-content">
                <div className="product-image"></div>
                <p>
                  Kuber Industries Design 6 Pieces PVC PVC 6 Piece Dining Table
                  Placemat Set,White, Standard
                </p>
                <div className="rating-container">
                  {" "}
                  <Rating
                    className="rating"
                    name="read-only"
                    value={5}
                    readOnly
                  />
                  <p>1390</p>
                </div>
                <h4>400+ viewed in past week</h4>
                <div className="badge-container">
                  <div className="badge">
                    <span className="discount">78% off</span>
                    <span className="deal">Limited time deal</span>
                  </div>
                </div>
                <div className="info">
                  <span>₹183</span>
                  <p>
                    Get it by Sunday, January 5 FREE Delivery over ₹499.
                    Fulfilled by Amazon.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="product">
              <div className="product-content">
                <div className="product-image"></div>
                <p>
                  Kuber Industries Design 6 Pieces PVC PVC 6 Piece Dining Table
                  Placemat Set,White, Standard
                </p>
                <div className="rating-container">
                  {" "}
                  <Rating
                    className="rating"
                    name="read-only"
                    value={5}
                    readOnly
                  />
                  <p>1390</p>
                </div>
                <h4>400+ viewed in past week</h4>
                <div className="badge-container">
                  <div className="badge">
                    <span className="discount">78% off</span>
                    <span className="deal">Limited time deal</span>
                  </div>
                </div>
                <div className="info">
                  <span>₹183</span>
                  <p>
                    Get it by Sunday, January 5 FREE Delivery over ₹499.
                    Fulfilled by Amazon.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="product">
              <div className="product-content">
                <div className="product-image"></div>
                <p>
                  Kuber Industries Design 6 Pieces PVC PVC 6 Piece Dining Table
                  Placemat Set,White, Standard
                </p>
                <div className="rating-container">
                  {" "}
                  <Rating
                    className="rating"
                    name="read-only"
                    value={5}
                    readOnly
                  />
                  <p>1390</p>
                </div>
                <h4>400+ viewed in past week</h4>
                <div className="badge-container">
                  <div className="badge">
                    <span className="discount">78% off</span>
                    <span className="deal">Limited time deal</span>
                  </div>
                </div>
                <div className="info">
                  <span>₹183</span>
                  <p>
                    Get it by Sunday, January 5 FREE Delivery over ₹499.
                    Fulfilled by Amazon.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="product">
              <div className="product-content">
                <div className="product-image"></div>
                <p>
                  Kuber Industries Design 6 Pieces PVC PVC 6 Piece Dining Table
                  Placemat Set,White, Standard
                </p>
                <div className="rating-container">
                  {" "}
                  <Rating
                    className="rating"
                    name="read-only"
                    value={5}
                    readOnly
                  />
                  <p>1390</p>
                </div>
                <h4>400+ viewed in past week</h4>
                <div className="badge-container">
                  <div className="badge">
                    <span className="discount">78% off</span>
                    <span className="deal">Limited time deal</span>
                  </div>
                </div>
                <div className="info">
                  <span>₹183</span>
                  <p>
                    Get it by Sunday, January 5 FREE Delivery over ₹499.
                    Fulfilled by Amazon.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="product">
              <div className="product-content">
                <div className="product-image"></div>
                <p>
                  Kuber Industries Design 6 Pieces PVC PVC 6 Piece Dining Table
                  Placemat Set,White, Standard
                </p>
                <div className="rating-container">
                  {" "}
                  <Rating
                    className="rating"
                    name="read-only"
                    value={5}
                    readOnly
                  />
                  <p>1390</p>
                </div>
                <h4>400+ viewed in past week</h4>
                <div className="badge-container">
                  <div className="badge">
                    <span className="discount">78% off</span>
                    <span className="deal">Limited time deal</span>
                  </div>
                </div>
                <div className="info">
                  <span>₹183</span>
                  <p>
                    Get it by Sunday, January 5 FREE Delivery over ₹499.
                    Fulfilled by Amazon.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="product">
              <div className="product-content">
                <div className="product-image"></div>
                <p>
                  Kuber Industries Design 6 Pieces PVC PVC 6 Piece Dining Table
                  Placemat Set,White, Standard
                </p>
                <div className="rating-container">
                  {" "}
                  <Rating
                    className="rating"
                    name="read-only"
                    value={5}
                    readOnly
                  />
                  <p>1390</p>
                </div>
                <h4>400+ viewed in past week</h4>
                <div className="badge-container">
                  <div className="badge">
                    <span className="discount">78% off</span>
                    <span className="deal">Limited time deal</span>
                  </div>
                </div>
                <div className="info">
                  <span>₹183</span>
                  <p>
                    Get it by Sunday, January 5 FREE Delivery over ₹499.
                    Fulfilled by Amazon.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="product">
              <div className="product-content">
                <div className="product-image"></div>
                <p>
                  Kuber Industries Design 6 Pieces PVC PVC 6 Piece Dining Table
                  Placemat Set,White, Standard
                </p>
                <div className="rating-container">
                  {" "}
                  <Rating
                    className="rating"
                    name="read-only"
                    value={5}
                    readOnly
                  />
                  <p>1390</p>
                </div>
                <h4>400+ viewed in past week</h4>
                <div className="badge-container">
                  <div className="badge">
                    <span className="discount">78% off</span>
                    <span className="deal">Limited time deal</span>
                  </div>
                </div>
                <div className="info">
                  <span>₹183</span>
                  <p>
                    Get it by Sunday, January 5 FREE Delivery over ₹499.
                    Fulfilled by Amazon.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="product">
              <div className="product-content">
                <div className="product-image"></div>
                <p>
                  Kuber Industries Design 6 Pieces PVC PVC 6 Piece Dining Table
                  Placemat Set,White, Standard
                </p>
                <div className="rating-container">
                  {" "}
                  <Rating
                    className="rating"
                    name="read-only"
                    value={5}
                    readOnly
                  />
                  <p>1390</p>
                </div>
                <h4>400+ viewed in past week</h4>
                <div className="badge-container">
                  <div className="badge">
                    <span className="discount">78% off</span>
                    <span className="deal">Limited time deal</span>
                  </div>
                </div>
                <div className="info">
                  <span>₹183</span>
                  <p>
                    Get it by Sunday, January 5 FREE Delivery over ₹499.
                    Fulfilled by Amazon.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="product">
              <div className="product-content">
                <div className="product-image"></div>
                <p>
                  Kuber Industries Design 6 Pieces PVC PVC 6 Piece Dining Table
                  Placemat Set,White, Standard
                </p>
                <div className="rating-container">
                  {" "}
                  <Rating
                    className="rating"
                    name="read-only"
                    value={5}
                    readOnly
                  />
                  <p>1390</p>
                </div>
                <h4>400+ viewed in past week</h4>
                <div className="badge-container">
                  <div className="badge">
                    <span className="discount">78% off</span>
                    <span className="deal">Limited time deal</span>
                  </div>
                </div>
                <div className="info">
                  <span>₹183</span>
                  <p>
                    Get it by Sunday, January 5 FREE Delivery over ₹499.
                    Fulfilled by Amazon.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="product">
              <div className="product-content">
                <div className="product-image"></div>
                <p>
                  Kuber Industries Design 6 Pieces PVC PVC 6 Piece Dining Table
                  Placemat Set,White, Standard
                </p>
                <div className="rating-container">
                  {" "}
                  <Rating
                    className="rating"
                    name="read-only"
                    value={5}
                    readOnly
                  />
                  <p>1390</p>
                </div>
                <h4>400+ viewed in past week</h4>
                <div className="badge-container">
                  <div className="badge">
                    <span className="discount">78% off</span>
                    <span className="deal">Limited time deal</span>
                  </div>
                </div>
                <div className="info">
                  <span>₹183</span>
                  <p>
                    Get it by Sunday, January 5 FREE Delivery over ₹499.
                    Fulfilled by Amazon.
                  </p>
                </div>
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
