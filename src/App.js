
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Add necessary imports
import './App.css';
import Header from './components/header/Header';

import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
