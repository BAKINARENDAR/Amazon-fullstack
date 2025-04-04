import Rating from "@mui/material/Rating";
import { useEffect, useState } from "react";
import "swiper/css"; // Swiper core styles
import "swiper/css/navigation"; // Navigation module styles
import "swiper/css/pagination"; // Pagination module styles
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchDataFromApi } from "../../../utils/api";


const RelatedProducts=(props)=>{
  const [products, setProducts] = useState([]);

    useEffect(() => {
      
  
      const fetchProducts = async () => {
        try {
          const res = await fetchDataFromApi("/api/product");
        
          setProducts(res);
        } catch (err) {
          console.error("Error fetching categories:", err);
        }
      };
  
      fetchProducts();
    }, );
    return(
        <>
        <div className="product-heading">
          <div className="p-heading">
            <p>{props.title}</p>
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
              <SwiperSlide key={index}>
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
        ? `${((product.Regularprice - product.Discountedprice) / product.Regularprice * 100).toFixed(0)}% off`
        : "No discount"}
    </span>
                        <span className="deal">Limited time deal</span>
                      </div>
                      <div className="pdt-price">
                        <span className="current-price">₹{product.Discountedprice}</span>
                        <span className="original-price">
                          M.R.P: <del>₹{product.Regularprice}</del>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <p>Loading products...</p> // Show loading while fetching
          )}
        </Swiper>
        </>
    )

}
export default RelatedProducts;