import React, { useEffect } from 'react';
import plainWasherImg from '../../assets/Products/plainWasherImg.jpg';
import springWasherImg from '../../assets/Products/springWasherImg.jpg';
import splitWasherImg from '../../assets/Products/splitWasherImg.jpg';

import AOS from "aos";
import "aos/dist/aos.css";

const washers = [
  { name: 'PLAIN WASHER', img: plainWasherImg },
  { name: 'SPRING WASHER', img: springWasherImg },
  { name: 'SPLIT WASHER', img: splitWasherImg },
];

const Washers = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false, // whether animation should happen only once
      delay: 200,
    });
  }, []);
  return (
    <div className="w-full py-12 bg-white flex flex-col items-center container">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 font-serif" data-aos="fade-down" data-aos-duration="3000">WASHERS</h2>
      <p className="text-lg text-center text-gray-800 mb-10 font-serif" data-aos="fade-up" data-aos-duration="3800">
        Washers are essential in distributing load and preventing damage to surfaces during fastening. We provide a broad selection including flat washers, spring washers, and lock washers, suited for industrial and commercial use. Our washers come in various diameters and materials, ensuring durability, corrosion resistance, and optimal performance in any application.
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-10">
        {washers.map((washer, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col" data-aos="flip-right" data-aos-duration="2500">
            <div className="bg-black py-6 text-center">
              <span className="text-2xl font-bold text-white font-serif">{washer.name}</span>
            </div>
            <img
              src={washer.img}
              alt={washer.name}
              className="w-full h-72 object-cover object-center"
              draggable="false"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Washers;
