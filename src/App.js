import { createContext, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Add necessary imports
import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/Header";

import axios from "axios"; //it's used to fetch country data from an API
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Listing from "./pages/Listing/Listing";
import ProductDetails from "./pages/ProductDetails";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";




const MyContext = createContext(); // This is used to create a Context API object, allowing you to share state across your component tree without passing props down manually.




function App() {
  const [countryList, setCountryList] = useState([]); //useState([]): Initializes the countryList state to an empty array. The setCountryList function allows you to update the value of countryList later on.




  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);


  const[showheaderfooter,setshowheaderfooter]=useState(true);


  
  const getCountry = async (url) => {
    try {
      const response = await axios.get(url);
      setCountryList(response.data.data); // once the data is received we will update in setcountrylist
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching country data:", error);
    }
  };

 

  // Correcting the values object
  const values = {
    countryList: countryList,
    showheaderfooter,
    setshowheaderfooter // header can access this values
  };
  

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {
          showheaderfooter===true &&  <Header />
        }
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cat/:id" element={<Listing />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
        {
          showheaderfooter===true &&  <Footer />
        }
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
