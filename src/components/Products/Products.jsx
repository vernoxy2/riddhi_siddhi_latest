import React from 'react';
import nutImg from '../../assets/Home/nutImg.jpg';
import boltImg from '../../assets/Home/boltImg.jpg';
import screwImg from '../../assets/Home/screwImg.jpg';
import washerImg from '../../assets/Home/washerImg.jpg';
import threadedRodsImg from '../../assets/Home/threadedRodsImg.jpg';
import customFastenersImg1 from '../../assets/Home/customFastenersImg1.jpg';

const products = [
  {
    title: 'NUTS',
    img: nutImg,
    description: 'We offer a wide variety of nuts, including hex nuts, lock nuts, wing nuts, and more, available in multiple sizes and materials.'
  },
  {
    title: 'BOLTS',
    img: boltImg,
    description: 'Our bolts range includes hex bolts, carriage bolts, and more, suitable for diverse industrial applications.'
  },
  {
    title: 'SCREWS',
    img: screwImg,
    description: 'Choose from machine screws, self-tapping screws, and other types, in various sizes and finishes.'
  },
  {
    title: 'WASHERS',
    img: washerImg,
    description: 'We supply plain, spring, and special washers to meet your fastening needs.'
  },
  {
    title: 'THREADED RODS & STUDS',
    img: threadedRodsImg,
    description: 'Threaded rods and studs are available in different lengths, diameters, and materials.'
  },
  {
    title: 'Custom Fasteners – As per drawing / specification',
    img: customFastenersImg1,
    description: 'We manufacture and supply custom fasteners as per your drawing or specification.'
  },
];

const  Products = () => {
  return (
    <div className="w-full flex flex-col items-center py-12 px-2 md:px-0 bg-white">
      <h2 className="text-4xl lg:text-6xl font-bold text-primary mb-2 font-serif text-center">Our Product Range</h2>
      <p className="text-xl lg:text-2xl text-[#555555] mb-10 text-center font-serif">
        We offer a comprehensive selection of industrial fasteners, available in multiple sizes, grades, and coatings
      </p>
      <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-28">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="bg-white rounded shadow-lg flex flex-col items-center overflow-hidden hover:shadow-2xl transition group"
          >
            <div className="relative w-full h-76 flex items-center justify-center bg-gray-100">
              <img
                src={product.img}
                alt={product.title}
                className="object-cover w-full h-full group-hover:scale-100 transition duration-300"
              />
              {/* Overlay for hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-80 transition-opacity duration-300 px-4">
                <span className="text-white text-2xl font-bold font-serif mb-4 text-center drop-shadow-lg">
                  {product.title}
                </span>
                <p className="text-white text-base font-serif text-center">
                  {product.description}
                </p>
              </div>
              {/* Title for non-hover */}
              <span className="absolute top-6 left-0 w-full text-center text-white text-2xl font-bold font-serif drop-shadow-lg group-hover:opacity-0 transition-opacity duration-300">
                {product.title}
              </span>
            </div>
            <div className="w-full py-6 flex justify-center bg-white">
              <button className="text-xl font-bold text-black hover:text-primary  transition">
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
