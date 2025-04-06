import Rating from "@mui/material/Rating";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { fetchDataFromApi } from "../../utils/api";

const Listing = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const slidesPerView = 5;

  // Fetch categories on mount
  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetchDataFromApi("/api/category");
        console.log("Categories fetched:", res);
        setCategories(res?.categoryList || []);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    getCategories();
  }, []);

  // Fetch products when selectedCategory changes
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const endpoint = selectedCategory
          ? `/api/product?category=${encodeURIComponent(selectedCategory.name)}`
          : "/api/product";

        console.log("Fetching products from endpoint:", endpoint);
        const res = await fetchDataFromApi(endpoint);
        console.log("Products fetched:", res);
        setProducts(Array.isArray(res) ? res : []);
      } catch (err) {
        console.error("Error fetching products:", err);
        setProducts([]);
      }
    };
    fetchProducts();
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    console.log("Category clicked:", category);
    setSelectedCategory(category);
  };

  // Render products in Swiper
  const renderProducts = () => {
    if (products.length === 0) {
      return (
        <p>
          {selectedCategory
            ? "No products in this category"
            : "Loading products..."}
        </p>
      );
    }

    return (
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={10}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Optional: Auto-slide
        className="productSwiper"
      >
        {products.map((product) => (
         <SwiperSlide
         key={categories._id}
         onClick={() => handleCategoryClick(categories)}
         className={selectedCategory?._id === categories._id ? "active-category" : ""}
       >
       
            <Link
              to={`/product/${product._id}`}
              className="product-link"
              style={{ textDecoration: "none" }}
            >
              <div className="product">
                <div className="product-content">
                  <div className="product-image">
                    {product.images?.length > 0 ? (
                      <img
                        src={product.images[0]}
                        alt={product.name}
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
                      value={product.rating || 0}
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
                            ).toFixed(0)}% off`
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
        ))}
      </Swiper>
    );
  };

  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Autoplay]}
        className="listingSwiper"
      >
        {categories.map((category) => (
          <SwiperSlide
            key={category._id}
            onClick={() => handleCategoryClick(category)}
          >
            <div className="listing-product">
              <div className="listing-product-content">
                <div className="listing-product-image">
                  <img
                    src={category.images?.[0] || "/fallback.jpg"}
                    alt={category.name}
                  />
                </div>
                <p>{category.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <section className="product-listing-page">
        <div className="listing-container">
          <div className="product-list">
            <Sidebar />
            <div className="content-right">
              <div className="content-right-products">{renderProducts()}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Listing;
