import Rating from "@mui/material/Rating";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { MyContext } from "../../App";
import { fetchDataFromApi } from "../../utils/api";
import hero1 from "./hero1.jpg";
import hero2 from "./hero2.jpg";
import hero3 from "./hero3.jpg";
import hero5 from "./hero5.jpg";
import hero6 from "./hero6.jpg";

const Home = () => {
  const context = useContext(MyContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    context.setshowheaderfooter(true);

    const fetchProducts = async () => {
      try {
        const res = await fetchDataFromApi("/api/product");
        console.log("API response (Home):", res);
        res.forEach((product, index) => {
          console.log(`Product ${index} _id:`, product._id); // Debug each _id
        });
        setProducts(res);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, [context]);

  return (
    <>
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="bannerSwiper"
      >
        <SwiperSlide>
          <img src={hero1} alt="slider1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hero2} alt="slider2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hero3} alt="slider3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hero5} alt="slider5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hero6} alt="slider6" />
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
          {products.length > 0 ? (
            products.map((product, index) => (
              <SwiperSlide key={product._id || index}> {/* Use _id as key */}
                <Link
                  to={`/product/${product._id}`} // Fixed string interpolation
                  className="product-link"
                  style={{ textDecoration: "none" }}
                >
                  <div className="product">
                    <div className="product-content">
                      <div className="product-image">
                        {product.images?.length > 0 ? (
                          <img
                            src={product.images[0]}
                            alt="Product"
                            width={150}
                            height={160}
                          />
                        ) : (
                          <span>No Image</span>
                        )}
                      </div>
                      <div className="pdt-name">
                        <p>{product.name}</p>
                      </div>
                      <div className="rating">
                        <Rating
                          name="read-only"
                          value={product.rating}
                          readOnly
                        />
                      </div>
                      <div className="featured">
                        <div className="badge">
                          <span className="discount">
                            {product.Regularprice && product.Discountedprice
                              ? `${(
                                  ((product.Regularprice -
                                    product.Discountedprice) /
                                    product.Regularprice) *
                                  100
                                ).toFixed(0)}% off` // Fixed template literal
                              : "No discount"}
                          </span>
                          <span className="deal">Limited time deal</span>
                        </div>
                        <div className="pdt-price">
                          <span className="current-price">
                            ₹{product.Discountedprice}
                          </span>
                          <span className="original-price">
                            M.R.P: <del>₹{product.Regularprice}</del>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))
          ) : (
            <p>Loading products...</p>
          )}
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