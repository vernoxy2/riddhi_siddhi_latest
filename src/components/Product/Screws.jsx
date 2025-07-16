import React, { useEffect } from "react";
import selfTappingScrewImg from "../../assets/Products/selfTappingScrewImg.jpg";
import machineScrewImg from "../../assets/Products/machineScrewImg.jpg";
import woodScrewImg from "../../assets/Products/woodScrewImg.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const screws = [
  { name: "SELF-TAPPING SCREW", img: selfTappingScrewImg },
  { name: "MACHINE SCREW", img: machineScrewImg },
  { name: "WOOD SCREW", img: woodScrewImg },
];

const Screws = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false, // whether animation should happen only once
      delay: 200,
    });
  }, []);
  return (
    <div className="w-full py-12 bg-white flex flex-col items-center container">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 font-serif" data-aos="fade-down" data-aos-duration="3000">
        SCREWS
      </h2>
      <p className="text-lg text-center text-gray-800 mb-10 font-serif" data-aos="fade-up" data-aos-duration="3800"   >
        From wood screws to machine screws and self-tapping screws, we stock a
        complete line for diverse fastening tasks. Our screws are engineered for
        precision and reliability, offering strong grip and easy installation.
        Available in different head types, drive styles, and materials, they are
        perfect for use in carpentry, metalwork, electronics, and more.
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-10">
        {screws.map((screw, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col" data-aos="flip-left" data-aos-duration="2500"
          >
            <div className="bg-black py-6 text-center">
              <span className="text-2xl font-bold text-white font-serif">
                {screw.name}
              </span>
            </div>
            <div className="">
              <img
                src={screw.img}
                alt={screw.name}
                className="w-full h-72 object-cover object-center"
                draggable="false"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Screws;
