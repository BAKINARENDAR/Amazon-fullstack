import Circle from "@uiw/react-color-circle";
import { useEffect, useState } from "react";
import "swiper/css"; // Swiper core styles
import "swiper/css/navigation"; // Navigation module styles
import "swiper/css/pagination"; // Pagination module styles
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { fetchDataFromApi } from "../../utils/api";

const Listing = () => {
  const [selectedcolor, setselectedcolor] = useState("#2b3a53");
  const [categories, setCategories] = useState([]);

  const handlecolorchange = (color) => {
    setselectedcolor(color.hex);
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetchDataFromApi("/api/category");
        console.log("API response:", res); // Optional: to verify structure
        setCategories(res?.categoryList || []);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    getCategories();
  }, []);

  const colors = ["#2b3a53", "#98b2ba", "#878b8c"];
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
        {categories.map((category, index) => (
          <SwiperSlide key={category._id}>
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
              <div className="content-right-products">
                <div className="row1">
                  <div className="row1-content">
                    <div className="row1-image"></div>
                    <div className="badge-container">
                      <div className="badge">
                        <span className="discount">29% off</span>
                        <span className="deal">Limited time deal</span>
                      </div>
                    </div>
                    <div className="row1-heading">
                      <p>Samsung Galaxy M 15 5G</p>
                      <p>Prime Edition (Blue Topaz,6.. </p>
                    </div>
                    <div className="color-picker">
                      <Circle
                        color={selectedcolor}
                        onChange={handlecolorchange}
                        colors={colors}
                        radius={5}
                        className="circle-edit"
                      />
                    </div>
                  </div>

                  <div className="row1-content">
                    <div className="row1-image"></div>
                    <div className="badge-container">
                      <div className="badge">
                        <span className="discount">29% off</span>
                        <span className="deal">Limited time deal</span>
                      </div>
                    </div>
                    <div className="row1-heading">
                      <p>Samsung Galaxy M 15 5G</p>
                      <p>Prime Edition (Blue Topaz,6.. </p>
                    </div>
                  </div>

                  <div className="row1-content">
                    <div className="row1-image"></div>
                    <div className="badge-container">
                      <div className="badge">
                        <span className="discount">29% off</span>
                        <span className="deal">Limited time deal</span>
                      </div>
                    </div>
                    <div className="row1-heading">
                      <p>Samsung Galaxy M 15 5G</p>
                      <p>Prime Edition (Blue Topaz,6.. </p>
                    </div>
                  </div>

                  <div className="row1-content">
                    <div className="row1-image"></div>
                    <div className="badge-container">
                      <div className="badge">
                        <span className="discount">29% off</span>
                        <span className="deal">Limited time deal</span>
                      </div>
                    </div>
                    <div className="row1-heading">
                      <p>Samsung Galaxy M 15 5G</p>
                      <p>Prime Edition (Blue Topaz,6.. </p>
                    </div>
                  </div>

                  <div className="row1-content">
                    <div className="row1-image"></div>
                    <div className="badge-container">
                      <div className="badge">
                        <span className="discount">29% off</span>
                        <span className="deal">Limited time deal</span>
                      </div>
                    </div>
                    <div className="row1-heading">
                      <p>Samsung Galaxy M 15 5G</p>
                      <p>Prime Edition (Blue Topaz,6.. </p>
                    </div>
                  </div>
                </div>

                <div className="row1">
                  <div className="row1-content">
                    <div className="row1-image"></div>
                    <div className="badge-container">
                      <div className="badge">
                        <span className="discount">29% off</span>
                        <span className="deal">Limited time deal</span>
                      </div>
                    </div>
                    <div className="row1-heading">
                      <p>Samsung Galaxy M 15 5G</p>
                      <p>Prime Edition (Blue Topaz,6.. </p>
                    </div>
                  </div>

                  <div className="row1-content">
                    <div className="row1-image"></div>
                    <div className="badge-container">
                      <div className="badge">
                        <span className="discount">29% off</span>
                        <span className="deal">Limited time deal</span>
                      </div>
                    </div>
                    <div className="row1-heading">
                      <p>Samsung Galaxy M 15 5G</p>
                      <p>Prime Edition (Blue Topaz,6.. </p>
                    </div>
                  </div>

                  <div className="row1-content">
                    <div className="row1-image"></div>
                    <div className="badge-container">
                      <div className="badge">
                        <span className="discount">29% off</span>
                        <span className="deal">Limited time deal</span>
                      </div>
                    </div>
                    <div className="row1-heading">
                      <p>Samsung Galaxy M 15 5G</p>
                      <p>Prime Edition (Blue Topaz,6.. </p>
                    </div>
                  </div>

                  <div className="row1-content">
                    <div className="row1-image"></div>
                    <div className="badge-container">
                      <div className="badge">
                        <span className="discount">29% off</span>
                        <span className="deal">Limited time deal</span>
                      </div>
                    </div>
                    <div className="row1-heading">
                      <p>Samsung Galaxy M 15 5G</p>
                      <p>Prime Edition (Blue Topaz,6.. </p>
                    </div>
                  </div>

                  <div className="row1-content">
                    <div className="row1-image"></div>
                    <div className="badge-container">
                      <div className="badge">
                        <span className="discount">29% off</span>
                        <span className="deal">Limited time deal</span>
                      </div>
                    </div>
                    <div className="row1-heading">
                      <p>Samsung Galaxy M 15 5G</p>
                      <p>Prime Edition (Blue Topaz,6.. </p>
                    </div>
                  </div>
                </div>

                <div className="row1">
                  <div className="row1-content">
                    <div className="row1-image"></div>
                    <div className="badge-container">
                      <div className="badge">
                        <span className="discount">29% off</span>
                        <span className="deal">Limited time deal</span>
                      </div>
                    </div>
                    <div className="row1-heading">
                      <p>Samsung Galaxy M 15 5G</p>
                      <p>Prime Edition (Blue Topaz,6.. </p>
                    </div>
                  </div>

                  <div className="row1-content">
                    <div className="row1-image"></div>
                    <div className="badge-container">
                      <div className="badge">
                        <span className="discount">29% off</span>
                        <span className="deal">Limited time deal</span>
                      </div>
                    </div>
                    <div className="row1-heading">
                      <p>Samsung Galaxy M 15 5G</p>
                      <p>Prime Edition (Blue Topaz,6.. </p>
                    </div>
                  </div>

                  <div className="row1-content">
                    <div className="row1-image"></div>
                    <div className="badge-container">
                      <div className="badge">
                        <span className="discount">29% off</span>
                        <span className="deal">Limited time deal</span>
                      </div>
                    </div>
                    <div className="row1-heading">
                      <p>Samsung Galaxy M 15 5G</p>
                      <p>Prime Edition (Blue Topaz,6.. </p>
                    </div>
                  </div>

                  <div className="row1-content">
                    <div className="row1-image"></div>
                    <div className="badge-container">
                      <div className="badge">
                        <span className="discount">29% off</span>
                        <span className="deal">Limited time deal</span>
                      </div>
                    </div>
                    <div className="row1-heading">
                      <p>Samsung Galaxy M 15 5G</p>
                      <p>Prime Edition (Blue Topaz,6.. </p>
                    </div>
                  </div>

                  <div className="row1-content">
                    <div className="row1-image"></div>
                    <div className="badge-container">
                      <div className="badge">
                        <span className="discount">29% off</span>
                        <span className="deal">Limited time deal</span>
                      </div>
                    </div>
                    <div className="row1-heading">
                      <p>Samsung Galaxy M 15 5G</p>
                      <p>Prime Edition (Blue Topaz,6.. </p>
                    </div>
                  </div>
                </div>

                <div className="row1">
                  <div className="row1-content">
                    <div className="row1-image"></div>
                    <div className="badge-container">
                      <div className="badge">
                        <span className="discount">29% off</span>
                        <span className="deal">Limited time deal</span>
                      </div>
                    </div>
                    <div className="row1-heading">
                      <p>Samsung Galaxy M 15 5G</p>
                      <p>Prime Edition (Blue Topaz,6.. </p>
                    </div>
                  </div>

                  <div className="row1-content">
                    <div className="row1-image"></div>
                    <div className="badge-container">
                      <div className="badge">
                        <span className="discount">29% off</span>
                        <span className="deal">Limited time deal</span>
                      </div>
                    </div>
                    <div className="row1-heading">
                      <p>Samsung Galaxy M 15 5G</p>
                      <p>Prime Edition (Blue Topaz,6.. </p>
                    </div>
                  </div>

                  <div className="row1-content">
                    <div className="row1-image"></div>
                    <div className="badge-container">
                      <div className="badge">
                        <span className="discount">29% off</span>
                        <span className="deal">Limited time deal</span>
                      </div>
                    </div>
                    <div className="row1-heading">
                      <p>Samsung Galaxy M 15 5G</p>
                      <p>Prime Edition (Blue Topaz,6.. </p>
                    </div>
                  </div>

                  <div className="row1-content">
                    <div className="row1-image"></div>
                    <div className="badge-container">
                      <div className="badge">
                        <span className="discount">29% off</span>
                        <span className="deal">Limited time deal</span>
                      </div>
                    </div>
                    <div className="row1-heading">
                      <p>Samsung Galaxy M 15 5G</p>
                      <p>Prime Edition (Blue Topaz,6.. </p>
                    </div>
                  </div>

                  <div className="row1-content">
                    <div className="row1-image"></div>
                    <div className="badge-container">
                      <div className="badge">
                        <span className="discount">29% off</span>
                        <span className="deal">Limited time deal</span>
                      </div>
                    </div>
                    <div className="row1-heading">
                      <p>Samsung Galaxy M 15 5G</p>
                      <p>Prime Edition (Blue Topaz,6.. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Listing;
