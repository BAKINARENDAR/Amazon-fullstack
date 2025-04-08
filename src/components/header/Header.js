import { useEffect, useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { fetchDataFromApi } from "../../utils/api";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetchDataFromApi("/api/category");
        console.log("API response:", res);
        const categoryList = res?.categoryList || [];
        setCategories(categoryList);
        // Use full category objects to retain IDs, but display unique names
        const uniqueCatNames = [
          ...new Set(categoryList.map((cat) => cat.name)),
        ];
        setUniqueCategories(uniqueCatNames);
      } catch (err) {
        console.error("Error fetching categories:", err);
        setCategories([]);
        setUniqueCategories([]);
      }
    };
    getCategories();
  }, []);

  // Redirect to Listing page with the category ID
  const handleCategoryClick = (categoryName) => {
    const category = categories.find((cat) => cat.name === categoryName);
    if (category && category._id) {
      navigate(`/cat/${category._id}`);
    } else {
      console.error(`Category "${categoryName}" not found or missing ID`);
    }
  };

  return (
    <>
      <header>
        <div className="navbar">
          <Link to="/">
            <div className="nav-logo border">
              <div className="logo"></div>
            </div>
          </Link>

          <div className="nav-search">
            <input
              type="text"
              placeholder="Search Amazon"
              className="search-input"
            />
            <div className="search-icon">
              <FaSearch />
            </div>
          </div>

          <div className="nav-signin border">
            <p>
              <span>Hello, sign in</span>
            </p>
            <p className="nav-second">
              Accounts & list <IoMdArrowDropdown className="down-arrow" />
            </p>
            <div className="nav-submenu">
              <IoMdArrowDropup className="nav-submenu-arrowup" />
              <label>
                <div className="submenu-signin">
                  <Link to="/SignIn">
                    <button>Sign in</button>
                  </Link>
                  <p>New customer? Start here.</p>
                </div>
              </label>
            </div>
          </div>

          <div className="nav-return border">
            <p>
              <span>Returns</span>
            </p>
            <p className="nav-second">& Orders</p>
          </div>

          <Link to="/cart">
            <div className="nav-cart border">
              <FaShoppingCart className="cart-icon" />
              <div />
              <p className="cart">Cart</p>
            </div>
          </Link>
        </div>

        <div className="panel">
          <div className="panel-options">
            <div className="panel-all borderpanel"></div>
            <Link
              to="/cat/todays-deals"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <p className="borderpanel">Today's Deals</p>
            </Link>
            {uniqueCategories.map((catName, index) => (
              <p
                key={index}
                className="borderpanel"
                onClick={() => handleCategoryClick(catName)}
                style={{ cursor: "pointer" }}
              >
                {catName}
              </p>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
