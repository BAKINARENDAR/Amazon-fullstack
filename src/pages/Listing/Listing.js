import Rating from "@mui/material/Rating";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchDataFromApi } from "../../utils/api";

const Listing = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]); // Will store unique categories
  const [selectedCategory, setSelectedCategory] = useState(null); // Category filter
  const { id } = useParams(); // Extract category ID from URL

  // Fetch categories on mount and remove duplicates
  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetchDataFromApi("/api/category");
        console.log("Raw Categories fetched:", res);

        // Filter out duplicates based on _id first, then name as fallback
        const uniqueCategories = res?.categoryList
          ? res.categoryList.filter((category, index, self) => {
              const firstIndex = self.findIndex(
                (c) => c._id === category._id || c.name === category.name
              );
              console.log(
                `Checking category: ${category.name}, _id: ${category._id}, index: ${index}, firstIndex: ${firstIndex}`
              );
              return index === firstIndex;
            })
          : [];
        console.log("Unique Categories after filtering:", uniqueCategories);
        setCategories(uniqueCategories);
      } catch (err) {
        console.error("Error fetching categories:", err);
        setCategories([]);
      }
    };
    getCategories();
  }, []);

  // Set initial category from URL
  useEffect(() => {
    if (categories.length > 0 && id) {
      if (id === "todays-deals") {
        setSelectedCategory(null);
        console.log("Set selectedCategory to null for Today's Deals");
      } else {
        const category = categories.find((cat) => cat._id === id);
        if (category) {
          setSelectedCategory(category);
          console.log("Set selectedCategory from URL:", category.name);
        } else {
          setSelectedCategory(null);
          console.log("No matching category found, set to null");
        }
      }
    }
  }, [id, categories]);

  // Fetch products based on selectedCategory
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let endpoint = "/api/product";
        if (selectedCategory === null) {
          endpoint = "/api/product"; // Fetch all products when no category is selected
          console.log("Fetching all products from:", endpoint);
        } else {
          endpoint = `/api/product?category=${encodeURIComponent(selectedCategory.name)}`;
          console.log("Fetching products for category:", selectedCategory.name, "from:", endpoint);
        }

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
    console.log("handleCategoryClick triggered with category:", category.name);
    setSelectedCategory(category); // Update selected category
  };

  const renderProducts = () => {
    if (products.length === 0) {
      return (
        <p>
          {selectedCategory
            ? `No products found in ${selectedCategory.name}`
            : id === "todays-deals"
            ? "No deals available today"
            : "Loading products..."}
        </p>
      );
    }

    return (
      <div className="product-grid">
        {products.map((product) => (
          <Link
            key={product._id}
            to={`/product/${product._id}`}
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
                            ((product.Regularprice - product.Discountedprice) /
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
        ))}
      </div>
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
        onSlideClick={(swiper) => {
          const category = categories[swiper.clickedIndex];
          if (category) handleCategoryClick(category);
        }}
      >
        {categories.map((category) => (
          <SwiperSlide key={category._id}>
            <div className="listing-product" onClick={() => handleCategoryClick(category)}>
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
            <div className="content-right">
              <h2>
                {id === "todays-deals"
                  ? "Today's Deals"
                  : selectedCategory
                  ? selectedCategory.name
                  : "All Products"}
              </h2>
              <div className="content-right-products">{renderProducts()}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Listing;