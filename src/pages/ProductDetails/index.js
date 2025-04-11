import Rating from "@mui/material/Rating";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import { useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
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
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchProduct = async () => {
      console.log("Fetching product with ID:", id);
      if (!id) {
        console.error("ID is undefined, check the URL:", window.location.href);
        setError("Product ID is missing");
        setLoading(false);
        return;
      }
      try {
        setLoading(true); // Reset loading state
        const res = await fetchDataFromApi(`/api/product/${id}`);
        console.log("Product fetched:", res);
        setProduct(res);
        if (res?.variants) {
          const variantsArray = res.variants.split(",");
          setSelectedSize(variantsArray[0]);
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError(err.message || "Failed to fetch product");
      } finally {
        setLoading(false); // Ensure loading is false after fetch
      }
    };

    fetchProduct();
    window.scrollTo(0, 0);
  }, [id]); // Depend on id to re-fetch when it changes

 
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

  const [selectedSize, setSelectedSize] = useState("");

  return (
    <>
      <div className="product-details-page">
        <div className="details-container">
          {loading ? (
            <div>Loading product details...</div>
          ) : error ? (
            <div>Error: {error}</div>
          ) : product ? (
            <div className="details-list">
              <ProductsZoom images={product.images} />
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
                              ((product.Regularprice - product.Discountedprice) /
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
                    <span>Size: {selectedSize || "Select a size"}</span>
                    <div className="size-options">
                      {product.variants ? (
                        product.variants.split(",").map((variant, index) => (
                          <Button
                            key={index}
                            className={`size-option ${
                              selectedSize === variant ? "selected" : ""
                            }`}
                            onClick={() => setSelectedSize(variant)}
                          >
                            {variant}
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
                      <li>{product.description}</li>
                    </ul>
                  </div>
                </div>

                <div className="details2">
                <div className="pdtdetails-price">
                    <span className="pdtdetails2-current-price">
                      ₹{product.Discountedprice}
                    </span>
                    <span className="pdtdetails2-original-price">
                      M.R.P: <del>₹{product.Regularprice}</del>
                    </span>
                  </div>
                  <div className="fulfilled">
                    <img src={fulfilled} alt="fulfilled-image" />
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
                    <button className="d2-wish-button">Add to Wish List</button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>Product not found</div>
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
            {/* Other review boxes remain unchanged */}
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default ProductDetails;