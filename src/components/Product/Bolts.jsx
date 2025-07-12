import React from 'react';
import hexBoltImg from '../../assets/Products/hexBoltImg.jpg';
import carriageBoltImg from '../../assets/Products/carriageBoltImg.jpg';
import eyeBoltImg from '../../assets/Products/eyeBoltImg.jpg';
import anchorBoltImg from '../../assets/Products/anchorBoltImg.jpg';

const bolts = [
  { name: 'HEX BOLT', img: hexBoltImg },
  { name: 'CARRIAGE BOLT', img: carriageBoltImg },
  { name: 'EYE BOLT', img: eyeBoltImg },
  { name: 'ANCHOR BOLT', img: anchorBoltImg },
];

const Bolts = () => {
  return (
    <div className="w-full py-12 bg-white flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-serif">BOLTS</h2>
      <p className="text-lg text-center text-gray-800 mb-10 font-serif max-w-5xl">
        Our extensive range of bolts includes hex bolts, carriage bolts, eye bolts, and structural bolts, ideal for both heavy-duty and general-purpose fastening. Manufactured for strength, durability, and resistance to corrosion, our bolts are available in various finishes and thread types. We supply bulk quantities for construction, machinery, and fabrication projects, with quality and consistency you can count on.
      </p>
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-2">
        {bolts.map((bolt, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
            <div className="bg-black py-6 text-center">
              <span className="text-2xl font-bold text-white font-serif">{bolt.name}</span>
            </div>
            <img
              src={bolt.img}
              alt={bolt.name}
              className="w-full h-72 object-cover object-center"
              draggable="false"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bolts;
