import React, { useEffect } from "react";
import homeHeader from "../../assets/About/bgImg.webp";
import aboutSectionImg from "../../assets/Home/aboutSectionImg.jpg";

import Industries from "../../components/Industries/Industries";
import Enterprises from "../../components/Enterprises/Enterprises";
import Counter from "../../components/Counter/Counter";
import Clients from "../../components/Clients/Clients";
import Products from "../../components/Products/Products";
import ourStrength1 from "../../assets/Home/ourStrength1.png";
import ourStrength2 from "../../assets/Home/ourStrength2.png";
import ourStrength3 from "../../assets/Home/ourStrength3.png";
import ourStrength4 from "../../assets/Home/ourStrength4.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false, // whether animation should happen only once
      delay: 200,
    });
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <div
        className="relative w-full h-[210px] md:h-[400px] max-w-full xl:h-[70vh]  flex items-start md:items-center justify-start bg-cover bg-center font-serif px-2 sm:px-4 md:px-8 overflow-x-hidden"
        data-aos="fade-up"
        style={{ backgroundImage: `url(${homeHeader})` }}
      >
        <div
          className="ml-2 sm:ml-4 lg:ml-16 max-w-xl bg-black bg-opacity-0 p-5 lg:p-8 rounded-lg flex flex-col items-start w-full gap-2 sm:gap-4  "
          data-aos="fade-right"
        >
          <h1 className="text-xl sm:text-2xl md:text-5xl font-bold  text-black font-serif">
            Your Trusted Stockist for Industrial Fasteners
          </h1>
          <p className="text-sm sm:text-base md:text-2xl text-black font-serif">
            Explore Our Range of Industrial Nuts, Bolts, Washer, Screws and other fastners in GI, MS, SS &
            High Tensile.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-primary hover:bg-red-600 text-white text-sm sm:text-base md:text-xl font-semibold px-6 sm:px-10 md:px-12 py-2 sm:py-3 md:py-4 rounded-lg shadow-md transition"
          >
            Get Quote
          </button>
        </div>
      </div>

      <div className="w-full container flex flex-col items-center py-8 sm:py-12 overflow-x-hidden">
        <div className=" w-full grid grid-cols-1 xl:grid-cols-2 gap-8  items-center">
          {/* Image Section */}
          <div
            className="flex justify-center"
            data-aos="fade-right"
          >
            <img
              src={aboutSectionImg}
              alt="About Riddhi Siddhi"
              className="rounded-xl shadow-lg object-cover w-full max-w-xs sm:max-w-md md:max-w-xl lg:w-full h-[220px] sm:h-[320px] md:h-[400px] lg:h-[480px]"
            />
          </div>
          {/* Text Section */}
          <div
            className="flex flex-col gap-y-2 justify-center items-center lg:items-start w-full p-5 sm:px-0 text-center xl:text-start"
            data-aos="fade-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-primary mb-4 sm:mb-5 font-serif w-full">
              Who We Are
            </h2>
            <p className="text-base sm:text-2xl text-[#555555] mb-2 sm:mb-2 font-serif ">
              Riddhi Siddhi Enterprise is a trusted stockist and wholesaler of
              industrial fasteners, based in Vapi, Gujarat. We supply a wide
              range of nuts, bolts, screws, washers, and threaded rods to
              manufacturers, builders, and resellers across India.
            </p>
            <p className="text-base sm:text-2xl text-[#555555] mb-4 sm:mb-4 font-serif">
              With ready stock, fast delivery, and a focus on quality, we ensure
              reliable fastener solutions that meet IS, DIN, and ASTM standards.
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-2 sm:mb-4 font-serif">
              Our Strength Lies In
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-4 sm:gap-y-6 w-full text-start">
              <div className="flex items-center space-x-2 sm:space-x-3">
                {/* <span className="text-xl sm:text-2xl">🏠</span> */}
                <img
                  src={ourStrength1}
                  alt="ourStrength1"
                  className="w-10 h-10"
                />
                <span className="text-base sm:text-2xl text-[#555555]">
                  Ready stock of 500+ SKUs
                </span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                {/* <span className="text-xl sm:text-2xl">🧱</span> */}
                <img
                  src={ourStrength2}
                  alt="ourStrength2"
                  className="w-10 h-10"
                />
                <span className="text-base sm:text-2xl text-[#555555]">
                  Bulk supply with flexible MOQs
                </span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                {/* <span className="text-xl sm:text-2xl">🪓</span> */}
                <img
                  src={ourStrength3}
                  alt="ourStrength3"
                  className="w-10 h-10"
                />
                <span className="text-base sm:text-2xl text-[#555555]">
                  Materials including Mild Steel, Stainless Steel (202/304/316),
                  High Tensile, and Galvanized coatings
                </span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                {/* <span className="text-xl sm:text-2xl">🏢</span> */}
                <img
                  src={ourStrength4}
                  alt="ourStrength4"
                  className="w-10 h-10"
                />
                <span className="text-base sm:text-2xl text-[#555555]">
                  Prompt delivery from our Vapi warehouse
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Products />
      <Industries />
      <Enterprises />
      <Counter />
      <Clients />

      <section
        className="flex flex-col items-center justify-center bg-white shadow-md rounded-xl px-6 py-12 mx-4 sm:mx-8 md:mx-16 my-12"
        data-aos="zoom-in"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-center text-black mb-6 leading-snug">
          Your Vision, Our Expertise – Free Quotes at Your Fingertips!
        </h2>
        <button onClick={() => navigate("/contact")} className="text-primary border border-primary hover:bg-primary hover:text-white transition-colors duration-300 font-semibold px-6 py-2 rounded-full text-sm lg:text-2xl">
          GET A QUOTE
        </button>
      </section>
    </>
  );
};

export default Home;
