import React from "react";
import hexNutImg from "../../assets/Products/hexNutImg.jpg";
import lockNutImg from "../../assets/Products/lockNutImg.jpg";
import wingNutImg from "../../assets/Products/wingNutImg.jpg";
import domeNutImg from "../../assets/Products/domeNutImg.jpg";

const nuts = [
  { name: "HEX NUT", img: hexNutImg },
  { name: "LOCK NUT", img: lockNutImg },
  { name: "WING NUT", img: wingNutImg },
  { name: "DOME NUT", img: domeNutImg },
];

const Nuts = () => {
  return (
    <div className="w-full py-12 bg-white flex flex-col items-center container">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 font-serif">
        NUTS
      </h2>
      <p className="text-xl text-center text-gray-800 mb-10 font-serif">
        We offer a wide variety of nuts, including hex nuts, lock nuts, wing
        nuts, and more, available in multiple sizes and materials. Designed to
        pair with bolts and threaded components, our nuts ensure secure and
        long-lasting fastening solutions. Whether for industrial, construction,
        or automotive applications, our products meet high-performance and
        safety standards. Choose from stainless steel, brass, and high-tensile
        options to match your needs.
      </p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:px-10">
        {nuts.map((nut, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
          >
            <div className="bg-black py-6 text-center">
              <span className="text-2xl font-bold text-white font-serif">
                {nut.name}
              </span>
            </div>
            <img
              src={nut.img}
              alt={nut.name}
              className="w-full h-72 object-cover object-center"
              draggable="false"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nuts;
