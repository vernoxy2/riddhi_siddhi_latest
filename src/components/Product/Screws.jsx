import React, { useEffect } from "react";
import selfTappingScrewImg from "../../assets/Products/SDAScrew.jpg";
// import machineScrewImg from "../../assets/Products/machineScrewImg.jpg";
import universalClampImg  from "../../assets/Products/universalClampImg.jpg";
import woodScrewImg from "../../assets/Products/woodScrewImg.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const screws = [
  { name: "SELF-DRILLING SCREW", img: selfTappingScrewImg },
  { name: "UNIVERSAL CLAMPS", img: universalClampImg },
  { name: "PIN CLAMPS", img: woodScrewImg },
];

const Screws = () => {
  useEffect(() => {
    AOS.init({
      once: false, // whether animation should happen only once
    });
  }, []);
  return (
    <div id="screws" className="w-full py-12 bg-white flex flex-col  items-center container">
      <h2
        className="text-2xl md:text-3xl font-bold text-center mb-4 font-serif"
        data-aos="fade-down"
      >
        SCREWS AND CLAMPS
      </h2>
      <p
        className="md:text-lg text-center text-gray-800 mb-10 font-serif leading-snug"
        data-aos="fade-up"
      >
        From wood screws to machine screws and self-tapping screws, we stock a
        complete line for diverse fastening tasks. Our screws are engineered for
        precision and reliability, offering strong grip and easy installation.
        Available in different head types, drive styles, and materials, they are
        perfect for use in carpentry, metalwork, electronics, and more.
      </p>
      <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:px-10">
        {screws.map((screw, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col "
            data-aos="flip-left"
          >
            <div className="bg-black py-3 md:py-6 text-center flex flex-col justify-between h-full">
              <span className="text-sm md:text-2xl font-bold text-white font-serif my-auto">
                {screw.name}
              </span>
            </div>
            <div className="">
              <img
                src={screw.img}
                alt={screw.name}
                className=" h-auto md:h-75 object-cover object-center "
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