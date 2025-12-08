import React, { useEffect } from "react";
import plainWasherImg from "../../assets/Products/pinType.webp";
import springWasherImg from "../../assets/Products/springWasherImg.webp";
import uBoltImg from "../../assets/Products/uBolt1.webp";
import HeavyDutyImg from "../../assets/Products/HeavyDutyImg.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const washers = [
  { name: "PIN ANCHOR", img: plainWasherImg },
  { name: "WEDGE/SOLID ANCHOR", img: springWasherImg },
  { name: "HAVYDUTY ANCHOR", img: HeavyDutyImg },
  {name : "U BOLT", img: uBoltImg}
];

const AnchorBolts = () => {
  useEffect(() => {
    AOS.init({
      once: false, // whether animation should happen only once
    });
  }, []);
  return (
    <div id="washers" className="w-full py-12 bg-white flex flex-col items-center container">
      <h2
        className="text-2xl md:text-3xl font-bold text-center mb-4 font-serif uppercase"
        data-aos="fade-down"
      >
        Anchor Bolts
      </h2>
      <p
        className="md:text-lg text-center text-gray-800 mb-10 font-serif leading-snug"
        data-aos="fade-up"
      >
        Washers are essential in distributing load and preventing damage to
        surfaces during fastening. We provide a broad selection including flat
        washers, spring washers, and lock washers, suited for industrial and
        commercial use. Our washers come in various diameters and materials,
        ensuring durability, corrosion resistance, and optimal performance in
        any application.
      </p>
      <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:px-10">
        {washers.map((washer, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
            data-aos="flip-right"
          >
            <div className="bg-black py-3 md:py-6 text-center flex flex-col justify-between h-full">
              <span className="md:text-xl font-bold text-white font-serif">
                {washer.name}
              </span>
            </div>
            <img
              src={washer.img}
              alt={washer.name}
              className="w-full md:h-72 object-cover object-center "
              draggable="false"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnchorBolts;

