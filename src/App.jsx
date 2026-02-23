import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./ScrollToTop";
import Aos from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo from "./assets/RRSLogo.svg";


// Lazy Load Pages
const Home = lazy(() => import("./pages/Home/Home"));
const AboutUs = lazy(() => import("./pages/AboutsUs/AboutUs"));
const Products = lazy(() => import("./pages/Products/Products"));
const ContactUs = lazy(() => import("./pages/ContactUs/ContactUs"));

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      // once: true,
      offset: 200,
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <div className="overflow-x-hidden">
        {/* Suspense Wrapper */}
        <Suspense
          fallback={
            <div className="flex flex-col justify-center items-center h-screen text-xl space-y-5">

              <img src={Logo} alt="" loading="lazy" className="animate-pulse"/>
              <p>Loading...</p>

            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
