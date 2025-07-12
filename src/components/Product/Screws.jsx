import React from 'react';
import selfTappingScrewImg from '../../assets/Products/selfTappingScrewImg.jpg';
import machineScrewImg from '../../assets/Products/machineScrewImg.jpg';
import woodScrewImg from '../../assets/Products/woodScrewImg.jpg';

const screws = [
  { name: 'SELF-TAPPING SCREW', img: selfTappingScrewImg },
  { name: 'MACHINE SCREW', img: machineScrewImg },
  { name: 'WOOD SCREW', img: woodScrewImg },
];

const Screws = () => {
  return (
    <div className="w-full py-12 bg-white flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-serif">SCREWS</h2>
      <p className="text-lg text-center text-gray-800 mb-10 font-serif max-w-5xl">
        From wood screws to machine screws and self-tapping screws, we stock a complete line for diverse fastening tasks. Our screws are engineered for precision and reliability, offering strong grip and easy installation. Available in different head types, drive styles, and materials, they are perfect for use in carpentry, metalwork, electronics, and more.
      </p>
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
        {screws.map((screw, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
            <div className="bg-black py-6 text-center">
              <span className="text-2xl font-bold text-white font-serif">{screw.name}</span>
            </div>
            <img
              src={screw.img}
              alt={screw.name}
              className="w-full h-72 object-cover object-center"
              draggable="false"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Screws;
