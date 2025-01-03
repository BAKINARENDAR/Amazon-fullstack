import Dialog from "@mui/material/Dialog";
import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup, IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { MyContext } from "../../App";

const Header = () => {
  const [isopenModal, setisopenModal] = useState(false);
  const closeModal = () => {
    setisopenModal(false); // Use setisopenModal to update the state
  };

  const openModal = () => {
    setisopenModal(true);
  };
  const context = useContext(MyContext);
  const [Selectedcountry, setSelectedcountry] = useState("India");

  const [selectLanguage, setselectLangauage] = useState("EN");
  const [showLanguagemenu,setshowLanguagemenu]=useState(false);

  const handlelangmenu=(e)=>{
    setselectLangauage(e.target.value);
    setshowLanguagemenu(false);
  }

  const handlemouseenter=()=>{
    setshowLanguagemenu(true);
  }
  const handlemouseclose =()=>{
    setshowLanguagemenu(false);
  }

  return (
    <>
      <header>
        <div className="navbar">
          <div className="nav-logo border " >
            <div className="logo"></div>
          </div>

          <div className="nav-address border">
            <p className="first-add">Deliver to</p>
            <div className="add-icon" onClick={openModal}>
              <HiOutlineLocationMarker />
              <p className="second-add">{Selectedcountry}</p>
            </div>
            <Dialog open={isopenModal} onClose={closeModal}>
              <div className="locationModal">
                <div className="locationh2">
                  <h3>Choose your location</h3>
                  <Button className="close" onClick={closeModal}>
                    <IoMdClose />{" "}
                  </Button>
                </div>
                <div className="location-p">
                  <p>
                    Select a delivery location to see product availability and
                    delivery options
                  </p>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Search location"
                    className="search-location"
                  />
                  <button className="search ">
                    {" "}
                    <FaSearch />
                  </button>
                </div>

                <ul className="countryList">
                  {context.countryList?.length !== 0 &&
                    context.countryList?.map((item, index) => {
                      return (
                        <li key={index}>
                          <Button
                            onClick={() => {
                              setSelectedcountry(item.country);
                              closeModal();
                            }}
                          >
                            {item.country}{" "}
                          </Button>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </Dialog>
          </div>

          <div className="nav-search">
            <select className="search-select">
              <option>All</option>
              <option>All departments</option>
              <option>Art & Crafts</option>
              <option>Automotive</option>
              <option>Beauty & Personel Care</option>
              <option>Books</option>
              <option>Boys's Fashion</option>
              <option>Computer's</option>
              <option>Deals</option>
              <option>Digital Music</option>
              <option>Girl's fashion</option>
              <option>Electronics</option>
              <option>Health & Household</option>
              <option>Home & Kitchen</option>
              <option>Industrial & Scientfic</option>
              <option>Kindle Store</option>
              <option>Luggage</option>
              <option>Mens's Fashion</option>
              <option>Movie's & TV</option>
              <option>Music CD & Vinyls</option>
              <option>Pet Supplies</option>
              <option>Prime Video</option>
              <option>Software</option>
              <option>Sports & Outdoors</option>
              <option>Tools & Improvement</option>
              <option>Toys & Games</option>
              <option>Video Games</option>
              <option>Women's Fashion</option>
            </select>
            <input
              type="text"
              placeholder="Search Amazon"
              className="search-input"
            />
            <div className="search-icon">
              <FaSearch />
            </div>
          </div>

          <div className="nav-country border" onMouseEnter={handlemouseenter} onMouseLeave={handlemouseclose}>
            <div className="country-logo"></div>
            <p className="second-add">{selectLanguage} </p>
            <IoMdArrowDropdown className="down-arrow"/>
{ showLanguagemenu && (
            <div className="submenu">
              <IoMdArrowDropup className="submenu-arrowup" />
              <label>
                <input type="radio" name="language" value="EN" checked={selectLanguage === "EN"} onChange={handlelangmenu} />{" "}
                English - EN
              </label>
              <label>
                <input type="radio" name="language" value="HI" checked={selectLanguage === "HI"} onChange={handlelangmenu}  /> हिंदी - HI
              </label>
              <label>
                <input type="radio" name="language" value="TA" checked={selectLanguage === "TA"} onChange={handlelangmenu} /> தமிழ் - TA
              </label>
              <label>
                <input type="radio" name="language" value="TE" checked={selectLanguage === "TE"} onChange={handlelangmenu} /> తెలుగు - TE
              </label>
              <label>
                <input type="radio" name="language" value="KN" checked={selectLanguage === "KN"} onChange={handlelangmenu }/> ಕನ್ನಡ - KN
              </label>
              <label>
                <input type="radio" name="language" value="ML" checked={selectLanguage === "ML"} onChange={handlelangmenu }/> മലയാളം - ML
              </label>
              <label>
                <input type="radio" name="language" value="BN" checked={selectLanguage === "BN"} onChange={handlelangmenu }/> বাংলা - BN
              </label>
              <label>
                <input type="radio" name="language" value="MR"  checked={selectLanguage === "MR"} onChange={handlelangmenu }/> मराठी - MR
              </label>
            </div>
                )}
          </div>

          <div class="nav-signin border">
            <p>
              <span>Hello , sign in</span>
            </p>
            <p class="nav-second">
              Accounts & list <IoMdArrowDropdown className="down-arrow" />
            </p>

            <div className="nav-submenu">
              <IoMdArrowDropup className="nav-submenu-arrowup" />
              <label>
                <div className="submenu-signin">
                  <button>Sign in</button>
                  <p>New customer?Start here.</p>
                </div>
              </label>
            </div>
          </div>

          <div class="nav-return border">
            <p>
              <span>Returns</span>
            </p>
            <p class="nav-second">& Orders</p>
          </div>
          <div class="nav-cart border">
            <FaShoppingCart className="cart-icon" />
            <div />
            <p className="cart">Cart</p>
          </div>
        </div>

        <div className="panel">
          <div className="panel-options">
            <div className="panel-all borderpanel">
              <IoMenu />
              All
            </div>
            <p className="borderpanel">Fresh</p>
            <p className="borderpanel">MX Player</p>
            <p className="borderpanel">Sell</p>
            <p className="borderpanel">Best Sellers</p>
            <p className="borderpanel">Today's Deals</p>
            <p className="borderpanel">Mobiles</p>
            <p className="borderpanel">Customer Service</p>
            <p className="borderpanel">Prime</p>
            <p className="borderpanel">Electronics</p>
            <p className="borderpanel">Home & Kitchen</p>
            <p className="borderpanel">Amazon Pay</p>
            <p className="borderpanel">New Releases</p>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
