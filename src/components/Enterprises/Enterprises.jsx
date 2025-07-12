import React from 'react';
import whyChooseIcon1 from '../../assets/Home/whyChooseIcon1.png';
import whyChooseIcon2 from '../../assets/Home/whyChooseIcon2.png';
import whyChooseIcon3 from '../../assets/Home/whyChooseIcon3.png';
import whyChooseIcon4 from '../../assets/Home/whyChooseIcon4.png';
import whyChooseIcon5 from '../../assets/Home/whyChooseIcon5.png';
import whyChooseIcon6 from '../../assets/Home/whyChooseIcon6.png';

const features = [
  {
    icon: whyChooseIcon1,
    title: 'Ready Stock Availability',
    desc: '500+ SKUs always in stock for quick dispatch from our Vapi warehouse',
  },
  {
    icon: whyChooseIcon2,
    title: 'Quality You Can Trust',
    desc: 'Products sourced from certified manufacturers and inspected to meet IS, DIN & ASTM standards',
  },
  {
    icon: whyChooseIcon3,
    title: 'Fast & Reliable Delivery',
    desc: 'Timely fulfillment across Gujarat and all over India',
  },
  {
    icon: whyChooseIcon4,
    title: 'Wide Product Range',
    desc: 'Nuts, bolts, screws, washers, studs, and custom fasteners — all under one roof',
  },
  {
    icon: whyChooseIcon5,
    title: 'B2B-Friendly Terms',
    desc: 'Flexible MOQs, bulk pricing, and customized packaging for resellers and industrial clients',
  },
  {
    icon: whyChooseIcon6,
    title: 'Personalized Support',
    desc: 'Get quick responses, technical guidance, and dedicated service for your requirements',
  },
];

const Enterprises = () => {
  return (
    <div className="w-full py-12 bg-white flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-2 font-serif">Why Choose</h2>
      <h3 className="text-3xl md:text-4xl font-bold text-center mb-4 font-serif">Riddhi Siddhi Enterprise</h3>
      <p className="text-lg text-center text-gray-700 mb-10 font-serif max-w-4xl">
        At Riddhi Siddhi Enterprise, we don’t just supply fasteners — we deliver reliability, quality, and service that helps your business run smoothly.
      </p>
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-2">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="relative bg-white rounded-xl shadow-md flex flex-col items-center p-6 transition hover:shadow-xl h-full overflow-hidden group"
          >
            {/* Sliding red background */}
            <div className="absolute left-0 bottom-0 w-full h-0 bg-primary z-0 transition-all duration-500 group-hover:h-full"></div>
            <div className="relative z-10 flex flex-col items-center h-full">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-20 h-20 mb-4 object-contain select-none transition-all duration-300 group-hover:invert group-hover:brightness-0 group-hover:contrast-200"
                draggable="false"
              />
              <h4 className="text-xl font-bold text-center mb-2 font-serif transition-colors duration-300 group-hover:text-white">{feature.title}</h4>
              <p className="text-base text-center font-serif transition-colors duration-300 group-hover:text-white">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Enterprises;
