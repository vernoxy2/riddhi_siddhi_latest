import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutsUs/AboutUs';
import Products from './pages/Products/Products';
import ContactUs from './pages/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import ScrollToTop from './ScrollToTop';
import Aos from 'aos';
import 'aos/dist/aos.css'; // Make sure to import AOS CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: false, // Ensures animation only runs once
      offset: 200, // Controls when the animation triggers
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
