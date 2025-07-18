import React, { useEffect } from "react";
import homeHeader from "../../assets/Home/homeHeader1.png";
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

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false, // whether animation should happen only once
      delay: 200,
    });
  }, []);
  return (
    <>
      <div
        className="relative w-full max-w-full h-[60vh] sm:h-[70vh] md:h-[80vh] flex items-start md:items-center justify-start bg-cover bg-center font-serif px-2 sm:px-4 md:px-8 overflow-x-hidden"
        data-aos="fade-up"
        data-aos-duration="1500"
        style={{ backgroundImage: `url(${homeHeader})` }}
      >
        <div
          className="ml-2 sm:ml-8 md:ml-16 max-w-xl bg-black bg-opacity-0 p-4 sm:p-6 md:p-8 rounded-lg flex flex-col items-start w-full"
          data-aos="fade-down"
          data-aos-duration="1700"
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4 text-black font-serif">
            Your Trusted Stockist for Industrial Fasteners
          </h1>
          <p className="text-base sm:text-lg md:text-2xl mb-4 sm:mb-8 text-black font-serif">
            Explore Our Range of Industrial Nuts, Bolts & Screws in MS, SS &
            Brass.
          </p>
          <button className="bg-primary hover:bg-red-600 text-white text-base sm:text-lg md:text-xl font-semibold px-6 sm:px-10 md:px-12 py-2 sm:py-3 md:py-4 rounded-lg shadow-md transition">
            Get Quote
          </button>
        </div>
      </div>

      <div className="w-full container flex flex-col items-center py-8 sm:py-12 px-2 sm:px-4 md:px-0 overflow-x-hidden">
        <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-y-6 items-center">
          {/* Image Section */}
          <div
            className="flex justify-center"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <img
              src={aboutSectionImg}
              alt="About Riddhi Siddhi"
              className="rounded-xl shadow-lg object-cover w-full max-w-xs sm:max-w-md md:max-w-xl h-[220px] sm:h-[320px] md:h-[400px] lg:h-[480px]"
            />
          </div>
          {/* Text Section */}
          <div
            className="flex flex-col gap-y-4 justify-center items-center lg:items-start w-full px-2 sm:px-0 text-center lg:text-start"
            data-aos="fade-left"
            data-aos-duration="2500"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-primary mb-4 sm:mb-6 font-serif w-full">
              Who We Are
            </h2>
            <p className="text-base sm:text-2xl text-[#555555] mb-2 sm:mb-4 font-serif ">
              Riddhi Siddhi Enterprise is a trusted stockist and wholesaler of
              industrial fasteners, based in Vapi, Gujarat. We supply a wide
              range of nuts, bolts, screws, washers, and threaded rods to
              manufacturers, builders, and resellers across India.
            </p>
            <p className="text-base sm:text-2xl text-[#555555] mb-4 sm:mb-6 font-serif">
              With ready stock, fast delivery, and a focus on quality, we ensure
              reliable fastener solutions that meet IS, DIN, and ASTM standards.
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-2 sm:mb-4 font-serif">
              Our Strength Lies In
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-2 sm:gap-y-4 w-full text-start">
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
                  Materials including Mild Steel, Stainless Steel (304/316),
                  Brass, and Galvanized coatings
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
        data-aos-duration="2000"
      >
        <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-center text-black mb-6 leading-snug">
          Your Vision, Our Expertise – Free Quotes at Your Fingertips!
        </h2>
        <button className="text-primary border border-primary hover:bg-primary hover:text-white transition-colors duration-300 font-semibold px-6 py-2 rounded-full text-sm sm:text-2xl">
          GET A QUOTE
        </button>
      </section>
    </>
  );
};

export default Home;
