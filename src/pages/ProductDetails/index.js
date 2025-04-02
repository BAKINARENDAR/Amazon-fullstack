import Dialog from "@mui/material/Dialog";
import Rating from "@mui/material/Rating";
import { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { MyContext } from "../../App";
import ProductsZoom from "../../components/ProductsZoom";
import { fetchDataFromApi } from "../../utils/api";
import amzon from "./amzon.png";
import cash from "./cash.png";
import free from "./free.png";
import fulfilled from "./fulfilled.png";
import RelatedProducts from "./RelatedProducts";
import ret from "./ret.png";
import secure from "./secure.png";
import top from "./top.png";

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetchDataFromApi("/api/product");
        console.log("API response:", res);
        setProducts(res);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };

    fetchProducts();
    window.scrollTo(0, 0);
  }, []);

  const [isopenModal, setisopenModal] = useState(false);
  const closeModal = () => setisopenModal(false);
  const openModal = () => setisopenModal(true);
  const context = useContext(MyContext);
  const [Selectedcountry, setSelectedcountry] = useState("India");
  const [quantity, setquantity] = useState(1);
  const handleChange = (e) => setquantity(e.target.value);

  const reviewsData = {
    overallRating: 3.9,
    totalRatings: 67,
    ratingsbreakdown: [
      { stars: 5, percentage: 55 },
      { stars: 4, percentage: 25 },
      { stars: 3, percentage: 10 },
      { stars: 2, percentage: 5 },
      { stars: 1, percentage: 5 },
    ],
  };

  const [selectedSize, setSelectedSize] = useState("8GB+256GB"); // Default selected option
  const options = ["8GB+256GB", "12GB+256GB"]; // Predefined options if variants is a single string

  return (
    <>
      <div className="product-details-page">
        <div className="details-container">
          {products.length > 0 ? (
            products.map((product, index) => (
              <div className="details-list" key={index}>
                <ProductsZoom />
                <div className="details-content-right">
                  <div className="details1">
                    <h1>{product.name || "Product Name"}</h1>

                    <div className="rating-container">
                      <Rating
                        className="rating"
                        name="read-only"
                        value={product.rating}
                        readOnly
                      />
                    </div>

                    <div className="rating-views">
                      <h4>600+ bought in past month</h4>
                    </div>

                    <div className="badge-container">
                      <div className="badge">
                        <span className="discount">
                          {product.Regularprice && product.Discountedprice
                            ? `${(
                                ((product.Regularprice -
                                  product.Discountedprice) /
                                  product.Regularprice) *
                                100
                              ).toFixed(0)}% off`
                            : "No discount"}
                        </span>
                        <span className="deal">Limited time deal</span>
                      </div>
                    </div>

                    <div className="pdtdetails-price">
                      <span className="pdtdetails-current-price">
                        ₹{product.Discountedprice}
                      </span>
                      <span className="pdtdetails-original-price">
                        M.R.P: <del>₹{product.Regularprice}</del>
                      </span>
                    </div>
                    <div className="fulfilled">
                      <img src={fulfilled} alt="fulfilled-image" />
                      <p>Inclusive of all taxes</p>
                    </div>
                    <div className="mini-product-delivery">
                      <Swiper
                        modules={[Navigation]}
                        slidesPerView={5}
                        spaceBetween={0}
                        navigation
                        className="miniSwiper"
                      >
                        <SwiperSlide>
                          <div className="first-mini">
                            <img src={cash} alt="first-mini" />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="first-mini">
                            <img src={ret} alt="first-mini" />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="first-mini">
                            <img src={amzon} alt="first-mini" />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="first-mini">
                            <img src={free} alt="first-mini" />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="first-mini">
                            <img src={top} alt="first-mini" />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="first-mini">
                            <img src={secure} alt="first-mini" />
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                    <div className="pdt-color">
                      <span className="color">
                        Color: <strong>{product.color}</strong>
                      </span>
                    </div>
                    <div className="pdt-size-ram">
                      <span>Size: {selectedSize}</span>
                      <div className="size-options">
                        {product.variants ? (
                          options.map((option, index) => (
                            <Button
                              key={index}
                              className={`size-option ${
                                selectedSize === option ? "selected" : ""
                              }`}
                              onClick={() => setSelectedSize(option)}
                            >
                              {option.variant}
                            </Button>
                          ))
                        ) : (
                          <span>No variants available</span>
                        )}
                      </div>
                    </div>
                    <div className="about-product">
                      <h2>About this item</h2>
                      <ul>
                        <li>
                         {product.description}
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="details2">
                    <div className="info">
                      <h4> ₹174</h4>
                    </div>
                    <div className="fulfilled">
                      <img src={fulfilled} alt="fulfilled-image" />
                    </div>
                    <div className="d2-delivery">
                      <h3>
                        <span>FREE delivery</span> Sunday, 19
                      </h3>
                      <p>
                        <strong>January</strong> on your first order.
                      </p>
                      <h4>
                        <span>Details</span>
                      </h4>
                    </div>

                    <div className="d2-delivery2">
                      <p>Or fastest delivery <strong>Tomorrow</strong>,</p>
                      <p>
                        <strong> January.</strong>
                      </p>
                    </div>

                    <div className="d2-address">
                      <div className="d2-first">
                        <HiOutlineLocationMarker />
                        <p>Delivering to {Selectedcountry}</p>
                      </div>
                      <div className="d2-second">
                        <p onClick={openModal}>Update Location</p>
                      </div>
                      <Dialog open={isopenModal} onClose={closeModal}>
                        <div className="locationModal">
                          <div className="locationh2">
                            <h3>Choose your location</h3>
                            <Button className="close" onClick={closeModal}>
                              <IoMdClose />
                            </Button>
                          </div>
                          <div className="location-p">
                            <p>
                              Select a delivery location to see product
                              availability and delivery options
                            </p>
                          </div>
                          <div>
                            <input
                              type="text"
                              placeholder="Search location"
                              className="search-location"
                            />
                            <button className="search ">
                              <FaSearch />
                            </button>
                          </div>

                          <ul className="countryList">
                            {context.countryList?.length !== 0 &&
                              context.countryList?.map((item, index) => (
                                <li key={index}>
                                  <Button
                                    onClick={() => {
                                      setSelectedcountry(item.country);
                                      closeModal();
                                    }}
                                  >
                                    {item.country}
                                  </Button>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </Dialog>
                    </div>

                    <div className="d2-stock">
                      <p>In stock</p>
                    </div>

                    <div className="d2-quantity">
                      <select
                        value={quantity}
                        onChange={handleChange}
                        className="d2-dropdown"
                      >
                        {[1, 2, 3, 4, 5].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="d2-buying">
                      <button className="first-button">Add to cart</button>
                      <button className="second-button">Buy Now</button>
                    </div>

                    <div className="d2-gift">
                      <input className="d2-gift-check" type="checkbox" />
                      <p>Add gift options</p>
                    </div>

                    <div className="d2-wish-list">
                      <button className="d2-wish-button">
                        Add to Wish List
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No products available</div>
          )}
        </div>
      </div>
      <br />

      <RelatedProducts title="Recently viewed products" />
      <RelatedProducts title="Recently viewed products" />
      <div className="rating-review">
        <div className="rating-review-container">
          <div className="rating-left">
            <div className="customer-rating">
              <h2>Customer reviews</h2>
            </div>
            <div className="overall-rating">
              <span className="stars">★★★★☆</span>
              <span className="score">
                {reviewsData.overallRating} out of 5
              </span>
            </div>

            <div className="global-ratings">
              <p>{reviewsData.totalRatings} global ratings</p>
            </div>

            <div className="rating-breakdown">
              {reviewsData.ratingsbreakdown.map((item) => (
                <div className="rating-row" key={item.stars}>
                  <span>{item.stars} star</span>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <span>{item.percentage}%</span>
                </div>
              ))}
            </div>
            <div className="ratings-info">
              <IoIosArrowDown className="arrow-down" />
              <p>How are ratings calculated?</p>
            </div>

            <div className="write-review">
              <div className="write">
                <h3>Review this product</h3>
                <p>Share your thoughts with other customers</p>
                <button>Write a product review</button>
              </div>
            </div>
          </div>
          <div className="review-right">
            <div className="customers-say">
              <h2>Customers say</h2>
              <p>
                Customers appreciate the product quality and design. They find
                it satisfactory and affordable.
              </p>
              <span>AI-generated from the text of customer reviews</span>
            </div>

            <div className="review-india">
              <h2>Top reviews from India</h2>
            </div>

            <div className="review-box">
              <div className="logo-name">
                <div className="logo-image"></div>
                <p>Rahul Solanki</p>
              </div>
              <div className="worth-star">
                <span className="w-stars">★★★★☆</span>
                <h3>Worth it !</h3>
              </div>
              <div className="review-matter">
                <p>Reviewed in India on 3 January 2025</p>
              </div>
              <div className="color-size">
                <p>Colour: Cream & Gold Size: 6</p>
                <span>Verified Purchase</span>
              </div>
              <div className="quality">
                <p>Quality is good</p>
              </div>
              <div className="help-report">
                <button className="hr-1">Helpful</button>
                <button className="hr-2">Report</button>
              </div>
            </div>

            <div className="review-box">
              <div className="logo-name">
                <div className="logo-image"></div>
                <p>Rahul Solanki</p>
              </div>
              <div className="worth-star">
                <span className="w-stars">★★★★☆</span>
                <h3>Worth it !</h3>
              </div>
              <div className="review-matter">
                <p>Reviewed in India on 3 January 2025</p>
              </div>
              <div className="color-size">
                <p>Colour: Cream & Gold Size: 6</p>
                <span>Verified Purchase</span>
              </div>
              <div className="quality">
                <p>Quality is good</p>
              </div>
              <div className="help-report">
                <button className="hr-1">Helpful</button>
                <button className="hr-2">Report</button>
              </div>
            </div>

            <div className="review-box">
              <div className="logo-name">
                <div className="logo-image"></div>
                <p>Rahul Solanki</p>
              </div>
              <div className="worth-star">
                <span className="w-stars">★★★★☆</span>
                <h3>Worth it !</h3>
              </div>
              <div className="review-matter">
                <p>Reviewed in India on 3 January 2025</p>
              </div>
              <div className="color-size">
                <p>Colour: Cream & Gold Size: 6</p>
                <span>Verified Purchase</span>
              </div>
              <div className="quality">
                <p>Quality is good</p>
              </div>
              <div className="help-report">
                <button className="hr-1">Helpful</button>
                <button className="hr-2">Report</button>
              </div>
            </div>

            <div className="review-box">
              <div className="logo-name">
                <div className="logo-image"></div>
                <p>Rahul Solanki</p>
              </div>
              <div className="worth-star">
                <span className="w-stars">★★★★☆</span>
                <h3>Worth it !</h3>
              </div>
              <div className="review-matter">
                <p>Reviewed in India on 3 January 2025</p>
              </div>
              <div className="color-size">
                <p>Colour: Cream & Gold Size: 6</p>
                <span>Verified Purchase</span>
              </div>
              <div className="quality">
                <p>Quality is good</p>
              </div>
              <div className="help-report">
                <button className="hr-1">Helpful</button>
                <button className="hr-2">Report</button>
              </div>
            </div>

            <div className="review-box">
              <div className="logo-name">
                <div className="logo-image"></div>
                <p>Rahul Solanki</p>
              </div>
              <div className="worth-star">
                <span className="w-stars">★★★★☆</span>
                <h3>Worth it !</h3>
              </div>
              <div className="review-matter">
                <p>Reviewed in India on 3 January 2025</p>
              </div>
              <div className="color-size">
                <p>Colour: Cream & Gold Size: 6</p>
                <span>Verified Purchase</span>
              </div>
              <div className="quality">
                <p>Quality is good</p>
              </div>
              <div className="help-report">
                <button className="hr-1">Helpful</button>
                <button className="hr-2">Report</button>
              </div>
            </div>

            <div className="review-box">
              <div className="logo-name">
                <div className="logo-image"></div>
                <p>Rahul Solanki</p>
              </div>
              <div className="worth-star">
                <span className="w-stars">★★★★☆</span>
                <h3>Worth it !</h3>
              </div>
              <div className="review-matter">
                <p>Reviewed in India on 3 January 2025</p>
              </div>
              <div className="color-size">
                <p>Colour: Cream & Gold Size: 6</p>
                <span>Verified Purchase</span>
              </div>
              <div className="quality">
                <p>Quality is good</p>
              </div>
              <div className="help-report">
                <button className="hr-1">Helpful</button>
                <button className="hr-2">Report</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default ProductDetails;