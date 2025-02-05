import Circle from "@uiw/react-color-circle";
import { useEffect, useState } from "react";
import "swiper/css"; // Swiper core styles
import "swiper/css/navigation"; // Navigation module styles
import "swiper/css/pagination"; // Pagination module styles
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Sidebar from "../../components/Sidebar/Sidebar";

const Listing = () => {
  const [selectedcolor, setselectedcolor] = useState("#2b3a53");

  const handlecolorchange = (color) => {
    setselectedcolor(color.hex);
  };

   useEffect(() => {
      window.scrollTo(0, 0);  // This will scroll the page to the top
    }, []);

  const colors = ["#2b3a53", "#98b2ba", "#878b8c",];
  return (
    <>
      <Swiper
        slidesPerView={10}
        spaceBetween={0}
        navigation={true}
        slidesOffsetBefore={20}
        slidesOffsetAfter={20}
        pagination={{ clickable: true }}
        modules={[Navigation, Autoplay]}
        className="listingSwiper"
      >
        <SwiperSlide>
          <div className="listing-product">
            <div className="listing-product-content">
              <div className="listing-product-image1"></div>
              <p>Clothing</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="listing-product">
            <div className="listing-product-content">
              <div className="listing-product-image2"></div>
              <p>Footwear</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="listing-product">
            <div className="listing-product-content">
              <div className="listing-product-image3"></div>
              <p>Beauty&</p>
              <p>Makeup</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="listing-product">
            <div className="listing-product-content">
              <div className="listing-product-image4"></div>
              <p>Jewellery</p>
              <p>Luggage,</p>
              <p>Watches</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="listing-product">
            <div className="listing-product-content">
              <div className="listing-product-image5"></div>
              <p>Kids & baby</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="listing-product">
            <div className="listing-product-content">
              <div className="listing-product-image6"></div>
              <p>Amazon</p>
              <p>Brands&</p>
              <p>More</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="listing-product">
            <div className="listing-product-content">
              <div className="listing-product-image7"></div>
              <p>Grocery</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="listing-product">
            <div className="listing-product-content">
              <div className="listing-product-image8"></div>
              <p>Sports &</p>
              <p>Fitness</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="listing-product">
            <div className="listing-product-content">
              <div className="listing-product-image9"></div>
              <p>Books &</p>
              <p>Stationary</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="listing-product">
            <div className="listing-product-content">
              <div className="listing-product-image10"></div>
              <p>Car &</p>
              <p>motorbike</p>
              <p>accessories</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="listing-product">
            <div className="listing-product-content">
              <div className="listing-product-image11"></div>
              <p>Pet Supplies</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="listing-product">
            <div className="listing-product-content">
              <div className="listing-product-image12"></div>
              <p>Video Games</p>
              <p>& Software</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="listing-product">
            <div className="listing-product-content">
              <div className="listing-product-image13"></div>
              <p>Muscical </p>
              <p>Instruments</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="listing-product">
            <div className="listing-product-content">
              <div className="listing-product-image14"></div>
              <p>Deal of the</p>
              <p>Day</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="listing-product">
            <div className="listing-product-content">
              <div className="listing-product-image15"></div>
              <p>Amazon</p>
              <p>Business</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="listing-product">
            <div className="listing-product-content">
              <div className="listing-product-image16"></div>
              <p>Clothing</p>
            </div>
          </div>
        </SwiperSlide>
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
