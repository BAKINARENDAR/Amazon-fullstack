import Rating from "@mui/material/Rating";
import "swiper/css"; // Swiper core styles
import "swiper/css/navigation"; // Navigation module styles
import "swiper/css/pagination"; // Pagination module styles
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const RelatedProducts=(props)=>{
    return(
        <>
        <div className="product-heading">
          <div className="p-heading">
            <p>{props.title}</p>
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
        </>
    )

}
export default RelatedProducts;