import { createContext, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Add necessary imports
import "./App.css";
import Header from "./components/header/Header";

import axios from "axios"; //it's used to fetch country data from an API
import Home from "./pages/Home";



const MyContext = createContext(); // This is used to create a Context API object, allowing you to share state across your component tree without passing props down manually.




function App() {
  const [countryList, setCountryList] = useState([]); //useState([]): Initializes the countryList state to an empty array. The setCountryList function allows you to update the value of countryList later on.




  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);



  
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
    countryList: countryList, // header can access this values
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
